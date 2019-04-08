type description = {
  title: string;
  body: string;
}

type detail = {
  title: string;
  body: string;
}

export interface Item {
  name: string;
  price: number;
  makeshop_stock: number;
  rakuten_stock: number;
  jancode: string;
  descriptions: description[];
  details: detail[];
}

export type Inventory = {id: string, item: Item}[]
