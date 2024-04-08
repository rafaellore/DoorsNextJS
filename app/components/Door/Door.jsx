import styles from "./Door.module.css";

export default function Door() {
  return (
    <div className={styles.area}>
      <div className={styles.structure}>
        <div className={styles.door}>
          <div className={styles.number}>5</div>
        </div>
      </div>
    </div>
  );
}
