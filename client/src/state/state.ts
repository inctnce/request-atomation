import AuthLocalStorage from "../localStorage/AuthLocalStorage";
import BagLocalStorage from "../localStorage/BagLocalStorage";
import UserLocalStorage from "../localStorage/UserLocalStorage";

import StateT from "../types/StateT";

let initialState: StateT = {
  isAuthentificated: AuthLocalStorage.setAuth(),
  current_user: { ...UserLocalStorage.setUser() },

  didGetProducts: false,
  products: [],

  didGetCategories: false,
  categories: [],
  bag: [...BagLocalStorage.setBagProducts()],

  header: {
    user_tabs: ["Каталог", "Аккаунт", "Корзина"],
    user_links: ["Catalog", "Account", "Bag"],
    search_placeholder: "Введите что-нибудь",
  },

  accountPage: {
    current_category: "История",
    category_form: {
      value: "",
      placeholder: "Введите название",
    },

    product_form: {
      selector_value: "",
      selector_flag: "selector",

      name_value: "",
      name_placeholder: "Введите название",
      name_flag: "name",

      spec_keys: [0],
      spec_values: [""],
      spec_placeholders: ["Спецификация"],
      spec_flag: "spec",

      val_keys: [0],
      val_values: [""],
      val_placeholders: ["Значение"],
      val_flag: "value",

      price_field_key: -1,
      price_field_value: "",
      price_field_placeholder: "Введите цену",
      price_field_flag: "price",

      extra_info_key: -2,
      extra_info_value: "",
      extra_info_placeholder: "Дополнительная информация",
      extra_info_flag: "extra",

      button_keys: [0, 1],
    },

    personal_data_form: {
      types: ["text", "text", "email", "password", "password"],
      values: ["", "", "", "", ""],
      placeholders: [
        "Имя",
        "Фамилия",
        "example@email.com",
        "Пароль",
        "Повторите пароль",
      ],
    },
  },

  catalogPage: {
    current_category: {
      id: -1,
      name: "Все",
      creation_date: "",
      creator_id: 1,
    },

    isFetching: true,
  },

  bagPage: {
    qty_field_values: [...BagLocalStorage.setBagQuantities()],
    cost_field_values: [...BagLocalStorage.setBagCosts()],
    request_field_values: ["", "", "", "", "", "", "", ""],
    didSendRequest: false,
  },

  loginPage: {
    email_key: 1,
    email_value: "",
    email_placeholder: "почта",

    password_key: 2,
    password_value: "",
    password_placeholder: "пароль",
  },

  signUpPage: {
    input_field_values: ["", "", "", "", ""],
    input_field_placeholders: [
      "Имя",
      "Фамилия",
      "Почта",
      "Пароль",
      "Повторите пароль",
    ],
    checkbox_values: [false, false],
  },
};

export default initialState;
