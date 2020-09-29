import { connect } from "react-redux";
import { CombinedState } from "redux";
import StateT from "../../../../../../../types/StateT";
import ActionI from "../../../../../../../interfaces/Action";
import ManageHistory from ".";
import accountAC from "../../../../../../../store/actionCreators/accountACs";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {};
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    delCategory: (category_id: number) => {
      dispatch(accountAC.delCategoryAC(category_id));
    },
    delProduct: (product_id: number) => {
      dispatch(accountAC.delProductAC(product_id));
    },
  };
}

const ManageHistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageHistory);

export default ManageHistoryContainer;
