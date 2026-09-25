const MAKO_API_BASE = process.env.MAKO_API_BASE ?? "https://api.atsmako.com";
const MAKO_OFFICE_ID =
  process.env.MAKO_OFFICE_ID ?? "5cce73fa-7f58-4ba4-9b65-d774ec735f01";

export const MAKO_RESUME_EXTENSIONS = ["pdf", "doc", "docx"] as const;
export const MAKO_MAX_RESUME_BYTES = 100 * 1024 * 1024;

type MakoAddress = {
  country_code: null;
  street_number: null;
  street_name: null;
  suite_unit_number: null;
  city: null;
  state_id: null;
  zipcode: null;
};

export type MakoApplicationInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  resume: {
    name: string;
    type: string;
    bytes: Uint8Array;
  };
};

type MakoValidationResponse = {
  valid?: boolean;
  application_id?: string;
  resume_file?: {
    upload_url?: string;
    file_id?: string;
    file_key?: string;
  };
};

function emptyAddress(): MakoAddress {
  return {
    country_code: null,
    street_number: null,
    street_name: null,
    suite_unit_number: null,
    city: null,
    state_id: null,
    zipcode: null,
  };
}

function applicantPayload(
  input: Omit<MakoApplicationInput, "resume">,
  resumeFile: Record<string, string>,
) {
  return {
    first_name: input.firstName,
    last_name: input.lastName,
    phone: input.phone,
    email_address: input.email,
    address: emptyAddress(),
    message: input.message,
    office_id: MAKO_OFFICE_ID,
    resume_file: resumeFile,
  };
}

async function makoFetch(path: string, body: unknown) {
  const response = await fetch(`${MAKO_API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let data: unknown = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    throw new Error(
      typeof data === "string" && data
        ? data
        : `Mako request failed (${response.status})`,
    );
  }

  return data;
}

export function digitsOnlyPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1")
    ? digits.slice(1)
    : digits;
}

export function resumeExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

export async function submitMakoApplication(input: MakoApplicationInput) {
  const contentType = input.resume.type ?? "";
  const validation = (await makoFetch("/api/applicants/apply-here/validation", {
    ...applicantPayload(input, {
      name: input.resume.name,
      content_type: contentType,
    }),
  })) as MakoValidationResponse;

  // Mako treats an invalid or duplicate validation as a completed apply.
  if (!validation.valid) {
    return { status: "received" as const };
  }

  const uploadUrl = validation.resume_file?.upload_url;
  const applicationId = validation.application_id;
  if (!uploadUrl || !applicationId) {
    throw new Error("Mako did not return an upload URL for the resume.");
  }

  const upload = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": contentType || "application/octet-stream",
    },
    body: Buffer.from(input.resume.bytes),
  });

  if (!upload.ok) {
    throw new Error(`Resume upload failed (${upload.status}).`);
  }

  await makoFetch(`/api/applicants/apply-here/${applicationId}`, {
    ...applicantPayload(input, {
      upload_url: uploadUrl,
      file_id: validation.resume_file?.file_id ?? "",
      file_key: validation.resume_file?.file_key ?? "",
      name: input.resume.name,
    }),
  });

  return { status: "submitted" as const };
}
