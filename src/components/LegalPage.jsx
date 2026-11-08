import Link from "next/link";
import styles from "./LegalPage.module.css";

export default function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        <span className={styles.updated}>Last updated: 8 November 2026</span>
      </header>

      <div className={styles.content}>
        {sections.map((section) => (
          <section className={styles.section} key={section.title}>
            <h2>{section.title}</h2>
            {section.content}
          </section>
        ))}

        <div className={styles.contact}>
          <p>Questions about this page or the cafe?</p>
          <Link href="/contact">Get in touch with Chaklo Cafe</Link>
        </div>
      </div>
    </main>
  );
}
