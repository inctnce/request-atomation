import AccountPage from "./AccountPage/accountPage";
import CategoryT from "./MainTypes/CategoryT";
import ProductT from "./MainTypes/ProductT";
import UserT from "./MainTypes/UserT";

export type HeaderT = {
  user_tabs: string[];
  user_links: string[];

  search_placeholder: string;
};

export type CatalogPage = {
  current_category: CategoryT;

  isFetching: boolean;
};

export type BagPage = {
  qty_field_values: number[];
  cost_field_values: number[];

  request_field_values: string[];

  didSendRequest: boolean;
};

export type LoginPage = {
  email_key: number;
  email_value: string;
  email_placeholder: string;

  password_key: number;
  password_value: string;
  password_placeholder: string;
};

export type SignUpPage = {
  input_field_values: string[];
  input_field_placeholders: string[];

  checkbox_values: boolean[];
};

export type StateT = {
  isAuthentificated: boolean;
  current_user: UserT;

  didGetProducts: boolean;
  products: ProductT[];

  didGetCategories: boolean;
  categories: CategoryT[];

  bag: ProductT[];

  header: HeaderT;

  accountPage: AccountPage;
  catalogPage: CatalogPage;
  bagPage: BagPage;

  loginPage: LoginPage;
  signUpPage: SignUpPage;
};

export default StateT;
