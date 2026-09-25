"use client";

import { FormEvent, useState } from "react";

const MAKO_COMPANY_NAME = "Elite Precision";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ApplyForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [resumeName, setResumeName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setStatus("error");
      setError("Please attach your resume (PDF, DOC, or DOCX).");
      return;
    }

    data.set("smsOptIn", data.get("smsOptIn") === "on" ? "true" : "false");
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(payload.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
      setResumeName("");
    } catch {
      setStatus("error");
      setError(
        "We could not reach the server. Check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        id="formOk"
        style={{
          background: "var(--white)",
          borderRadius: "var(--r)",
          padding: "46px",
          textAlign: "center",
          boxShadow: "0 30px 70px -50px rgba(18,16,61,.4)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "var(--clay-soft)",
            color: "var(--ink)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 18px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Application received!
        </h3>
        <p style={{ color: "var(--muted)" }}>
          Thank you for your application. One of our recruiters will be in
          touch.
        </p>
      </div>
    );
  }

  return (
    <form id="applyForm" className="form-card" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="fn">First name</label>
          <input
            id="fn"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="field">
          <label htmlFor="ln">Last name</label>
          <input
            id="ln"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
          />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="ph">Phone</label>
          <input
            id="ph"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(704) 555-0100"
          />
        </div>
        <div className="field">
          <label htmlFor="em">Email</label>
          <input
            id="em"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="resume">Attach your resume</label>
        <label className="file-drop">
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(event) => {
              setResumeName(event.target.files?.[0]?.name ?? "");
            }}
          />
          <span className="file-drop__title">
            {resumeName || "Upload your resume here"}
          </span>
          <span className="file-drop__hint">
            PDF, DOC, or DOCX · Max file size: 100MB
          </span>
        </label>
      </div>
      <div className="field">
        <label htmlFor="msg">Message</label>
        <textarea id="msg" name="message" />
      </div>
      <p className="sms-consent">
        By providing your phone number, you consent to receive text messages
        from {MAKO_COMPANY_NAME} for purposes related to our service; job
        opportunities, interview scheduling, and application updates. Message
        frequency may vary. Message and Data Rates may apply. Reply HELP for
        help or STOP to unsubscribe. See our{" "}
        <a
          href="https://atsmako.com/privacypolicy"
          target="_blank"
          rel="noreferrer"
        >
          privacy policy
        </a>
        .
      </p>
      <label className="field-check">
        <input type="checkbox" name="smsOptIn" required />
        <span>I agree and opt in</span>
      </label>
      {status === "error" && error ? (
        <div className="form-error" role="alert">
          {error}
        </div>
      ) : null}
      <button
        type="submit"
        className="btn btn--clay"
        disabled={status === "submitting"}
        style={{
          width: "100%",
          justifyContent: "center",
          opacity: status === "submitting" ? 0.75 : 1,
          cursor: status === "submitting" ? "wait" : "pointer",
        }}
      >
        {status === "submitting" ? "Sending…" : "Send"}{" "}
        <span className="arr">→</span>
      </button>
    </form>
  );
}
