import { FunctionComponent } from "react";
import styles from "./PortfolioHeader.module.scss";

export interface PortfolioHeaderProps {
  title: string;
  valuation: number;
}

export const PortfolioHeader: FunctionComponent<PortfolioHeaderProps> = ({
  title,
  valuation,
}: PortfolioHeaderProps) => {
  const gbpFormatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.label}>Valuation</p>
      <span className={styles.valuation}>{gbpFormatter.format(valuation)}</span>
    </div>
  );
};
