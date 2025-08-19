import styles from "./page.module.css";

export default function Home() {
  return (
    <section className= {styles.viewport}>
      <div className={styles.homeStyle}>
          <p>भीम <br/>राज <br/>भट्टराई</p>
      </div>
      <div className={styles.homeContent}>
        {/* Home page specific content will be rendered here */}
      </div>
    </section>
  );
} 