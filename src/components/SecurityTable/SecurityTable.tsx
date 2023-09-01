import { FunctionComponent } from "react";
import { SecurityHoldings } from "@/models/portfolio";
import { SecurityTableHead } from "@/components/SecurityTableHead/SecurityTableHead";
import { SecurityTableBody } from "@/components/SecurityTableBody/SecurityTableBody";
import styles from "./SecurityTable.module.scss";

export interface SecurityTableProps {
  holdings: SecurityHoldings[];
}

export const SecurityTable: FunctionComponent<SecurityTableProps> = ({
  holdings,
}) => {
  return (
    <div className={styles.table}>
      <SecurityTableHead />
      <SecurityTableBody holdings={holdings} />
    </div>
  );
};
