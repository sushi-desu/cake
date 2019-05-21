import { IShopItem } from "./item";

export const getItemlist = (): Promise<{ [id: string]: IShopItem }> => {
  return new Promise<{ [id: string]: IShopItem }>(resolve => {
    chrome.storage.local.get('items', res => {
      resolve(res['items']);
    })
  })
}

export const getIdlist = (): Promise<string[]> => {
  return new Promise(resolve => {
    chrome.storage.local.get('idlist', res => {
      resolve(res['idlist'])
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

export const setItemlist = (map: { [id: string]: IShopItem }): void => {
  chrome.storage.local.set({'items': map})
}

export const setIdlist = (idlist: string[]) => {
  chrome.storage.local.set({'idlist': idlist})
}

export const setLastSelectedId = (id: string | null): void => {
  chrome.storage.local.set({'lastSelectedId': id})
}

export const getItem = (): Promise<IShopItem> => {
  return new Promise<IShopItem>(async resolve => {
    const id = await getLastSelectedId()
    const itemlist = await getItemlist()

    if (itemlist.hasOwnProperty(id)) {
      resolve(itemlist[id])
    } else {
      resolve({id: null, name: '', price: '', weight: '', rakuten_stock: '', makeshop_stock: '', jancode: '', descriptions: [], details: []})
    }
  })
}
