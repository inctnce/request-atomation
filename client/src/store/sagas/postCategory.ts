import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import ACTION from "../actionCreators/ACTION";
import catalogAC from "../actionCreators/catalogACs";

async function postCategory(name: string, creator_id: number) {

    const data = {
        name: name,
        creator_id: creator_id
    }

  return await Axios.post("/post_category", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerPostCategory(action: any) {
  const data = yield call(postCategory, action.payload.name, action.payload.creator_id);

  console.log(data);

  if (data !== undefined) {
    yield put(catalogAC.addCategory(data));
  }
}

function* watchPostCategory() {
  yield takeEvery(ACTION.POST_CATEGORY, workerPostCategory);
}

export default watchPostCategory;