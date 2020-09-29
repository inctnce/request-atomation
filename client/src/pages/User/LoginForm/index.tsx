import React, { useEffect } from "react";
import style from "./style.module.scss";
import logo from "../../../assets/images/logo.png";

import { NavLink, useHistory } from "react-router-dom";

type Props = {
  isAuthentificated: boolean;

  email_key: number;
  email_value: string;
  email_placeholder: string;

  password_key: number;
  password_value: string;
  password_placeholder: string;

  setAuthentification(value: boolean): void;
  login(email: string, password: string): void;
  updLoginFormValue(value: string, index: number): void;
};

const LoginForm: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  useEffect(() => {
    if (props.isAuthentificated) {
      history.push("/catalog");
    }
  });

  const email_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const password_ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div className={style.card}>
      <div className={style.logo_wrapper}>
        <img className={style.logo} src={logo} />
      </div>
      <input
        type="text"
        className={style.field}
        key={props.email_key}
        value={props.email_value}
        placeholder={props.email_placeholder}
        ref={email_ref}
        onChange={() =>
          props.updLoginFormValue(email_ref.current!.value, props.email_key)
        }
      />
      <input
        type="password"
        className={style.field}
        key={props.password_key}
        value={props.password_value}
        placeholder={props.password_placeholder}
        ref={password_ref}
        onChange={() =>
          props.updLoginFormValue(
            password_ref.current!.value,
            props.password_key
          )
        }
      />
      <button
        className={style.button}
        onClick={() =>
          props.login(email_ref.current!.value, password_ref.current!.value)
        }
      >
        Войти
      </button>
      <NavLink className={style.link} to="/registration">
        Зарегистрироваться
      </NavLink>
    </div>
  );
};

export default LoginForm;
