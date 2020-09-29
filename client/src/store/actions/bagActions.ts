import StateT from "../../types/StateT";
import POSTAction from "./RequestActions/POSTActions";

function removeFromBag(state: StateT, product_id: number): void {
  for (let i = 0; i < state.bag.length; i++) {
    if (state.bag[i].id === product_id) {
      state.bag.splice(i, 1);
    }
  }
}

function updQtyField(
  state: StateT,
  value: number,
  product_price: number,
  index: number
): void {
  state.bagPage.qty_field_values[index] = value;
  state.bagPage.cost_field_values[index] = Number(value) * product_price;
}

function updRequestField(state: StateT, value: string, index: number): void {
  state.bagPage.request_field_values[index] = value;
}

function checkFields(request_fields: string[]): boolean {
  for (let field of request_fields) {
    if (field === "") {
      alert("Вы не заполнили все необходимые поля");
      return false;
    }
  }
  return true;
}

function sendRequest(state: StateT): void {
  if (checkFields(state.bagPage.request_field_values) === false) {
    return;
  }

  POSTAction.PostNewRequest(state);

  state.bag = [];
  state.bagPage.qty_field_values = [];
  state.bagPage.request_field_values = [];
  state.bagPage.cost_field_values = [];
  state.bagPage.didSendRequest = true;
}

type bagActionT = {
  removeFromBag: (state: StateT, product_id: number) => void;
  updQtyField: (
    state: StateT,
    value: number,
    product_price: number,
    index: number
  ) => void;
  updRequestField: (state: StateT, value: string, index: number) => void;
  sendRequest: (state: StateT) => void;
};

const bagAction: bagActionT = {
  removeFromBag: removeFromBag,
  updQtyField: updQtyField,
  updRequestField: updRequestField,
  sendRequest: sendRequest,
};

export default bagAction;
