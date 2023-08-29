import { FunctionComponent } from "react";
import { SecurityTable } from "../security-table/security-table";
import styles from "./portfolio-holding.module.scss";

export const PortfolioHolding: FunctionComponent = () => {
  return (
    <div className={styles["portfolio-holding"]}>
      <div className={styles["portfolio-holding--header"]}>Holdings (4)</div>
      <div className={styles["portfolio-holding--sectors"]}>Sectors:</div>
      <div className={styles["portfolio-holding--security-table"]}>
        <SecurityTable />
      </div>
    </div>
  );
};
