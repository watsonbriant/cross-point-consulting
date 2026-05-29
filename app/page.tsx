import "./homepage.css";

export default function Home() {
  return (
    <div className="wrap">
      <header className="top">
        <div className="kick">Cross Point Consulting · Charlotte, NC</div>
        <h1>Three directions for your website.</h1>
        <p>
          Same content and structure across all three — Home, About, Careers, and
          Contact — each dressed in a distinct design language. Click into any
          version and click through every page.
        </p>
        <div className="meta">
          B2B recruiting · Charlotte office focus · short application form as
          the primary call to action
        </div>
      </header>

      <main className="grid">
        <article className="opt">
          <div className="prev p-van">
            <div className="pnav">
              <strong style={{ fontFamily: "'Spectral', serif" }}>
                Cross Point
              </strong>
              <span style={{ opacity: 0.6 }}>Home · About · Careers</span>
            </div>
            <div className="ph">
              Start at the front line.
              <br />
              <em>Lead</em> from the front.
            </div>
            <div className="dotrow swrow">
              <span className="sw" style={{ background: "#101620" }}></span>
              <span className="sw" style={{ background: "#1f6e4d" }}></span>
              <span className="sw" style={{ background: "#b8975a" }}></span>
              <span className="sw" style={{ background: "#fff" }}></span>
            </div>
          </div>
          <div className="body">
            <span className="tagn">Option 01 — Vanguard</span>
            <h2>Sleek corporate-premium</h2>
            <p className="vibe">
              An editorial, Fortune-500-grade feel. Elegant serif headlines,
              warm ivory, and a confident deep green. Reads as established and
              trustworthy.
            </p>
            <ul className="traits">
              <li>Spectral serif + Hanken Grotesk</li>
              <li>Ivory & deep-green, gold detail</li>
              <li>Editorial, lots of whitespace</li>
            </ul>
            <div className="actions">
              <a className="view primary" href="/vanguard/index.html">
                View Vanguard →
              </a>
              <div className="pages">
                <a href="/vanguard/about.html">About</a>
                <a href="/vanguard/careers.html">Careers</a>
                <a href="/vanguard/contact.html">Contact</a>
              </div>
            </div>
          </div>
        </article>

        <article className="opt">
          <div className="prev p-mom">
            <div className="pnav">
              <strong style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Cross Point
              </strong>
              <span
                style={{
                  opacity: 0.6,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                // b2b
              </span>
            </div>
            <div className="ph">
              No experience.
              <br />
              No ceiling.
              <br />
              <span className="a">Pure momentum.</span>
            </div>
            <div className="pchips">
              <span className="pchip">100% from within</span>
              <span className="pchip">75 offices</span>
            </div>
          </div>
          <div className="body">
            <span className="tagn">Option 02 — Momentum</span>
            <h2>Modern &amp; tech-forward</h2>
            <p className="vibe">
              High-energy and ambitious. Dark mode, a bold geometric typeface,
              and an electric accent. Feels like a fast-scaling company built
              for young go-getters.
            </p>
            <ul className="traits">
              <li>Space Grotesk + mono labels</li>
              <li>Charcoal & electric lime</li>
              <li>Big numbers, grid, momentum</li>
            </ul>
            <div className="actions">
              <a className="view primary" href="/momentum/index.html">
                View Momentum →
              </a>
              <div className="pages">
                <a href="/momentum/about.html">About</a>
                <a href="/momentum/careers.html">Careers</a>
                <a href="/momentum/contact.html">Contact</a>
              </div>
            </div>
          </div>
        </article>

        <article className="opt">
          <div className="prev p-asc">
            <div className="pnav">
              <strong
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Cross Point
              </strong>
              <span style={{ opacity: 0.6 }}>Home · About · Careers</span>
            </div>
            <div className="ph">
              Where great careers
              <br />
              <span className="a">start from scratch.</span>
            </div>
            <div className="pchips">
              <span className="pchip">No experience needed</span>
              <span className="pchip">Mentorship</span>
            </div>
          </div>
          <div className="body">
            <span className="tagn">Option 03 — Ascend</span>
            <h2>Warm &amp; people-first</h2>
            <p className="vibe">
              Optimistic and human. Cream tones, a friendly display face, and
              warm terracotta. Leads with real faces and growth — approachable
              for first-time job seekers.
            </p>
            <ul className="traits">
              <li>Bricolage Grotesque + Hanken</li>
              <li>Cream & terracotta, soft cards</li>
              <li>People-forward, rounded, friendly</li>
            </ul>
            <div className="actions">
              <a className="view primary" href="/ascend/index.html">
                View Ascend →
              </a>
              <div className="pages">
                <a href="/ascend/about.html">About</a>
                <a href="/ascend/careers.html">Careers</a>
                <a href="/ascend/contact.html">Contact</a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="foot">
        <p className="note">
          All three are working multi-page prototypes built from your interview
          deck — real client logos, team photos, the four-level career path, and
          the full benefits matrix. The application form is wired as a demo (it
          shows a confirmation; it isn&apos;t connected to email yet). The logo
          shown is a simple placeholder mark, ready to swap for your real Cross
          Point logo.
        </p>
        <p>Cross Point Consulting · Concept review · 2026</p>
      </footer>
    </div>
  );
}
