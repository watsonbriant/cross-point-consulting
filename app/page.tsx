import Link from "next/link";
import { Footer } from "@/components/ascend/Footer";
import { Nav } from "@/components/ascend/Nav";

export default function HomePage() {
  return (
    <>
      <Nav active="home" />

      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <span className="eyebrow">B2B Client Acquisition · Charlotte, NC</span>
            <h1 style={{ marginTop: "20px" }}>
              Where great careers{" "}
              <span className="clay">start from scratch.</span>
            </h1>
            <p className="hero__lead">
              We represent Fortune 500 brands across Charlotte — and we promote
              100% from within. No experience needed, just the drive to grow.
            </p>
            <div className="hero__cta">
              <Link href="/contact" className="btn btn--clay">
                Apply in 60 seconds <span className="arr">→</span>
              </Link>
              <Link href="/careers" className="btn btn--ghost">
                See your path
              </Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__photo">
              <img
                src="/assets/photos/hero-presentation.png"
                alt="Cross Point team in a presentation"
              />
            </div>
            <div className="hero__chip tl">
              <span className="big">100%</span>
              <span className="sm">promotion from within</span>
            </div>
            <div className="hero__chip br">
              <span className="big">75</span>
              <span className="sm">offices nationwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="clients">
        <div className="wrap">
          <p className="clients__lbl">
            The brands we represent, face to face
          </p>
          <div className="logo-row">
            <img
              src="/assets/clients/att-business.png"
              alt="AT&T Business"
              className="tall"
            />
            <img src="/assets/clients/verizon.png" alt="Verizon" />
            <img src="/assets/clients/google.png" alt="Google" />
            <img src="/assets/clients/amazon.png" alt="Amazon" />
            <img src="/assets/clients/intuit.png" alt="Intuit" />
            <img src="/assets/clients/staples.png" alt="Staples" />
            <img src="/assets/clients/nrg.png" alt="NRG" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Why people stay</span>
            <h2>A place that&apos;s actually built for growing.</h2>
            <p>
              We&apos;re a B2B client acquisition team in Charlotte — and we
              believe the best leaders are the ones who&apos;ve done the work
              themselves.
            </p>
          </div>
          <div className="fcards">
            <div className="fcard">
              <div className="fcard__ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 19V5M12 5l-6 6M12 5l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Promote from within</h3>
              <p>
                We never hire managers from outside. Every leader earned their
                seat by doing the role first — and so will you.
              </p>
            </div>
            <div className="fcard">
              <div className="fcard__ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14v7M6 11v4c0 1 2.5 2 6 2s6-1 6-2v-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Mentorship, not guesswork</h3>
              <p>
                AI-assisted, classroom, and hands-on training from day one —
                guided by people who were where you are months ago.
              </p>
            </div>
            <div className="fcard">
              <div className="fcard__ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l5 5L19 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Real work, real results</h3>
              <p>
                Localized campaigns for Fortune 500 telecom, energy, and
                office-supply clients — measured by outcomes, not hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap split">
          <div className="split__media">
            <img
              src="/assets/photos/team-lounge.png"
              alt="The Cross Point team"
            />
          </div>
          <div>
            <span className="eyebrow">The work</span>
            <h2>Winning business, one conversation at a time.</h2>
            <p>
              Based in Charlotte, we partner with Fortune 500 companies to
              build high-performing, localized B2B campaigns — sitting across
              the desk from the owners, CEOs, and managers who make the call.
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
                Telecommunications, natural gas &amp; office supply
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
                Exclusive B2B channel partner for the Charlotte market
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
                Consulting decision-makers across every industry
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Your journey</span>
            <h2>From day one to running your own market.</h2>
            <p>
              There&apos;s no seniority here — only growth. Here&apos;s the
              path, and most of it moves faster than you&apos;d think.
            </p>
          </div>
          <div className="journey">
            <div className="jcard">
              <div className="jcard__num">1</div>
              <h3>Entry Level</h3>
              <p>
                Learn the fundamentals of sales and build consistency on real
                accounts.
              </p>
            </div>
            <div className="jcard">
              <div className="jcard__num">2</div>
              <h3>Team Lead</h3>
              <p>
                Train others, find your voice in public speaking, and become a
                top performer.
              </p>
            </div>
            <div className="jcard">
              <div className="jcard__num">3</div>
              <h3>Assistant Manager</h3>
              <p>
                Learn to evaluate talent and manage a profitable, growing team.
              </p>
            </div>
            <div className="jcard is-top">
              <div className="jcard__num">4</div>
              <h3>Location Director</h3>
              <p>
                Oversee a market, hit targets, and grow the next generation of
                leaders.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <Link href="/careers" className="btn">
              See careers &amp; benefits <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <div className="shead center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              The people
            </span>
            <h2>Real people who started exactly where you will.</h2>
            <p>
              We start everyone at entry level on purpose — so every leader has
              done the work first. Here&apos;s how you grow.
            </p>
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/careers" className="btn">
              See full benefits <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="shead center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Local office, national backbone
            </span>
            <h2>Built up since 1999.</h2>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="n">1999</div>
              <div className="l">The year we started — from one office.</div>
            </div>
            <div className="stat">
              <div className="n">75</div>
              <div className="l">Offices across the United States today.</div>
            </div>
            <div className="stat">
              <div className="n">$150B</div>
              <div className="l">
                In fiber &amp; 5G investment by our partners.
              </div>
            </div>
            <div className="stat">
              <div className="n">#1</div>
              <div className="l">
                In small-business satisfaction for our client.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--clay">
        <div className="wrap quote">
          <p>&ldquo;Work hard. Have fun. Get things done.&rdquo;</p>
          <div className="who">— The culture at Cross Point Consulting</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta">
            <h2>Your future team is waiting.</h2>
            <p>
              We&apos;re hiring entry-level candidates in Charlotte right now.
              No experience required — just bring the drive.
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
