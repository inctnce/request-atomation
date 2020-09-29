import StateT from "../../types/StateT";

function setAuthentification(state: StateT, value: boolean): void {
  state.isAuthentificated = value;
}

function updLoginForm(state: StateT, value: string, index: number): void {
  if (index === 1) {
    state.loginPage.email_value = value;
  } else {
    state.loginPage.password_value = value;
  }
}

type loginFormActionT = {
  setAuthentification(state: StateT, value: boolean): void;
  updLoginForm(state: StateT, value: string, index: number): void;
};

const loginFormAction: loginFormActionT = {
  setAuthentification: setAuthentification,
  updLoginForm: updLoginForm,
};

export default loginFormAction;
