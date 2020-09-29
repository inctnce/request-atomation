import React from "react";
import style from "./Catalog.module.scss";
import mainStyle from "../../../../index.module.scss";

import ProductsContainer from "../Products/Products/ProductsContainer";
import CategoriesContainer from "../Categories/CategoriesContainer";
import CategoryT from "../../../../types/MainTypes/CategoryT";
import ProductT from "../../../../types/MainTypes/ProductT";
import { NavLink } from "react-router-dom";

type Props = {
  isAuthentificated: boolean;

  categories: CategoryT[];
  products: ProductT[];
};

const Catalog: React.FC<Props> = (props: Props) => {
  if (!props.isAuthentificated) {
    return (
      <div className={style.content_wrapper}>
        <h1>You are not logged in</h1>
        <h3>
          You need{" "}
          <NavLink className={mainStyle.link} to="login">
            <span className={style.span}>log in</span> first
          </NavLink>
        </h3>
      </div>
    );
  }

  return (
    <div className={style.catalog_wrapper}>
      <div className={style.list}>
        <CategoriesContainer />
      </div>
      <div className={style.category}>
        <ProductsContainer />
      </div>
    </div>
  );
};

export default Catalog;
