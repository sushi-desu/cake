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
    chrome.storage.local.get('lastSelectedId', res => {
      resolve(res['lastSelectedId']);
    })
  })
}

export const setItemlist = (array: IShopItem[]): void => {
  chrome.storage.local.set({'items': array})
}

export const setLastSelectedId = (id: string | null): void => {
  chrome.storage.local.set({'lastSelectedId': id})
}

export const getItem = (): Promise<IShopItem> => {
  return new Promise<IShopItem>(async resolve => {
    const id = await getLastSelectedId()
    const itemlist = await getItemlist()

    const index = itemlist.findIndex(item => item.id === id)
    if (index !== -1) {
      resolve(itemlist[index])
    } else {
      resolve({id: null, name: '', price: '', weight: '', rakuten_stock: '', makeshop_stock: '', jancode: '', descriptions: [], details: []})
    }
  })
}
