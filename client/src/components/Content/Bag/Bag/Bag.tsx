import React from "react";
import { NavLink } from "react-router-dom";
import ProductT from "../../../../types/MainTypes/ProductT";

import style from "./Bag.module.scss";
import RequestInfoContainer from "../RequestExtraInfo/RequestInfoContainer";

import BagProductsContainer from "../BagProducts/BagProductsContainer";

type Props = {
  isAuthentificated: boolean;
  didSendRequest: boolean;
  products: ProductT[];
  getRequestFile(): void;
};

const Bag: React.FC<Props> = (props: Props) => {
  if (!props.isAuthentificated) {
    return (
      <div className={style.content_wrapper}>
        <h1>You didn't log in</h1>
        <h3>
          You need to{" "}
          <NavLink className={style.link} to="login">
            <span className={style.span}>log in</span> first
          </NavLink>
        </h3>
      </div>
    );
  }

  if (props.didSendRequest) {
    return (
      <button
        className={style.download_button}
        onClick={() => props.getRequestFile()}
      >
        <span>Download File</span>
      </button>
    );
  }

  if (props.products.length === 0) {
    return (
      <div className={style.content_wrapper}>
        <h1>You have no items in the cart</h1>
        <h3>
          Go to the{" "}
          <NavLink className={style.link} to="Catalog">
            <span className={style.span}>Catalog</span>
          </NavLink>
        </h3>
      </div>
    );
  }
  return (
    <div className={style.bag_wrapper}>
      <div className={style.products_wrapper}>
        <BagProductsContainer />
      </div>
      <div className={style.info_wrapper}>
        <RequestInfoContainer />
      </div>
    </div>
  );
};

export default Bag;
