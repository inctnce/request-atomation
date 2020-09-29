export type categoryForm = {
  value: string;
  placeholder: string;
};

export type productForm = {

  selector_value: string;
  selector_flag: string;

  name_placeholder: string;
  name_value: string;
  name_flag: string;

  spec_values: string[];
  spec_placeholders: string[];
  spec_keys: number[];
  spec_flag: string;

  val_values: string[];
  val_placeholders: string[];
  val_keys: number[];
  val_flag: string;

  price_field_value: string;
  price_field_placeholder: string;
  price_field_key: number;
  price_field_flag: string;

  extra_info_value: string;
  extra_info_placeholder: string;
  extra_info_key: number;
  extra_info_flag: string;

  button_keys: number[];
};

export type personalDataForm = {
  types: string[];
  values: string[];
  placeholders: string[];
};
