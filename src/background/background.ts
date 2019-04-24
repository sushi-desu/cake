import * as chromeStorage from '../ts/chromeApi'

// 初回インストール時、ストレージに初期値をセット
chrome.runtime.onInstalled.addListener(() => {
  chromeStorage.getItemlist().then(res => {
    if (res === undefined) {
      console.log('Initialize "items"')
      chromeStorage.setItemlist([]);
    }
  })
  chromeStorage.getLastSelectedId().then(res => {
    if (res === undefined) {
      console.log('Initialize "id"')
      chromeStorage.setLastSelectedId(null);
    }
  })
})

// アイコンクリック時にスクリプトを実行
chrome.browserAction.onClicked.addListener( () => {
  console.log(`clicked`)
  chrome.tabs.executeScript({
    'file': './content.js'
  })
})
