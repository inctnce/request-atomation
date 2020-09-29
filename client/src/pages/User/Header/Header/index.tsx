import React from "react";
import style from "./style.module.scss";

import Logo from "../Logo";
import SearchContainer from "../Search/container";
import Tab from "../Tab";
import { NavLink } from "react-router-dom";

type Props = {
  // isAdmin: boolean;
  isAuthentificated: boolean;
  tab_titles: string[];
  tab_links: string[];
  logout(): void;
};

type TabT = {
  title: string;
  link: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const tabs_data: TabT[] = [];
  for (let i = 0; i < props.tab_titles.length; i++) {
    tabs_data.push({ title: props.tab_titles[i], link: props.tab_links[i] });
  }

  const tab_components = tabs_data.map((value: TabT) => (
    <Tab key={value.title} title={value.title} link={value.link} />
  ));

  if (!props.isAuthentificated) {
    return (
      <div className={style.header}>
        <header className={style.header_wrapper}>
          <Logo />
          <SearchContainer />
          <div className={style.tabs_wrapper}>{tab_components}</div>
          <NavLink className={style.button} to="/login">
            Войти
          </NavLink>
        </header>
      </div>
    );
  }

  return (
    <div className={style.header}>
      <header className={style.header_wrapper}>
        <Logo />
        <SearchContainer />
        <div className={style.tabs_wrapper}>{tab_components}</div>
        <button className={style.logout_button} onClick={() => props.logout()}>
          Выйти
        </button>
      </header>
    </div>
  );
};

export default Header;
