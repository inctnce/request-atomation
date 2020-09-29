import ProductT from "../../types/MainTypes/ProductT";
import ActionI from "../../interfaces/Action";
import ACTION from "./ACTION";
import UserT from "../../types/MainTypes/UserT";

function setUser(user: UserT): ActionI {
  return {
    type: ACTION.SET_USER,
    payload: user,
  };
}

function setCategoryAC(category: string): ActionI {
  return {
    type: ACTION.SET_ACCOUNT_CATEGORY,
    category: category,
  };
}
// CATEGORY FORM
function postCategoryAC(name: string, creator_id: number): ActionI {
  return {
    type: ACTION.POST_CATEGORY,
    payload: { name: name, creator_id: creator_id },
  };
}

function updCategoryFormTitleAC(title: string): ActionI {
  return {
    type: ACTION.UPD_CATEGORY_FIELD_TITLE,
    title: title,
  };
}
// PRODUCT FORM
function postProduct(product: ProductT): ActionI {
  return {
    type: ACTION.POST_PRODUCT,
    payload: product,
  };
}

function updProductFormTitleAC(
  value: string,
  flag: string,
  index?: number
): ActionI {
  return {
    type: ACTION.UPD_PRODUCT_FIELD_TITLE,
    value: value,
    flag: flag,
    index: index,
  };
}

function updNumOfFieldsAC(index: number): ActionI {
  return {
    type: ACTION.UPD_NUM_OF_TEXT_FIELDS,
    index: index,
  };
}

// PERSONAL DATA
function updPersonalDataTitleAC(title: string, index: number): ActionI {
  return {
    type: ACTION.UPD_PERSONAL_DATA_FORM_TITLE,
    title: title,
    index: index,
  };
}

// HISTORY
function delCategory(category_id: number): ActionI {
  return {
    type: ACTION.DELETE_CATEGORY,
    payload: category_id,
  };
}

function delProductAC(product_id: number): ActionI {
  return {
    type: ACTION.DELETE_PRODUCT,
    payload: product_id,
  };
}

const accountAC = {
  setUser: setUser,
  setCategoryAC: setCategoryAC,
  postCategory: postCategoryAC,
  updCategoryFormTitle: updCategoryFormTitleAC,
  postProduct: postProduct,
  updProductFormTitleAC: updProductFormTitleAC,
  updNumOfFieldsAC: updNumOfFieldsAC,
  updPersonalDataTitleAC: updPersonalDataTitleAC,
  delCategoryAC: delCategory,
  delProductAC: delProductAC,
};

export default accountAC;
