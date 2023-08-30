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
      <div className={styles.header}>
        <div className={styles.row}>
          <div className="header">Name</div>
          <div className="header">Sector</div>
          <div className="header">Shares</div>
          <div className="header">Last Price</div>
          <div className="header">Change</div>
        </div>
      </div>
      <div className={styles.body}>
        {holdings.map((holding) => (
          <div key={holding.id} className={styles.row}>
            <div>{holding.name}</div>
            <div>{holding.sector.name}</div>
            <div>{holding.shares}</div>
            <div>{holding.lastPrice}</div>
            <div
              className={styles[holding.change < 0 ? "negative" : "positive"]}
            >
              {holding.change > 0 && "+"}
              {holding.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
