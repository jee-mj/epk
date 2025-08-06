import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContent}>
      {/* Home page specific content will be rendered here */}
      <section>
        <strong>भीम <br/>राज <br/>भट्टराई</strong>
      </section>
    </div>
  );
} 