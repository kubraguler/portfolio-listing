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
    <div className={styles["portfolio-content"]}>
      <div className={styles["portfolio-content--header"]}>
        Holdings ({holdingsCount})
      </div>
      <div className={styles["portfolio-content--sectors"]}>
        Sectors:
        {uniqueSectors.map((sector) => (
          <p key={sector.id}>{sector.name}</p>
        ))}
      </div>
      <SecurityTable holdings={holdings} />
    </div>
  );
};
