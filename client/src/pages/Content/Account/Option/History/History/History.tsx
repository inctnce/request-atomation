import React from "react";
import style from "./History.module.css";


import OrderHistory from "../OrderHistory/OrderHistory";
import ManageHistoryContainer from "../ManageHistory/ManageHistoryContainer";

const History: React.FC = () => {
  return (
    <div>
      <div className={style.history_wrapper}>
        <div className={style.manage_history_wrapper}>
          <ManageHistoryContainer />
        </div>
        <div className={style.bag_history_wrapper}>
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default History;
