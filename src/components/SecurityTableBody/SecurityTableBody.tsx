import { FunctionComponent } from "react";
import { SecurityHoldings } from "@/models/portfolio";
import styles from "./SecurityTableBody.module.scss";

export interface SecurityTableBodyProps {
  holdings: SecurityHoldings[];
}

export const SecurityTableBody: FunctionComponent<SecurityTableBodyProps> = ({
  holdings,
}) => {
  return (
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
  );
};
