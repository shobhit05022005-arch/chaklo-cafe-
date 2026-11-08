import Link from "next/link";
import { cafeInfo } from "@/lib/cafe-info";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            CHAKLO<span>CAFE.</span>
          </Link>
          <p className="footer-description">
            Great food. Great vibes. Unforgettable moments. Welcome to Chaklo
            Cafe, where every bite tells a delicious story.
          </p>
        </div>

        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Our Menu</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>EXPLORE MENU</h3>
          <ul>
            <li><Link href="/menu">Burgers</Link></li>
            <li><Link href="/menu">Pizza</Link></li>
            <li><Link href="/menu">Snacks</Link></li>
            <li><Link href="/menu">Beverages</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>GET IN TOUCH</h3>
          <p>
            <span className="contact-icon" aria-hidden="true">WA</span>
            <a href={cafeInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp: {cafeInfo.phoneDisplay}
            </a>
          </p>
          <p>
            <span className="contact-icon" aria-hidden="true">TEL</span>
            <a href={cafeInfo.phoneHref}>{cafeInfo.phoneDisplay}</a>
          </p>
          <p>
            <span className="contact-icon" aria-hidden="true">MAP</span>
            <a href={cafeInfo.mapsUrl} target="_blank" rel="noopener noreferrer">
              {cafeInfo.address}
            </a>
          </p>
          <Link href="/contact" className="footer-contact-btn">
            CONTACT US ↗
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Chaklo Cafe. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
        <p className="footer-credit">MADE WITH ♥ FOR FOOD LOVERS</p>
      </div>
    </footer>
  );
}
