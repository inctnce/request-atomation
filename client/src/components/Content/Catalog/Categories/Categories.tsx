import React from "react";
import styles from "./Categories.module.scss";

import CategoryT from "../../../../types/MainTypes/CategoryT"

type Props = {
  categories: CategoryT[];
  setCategory(category: CategoryT): void;
};

const Categories: React.FC<Props> = (props) => {

  const list_items = props.categories.map((value: CategoryT) => (
    <div key={value.id} className={styles.list_item}>
      <button
        className={styles.button}
        onClick={() => props.setCategory(value)}
      >
        <span>{value.name}</span>
      </button>
    </div>
  ));

  return (
    <div className={styles.list}>
      {list_items}
    </div>
  );
};

export default Categories;
