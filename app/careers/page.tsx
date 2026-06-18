import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/ascend/Footer";
import { Nav } from "@/components/ascend/Nav";

export const metadata: Metadata = {
  title: "Careers — Cross Point Consulting",
};

export default function CareersPage() {
  return (
    <>
      <Nav active="careers" />

      <section className="phero">
        <div className="wrap">
          <span className="crumb">Home / Careers</span>
          <h1>
            No experience.
            <br />
            No ceiling. <span className="clay">No kidding.</span>
          </h1>
          <p>
            We start everyone at entry level on purpose — so every leader has
            done the work first. Here&apos;s exactly how you grow, and what you
            earn along the way.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Your path</span>
            <h2>Four steps, one direction — up.</h2>
          </div>
          <div className="journey">
            <div className="jcard">
              <div className="jcard__num">1</div>
              <h3>Entry Level</h3>
              <p>
                Learn the fundamentals of sales and display consistency on live
                client accounts.
              </p>
            </div>
            <div className="jcard">
              <div className="jcard__num">2</div>
              <h3>Team Lead</h3>
              <p>
                Train others, transfer knowledge, build public speaking, become
                a top performer.
              </p>
            </div>
            <div className="jcard">
              <div className="jcard__num">3</div>
              <h3>Assistant Manager</h3>
              <p>
                Learn to evaluate talent, manage a profitable team, and own
                client management.
              </p>
            </div>
            <div className="jcard is-top">
              <div className="jcard__num">4</div>
              <h3>Location Director</h3>
              <p>
                Oversee a market, hit targets, drive business development, and
                grow your people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">Compensation &amp; benefits</span>
            <h2>The further you go, the more you earn.</h2>
            <p>
              Benefits compound at every level — here&apos;s exactly what
              unlocks as you grow.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="matrix">
              <thead>
                <tr>
                  <th>Benefit</th>
                  <th>Entry Level</th>
                  <th>Team Lead</th>
                  <th>Assistant Mgr</th>
                  <th>Location Director</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Training bonuses</td>
                  <td className="yes">✓</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                </tr>
                <tr>
                  <td>Commission</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Weekly bonuses</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Travel opportunities</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>On-going mentorship</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Corporate discounts</td>
                  <td className="no">—</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Expense reports</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Profit sharing</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Company credit card</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Medical / dental / vision</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="yes">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow">More than sales</span>
            <h2>You&apos;ll learn how a business actually runs.</h2>
            <p>
              As you move up, you take on the real levers of the organization
              — not just selling, but building.
            </p>
          </div>
          <div className="fcards">
            <div className="fcard">
              <div className="fcard__ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Hiring &amp; staffing</h3>
              <p>
                Identify, recruit, and develop talent for your own growing
                team.
              </p>
            </div>
            <div className="fcard">
              <div className="fcard__ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 11l18-5v12L3 14v-3zM3 11v3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Marketing &amp; branding</h3>
              <p>
                Advertising, creative, and positioning for localized campaigns
                that win.
              </p>
            </div>
            <div className="fcard">
              <div className="fcard__ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Finance &amp; operations</h3>
              <p>
                Budgets, expense management, and running a profitable market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Culture</span>
            <h2 style={{ margin: "14px 0 22px" }}>
              We work hard. We also actually have fun.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.78)",
                fontSize: "17.5px",
              }}
            >
              Growth is the goal, but the grind is a lot better with people you
              like. Here&apos;s some of what a year looks like:
            </p>
            <div className="tags">
              <span className="tag">Weekly team outings</span>
              <span className="tag">Regional conferences</span>
              <span className="tag">Trips for top performers</span>
              <span className="tag">Team-building events</span>
              <span className="tag">Philanthropic events</span>
              <span className="tag">Recognition nights</span>
            </div>
          </div>
          <div className="split__media" style={{ aspectRatio: "4/3" }}>
            <img
              src="/assets/photos/culture-conversation.png"
              alt="Cross Point team culture"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta">
            <h2>Ready to start — and not stay there?</h2>
            <p>
              We&apos;re hiring entry-level candidates in Charlotte right now.
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
