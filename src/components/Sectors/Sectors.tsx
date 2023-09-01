import { FunctionComponent } from "react";
import { SecurityHoldings } from "@/models/portfolio";
import { Sector } from "@/models/sector";
import styles from "./Sectors.module.scss";

export interface SectorProps {
  holdings: SecurityHoldings[];
}

export const Sectors: FunctionComponent<SectorProps> = ({ holdings }) => {
  const sectors = holdings.map((holding) => holding.sector);
  let uniqueSectors: Sector[] = [];

  for (const sector of sectors) {
    if (!uniqueSectors.find((s) => s.id === sector.id)) {
      uniqueSectors.push(sector);
    }
  }

  return (
    <div className={styles.sector__names}>
      {uniqueSectors.map((sector) => (
        <p key={sector.id} className={styles.sector__name}>
          {sector.name}
        </p>
      ))}
    </div>
  );
};
