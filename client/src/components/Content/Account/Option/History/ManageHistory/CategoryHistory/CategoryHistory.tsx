import React from "react";
import style from "./CategoryHistory.module.css";

import CategoryT from "../../../../../../../types/MainTypes/CategoryT";

type Props = {
  categories: CategoryT[];
  delCategory(category_id: number): void;
};

const CategoryHistory: React.FC<Props> = (props: Props) => {

  const category_list: JSX.Element[] = props.categories.map(
    (category: CategoryT) => (
      <li key={category.id}>
        <div className={style.list_item}>
          <div className={style.category_info}>
            <div>{category.name}</div>
            {/* <div>{category.creation_date}</div> */}
          </div>
          <button
            className={style.del_button}
            onClick={() => props.delCategory(category.id)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  );

  return (
    <div>
      <div className={style.category_list}>
        <h2 className={style.subtitle}>Категории</h2>
        <ul>{category_list}</ul>
      </div>
    </div>
  );
};

export default CategoryHistory;
