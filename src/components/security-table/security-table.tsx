import { FunctionComponent } from "react";
import styles from "./security-table.module.scss";

export const SecurityTable: FunctionComponent = () => {
  return (
    <div className={styles.table}>
      <div className="header">Name</div>
      <div className="header">Sector</div>
      <div className="header">Shares</div>
      <div className="header">Last Price</div>
      <div className="header">Change</div>

      <div className="cell">Row 1, Cell 1</div>
      <div className="cell">Row 1, Cell 2</div>
      <div className="cell">Row 1, Cell 3</div>
      <div className="cell">Row 1, Cell 4</div>
      <div className="cell">Row 1, Cell 5</div>

      <div className="cell">Row 2, Cell 1</div>
      <div className="cell">Row 2, Cell 2</div>
      <div className="cell">Row 2, Cell 3</div>
      <div className="cell">Row 2, Cell 4</div>
      <div className="cell">Row 2, Cell 5</div>

      <div className="cell">Row 3, Cell 1</div>
      <div className="cell">Row 3, Cell 2</div>
      <div className="cell">Row 3, Cell 3</div>
      <div className="cell">Row 3, Cell 4</div>
      <div className="cell">Row 3, Cell 5</div>

      <div className="cell">Row 4, Cell 1</div>
      <div className="cell">Row 4, Cell 2</div>
      <div className="cell">Row 4, Cell 3</div>
      <div className="cell">Row 4, Cell 4</div>
      <div className="cell">Row 4, Cell 5</div>

      <div className="cell">Row 5, Cell 1</div>
      <div className="cell">Row 5, Cell 2</div>
      <div className="cell">Row 5, Cell 3</div>
      <div className="cell">Row 5, Cell 4</div>
      <div className="cell">Row 5, Cell 5</div>
    </div>
  );
};
