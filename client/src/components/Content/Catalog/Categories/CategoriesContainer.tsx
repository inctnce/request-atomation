import { connect } from "react-redux";
import { CombinedState } from "redux";
import catalogAC from "../../../../store/actionCreators/catalogACs";
import CategoryT from "../../../../types/MainTypes/CategoryT";
import StateT from "../../../../types/StateT";

import ActionI from "../../../../interfaces/Action"

import Categories from "./Categories";


function mapStateToProps(
    state: CombinedState<{
      app: StateT;
    }>
  ) {
    return {
      categories: state.app.categories,
    };
  }
  
  function mapDispatchToProps(dispatch: (action: ActionI) => void) {
    return {
      setCategory: (category: CategoryT) => {
        dispatch(catalogAC.setCategory(category));
      },
    };
  }
  
  const CategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Categories);

  export default CategoriesContainer;