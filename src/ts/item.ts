
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
