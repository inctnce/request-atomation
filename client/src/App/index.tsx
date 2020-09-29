import React, { useEffect } from "react";
import style from "./style.module.scss";

import { StateT } from "../types/StateT";

import Content from "./User/Content";
import { CombinedState } from "redux";
import HeaderContainer from "./User/Header/Header/container";

type Props = {
  state: CombinedState<{ app: StateT }>;
  getCategories(): void;
  getProducts(): void;
};

const App: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    if (props.state.app.isAuthentificated) {
      if (!props.state.app.didGetCategories) props.getCategories();
      if (!props.state.app.didGetProducts) props.getProducts();
    }
  });

  return (
    <div className={style.app_wrapper}>
      <HeaderContainer />
      <div className={style.content_wrapper}>
        <Content />
      </div>
    </div>
  );
};

export default App;
