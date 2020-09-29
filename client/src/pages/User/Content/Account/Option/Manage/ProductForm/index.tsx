import React, { useEffect } from "react";
import { productForm } from "../../../../../../../types/AccountPage/forms";
import CategoryT from "../../../../../../../types/MainTypes/CategoryT";

import style from "./style.module.scss";

type Props = {
  creator_id: number;
  productForm: productForm;
  categories: CategoryT[];

  addProduct(
    category_id: number,
    name: string,
    specs: string[],
    values: string[],
    price: string,
    extra_info: string,
    creator_id: number
  ): void;
  updProductFormValue(value: string, flag: string, index?: number): void;
  updNumOfFields(button_id: number): void;
};

type InputField = {
  id: number;
  type: string;
  placeholder: string;
  value: string;
  ref: React.RefObject<any>;
};

type RowT = {
  key: number;
  spec: InputField;
  value: InputField;
};

const ProductFrom: React.FC<Props> = (props: Props) => {
  const category_refs: React.RefObject<HTMLInputElement>[] = [];
  const value_refs: React.RefObject<HTMLInputElement>[] = [];
  let price_ref: React.RefObject<HTMLInputElement>;
  let extra_info_ref: React.RefObject<HTMLTextAreaElement>;

  const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();

  function findCategoryByName(
    categories: CategoryT[],
    name: string
  ): CategoryT {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === name) {
        return categories[i];
      }
    }
    return { id: -100, name: "", creation_date: "", creator_id: -1000 };
  }

  function createCategoryComponent(props: Props): JSX.Element {
    const spec_fields: InputField[] = [];
    for (let i = 0; i < props.productForm.spec_keys.length; i++) {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      spec_fields.push({
        id: props.productForm.spec_keys[i],
        type: "text",
        value: props.productForm.spec_values[i],
        placeholder: props.productForm.spec_placeholders[i],
        ref: ref,
      });
      category_refs.push(ref);
    }
    const value_fields: InputField[] = [];
    for (let i = 0; i < props.productForm.val_keys.length; i++) {
      const ref: React.RefObject<HTMLInputElement> = React.createRef();
      value_fields.push({
        id: i,
        type: "text",
        value: props.productForm.val_values[i],
        placeholder: props.productForm.val_placeholders[i],
        ref: ref,
      });
      value_refs.push(ref);
    }

    const category_fields: RowT[] = [];
    for (let i = 0; i < spec_fields.length; i++) {
      category_fields.push({
        key: i,
        spec: spec_fields[i],
        value: value_fields[i],
      });
    }

    const category_fields_component: JSX.Element[] = category_fields.map(
      (row: RowT) => (
        <tr key={row.key}>
          <td>
            <input
              className={style.spec_field}
              type={row.spec.type}
              key={row.spec.id}
              value={row.spec.value}
              placeholder={row.spec.placeholder}
              ref={row.spec.ref}
              onChange={() =>
                props.updProductFormValue(
                  row.spec.ref.current!.value,
                  props.productForm.spec_flag,
                  row.spec.id
                )
              }
            />
          </td>
          <td>
            <input
              className={style.value_field}
              type="text"
              key={row.value.id}
              value={row.value.value}
              placeholder={row.value.placeholder}
              ref={row.value.ref}
              onChange={() =>
                props.updProductFormValue(
                  row.value.ref.current!.value,
                  props.productForm.val_flag,
                  row.value.id
                )
              }
            />
          </td>
        </tr>
      )
    );

    return <>{category_fields_component}</>;
  }

  function createPriceComponent(props: Props): JSX.Element {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    const price_field: InputField = {
      id: props.productForm.price_field_key,
      type: "text",
      value: props.productForm.price_field_value,
      placeholder: props.productForm.price_field_placeholder,
      ref: ref,
    };
    price_ref = ref;

    const price_field_element: JSX.Element = (
      <tr>
        <td colSpan={2}>
          <input
            className={style.field}
            type="text"
            key={price_field.id}
            value={price_field.value}
            placeholder={price_field.placeholder}
            ref={price_field.ref}
            onChange={() =>
              props.updProductFormValue(
                price_field.ref.current!.value,
                props.productForm.price_field_flag
              )
            }
          />
        </td>
      </tr>
    );

    return price_field_element;
  }

  function createExtraInfoComponent(props: Props): JSX.Element {
    const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();
    const extra_info_field: InputField = {
      id: props.productForm.extra_info_key,
      type: "text",
      value: props.productForm.extra_info_value,
      placeholder: props.productForm.extra_info_placeholder,
      ref: ref,
    };
    extra_info_ref = ref;

    const extra_info_component: JSX.Element = (
      <tr>
        <td colSpan={2}>
          <textarea
            className={style.extra_info}
            key={extra_info_field.id}
            value={extra_info_field.value}
            placeholder={extra_info_field.placeholder}
            ref={extra_info_field.ref}
            onChange={() =>
              props.updProductFormValue(
                extra_info_field.ref.current!.value,
                props.productForm.extra_info_flag
              )
            }
          />
        </td>
      </tr>
    );

    return extra_info_component;
  }

  const categories_component: JSX.Element = createCategoryComponent(props);
  const price_field_component: JSX.Element = createPriceComponent(props);
  const extra_info_component: JSX.Element = createExtraInfoComponent(props);

  const category_options = props.categories.map((category) => (
    <option>{category.name}</option>
  ));

  return (
    <div>
      <h2 className={style.title}>Товары</h2>
      <table className={style.card}>
        <tbody>
          <tr>
            <td colSpan={2}>
              <select
                ref={selectRef}
                onChange={() =>
                  props.updProductFormValue(
                    selectRef.current!.value,
                    props.productForm.selector_flag
                  )
                }
                className={style.selector}
              >
                {category_options}
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input
                className={style.field}
                type="text"
                value={props.productForm.name_value}
                placeholder={props.productForm.name_placeholder}
                ref={nameRef}
                onChange={() =>
                  props.updProductFormValue(
                    nameRef.current!.value,
                    props.productForm.name_flag
                  )
                }
              />
            </td>
          </tr>
          <tr>
            <td className={style.specifications_title}>Характеристики</td>
          </tr>
          {categories_component}
          <tr>
            <td>
              <button
                className={style.plus_button}
                onClick={() =>
                  props.updNumOfFields(props.productForm.button_keys[0])
                }
              ></button>
              <button
                className={style.minus_button}
                onClick={() =>
                  props.updNumOfFields(props.productForm.button_keys[1])
                }
              ></button>
            </td>
          </tr>
          {extra_info_component}
          {price_field_component}
          <tr>
            <td>
              <button
                className={style.button}
                onClick={() =>
                  props.addProduct(
                    findCategoryByName(
                      props.categories,
                      selectRef.current!.value
                    ).id,
                    nameRef.current!.value,
                    category_refs.map((value) => value.current!.value),
                    value_refs.map((value) => value.current!.value),
                    price_ref.current!.value,
                    extra_info_ref.current!.value,
                    props.creator_id
                  )
                }
              >
                Добавить товар
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductFrom;
