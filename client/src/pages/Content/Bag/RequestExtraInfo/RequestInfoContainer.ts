import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../interfaces/Action";
import bagAC from "../../../../store/actionCreators/bagACs";
import StateT from "../../../../types/StateT";

import RequestInfo from "./RequestInfo";

function mapStateToProps(
  state: CombinedState<{
    app: StateT;
  }>
) {
  return {
    request_field_values: state.app.bagPage.request_field_values,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    updInfoField: (value: string, index: number) => {
      dispatch(bagAC.updInfoFieldAC(value, index));
    },
    sendRequest: () => {
      dispatch(bagAC.sendRequestAC());
    },
  };
}

const RequestInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestInfo);

export default RequestInfoContainer;
