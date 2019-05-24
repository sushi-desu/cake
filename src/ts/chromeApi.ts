import { IShopItem, EMPTY_ITEM } from "./item";

export const getItemlist = (): Promise<{ [id: string]: IShopItem }> => {
  return new Promise(resolve => {
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
  return new Promise(resolve => {
    chrome.storage.local.get('lastSelectedId', res => {
      resolve(res['lastSelectedId']);
    })
  })
}

export const setItemlist = (map: { [id: string]: IShopItem }): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.set({ 'items': map }, () => resolve())
  })
}

export const setIdlist = (idlist: string[]): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.set({ 'idlist': idlist }, () => resolve())
  })
}

export const setLastSelectedId = (id: string | null): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.set({ 'lastSelectedId': id }, () => resolve())
  })
}

export const getItem = async (): Promise<IShopItem> => {
  const id = await getLastSelectedId()
  const itemlist = await getItemlist()

  if (itemlist.hasOwnProperty(id)) {
    return itemlist[id]
  } else {
    return EMPTY_ITEM
  }
}

const clear = (): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.clear(() => resolve())
  })
}

export const updateStorage = async (overwrite: boolean, data: any): Promise<{ success: boolean, message: string }> => {
  if (!(data.hasOwnProperty('items') && data.hasOwnProperty('idlist') && data.hasOwnProperty('lastSelectedId'))) {
    return {success: false, message: 'インポートに失敗しました。対応していないファイルです。'}
  }

  if (overwrite) {
    await clear()
    await Promise.all([
      setIdlist(data.idlist),
      setItemlist(data.items),
      setLastSelectedId(data.lastSelectedId)
    ])
    return {success: true, message: "上書きしました。"}
  } else {
    return {success: true, message: "追加しました。"}
  }
}
