import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import ACTION from "../actionCreators/ACTION";
import catalogAC from "../actionCreators/catalogACs";

async function getCategories() {
  return await Axios.get("/get_categories")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetCategories() {
  const data = yield call(getCategories);

  console.log(data);

  if (data !== undefined) {
    yield put(catalogAC.setCategories(data));
  }
}

function* watchGetCategories() {
  yield takeEvery(ACTION.GET_CATEGORIES, workerGetCategories);
}

export default watchGetCategories;
