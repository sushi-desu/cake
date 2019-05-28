import { IShopItem, EMPTY_ITEM } from './item'
import { uniqueId } from './util'

export const getItemlist = (): Promise<{ [id: string]: IShopItem }> => {
  return new Promise(resolve => {
    chrome.storage.local.get('items', res => {
      resolve(res['items'])
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
      resolve(res['lastSelectedId'])
    })
  })
}

export const setItemlist = (map: {
  [id: string]: IShopItem
}): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.set({ items: map }, () => resolve())
  })
}

export const setIdlist = (idlist: string[]): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.set({ idlist: idlist }, () => resolve())
  })
}

export const setLastSelectedId = (id: string | null): Promise<void> => {
  return new Promise(resolve => {
    chrome.storage.local.set({ lastSelectedId: id }, () => resolve())
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

const combine = (
  idlist1: string[],
  items1: { [id: string]: IShopItem },
  idlist2: string[],
  items2: { [id: string]: IShopItem }
) => {
  const list1 = idlist1.map(id => items1[id])
  const list2 = idlist2.map(id => items2[id])
  const newIdlist: string[] = []
  const newItems: { [id: string]: IShopItem } = {}
  list1.concat(list2).forEach(item => {
    const id = uniqueId()
    newIdlist.push(id)
    item.id = id
    newItems[id] = item
  })
  return { idlist: newIdlist, items: newItems }
}

export const updateStorage = async (
  overwrite: boolean,
  data: any
): Promise<{ success: boolean; message: string }> => {
  if (
    !(
      data.hasOwnProperty('items') &&
      data.hasOwnProperty('idlist') &&
      data.hasOwnProperty('lastSelectedId')
    )
  ) {
    return {
      success: false,
      message: 'インポートに失敗しました。対応していないファイルです。'
    }
  }

  const idlist = data.idlist
  const items = data.items
  const lastSelectedId = data.lastSelectedId
  if (overwrite) {
    await clear()
    await Promise.all([
      setIdlist(idlist),
      setItemlist(items),
      setLastSelectedId(lastSelectedId)
    ])
    return { success: true, message: '上書きしました。' }
  } else {
    const preData = await Promise.all([getIdlist(), getItemlist()])
    const preIdlist = preData[0]
    const preItems = preData[1]
    const combined = combine(preIdlist, preItems, idlist, items)

    await clear()
    await Promise.all([
      setIdlist(combined.idlist),
      setItemlist(combined.items),
      setLastSelectedId(combined.idlist[0])
    ])
    return { success: true, message: '追加しました。' }
  }
}
