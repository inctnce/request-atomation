import { connect } from "react-redux";
import { CombinedState } from "redux";
import ActionI from "../../../../../../interfaces/Action";
import accountAC from "../../../../../../store/actionCreators/accountACs";
import ProductT from "../../../../../../types/MainTypes/ProductT";
import StateT from "../../../../../../types/StateT";

import ProductForm from "./ProductForm";

function prepareProductToAdd(
  category_id: number,
  name: string,
  specs: string[],
  values: string[],
  price: string,
  extra_info: string,
  creator_id: number
): ProductT {
  const failedProduct: ProductT = {
    id: -10000,
    name: "",
    category_id: -1000,
    specs: [],
    values: [],
    price: -1000,
    extra_info: "",
    creation_date: "",
    creator_id: -1000,
  };

  if (name === "") {
    alert("Вы неввели имя товара");
    return failedProduct;
  }

  for (let i = 0; i < specs.length; i++) {
    if (specs[i] === "") {
      alert(`Вы не ввели имя характеристики в строке ${i}`);
      return failedProduct;
    }
  }
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "") {
      alert(`Вы не ввели значение характеристики в строке ${i}`);
      return failedProduct;
    }
  }
  if (price === "") {
    alert("Вы не ввели цену");
    return failedProduct;
  }
  if (isNaN(Number(price))) {
    alert("Цена не является цифрой");
    return failedProduct;
  }

  return {
    id: -1000,
    name: name,
    category_id: category_id,
    specs: specs,
    values: values,
    price: Number(price),
    extra_info: extra_info,
    creation_date: "",
    creator_id: creator_id,
  };
}

function mapStateToProps(state: CombinedState<{ app: StateT }>) {
  return {
    creator_id: state.app.current_user.id,
    productForm: state.app.accountPage.product_form,
    categories: state.app.categories,
  };
}

function mapDispatchToProps(dispatch: (action: ActionI) => void) {
  return {
    addProduct: (
      category_id: number,
      name: string,
      specs: string[],
      values: string[],
      price: string,
      extra_info: string,
      creator_id: number
    ) => {
      const product: ProductT = prepareProductToAdd(
        category_id,
        name,
        specs,
        values,
        price,
        extra_info,
        creator_id
      );

      if (product.id !== -10000) {
        console.log(product);

        dispatch(accountAC.postProduct({ ...product }));
      }
    },
    updProductFormValue: (value: string, flag: string, index?: number) => {
      dispatch(accountAC.updProductFormTitleAC(value, flag, index));
    },
    updNumOfFields: (button_id: number) => {
      dispatch(accountAC.updNumOfFieldsAC(button_id));
    },
  };
}

const ProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);

export default ProductFormContainer;
