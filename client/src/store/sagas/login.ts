import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../actionCreators/ACTION";
import loginFormAC from "../actionCreators/loginACs";

async function login(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  return await Axios.post("/log_in", data)
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerLogin(action: any) {
  const data = yield call(login, action.payload.email, action.payload.password);

  console.log(data);

  if (data !== undefined) {
    yield put(loginFormAC.getUser(data));
  }
}

function* watchLogin() {
  yield takeEvery(ACTION.LOGIN, workerLogin);
}

export default watchLogin;
