import { categoryForm, personalDataForm, productForm } from "./forms";

type AccountPage = {
  current_category: string;

  category_form: categoryForm;
  product_form: productForm;
  personal_data_form: personalDataForm;
};

export default AccountPage;
