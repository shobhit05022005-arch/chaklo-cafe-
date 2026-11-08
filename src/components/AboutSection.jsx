import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-decoration">
        CHAKLO
      </div>

      <div className="about-content">
        <span className="section-eyebrow">
          MORE THAN JUST FOOD
        </span>

        <h2>
          GOOD FOOD.
          <br />
          <span>GREAT MEMORIES.</span>
        </h2>

        <p>
          At Chaklo Cafe, we believe great food brings people
          together. Enjoy delicious flavours and memorable
          moments with friends and family.
        </p>

        <Link href="/about" className="outline-btn">
          OUR STORY ↗
        </Link>
      </div>

      <div className="about-stats">
        <div>
          <span>01</span>
          <p>Bold Flavours</p>
        </div>

        <div>
          <span>02</span>
          <p>Fresh Ingredients</p>
        </div>

        <div>
          <span>03</span>
          <p>Good Vibes</p>
        </div>
      </div>
    </section>
  );
}