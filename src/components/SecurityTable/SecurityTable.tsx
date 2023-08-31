import { FunctionComponent } from "react";
import { SecurityHoldings } from "@/models/portfolio";
import styles from "./SecurityTable.module.scss";

export interface SecurityTableProps {
  holdings: SecurityHoldings[];
}

export const SecurityTable: FunctionComponent<SecurityTableProps> = ({
  holdings,
}) => {
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <div className={styles.row}>
          <div className={styles.header}>Name</div>
          <div className={styles.header}>Sector</div>
          <div className={styles.header + " " + styles.align__right}>
            Shares
          </div>
          <div className={styles.header + " " + styles.align__right}>
            Last Price
          </div>
          <div className={styles.header + " " + styles.align__right}>
            Change
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {holdings.map((holding) => (
          <div key={holding.id} className={styles.row}>
            <div className={styles.cell}>{holding.name}</div>
            <div className={styles.cell}>{holding.sector.name}</div>
            <div className={styles.cell + " " + styles.align__right}>
              {holding.shares.toLocaleString()}
            </div>
            <div className={styles.cell + " " + styles.align__right}>
              {holding.lastPrice.toFixed(2)}p
            </div>
            <div
              className={
                styles.cell +
                " " +
                styles.align__right +
                " " +
                styles[holding.change < 0 ? "negative" : "positive"]
              }
            >
              {holding.change > 0 && "+"}
              {holding.change.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
