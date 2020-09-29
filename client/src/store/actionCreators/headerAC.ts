import ActionI from "../../interfaces/Action";
import ACTION from "./ACTION";

function logout(): ActionI {
  return {
    type: ACTION.LOGOUT,
  };
}

type HeaderACT = {
  logout(): ActionI;
};

const HeaderAC: HeaderACT = {
  logout: logout,
};

export default HeaderAC;
