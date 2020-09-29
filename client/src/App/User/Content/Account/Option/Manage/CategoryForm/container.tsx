import { connect } from "react-redux";
import { CombinedState } from "redux";
import accountAC from "../../../../../../../store/actionCreators/accountACs";
import StateT from "../../../../../../../types/StateT";
import CategoryForm from ".";

import ActionI from "../../../../../../../interfaces/Action";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    creator_id: state.app.current_user.id,
    category_field: state.app.accountPage.category_form,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    addCategory: (name: string, creator_id: number) => {
      dispatch(accountAC.postCategory(name, creator_id));
    },
    updCategoryTitle: (newCategory: string) => {
      dispatch(accountAC.updCategoryFormTitle(newCategory));
    },
  };
}

const CategoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryForm);

export default CategoryFormContainer;
