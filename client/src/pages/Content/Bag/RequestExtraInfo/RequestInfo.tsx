import React from "react";
import style from "./RequestInfo.module.scss";
import mainStyle from "../../../../index.module.scss";

type Props = {
  request_field_values: string[];
  updInfoField(value: string, index: number): void;
  sendRequest(): void;
};

const RequestInfo: React.FC<Props> = (props: Props) => {
  const text_field_style = mainStyle.text_field + " " + style.text_field;

  const refs: React.RefObject<HTMLInputElement>[] = [];
  for (let i = 0; i < 8; i++) {
    refs[i] = React.createRef();
  }

  return (
    <div>
      <h3 className={style.label}>Информация</h3>
      <div className={style.card}>
        <div className={style.label}>
          <label htmlFor="request_name">Название заявки</label>
        </div>
        <input
          id="request_name"
          className={text_field_style}
          type="text"
          value={props.request_field_values[0]}
          ref={refs[0]}
          onChange={() => props.updInfoField(refs[0].current!.value, 0)}
        />
        <div className={style.label}>
          <label htmlFor="max_cost">
            Суммарная максималная стоимость заказа
          </label>
        </div>
        <input
          id="max_cost"
          className={text_field_style}
          type="text"
          value={props.request_field_values[1]}
          ref={refs[1]}
          onChange={() => props.updInfoField(refs[1].current!.value, 1)}
        />
        <div className={style.label}>
          <label htmlFor="deadlines">Сроки</label>
        </div>
        <div className={style.detail_field}>
          (Поставки товара, места оказания услуг)
        </div>
        <input
          id="deadlines"
          className={text_field_style}
          type="text"
          value={props.request_field_values[2]}
          ref={refs[2]}
          onChange={() => props.updInfoField(refs[2].current!.value, 2)}
        />
        <div className={style.label}>
          <label htmlFor="address">Адрес</label>
        </div>
        <div className={style.detail_field}>
          (Доставки товара, места оказания услуг)
        </div>
        <input
          id="address"
          className={text_field_style}
          type="text"
          value={props.request_field_values[3]}
          ref={refs[3]}
          onChange={() => props.updInfoField(refs[3].current!.value, 3)}
        />
        <div className={style.label}>
          <label htmlFor="source">Источник финансирования</label>
        </div>
        <input
          id="source"
          className={text_field_style}
          type="text"
          value={props.request_field_values[4]}
          ref={refs[4]}
          onChange={() => props.updInfoField(refs[4].current!.value, 4)}
        />
        <div className={style.label}>
          <label htmlFor="visa">Виза заместителя начальника ПФУ</label>
        </div>
        <div className={style.detail_field}>
          (Соответствующее направление образовательной и научной деятельности)
        </div>
        <input
          id="visa"
          className={text_field_style}
          type="text"
          value={props.request_field_values[5]}
          ref={refs[5]}
          onChange={() => props.updInfoField(refs[5].current!.value, 5)}
        />
        <div className={style.label}>
          <label htmlFor="contacts">Контактное лицо по заявке</label>
        </div>
        <div className={style.detail_field}>
          (ФИО, полное наименование должности, контактный телефон, e-mail)
        </div>
        <input
          id="contacts"
          className={text_field_style}
          type="text"
          value={props.request_field_values[6]}
          ref={refs[6]}
          onChange={() => props.updInfoField(refs[6].current!.value, 6)}
        />
        <div className={style.label}>
          <label htmlFor="responsible">Материально ответственное лицо</label>
        </div>
        <div className={style.detail_field}>(В случае закупки товаров)</div>
        <div className={style.detail_field}>
          (ФИО, полное наименование должности, контактный телефон, e-mail)
        </div>
        <input
          id="responsible"
          className={text_field_style}
          type="text"
          value={props.request_field_values[7]}
          ref={refs[7]}
          onChange={() => props.updInfoField(refs[7].current!.value, 7)}
        />
        <button className={style.button} onClick={() => props.sendRequest()}>
          Отправить заявку
        </button>
      </div>
    </div>
  );
};

export default RequestInfo;
