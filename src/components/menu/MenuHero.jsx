import Link from "next/link";

export default function MenuHero() {
  return (
    <section className="menu-hero">
      <div className="menu-hero-content">
        <span className="section-eyebrow">
          DISCOVER OUR FLAVOURS
        </span>

        <h1>
          OUR <span>MENU.</span>
        </h1>

        <p>
          From delicious bites to unforgettable flavours,
          discover your next favourite at Chaklo Cafe.
        </p>

        <Link href="#food-menu" className="order-btn">
          EXPLORE MENU ↓
        </Link>
      </div>
    </section>
  );
}