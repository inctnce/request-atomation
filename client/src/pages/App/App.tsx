import React, { useEffect } from "react";
import style from "./App.module.scss";

import { StateT } from "../../types/StateT";

import Content from "../Content/Content/Content";
import { CombinedState } from "redux";
import HeaderContainer from "../Header/Header/HeaderContainer";

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
