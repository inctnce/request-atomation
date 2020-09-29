import Axios from "axios";
import StateT from "../../../types/StateT";

// POST REQUESTS
function PostNewRequest(state: StateT): void {
  const products = [];
  for (let i = 0; i < state.bag.length; i++) {
    products.push({
      name: state.bag[i].name,
      category_id: state.bag[i].category_id,
      specs: state.bag[i].specs,
      values: state.bag[i].values,
      price: state.bag[i].price,
      extra_info: state.bag[i].extra_info,
      creation_date: state.bag[i].creation_date,
      creator_id: state.bag[i].creator_id,
    });
  }

  const params = {
    products: products,
    quantities: state.bagPage.qty_field_values,
    costs: state.bagPage.cost_field_values,
    info: state.bagPage.request_field_values,
  };

  Axios.post("/post_demand", params);
}

type POSTActionT = {
  PostNewRequest: (state: StateT) => void;
};

const POSTAction: POSTActionT = {
  PostNewRequest: PostNewRequest,
};

export default POSTAction;
