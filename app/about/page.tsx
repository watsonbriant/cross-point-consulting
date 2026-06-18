import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/ascend/Footer";
import { Nav } from "@/components/ascend/Nav";

export const metadata: Metadata = {
  title: "About — Cross Point Consulting",
};

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />

      <section className="phero">
        <div className="wrap">
          <span className="crumb">Home / About</span>
          <h1>
            We build <span className="clay">people</span>,
            <br />
            not just campaigns.
          </h1>
          <p>
            Cross Point Consulting is a Charlotte-based B2B client acquisition
            team — part of a national organization that grew from a single
            office in 1999 to 75 across the country.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Our story</span>
            <p className="lede" style={{ margin: "16px 0 26px" }}>
              It started in 1999 with one office and one belief: the best
              leaders are the ones who&apos;ve done the work themselves.
            </p>
            <div
              style={{
                color: "var(--ink-soft)",
                display: "grid",
                gap: "18px",
                fontSize: "17px",
              }}
            >
              <p>
                Over the next two decades, that belief built a national
                footprint — 75 offices across the United States, with
                residential, retail, and business-to-business teams. The
                Charlotte office is where we focus on B2B: representing Fortune
                500 brands and winning new business face to face.
              </p>
              <p>
                What never changed is how we grow. We don&apos;t hire managers
                from the outside. Everyone starts at entry level, because we
                want our leaders to have personally done everything they&apos;ll
                one day teach. No seniority. 100% promotion from within.
              </p>
            </div>
          </div>
          <div className="split__media" style={{ aspectRatio: "4/3" }}>
            <img
              src="/assets/photos/about-meeting.png"
              alt="Cross Point team in a meeting"
            />
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <div className="shead center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              What we stand on
            </span>
            <h2>Five things we never compromise.</h2>
          </div>
          <div className="fcards fcards--5">
            <div className="fcard" style={{ padding: "30px 24px" }}>
              <div className="fcard__ic" style={{ width: "44px", height: "44px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3 4 7v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 style={{ fontSize: "19px" }}>Integrity</h3>
              <p style={{ fontSize: "14px" }}>
                Do what&apos;s right, even when it&apos;s hard.
              </p>
            </div>
            <div className="fcard" style={{ padding: "30px 24px" }}>
              <div className="fcard__ic" style={{ width: "44px", height: "44px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="4"
                    y="7"
                    width="16"
                    height="13"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 12h16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 style={{ fontSize: "19px" }}>Professionalism</h3>
              <p style={{ fontSize: "14px" }}>Sharp, prepared, accountable.</p>
            </div>
            <div className="fcard" style={{ padding: "30px 24px" }}>
              <div className="fcard__ic" style={{ width: "44px", height: "44px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 style={{ fontSize: "19px" }}>Attitude</h3>
              <p style={{ fontSize: "14px" }}>Coachable, positive, hungry.</p>
            </div>
            <div className="fcard" style={{ padding: "30px 24px" }}>
              <div className="fcard__ic" style={{ width: "44px", height: "44px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 14v7M14 17.5h7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 style={{ fontSize: "19px" }}>Systems</h3>
              <p style={{ fontSize: "14px" }}>
                Process that makes results repeatable.
              </p>
            </div>
            <div className="fcard" style={{ padding: "30px 24px" }}>
              <div className="fcard__ic" style={{ width: "44px", height: "44px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 style={{ fontSize: "19px" }}>Responsibility</h3>
              <p style={{ fontSize: "14px" }}>We own every outcome.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__media">
            <img src="/assets/photos/coaching.png" alt="Hands-on training" />
          </div>
          <div>
            <span className="eyebrow">How we train</span>
            <h2>AI, classroom &amp; hands-on — from day one.</h2>
            <p>
              New team members aren&apos;t left to figure it out. You&apos;ll
              learn through a structured blend of AI-assisted tools, classroom
              fundamentals, and real-world reps alongside people who were in
              your shoes months ago.
            </p>
            <ul className="ticks">
              <li>
                <span className="dot">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Fundamentals of sales &amp; client management
              </li>
              <li>
                <span className="dot">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Public speaking &amp; transfer of knowledge
              </li>
              <li>
                <span className="dot">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Hiring, finance, marketing &amp; branding as you rise
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>Want to meet the team?</h2>
            <p>
              The fastest way to understand Cross Point is a conversation.
              Let&apos;s set one up.
            </p>
            <Link href="/contact" className="btn">
              Apply Now <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
