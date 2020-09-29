import React from "react";
import style from "./Profile.module.scss";

type Props = {
  types: string[];
  values: string[];
  placeholders: string[];
  updTitle(title: string, index: number): void;
};

type InputField = {
  id: number;
  type: string;
  placeholder: string;
  value: string;
  ref: React.RefObject<HTMLInputElement>;
};

const Profile: React.FC<Props> = (props: Props) => {
  let fields: InputField[] = [];

  for (let i = 0; i < props.placeholders.length; i++) {
    let ref: React.RefObject<HTMLInputElement> = React.createRef();
    fields.push({
      id: i,
      type: props.types[i],
      placeholder: props.placeholders[i],
      value: props.values[i],
      ref: ref,
    });
  }

  let field_components = fields.map((value: InputField) => (
    <input
      className={style.input_field}
      key={value.id}
      type={value.type}
      placeholder={value.placeholder}
      value={value.value}
      ref={value.ref}
      onChange={() =>
        props.updTitle(fields[value.id].ref.current!.value, value.id)
      }
    />
  ));

  return (
    <div>
      <div className={style.card}>
        {field_components}
        <button className={style.button}>Обновить</button>
      </div>
    </div>
  );
};

export default Profile;
