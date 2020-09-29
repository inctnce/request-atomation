import React from "react";
import style from "./style.module.css";

import CategoryHistoryContainer from "./CategoryHistory/container";
import ProductHistoryContainer from "./ProductHistory/container";

class ManageHistory extends React.Component {
  render() {
    return (
      <div className={style.history_wrapper}>
        <div className={style.category_list_wrapper}>
          <CategoryHistoryContainer />
        </div>
        <div className={style.product_list_wrapper}>
          <ProductHistoryContainer />
        </div>
      </div>
    );
  }
}

export default ManageHistory;
