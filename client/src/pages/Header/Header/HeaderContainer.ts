import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../interfaces/Action";
import HeaderAC from "../../../store/actionCreators/headerAC";
import StateT from "../../../types/StateT";
import Header from "./Header";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    isAuthentificated: state.app.isAuthentificated,
    tab_titles: state.app.header.user_tabs,
    tab_links: state.app.header.user_links,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    logout: () => {
      dispatch(HeaderAC.logout());
    },
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
