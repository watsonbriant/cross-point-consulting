"use client";

import { FormEvent, useState } from "react";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
          Thanks for reaching out. A member of our Charlotte team will be in
          touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form id="applyForm" className="form-card" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="fn">First name</label>
          <input id="fn" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="ln">Last name</label>
          <input id="ln" type="text" required />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="em">Email</label>
          <input id="em" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="ph">Phone</label>
          <input id="ph" type="tel" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="role">I&apos;m interested in</label>
        <select id="role">
          <option>Entry-level / B2B sales</option>
          <option>Management track</option>
          <option>Internship</option>
          <option>Just learning more</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="msg">Why are you interested? (optional)</label>
        <textarea
          id="msg"
          placeholder="Tell us a little about yourself and what you're looking for."
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn--clay"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Submit application <span className="arr">→</span>
      </button>
      <p className="form-note">
        By submitting you agree to be contacted about career opportunities at
        Cross Point Consulting.
      </p>
    </form>
  );
}
