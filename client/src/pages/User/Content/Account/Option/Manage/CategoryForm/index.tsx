import React from "react";
import { categoryForm } from "../../../../../../../types/AccountPage/forms";
import style from "./style.module.scss";

type Props = {
  creator_id: number;
  category_field: categoryForm;
  addCategory(name: string, creator_id: number): void;
  updCategoryTitle(name: string): void;
};

const CategoryForm: React.FC<Props> = (props) => {
  let newCategory: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div>
      <h2 className={style.title}>Категории</h2>
      <div className={style.category_card}>
        <input
          value={props.category_field.value}
          onChange={() => props.updCategoryTitle(newCategory.current!.value)}
          ref={newCategory}
          className={style.text_field}
          placeholder={props.category_field.placeholder}
        />

        <button
          onClick={() =>
            props.addCategory(newCategory.current!.value, props.creator_id)
          }
          className={style.button}
        >
          Добавить категорию
        </button>
      </div>
    </div>
  );
};

export default CategoryForm;
