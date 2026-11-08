import Link from "next/link";
import Footer from "@/components/Footer";
import { cafeInfo } from "@/lib/cafe-info";

export const metadata = {
  title: "About Us | Chaklo Cafe",
  description:
    "Get to know Chaklo Cafe: good food, welcoming vibes, and memorable moments shared around the table.",
};

const values = [
  {
    number: "01",
    title: "Made with care",
    description:
      "We put thought into every order, from the ingredients we choose to the way it reaches your table.",
  },
  {
    number: "02",
    title: "Flavour comes first",
    description:
      "Familiar favourites, satisfying bites, and flavours that make you want to come back for another.",
  },
  {
    number: "03",
    title: "Everyone is welcome",
    description:
      "Whether it is a quick coffee or a long catch-up, there is always room for one more at Chaklo.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="about-page">
        <section className="about-page-hero">
          <div className="about-page-copy">
            <span className="section-eyebrow">A LITTLE ABOUT US</span>
            <h1>
              GOOD FOOD,
              <br />
              <span>GOOD COMPANY.</span>
            </h1>
            <p>
              Chaklo Cafe is a place to slow down, share a meal, and make the
              everyday feel a little more special.
            </p>
            <Link href="/menu" className="about-page-cta">
              EXPLORE OUR MENU <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="about-page-visual" aria-label="Food and coffee at Chaklo Cafe">
            <div className="about-image-main">
              <img src="/burger.png" alt="A freshly made Chaklo Cafe burger" />
            </div>
            <div className="about-image-accent">
              <img src="/coffe.png" alt="Coffee at Chaklo Cafe" />
            </div>
            <div className="about-image-note">
              <span>GOOD FOOD</span>
              <span>GOOD VIBES</span>
            </div>
          </div>
          <span className="about-page-watermark" aria-hidden="true">CHAKLO</span>
        </section>

        <section className="about-story">
          <div className="about-story-label">
            <span className="section-eyebrow">OUR STORY</span>
            <span className="about-story-line" aria-hidden="true" />
          </div>
          <div className="about-story-copy">
            <h2>
              A cafe built around
              <br />
              <span>the joy of sharing.</span>
            </h2>
            <p>
              We believe the best moments often happen around good food: a
              catch-up that runs late, a much-needed coffee break, or a meal
              shared with your favourite people. Chaklo Cafe brings those little
              moments together in one welcoming place.
            </p>
            <p>
              Our menu brings together comforting cafe favourites and bold,
              satisfying flavours. Come by for a bite, stay for the company,
              and make yourself at home.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-values-heading">
            <span className="section-eyebrow">WHAT MATTERS TO US</span>
            <h2>THE CHAKLO WAY</h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <span className="about-value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-menu-story">
          <div className="about-menu-photo">
            <img src="/pizza.png" alt="Pizza from the Chaklo Cafe menu" />
            <div className="about-photo-caption">
              <span>MADE FOR SHARING</span>
              <span>AND SAVOURING</span>
            </div>
          </div>
          <div className="about-menu-copy">
            <span className="section-eyebrow">SOMETHING FOR EVERY CRAVING</span>
            <h2>From a quick bite to a proper catch-up.</h2>
            <p>
              Some days call for a comforting coffee. Others call for a burger,
              a slice of pizza, or a cold drink with friends. Our menu brings
              together cafe favourites for those little breaks and big appetites.
            </p>
            <p>
              Pick a favourite, try something new, and make your time at Chaklo
              your own.
            </p>
            <Link href="/menu" className="about-page-cta">
              FIND YOUR FAVOURITE <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="about-moments">
          <div className="about-values-heading">
            <span className="section-eyebrow">MAKE YOURSELF AT HOME</span>
            <h2>A spot for every kind of day.</h2>
          </div>
          <div className="about-moments-grid">
            <article>
              <span aria-hidden="true">☕</span>
              <h3>Your coffee break</h3>
              <p>Take a pause, recharge, and enjoy a little time for yourself.</p>
            </article>
            <article>
              <span aria-hidden="true">♡</span>
              <h3>Time with your people</h3>
              <p>Catch up over good food and let the conversation linger.</p>
            </article>
            <article>
              <span aria-hidden="true">✦</span>
              <h3>A treat just because</h3>
              <p>Celebrate the small wins with something delicious from the menu.</p>
            </article>
          </div>
        </section>

        <section className="about-location">
          <div>
            <span className="section-eyebrow">COME FIND US</span>
            <h2>Visit Chaklo Cafe</h2>
            <p>{cafeInfo.address}</p>
          </div>
          <a
            href={cafeInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-page-cta"
          >
            OPEN IN GOOGLE MAPS <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="about-invite">
          <span className="section-eyebrow">YOUR TABLE IS WAITING</span>
          <h2>Come hungry. Leave happy.</h2>
          <p>Find your next favourite on the Chaklo Cafe menu.</p>
          <Link href="/menu" className="about-page-cta">
            SEE THE MENU <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
