import React from "react";
import Manage from "../Manage";
import ProfileContainer from "../Profile/container";
import History from "../History/History";

type Props = {
  category: string;
};

const Option: React.FC<Props> = (props: Props) => {
  switch (props.category) {
    case "Операции":
      return <Manage />;
    case "История":
      return <History />;
    case "Профиль":
      return <ProfileContainer />;
    default:
      break;
  }

  return <div></div>;
};

export default Option;
