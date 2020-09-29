import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../interfaces/Action";
import loginFormAC from "../../store/actionCreators/loginACs";
import SignUpAC from "../../store/actionCreators/signUpACs";
import StateT from "../../types/StateT";
import RegistrationForm from "./SignUpForm";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    isAuthentificated: state.app.isAuthentificated,
    input_field_values: state.app.signUpPage.input_field_values,
    input_field_placeholders: state.app.signUpPage.input_field_placeholders,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    setAuthentification: (value: boolean) => {
      dispatch(loginFormAC.setAuthentification(value));
    },
    updFormValue: (value: string, index: number) => {
      dispatch(SignUpAC.updFormValue(value, index));
    },
    updCheckBoxValue: (index: number) => {
      dispatch(SignUpAC.updCheckBoxValue(index));
    },
    signUp: () => {
      dispatch(SignUpAC.signUp());
    },
  };
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default SignUp;
