import { connect } from "react-redux";
import { CombinedState } from "redux";
import Admin from ".";
import ActionI from "../../interfaces/Action";

import StateT from "../../types/StateT";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {};
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {};
}

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
