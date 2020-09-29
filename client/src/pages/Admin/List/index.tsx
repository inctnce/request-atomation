import React from "react";
import style from "./style.module.css";

type Props = {
  items: string[];
};

const List: React.FC<Props> = (props: Props) => {
  const items = props.items.map((item: string) => (
    <li className={style.item}>{item}</li>
  ));

  return <ul className={style.list}>{items}</ul>;
};

export default List;
