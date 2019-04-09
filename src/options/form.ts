import { IShopItem } from "../item";

interface IFormData {
  name: string;
  price: string;
  weight: string;
  makeshop_stock: string;
  rakuten_stock: string;
  jancode: string;
  descriptions: {title: string, body: string}[];
  details: {title: string, body: string}[];
}

export const form_to_item: (form: IFormData) => IShopItem | false = form => {
  if (!isCorrect(form)) { return false }

  return {
    id: uniqueID(),
    name: form.name,
    price: convert(form.price),
    weight: convert(form.weight),
    makeshop_stock: convert(form.makeshop_stock),
    rakuten_stock: convert(form.rakuten_stock),
    jancode: form.jancode,
    descriptions: form.descriptions,
    details: form.details
  }
}

const uniqueID: () => string = () =>
  Math.random()
    .toString(34)
    .slice(2);

const isCorrect: (form: IFormData) => boolean = form => {
  if (!isNum(form.price)) { return false }
  if (!isNum(form.weight)) { return false }
  if (!isNum(form.rakuten_stock)) { return false }
  if (!isNum(form.makeshop_stock)) { return false }

  return true;
}

const isNum: (str: string) => boolean = str => {
  const res = parseInt(str, 10);
  if (isNaN(res)) {
    return false;
  } else {
    return true;
  }
}

const convert: (str: string) => number = str => {
  const res = parseInt(str, 10);
  if (isNaN(res)) {
    return 0;
  } else {
    return res;
  }
}
