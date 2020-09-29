import React from "react";
import style from "./style.module.scss";

import { NavLink } from "react-router-dom";


type Props = {
  title: string;
  link: string;
};

const Tab: React.FC<Props> = (props: Props) => {
  return (
    <div className={style.tab}>
      <NavLink
        className={style.tab}
        activeClassName={style.acitve_link}
        exact
        to={props.link}
      >
        {props.title}
      </NavLink>
    </div>
  );
};

export default Tab;
