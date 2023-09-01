import { FunctionComponent } from "react";
import styles from "./SecurityTableHead.module.scss";

export const SecurityTableHead: FunctionComponent = () => {
  return (
    <div className={styles.head}>
      <div className={styles.row}>
        <div className={styles.cell}>Name</div>
        <div className={styles.cell}>Sector</div>
        <div className={styles.cell + " " + styles.align__right}>Shares</div>
        <div className={styles.cell + " " + styles.align__right}>
          Last Price
        </div>
        <div className={styles.cell + " " + styles.align__right}>Change</div>
      </div>
    </div>
  );
};
