import React from "react";
import Manage from "../Manage/Manage/Manage";
import ProfileContainer from "../Profile/ProfileContainer";
import History from "../History/History/History";

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
