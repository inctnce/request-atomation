import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import ACTION from "../actionCreators/ACTION";
import catalogAC from "../actionCreators/catalogACs";

async function getProducts() {
  return await Axios.get("/get_products")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetProducts() {
  const data = yield call(getProducts);

  console.log(data);

  if (data !== undefined) {
    yield put(catalogAC.setProducts(data));
  }
}

function* watchGetProducts() {
  yield takeEvery(ACTION.GET_PRODUCTS, workerGetProducts);
}

export default watchGetProducts;
