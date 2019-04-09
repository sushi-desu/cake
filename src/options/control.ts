import { IShopItem } from "../item";
import { form_to_item } from "./form";

const name_input = <HTMLInputElement>document.getElementById('name');
const price_input = <HTMLInputElement>document.getElementById('price');
const weight_input = <HTMLInputElement>document.getElementById('weight');
const stock_r_input = <HTMLInputElement>document.getElementById('rakuten_stock');
const stock_m_input = <HTMLInputElement>document.getElementById('makeshop_stock');
const jancode_input = <HTMLInputElement>document.getElementById('jancode');

const descriptions = () => document.getElementById('descriptsions').querySelectorAll('div');
const details = () => document.getElementById('details').querySelectorAll('div');

// save input
document.getElementById('save').addEventListener('click', () => {
  
})

// registor new item
document.getElementById('new').addEventListener('click', () => {
  return;
})

// delete this item
document.getElementById('delete').addEventListener('click', () => {
  return;
})
