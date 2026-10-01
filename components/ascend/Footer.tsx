import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <span
              className="brand__name"
              style={{ fontFamily: "var(--disp)", fontSize: "22px" }}
            >
              Cross Point Consulting
            </span>
            <p>
              A Charlotte-based B2B client acquisition team. We build careers
              from the ground up and promote 100% from within.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Office</h4>
            <ul>
              <li>8520 Cliff Cameron Dr., Suite 160</li>
              <li>Charlotte, NC 28269</li>
              <li>Mon–Fri · 8am–5pm</li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8520+Cliff+Cameron+Dr+Suite+160+Charlotte+NC+28269"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <Link href="/contact">Apply now</Link>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Cross Point Consulting. All rights reserved.</span>
          <span>Established 1999 · 75 offices nationwide</span>
        </div>
      </div>
    </footer>
  );
}
