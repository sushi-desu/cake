import { IOptionState, IShopItem } from "../inventory";

interface IOptionUpdate {
  add: (item: IShopItem) => (state: IOptionState) => IOptionState;
  delete: (id: string) => (state: IOptionState) => IOptionState;
  edit: (id: string, item: IShopItem) => (state: IOptionState) => IOptionState;
}

export const update: IOptionUpdate = {
  add: item => state => {
    return state;
  },

  delete: id => state => {
    return state;
  },

  edit: (id, item) => state => {
    return state;
  }
}
