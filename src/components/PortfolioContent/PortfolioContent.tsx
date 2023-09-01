import { FunctionComponent } from "react";
import { SecurityHoldings } from "@/models/portfolio";
import { Sectors } from "@/components/Sectors/Sectors";
import { SecurityTable } from "@/components/SecurityTable/SecurityTable";
import styles from "./PortfolioContent.module.scss";

export interface PortfolioContentProps {
  holdings: SecurityHoldings[];
}

export const PortfolioContent: FunctionComponent<PortfolioContentProps> = ({
  holdings,
}) => {
  const holdingsCount = holdings.length;

  return (
    <div className={styles.content}>
      <div className={styles.header}>Holdings ({holdingsCount})</div>
      <div className={styles.sectors}>
        <p className={styles.title}>Sectors:</p>
        <Sectors holdings={holdings} />
      </div>
      <SecurityTable holdings={holdings} />
    </div>
  );
};
