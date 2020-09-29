import React from "react";
import style from "./SignUpForm.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink, Redirect, useHistory } from "react-router-dom";

type Props = {
  isAuthentificated: boolean;

  setAuthentification(value: boolean): void;
  updFormValue(value: string, index: number): void;
  updCheckBoxValue(index: number): void;
  signUp(): void;
  input_field_values: string[];
  input_field_placeholders: string[];
};

const RegistrationForm: React.FC<Props> = (props: Props) => {
  const firstname_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const lastname_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const email_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const can_add_categories_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const can_add_products_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const password_ref: React.RefObject<HTMLInputElement> = React.createRef();
  const repeat_password_ref: React.RefObject<HTMLInputElement> = React.createRef();

  const history = useHistory();

  async function signUp() {
    try {
      props.signUp();

      props.setAuthentification(true);
      history.push("/catalog");
    } catch (error) {
      alert(error.message);
    }
  }

  if (props.isAuthentificated) {
    return <Redirect to="/Catalog" />;
  }
  return (
    <div className={style.card}>
      <div className={style.logo_wrapper}>
        <img className={style.logo} src={logo} />
      </div>
      <input
        className={style.field}
        type="text"
        ref={firstname_ref}
        placeholder={props.input_field_placeholders[0]}
        value={props.input_field_values[0]}
        onChange={() => props.updFormValue(firstname_ref.current!.value, 0)}
      />
      <input
        className={style.field}
        type="text"
        ref={lastname_ref}
        placeholder={props.input_field_placeholders[1]}
        value={props.input_field_values[1]}
        onChange={() => props.updFormValue(lastname_ref.current!.value, 1)}
      />
      <input
        className={style.field}
        type="text"
        ref={email_ref}
        placeholder={props.input_field_placeholders[2]}
        value={props.input_field_values[2]}
        onChange={() => props.updFormValue(email_ref.current!.value, 2)}
      />
      <input
        className={style.field}
        type="password"
        ref={password_ref}
        placeholder={props.input_field_placeholders[3]}
        value={props.input_field_values[3]}
        onChange={() => props.updFormValue(password_ref.current!.value, 3)}
      />
      <input
        className={style.field}
        type="password"
        ref={repeat_password_ref}
        placeholder={props.input_field_placeholders[4]}
        value={props.input_field_values[4]}
        onChange={() =>
          props.updFormValue(repeat_password_ref.current!.value, 4)
        }
      />
      <div className={style.checkbox_wrapper}>
        <input
          type="checkbox"
          id="can_add_categories"
          ref={can_add_categories_ref}
          className={style.checkbox}
          onChange={() => props.updCheckBoxValue(0)}
        />
        <label className={style.label} htmlFor="can_add_categories">
          Могу добавлять категории
        </label>
      </div>
      <div className={style.checkbox_wrapper}>
        <input
          type="checkbox"
          id="can_add_products"
          ref={can_add_products_ref}
          className={style.checkbox}
          onChange={() => props.updCheckBoxValue(1)}
        />
        <label className={style.label} htmlFor="can_add_products">
          Могу добавлять товары
        </label>
      </div>
      <button className={style.button} onClick={() => signUp()}>
        Зарегистрироваться
      </button>
      <NavLink className={style.link} to="/login">
        Войти
      </NavLink>
    </div>
  );
};

export default RegistrationForm;
