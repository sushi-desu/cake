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
  weight: number;
  makeshop_stock: number;
  rakuten_stock: number;
  jancode: string;
  descriptions: description[];
  details: detail[];
}
