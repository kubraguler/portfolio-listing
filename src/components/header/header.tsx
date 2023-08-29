import { FunctionComponent } from "react";
import styles from "./header.module.scss";

export const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <h1>Title</h1>
      <p>Valuation</p>
      <span>£ Price</span>
    </div>
  );
};
