import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../interfaces/Action";
import bagAC from "../../../../store/actionCreators/bagACs";
import StateT from "../../../../types/StateT";

import Bag from "./Bag";

function mapStateToProps(
  state: CombinedState<{
    app: StateT;
  }>
) {
  return {
    isAuthentificated: state.app.isAuthentificated,
    didSendRequest: state.app.bagPage.didSendRequest,
    qty_field_values: state.app.bagPage.qty_field_values,
    products: state.app.bag,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    getRequestFile: () => {
      dispatch(bagAC.getRequestAC());
    },
  };
}

const BagProductCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bag);

export default BagProductCardContainer;
