import { connect } from "react-redux";
import { CombinedState } from "redux";

import StateT from "../../types/StateT";

import ActionI from "../../interfaces/Action";

import App from "./App";
import catalogAC from "../../store/actionCreators/catalogACs";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    getCategories: () => {
      dispatch(catalogAC.getCategories());
    },
    getProducts: () => {
      dispatch(catalogAC.getProducts());
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
