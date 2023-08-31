import { FunctionComponent } from "react";
import { SecurityTable } from "../SecurityTable/SecurityTable";
import styles from "./PortfolioContent.module.scss";
import { SecurityHoldings } from "@/models/portfolio";
import { Sector } from "@/models/sector";

export interface PortfolioContentProps {
  holdings: SecurityHoldings[];
}

export const PortfolioContent: FunctionComponent<PortfolioContentProps> = ({
  holdings,
}) => {
  const holdingsCount = holdings.length;

  const sectors = holdings.map((holding) => holding.sector);
  let uniqueSectors: Sector[] = [];
  for (const sector of sectors) {
    if (!uniqueSectors.find((s) => s.id === sector.id)) {
      uniqueSectors.push(sector);
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>Holdings ({holdingsCount})</div>
      <div className={styles.sectors}>
        <p className={styles.title}>Sectors:</p>
        <div className={styles.sector__names}>
          {uniqueSectors.map((sector) => (
            <p key={sector.id} className={styles.sector__name}>
              {sector.name}
            </p>
          ))}
        </div>
      </div>
      <SecurityTable holdings={holdings} />
    </div>
  );
};
