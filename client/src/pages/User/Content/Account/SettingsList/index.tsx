import React from "react";

import style from "./style.module.scss";

type Props = {
  canEdit: boolean;
  setCategory(category: string): void;
};

type ListItem = {
  title: string;
  id: number;
};

const SettingsList: React.FC<Props> = (props: Props) => {
  let list_items: ListItem[] = [];

  // props.canEdit
  //   ? (list_items = [
  //       { title: "Операции", id: 1 },
  //       { title: "История", id: 2 },
  //       { title: "Профиль", id: 3 },
  //     ])
  //   : (list_items = [
  //       { title: "Операции", id: 1 },
  //       { title: "История", id: 2 },
  //     ]);

  if (props.canEdit) {
    list_items = [
      { title: "Операции", id: 1 },
      { title: "История", id: 2 },
      { title: "Профиль", id: 3 },
    ];
  } else {
    list_items = [
      { title: "Операции", id: 1 },
      { title: "История", id: 2 },
    ];
  }

  const list_elements: JSX.Element[] = list_items.map((value: ListItem) => (
    <div className={style.list_item} key={value.id}>
      <button
        className={style.button}
        onClick={() => props.setCategory(value.title)}
      >
        <span>{value.title}</span>
      </button>
    </div>
  ));

  return <div className={style.list}>{list_elements}</div>;
};

export default SettingsList;
