import ActionI from "../../interfaces/Action";
import ACTION from "./ACTION";

function removeFromBagAC(product_id: number): ActionI {
  return {
    type: ACTION.REMOVE_FROM_BAG,
    product_id: product_id,
  };
}

function updQtyFormAC(
  value: number,
  product_price: number,
  index: number
): ActionI {
  return {
    type: ACTION.UPD_QTY_FIELD,
    value: value,
    product_price: product_price,
    index: index,
  };
}

function updInfoFieldAC(value: string, index: number): ActionI {
  return {
    type: ACTION.UPD_INFO_FORM_FIELD,
    value: value,
    index: index,
  };
}

function sendRequestAC(): ActionI {
  return {
    type: ACTION.SEND_REQUEST,
  };
}

function getRequestAC(): ActionI {
  return {
    type: ACTION.GET_REQUEST,
  };
}

type BagACT = {
  removeFromBagAC: (product_id: number) => ActionI;
  updQtyFormAC: (
    value: number,
    product_price: number,
    index: number
  ) => ActionI;
  updInfoFieldAC: (value: string, index: number) => ActionI;
  sendRequestAC: () => ActionI;
  getRequestAC: () => ActionI;
};

const bagAC: BagACT = {
  removeFromBagAC: removeFromBagAC,
  updQtyFormAC: updQtyFormAC,
  updInfoFieldAC: updInfoFieldAC,
  sendRequestAC: sendRequestAC,
  getRequestAC: getRequestAC,
};

export default bagAC;
