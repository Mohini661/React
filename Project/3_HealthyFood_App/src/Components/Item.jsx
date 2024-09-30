import styles from "./Item.module.css";

const Item = ({ fname, bought, buyButtonHandler, removeButtonHandler }) => {
  return (
    <li className={`list-group-item ${bought ? "active" : ""}`}>
      {fname}
      {bought ? (
        <button
          onClick={() => removeButtonHandler(fname)}
          className={`btn btn-danger ${styles.bbutton}`}
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => buyButtonHandler(fname)}
          className={`btn btn-primary ${styles.bbutton}`}
        >
          Buy
        </button>
      )}
    </li>
  );
};
export default Item;
