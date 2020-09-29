import Axios from "axios";
import AuthLocalStorage from "../../localStorage/AuthLocalStorage";
import UserLocalStorage from "../../localStorage/UserLocalStorage";
import StateT from "../../types/StateT";

function updFieldValue(state: StateT, value: string, index: number): void {
  state.signUpPage.input_field_values[index] = value;
}

function updCheckBoxValue(state: StateT, index: number): void {
  if (state.signUpPage.checkbox_values[index] === true) {
    state.signUpPage.checkbox_values[index] = false;
  } else {
    state.signUpPage.checkbox_values[index] = true;
  }
}

function checkPassword(password: string, repeat_password: string): boolean {
  if (password === repeat_password) {
    return true;
  }
  return false;
}

async function signUp(state: StateT) {
  for (let i = 0; i < state.signUpPage.input_field_values.length; i++) {
    if (state.signUpPage.input_field_values[i] === "") {
      alert(`Вы не заполинили все необходимые поля! ${i}`);
      return;
    }
  }

  if (
    !checkPassword(
      state.signUpPage.input_field_values[3],
      state.signUpPage.input_field_values[4]
    )
  ) {
    alert("Passwords don't match");
    state.signUpPage.input_field_values[3] = "";
    state.signUpPage.input_field_values[4] = "";
    return;
  }

  const data = {
    firstname: state.signUpPage.input_field_values[0],
    lastname: state.signUpPage.input_field_values[1],
    email: state.signUpPage.input_field_values[2],
    password: state.signUpPage.input_field_values[3],
    canAddCategory: state.signUpPage.checkbox_values[0],
    canAddProduct: state.signUpPage.checkbox_values[1],
    bag: [],
  };

  state.current_user = {
    ...(await Axios.post("/post_user", data).then((response) => {
      if (response.status !== 201) {
        alert(response.data)
        return response.data;
      }
      alert(response.data);
      return;
    }).catch((Error) => {
      if (Error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(Error.response.data);
        console.log(Error.response.status);
        console.log(Error.response.headers);
    } else if (Error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(Error.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', Error.message);
    }
    })),
  };

  if (state.current_user.id !== -1) {
    UserLocalStorage.saveUser(state.current_user);
    AuthLocalStorage.saveAuth(true);
  }

  console.log(state.current_user);
}

type signUpActionT = {
  updSignUpValue(state: StateT, value: string, index: number): void;
  updCheckBoxValue(state: StateT, index: number): void;
  signUp(state: StateT): void;
};

const signUpAction: signUpActionT = {
  updSignUpValue: updFieldValue,
  updCheckBoxValue: updCheckBoxValue,
  signUp: signUp,
};

export default signUpAction;
