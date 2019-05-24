
export interface IShopItem {
  id: string;
  name: string;
  price: string;
  weight: string;
  makeshop_stock: string;
  rakuten_stock: string;
  jancode: string;
  descriptions: { title: string, body: string }[];
  details: { title: string, body: string }[];
}

export const EMPTY_ITEM: IShopItem = {
  id: null,
  name: "",
  price: "",
  weight: "",
  makeshop_stock: "",
  rakuten_stock: "",
  jancode: "",
  descriptions: [],
  details: []
}
