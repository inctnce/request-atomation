import { connect } from "react-redux";
import { CombinedState } from "redux";
import accountAC from "../../../../../store/actionCreators/accountACs";
import StateT from "../../../../../types/StateT";

import ActionI from "../../../../../interfaces/Action"

import Profile from "./Profile";

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    types: state.app.accountPage.personal_data_form.types,
    values: state.app.accountPage.personal_data_form.values,
    placeholders: state.app.accountPage.personal_data_form.placeholders,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    updTitle: (new_title: string, index: number) => {
      dispatch(accountAC.updPersonalDataTitleAC(new_title, index));
    },
  };
}

const PersonalDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default PersonalDataContainer;
