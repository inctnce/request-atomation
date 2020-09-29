import AuthLocalStorage from "../../localStorage/AuthLocalStorage";
import BagLocalStorage from "../../localStorage/BagLocalStorage";
import UserLocalStorage from "../../localStorage/UserLocalStorage";
import StateT from "../../types/StateT";
import loginFormAction from "./loginFormActions";

function logout(state: StateT): void {
  UserLocalStorage.removeUser();
  state.current_user = {
    id: -1,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    canAddCategory: false,
    canAddProduct: false,
  };

  AuthLocalStorage.removeAuth();
  BagLocalStorage.removeBag();
  loginFormAction.setAuthentification(state, false);
}

type HeaderActionT = {
  logout(state: StateT): void;
};

const HeaderAction: HeaderActionT = {
  logout: logout,
};

export default HeaderAction;
