import React from "react";
import style from "./style.module.css";

import List from "./List/container";

const Admin: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <List />

      <div className={style.table}>table</div>
    </div>
  );
};

export default Admin;
