import { connect } from "react-redux";
import { CombinedState } from "redux";
import accountAC from "../../../../../store/actionCreators/accountACs";
import StateT from "../../../../../types/StateT";

import ActionI from "../../../../../interfaces/Action";

import Account from ".";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    isAuthentificated: state.app.isAuthentificated,
    user: state.app.current_user,
    categories: state.app.categories,
    products: state.app.products,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    setCategory: (title: string) => {
      dispatch(accountAC.setCategoryAC(title));
    },
  };
}

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;
