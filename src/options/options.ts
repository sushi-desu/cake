import { Inventory, Item } from '../inventory';

console.log('options');

interface IOptions {
  getLocalStorage: () => void;
  updateItem: (id: string) => (inventory: Inventory) => Inventory;
  addItem: (item: Item) => (inventory: Inventory) => Inventory;
  removeItem: (id: string) => (inventory: Inventory) => Inventory;
}

const options: IOptions = {
  getLocalStorage: () => {},

  updateItem: id => inventory => {
    return inventory;
  },

  addItem: item => inventory => {
    return inventory;
  },

  removeItem: id => inventory => {
    return inventory;
  }
}
