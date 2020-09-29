import React from "react";
import style from "./style.module.scss";
import logoPhoto from "../../../../assets/images/logo.png"

const Logo = () => {
  return (
    <div className={style.logo}>
      <img className={style.image} src={logoPhoto} alt="logo" />
    </div>
  );
};

export default Logo;
