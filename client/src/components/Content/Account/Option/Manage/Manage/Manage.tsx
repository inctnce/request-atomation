import React from "react";
import style from "./Manage.module.scss";

import CategoryFormContainer from "../CategoryForm/CategoryFormContainer";
import ProductFormContainer from "../ProductForm/ProductFormContainer";

const Manage: React.FC = () => {
  return (
    <div className={style.manage_wrapper}>
      <div className={style.category_wrapper}>
        <CategoryFormContainer />
      </div>
      <div className={style.product_wrapper}>
        <ProductFormContainer />
      </div>
    </div>
  );
};

export default Manage;
