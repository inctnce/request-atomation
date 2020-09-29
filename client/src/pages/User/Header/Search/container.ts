import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../interfaces/Action";
import StateT from "../../../../types/StateT";
import Search from ".";

function mapStateToProps(
  state: CombinedState<{
    app: StateT;
  }>
) {
  return {
    search_placeholder: state.app.header.search_placeholder,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    find: (text: string) => {},
  };
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
