import { IShopItem } from "./item";

export const getItemlist = (): Promise<IShopItem[]> => {
  return new Promise<IShopItem[]>(resolve => {
    chrome.storage.local.get('items', res => {
      resolve(res['items']);
    })
  })
}

export const getLastSelectedId = (): Promise<string | null> => {
  return new Promise<string | null>(resolve => {
    chrome.storage.local.get('id', res => {
      resolve(res['id']);
    })
  })
}

export const setItemlist = (array: IShopItem[]): void => {
  chrome.storage.local.set({'items': array})
}

export const setLastSelectedId = (id: string | null): void => {
  chrome.storage.local.set({'id': id})
}
