import { FunctionComponent } from "react";

import styles from "./PortfolioNotFound.module.scss";

export interface PortfolioNotFoundProps {
  id: string | string[] | undefined;
}

export const PortfolioNotFound: FunctionComponent<PortfolioNotFoundProps> = ({
  id,
}: PortfolioNotFoundProps) => {
  return (
    <div className={styles.not__found}>
      <h1 className={styles.title}>Portfolio not found</h1>
      <p className={styles.message}>
        We apologise, but we could not locate a portfolio associated with the ID{" "}
        {id}.
      </p>
    </div>
  );
};
