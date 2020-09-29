import React from "react";
import style from "./style.module.css";

type Props = {
  items: string[];
};

const List: React.FC<Props> = (props: Props) => {
  return (
    <ul className={style.table_list}>
      <li>123</li>
      <li>123</li>
    </ul>
  );
};

export default List;
