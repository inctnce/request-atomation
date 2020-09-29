import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../../../../../interfaces/Action";
import accountAC from "../../../../../../../../store/actionCreators/accountACs";
import CategoryT from "../../../../../../../../types/MainTypes/CategoryT";

import StateT from "../../../../../../../../types/StateT";
import CategoryHistory from ".";

function filterCategoriesByCreator(categories: CategoryT[], user_id: number) {
  const filtered_categories: CategoryT[] = [];
  for (let category of categories) {
    if (category.creator_id === user_id) {
      filtered_categories.push({ ...category });
    }
  }
  return filtered_categories;
}

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    categories: filterCategoriesByCreator(
      state.app.categories,
      state.app.current_user.id
    ),
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    delCategory: (category_id: number) => {
      dispatch(accountAC.delCategoryAC(category_id));
    },
  };
}

const CategoryHistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHistory);

export default CategoryHistoryContainer;
