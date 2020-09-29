import React from "react";
import style from "./style.module.scss";
import mainStyle from "../../../../../index.module.scss";

import OptionContainer from "../Option/Option/container";

import UserT from "../../../../../types/MainTypes/UserT";
import SettingsList from "../SettingsList";
import CategoryT from "../../../../../types/MainTypes/CategoryT";
import ProductT from "../../../../../types/MainTypes/ProductT";
import { NavLink } from "react-router-dom";

type Props = {
  isAuthentificated: boolean;
  user: UserT;
  categories: CategoryT[];
  products: ProductT[];
  setCategory(category: string): void;
};

const Account: React.FC<Props> = (props: Props) => {
  const canEdit: boolean =
    props.user.canAddCategory || props.user.canAddProduct;

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
    <div className={style.account_wrapper}>
      <div className={style.settings_wrapper}>
        <SettingsList canEdit={canEdit} setCategory={props.setCategory} />
      </div>
      <OptionContainer />
    </div>
  );
};

export default Account;
