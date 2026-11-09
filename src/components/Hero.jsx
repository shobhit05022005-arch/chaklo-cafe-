import Image from "next/image";
import OrderButton from "./OrderButton";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-label">
          WELCOME TO CHAKLO CAFE
        </span>

        <h1>
          <span className="hero-title-kicker">THE</span>
          <span>MIDNIGHT</span>
          <span>FEAST</span>
        </h1>

        <p>
          Indulge in an unforgettable food experience at
          Chaklo Cafe, where every bite brings bold flavours,
          fresh ingredients, and moments worth sharing.
        </p>

        <div className="hero-actions">
          <OrderButton href="/menu">
            ORDER NOW
          </OrderButton>

          <a href="#featured-menu" className="explore-link">
            EXPLORE MENU <span>-&gt;</span>
          </a>
        </div>

        <div className="hero-bottom-label">
          <span className="status-dot" />
          FRESH FOOD. BOLD FLAVOURS.
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-glow" />

        <Image
          src="/burger.png"
          alt="Signature burger at Chaklo Cafe"
          width={900}
          height={900}
          priority
          className="hero-burger"
          sizes="(max-width: 768px) 90vw, 58vw"
        />

        <div className="floating-tag tag-top">
          <span>*</span> MADE WITH LOVE
        </div>

        <div className="floating-tag tag-bottom">
          BIG FLAVOUR. BIGGER CRAVINGS.
        </div>
      </div>

      <div className="hero-scroll">
        <span />
        SCROLL TO DISCOVER
      </div>
    </section>
  );
}
