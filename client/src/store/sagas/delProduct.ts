import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import ACTION from "../actionCreators/ACTION";
import catalogAC from "../actionCreators/catalogACs";

async function delProduct(product_id: number) {
  return await Axios.delete(`/del_product/${product_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerDelProduct(action: any) {
  const data = yield call(delProduct, action.payload);

  console.log(data);

  if (data !== undefined) {
    yield put(catalogAC.removeProduct(data));
  }
}

function* watchDelProduct() {
  yield takeEvery(ACTION.DELETE_PRODUCT, workerDelProduct);
}

export default watchDelProduct;
