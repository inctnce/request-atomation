import initialState from "../state/state";
import StateT from "../types/StateT";

import ActionI from "../interfaces/Action";

import ACTION from "./actionCreators/ACTION";
import accountAction from "./actions/accountActions";
import bagAction from "./actions/bagActions";
import catalogAction from "./actions/catalogActions";
import GETAction from "./actions/RequestActions/GETRequestActions";
import loginFormAction from "./actions/loginFormActions";
import HeaderAction from "./actions/headerActions";

import signUpAction from "./actions/signUpActions";
import UserLocalStorage from "../localStorage/UserLocalStorage";
import AuthLocalStorage from "../localStorage/AuthLocalStorage";

function reducer(state: StateT = initialState, action: ActionI): StateT {
  let newState: StateT = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    // HEADER
    case ACTION.LOGOUT:
      HeaderAction.logout(newState);
      break;

    // ACCOUNT
    case ACTION.SET_ACCOUNT_CATEGORY:
      accountAction.setAccountCategory(newState, action.category);
      break;

    case ACTION.UPD_CATEGORY_FIELD_TITLE:
      accountAction.updCategoryFormValue(newState, action.title);
      break;

    case ACTION.UPD_PRODUCT_FIELD_TITLE:
      accountAction.updProductFormValue(
        newState,
        action.value,
        action.flag,
        action.index
      );
      break;

    case ACTION.UPD_NUM_OF_TEXT_FIELDS:
      accountAction.updNumOfTextFields(newState, action.index);
      break;

    case ACTION.UPD_PERSONAL_DATA_FORM_TITLE:
      accountAction.updProfileFormTitle(newState, action.title, action.index);
      break;

    // CATALOG
    case ACTION.SET_CATALOG_CATEGORY:
      catalogAction.setCategory(newState, action.category);
      break;

    case ACTION.ADD_TO_BAG:
      catalogAction.addProductToBag(newState, action.product);
      break;

    case ACTION.SET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
        didGetCategories: true,
      };

    case ACTION.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        didGetProducts: true,
      };

    case ACTION.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, { ...action.payload }],
      };

    case ACTION.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...action.payload }],
      };

    case ACTION.REMOVE_CATEGORY:
      for (let i = 0; i < state.categories.length; i++) {
        if (state.categories[i].id === action.payload) {
          state.categories.splice(i, 1);
        }
      }
      return {
        ...state,
        categories: [...state.categories],
      };

    case ACTION.REMOVE_PRODUCT:
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products.splice(i, 1);
        }
      }
      return {
        ...state,
        products: [...state.products],
      };

    // BAG
    case ACTION.REMOVE_FROM_BAG:
      bagAction.removeFromBag(newState, action.product_id);
      break;

    case ACTION.UPD_QTY_FIELD:
      bagAction.updQtyField(
        newState,
        action.value,
        action.product_price,
        action.index
      );
      break;

    case ACTION.SEND_REQUEST:
      bagAction.sendRequest(newState);
      break;

    case ACTION.UPD_INFO_FORM_FIELD:
      bagAction.updRequestField(newState, action.value, action.index);
      break;

    // REQUESTS
    case ACTION.GET_REQUEST:
      GETAction.getRequest(newState);
      break;

    case ACTION.GET_CATEGORIES_AND_PRODUCTS:
      GETAction.getCategoriesAndProducts(newState);
      break;

    // LOGIN
    case ACTION.SET_AUTHENTIFICATION:
      loginFormAction.setAuthentification(newState, action.value);
      break;

    case ACTION.UPD_LOGIN_FORM_VALUE:
      loginFormAction.updLoginForm(newState, action.value, action.index);
      break;

    // SIGN UP
    case ACTION.POST_USER:
      signUpAction.signUp(newState);
      break;

    case ACTION.UPD_SIGN_UP_FORM_VALUE:
      signUpAction.updSignUpValue(newState, action.value, action.index);
      break;

    case ACTION.UPD_SIGN_UP_CHECK_BOX_VALUE:
      signUpAction.updCheckBoxValue(newState, action.index);
      break;

    case ACTION.GET_USER:
      UserLocalStorage.saveUser({ ...action.payload });
      AuthLocalStorage.saveAuth(true);
      state.loginPage.email_value = "";
      state.loginPage.password_value = "";
      return {
        ...state,
        current_user: { ...action.payload },
        isAuthentificated: true,
      };

    default:
      return state;
  }
  return newState;
}

export default reducer;
