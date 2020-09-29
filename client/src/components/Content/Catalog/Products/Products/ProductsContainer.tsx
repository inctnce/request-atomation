import { connect } from "react-redux";
import { CombinedState } from "redux";
import catalogAC from "../../../../../store/actionCreators/catalogACs";
import ProductT from "../../../../../types/MainTypes/ProductT";
import StateT from "../../../../../types/StateT";

import ActionI from "../../../../../interfaces/Action";

import Products from "./Products";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    category: state.app.catalogPage.current_category,
    products: state.app.products,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    addProductToBag: (product: ProductT) => {
      dispatch(catalogAC.addProductToBag(product));
    },
  };
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
