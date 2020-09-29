import ActionI from "../../interfaces/Action";
import ACTION from "./ACTION";

function updFormValue(value: string, index: number): ActionI {
  return {
    type: ACTION.UPD_SIGN_UP_FORM_VALUE,
    value: value,
    index: index,
  };
}

function updCheckBoxValue(index: number): ActionI {
  return {
    type: ACTION.UPD_SIGN_UP_CHECK_BOX_VALUE,
    index: index,
  };
}

function signUp(): ActionI {
  return {
    type: ACTION.POST_USER,
  };
}

type SignUpACT = {
  updFormValue(value: string, index: number): ActionI;
  updCheckBoxValue(index: number): ActionI;
  signUp(): ActionI;
};

const SignUpAC: SignUpACT = {
  updFormValue: updFormValue,
  updCheckBoxValue: updCheckBoxValue,
  signUp: signUp,
};

export default SignUpAC;
