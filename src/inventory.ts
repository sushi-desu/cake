type description = {
  title: string;
  body: string;
}

type detail = {
  title: string;
  body: string;
}

export interface IShopItem {
  id: string;
  name: string;
  price: number;
  makeshop_stock: number;
  rakuten_stock: number;
  jancode: string;
  descriptions: description[];
  details: detail[];
}

export interface IForm {
  inputName: string;
  inputPrice: string;
  inputMstock: string;
  inputRstock: string;
  inputJancode: string;
  inputDescriptions: { title: string, body: string }[];
  inputDetails: { title: string, body: string }[];
}

export interface IOptionState {
  form: IForm;
  items: IShopItem[];
}
