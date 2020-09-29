import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "../../LoginForm/LoginFormContainer";
import SignUpFormContainer from "../../SignUpForm/SignUpFormContainer";

import AccountContainer from "../Account/Account/AccountContainer";
import BagContainer from "../Bag/Bag/BagContainer";
import CatalogContainer from "../Catalog/Catalog/CatalogContainer";

const Content: React.FC = () => {
  return (
    <div>
      <Route path="/login" render={() => <LoginFormContainer />} />
      <Route path="/registration" render={() => <SignUpFormContainer />} />
      <Route path="/account" render={() => <AccountContainer />} />
      <Route path="/catalog" render={() => <CatalogContainer />} />
      <Route path="/bag" render={() => <BagContainer />} />
    </div>
  );
};

export default Content;
