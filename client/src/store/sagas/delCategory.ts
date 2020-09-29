import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import ACTION from "../actionCreators/ACTION";
import catalogAC from "../actionCreators/catalogACs";

async function delCategory(category_id: number) {
  return await Axios.delete(`/del_category/${category_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerDelCategory(action: any) {
  const data = yield call(delCategory, action.payload);

  console.log(data);

  if (data !== undefined) {
    yield put(catalogAC.removeCategory(data));
  }
}

function* watchDelCategory() {
  yield takeEvery(ACTION.DELETE_CATEGORY, workerDelCategory);
}

export default watchDelCategory;
