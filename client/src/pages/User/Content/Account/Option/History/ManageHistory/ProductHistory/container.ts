import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../../../../../interfaces/Action";
import accountAC from "../../../../../../../../store/actionCreators/accountACs";
import ProductT from "../../../../../../../../types/MainTypes/ProductT";
import StateT from "../../../../../../../../types/StateT";
import ProductHistory from ".";

function filterProductsByCreator(products: ProductT[], user_id: number) {
  const filtered_products: ProductT[] = [];
  for (let product of products) {
    if (product.creator_id === user_id) {
      filtered_products.push({ ...product });
    }
  }
  return filtered_products;
}

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    products: filterProductsByCreator(
      state.app.products,
      state.app.current_user.id
    ),
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    delProduct: (product_id: number) => {
      dispatch(accountAC.delProductAC(product_id));
    },
  };
}

const ProductHistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductHistory);

export default ProductHistoryContainer;
