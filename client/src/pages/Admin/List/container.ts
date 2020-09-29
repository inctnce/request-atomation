import { connect } from "react-redux";
import { CombinedState } from "redux";
import List from ".";
import ActionI from "../../../interfaces/Action";
import StateT from "../../../types/StateT";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    items: ["Пользователи", "Категории", "Товары"],
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {};
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
