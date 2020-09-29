import React from "react";
import style from "./style.module.scss";

type Props = {
  search_placeholder: string;
  find(text: string): void;
};

const Search: React.FC<Props> = (props: Props) => {
  const search_ref: React.RefObject<HTMLInputElement> = React.createRef();
  return (
    <div className={style.search_wrapper}>
      <input
        className={style.search_input}
        ref={search_ref}
        type="search"
        name="q"
        placeholder="Поиск по сайту"
      />
    </div>
  );
};

export default Search;
