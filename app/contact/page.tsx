import type { Metadata } from "next";
import { ApplyForm } from "@/components/ascend/ApplyForm";
import { Footer } from "@/components/ascend/Footer";
import { Nav } from "@/components/ascend/Nav";

export const metadata: Metadata = {
  title: "Apply — Cross Point Consulting",
};

export default function ContactPage() {
  return (
    <>
      <Nav active="contact" />

      <section className="phero">
        <div className="wrap">
          <span className="crumb">Home / Contact</span>
          <h1>
            Let&apos;s <span className="clay">talk.</span>
          </h1>
          <p>
            Fill out the form below and a member of our Charlotte team will
            reach out within one business day. It takes about 60 seconds.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "48px" }}>
        <div className="wrap contact-grid">
          <div>
            <ApplyForm />
          </div>

          <div>
            <span className="eyebrow">What happens next</span>
            <ol className="steps">
              <li className="step">
                <span className="step__num">1</span>
                <div className="step__body">
                  <strong>We review your info</strong>
                  <span>
                    A real person on our team reads every application.
                  </span>
                </div>
              </li>
              <li className="step">
                <span className="step__num">2</span>
                <div className="step__body">
                  <strong>A quick conversation</strong>
                  <span>
                    We&apos;ll set up a relaxed call or in-person chat to get
                    to know you.
                  </span>
                </div>
              </li>
              <li className="step">
                <span className="step__num">3</span>
                <div className="step__body">
                  <strong>Come see the floor</strong>
                  <span>
                    Spend a day with the team and decide if it&apos;s the right
                    fit.
                  </span>
                </div>
              </li>
            </ol>
            <div
              style={{
                marginTop: "34px",
                borderTop: "1px solid var(--line)",
                paddingTop: "28px",
              }}
            >
              <span className="eyebrow">Visit us</span>
              <p
                style={{
                  marginTop: "14px",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "var(--ink-soft)",
                }}
              >
                Charlotte, North Carolina
                <br />
                Monday–Friday · 9:00am – 6:00pm
              </p>
              <div
                style={{
                  marginTop: "20px",
                  borderRadius: "var(--r)",
                  overflow: "hidden",
                  background:
                    "repeating-linear-gradient(135deg,var(--paper-2),var(--paper-2) 12px,var(--paper-3) 12px,var(--paper-3) 24px)",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--line)",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "13px",
                    color: "var(--muted)",
                  }}
                >
                  [ map / office photo ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
