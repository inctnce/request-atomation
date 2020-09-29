import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../interfaces/Action";
import bagAC from "../../../../store/actionCreators/bagACs";
import StateT from "../../../../types/StateT";

import BagProducts from "./BagProducts";

function mapStateToProps(
  state: CombinedState<{
    app: StateT;
  }>
) {
  return {
    qty_field_values: state.app.bagPage.qty_field_values,
    cost_field_values: state.app.bagPage.cost_field_values,
    products: state.app.bag,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    removeFromBag: (product_id: number) => {
      dispatch(bagAC.removeFromBagAC(product_id));
    },
    updQtyValue: (value: number, product_price: number, index: number) => {
      dispatch(bagAC.updQtyFormAC(value, product_price, index));
    },
  };
}

const BagProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BagProducts);

export default BagProductsContainer;
