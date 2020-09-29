import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "../Login/container";
import SignUpFormContainer from "../SignUp/container";

import AccountContainer from "./Account/Account/container";
import BagContainer from "./Bag/Bag/container";
import CatalogContainer from "./Catalog/container";

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
