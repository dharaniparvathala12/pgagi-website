import styles from "./bg.module.scss";

let glare = new Array(10).fill(0);
export default function Background() {
  return (
    <div className={styles.glareBackground}>
      {glare.map((_, i) => (
        <div key={i} className={styles.background}>
          <span className={styles.primary} />
          <span className={styles.secondary} />
          <span className={styles.tertiary} />
        </div>
      ))}
    </div>
  );
}
