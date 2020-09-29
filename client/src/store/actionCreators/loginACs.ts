import ActionI from "../../interfaces/Action";
import UserT from "../../types/MainTypes/UserT";
import ACTION from "./ACTION";

function loginAC(email: string, password: string): ActionI {
  return {
    type: ACTION.LOGIN,
    payload: { email, password },
  };
}

function getUser(user: UserT) {
  return {
    type: ACTION.GET_USER,
    payload: user,
  };
}

function updLoginFormValueAC(value: string, index: number): ActionI {
  return {
    type: ACTION.UPD_LOGIN_FORM_VALUE,
    value: value,
    index: index,
  };
}

function setAuthentification(value: boolean): ActionI {
  return {
    type: ACTION.SET_AUTHENTIFICATION,
    value: value,
  };
}

type LoginACT = {
  setAuthentification(value: boolean): ActionI;
  login(email: string, password: string): ActionI;
  getUser(user: UserT): ActionI;
  updLoginFormValue(value: string, index: number): ActionI;
};

const loginFormAC: LoginACT = {
  setAuthentification: setAuthentification,
  login: loginAC,
  getUser: getUser,
  updLoginFormValue: updLoginFormValueAC,
};

export default loginFormAC;
