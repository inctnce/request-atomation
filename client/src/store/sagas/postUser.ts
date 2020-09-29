import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import accountAC from "../actionCreators/accountACs";

import ACTION from "../actionCreators/ACTION";

async function postUser(user: any) {
  const data = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    canAddCategory: user.canAddCategory,
    canAddProduct: user.canAddProduct,
  };

  console.log(data);

  return await Axios.post("/post_user", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerPostUser(action: any) {
  const fetched_data = yield call(postUser, { ...action.payload });

  console.log(fetched_data);

  if (fetched_data !== undefined) {
    yield put(accountAC.setUser(fetched_data));
  }
}

function* watchPostCategory() {
  yield takeEvery(ACTION.POST_USER, workerPostUser);
}

export default watchPostCategory;
