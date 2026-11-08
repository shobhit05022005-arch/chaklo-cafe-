import Link from "next/link";
import Footer from "@/components/Footer";
import { cafeInfo } from "@/lib/cafe-info";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Contact Us | Chaklo Cafe",
  description:
    "Call or WhatsApp Chaklo Cafe, near Pili Kothi in Moradabad.",
};

export default function ContactPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>WE'D LOVE TO HEAR FROM YOU</span>
          <h1>
            LET'S <span className={styles.highlight}>CONNECT.</span>
          </h1>
          <p>
            Have a question or planning a visit? Call or message us, or stop by
            Chaklo Cafe.
          </p>
          <a
            className={styles.heroLink}
            href={cafeInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            MESSAGE US ON WHATSAPP <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section
          className={styles.details}
          aria-label="Chaklo Cafe contact details"
        >
          <article className={styles.card}>
            <span className={styles.icon} aria-hidden="true">01</span>
            <span className={styles.label}>01 / CALL</span>
            <h2>Let's talk</h2>
            <a href={cafeInfo.phoneHref}>{cafeInfo.phoneDisplay}</a>
            <p>Tap the number to call Chaklo Cafe.</p>
          </article>

          <article className={styles.card}>
            <span className={styles.icon} aria-hidden="true">02</span>
            <span className={styles.label}>02 / WHATSAPP</span>
            <h2>Message the cafe</h2>
            <a
              href={cafeInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cafeInfo.phoneDisplay}
            </a>
            <p>Ask a question or send an order request.</p>
          </article>

          <article className={styles.card}>
            <span className={styles.icon} aria-hidden="true">03</span>
            <span className={styles.label}>03 / FIND US</span>
            <h2>Visit the cafe</h2>
            <p className={styles.address}>{cafeInfo.address}</p>
            <a
              className={styles.mapLink}
              href={cafeInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN IN GOOGLE MAPS <span aria-hidden="true">↗</span>
            </a>
          </article>
        </section>

        <section className={styles.bottom}>
          <div>
            <span className={styles.eyebrow}>SEE YOU SOON</span>
            <h2>Good food is just around the corner.</h2>
          </div>
          <Link href="/menu" className={styles.menuLink}>
            EXPLORE OUR MENU <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
