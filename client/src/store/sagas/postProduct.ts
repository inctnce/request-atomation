import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import ACTION from "../actionCreators/ACTION";
import catalogAC from "../actionCreators/catalogACs";

async function postProduct(product: any) {
  const data = {
    name: product.name,
    category_id: product.category_id,
    specs: product.specs,
    values: product.values,
    price: product.price,
    extra_info: product.extra_info,
    creator_id: product.creator_id,
  };

  console.log(data);

  return await Axios.post("/post_product", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerPostProduct(action: any) {
  const fetched_data = yield call(postProduct, { ...action.payload });

  console.log(fetched_data);

  if (fetched_data !== undefined) {
    yield put(catalogAC.addProduct(fetched_data));
  }
}

function* watchPostCategory() {
  yield takeEvery(ACTION.POST_PRODUCT, workerPostProduct);
}

export default watchPostCategory;
