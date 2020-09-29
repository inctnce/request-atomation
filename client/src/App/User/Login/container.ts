import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../interfaces/Action";
import loginFormAC from "../../../store/actionCreators/loginACs";
import StateT from "../../../types/StateT";
import LoginForm from ".";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    isAuthentificated: state.app.isAuthentificated,

    email_key: state.app.loginPage.email_key,
    email_value: state.app.loginPage.email_value,
    email_placeholder: state.app.loginPage.email_placeholder,

    password_key: state.app.loginPage.password_key,
    password_value: state.app.loginPage.password_value,
    password_placeholder: state.app.loginPage.password_placeholder,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    setAuthentification: (value: boolean) => {
      dispatch(loginFormAC.setAuthentification(value));
    },
    login: (email: string, password: string) => {
      dispatch(loginFormAC.login(email, password));
    },
    updLoginFormValue: (value: string, index: number) => {
      dispatch(loginFormAC.updLoginFormValue(value, index));
    },
  };
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
