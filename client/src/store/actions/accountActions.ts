import StateT from "../../types/StateT";

// ACCOUNT
function setAccountCategory(state: StateT, category: string): void {
  state.accountPage.current_category = category;
}

// CATEGORY FORM
function updCategoryFormValue(state: StateT, value: string): void {
  state.accountPage.category_form.value = value;
}

// PRODUCT FORM
function updProductFormValue(
  state: StateT,
  val: string,
  flag: string,
  i?: number
): void {
  switch (flag) {
    case "selector":
      state.accountPage.product_form.selector_value = val;
      break;
    case "name":
      state.accountPage.product_form.name_value = val;
      break;
    case "spec":
      state.accountPage.product_form.spec_values[i!] = val;
      break;
    case "value":
      state.accountPage.product_form.val_values[i!] = val;
      break;
    case "price":
      state.accountPage.product_form.price_field_value = val;
      break;
    case "extra":
      state.accountPage.product_form.extra_info_value = val;
      break;
    default:
      alert("Something strange happened");
      break;
  }
}

function updNumOfTextFields(state: StateT, index: number): void {
  if (index === state.accountPage.product_form.button_keys[0]) {
    state.accountPage.product_form.spec_values.push("");
    state.accountPage.product_form.spec_placeholders.push("Спецификация");
    state.accountPage.product_form.spec_keys.push(
      state.accountPage.product_form.spec_keys.length
    );
    state.accountPage.product_form.val_values.push("");
    state.accountPage.product_form.val_placeholders.push("Значение");
    state.accountPage.product_form.val_keys.push(
      state.accountPage.product_form.val_keys.length
    );
  } else {
    if (state.accountPage.product_form.val_keys.length > 1) {
      state.accountPage.product_form.spec_values.pop();
      state.accountPage.product_form.spec_placeholders.pop();
      state.accountPage.product_form.spec_keys.pop();

      state.accountPage.product_form.val_keys.pop();
      state.accountPage.product_form.val_placeholders.pop();
      state.accountPage.product_form.val_values.pop();
    }
  }
}

function updProfileFormTitle(
  state: StateT,
  title: string,
  index: number
): void {
  state.accountPage.personal_data_form.values[index] = title;
}

type accountActionT = {
  setAccountCategory: (state: StateT, category: string) => void;
  updCategoryFormValue: (state: StateT, value: string) => void;
  updProductFormValue: (
    state: StateT,
    val: string,
    flag: string,
    index?: number
  ) => void;
  updNumOfTextFields: (state: StateT, index: number) => void;
  updProfileFormTitle: (state: StateT, title: string, index: number) => void;
};

const accountAction: accountActionT = {
  setAccountCategory: setAccountCategory,
  updCategoryFormValue: updCategoryFormValue,
  updProductFormValue: updProductFormValue,
  updNumOfTextFields: updNumOfTextFields,
  updProfileFormTitle: updProfileFormTitle,
};

export default accountAction;
