import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../interfaces/Action";

import StateT from "../../../../types/StateT";
import Catalog from "./Catalog";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    isFetching: state.app.catalogPage.isFetching,
    isAuthentificated: state.app.isAuthentificated,
    categories: state.app.categories,
    products: state.app.products,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {};
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
