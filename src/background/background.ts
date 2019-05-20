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
      console.log('Initialize "lastSelectedId"')
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

// タブ切り替え時に拡張機能を無効or有効化
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    changeIconStatus(tabId);
  }
});
chrome.tabs.onActivated.addListener((activeInfo) => {
  changeIconStatus(activeInfo.tabId);
});



const changeIconStatus = (tabid: number) => {
  const r_re = new RegExp('^https://item.rms.rakuten.co.jp/rms/mall/rsf/item/vc'.replace(/\//g, '\\$&'))
  const ms_url = 'https://shop16.makeshop.jp/makeshop/newmanager/sindex2.html'

  chrome.tabs.get(tabid, tab => {
    if (tab.url === ms_url || r_re.test(tab.url)) {
      chrome.browserAction.enable()
      chrome.browserAction.setIcon({ 'path': { '16': 'icons/16.png' }})
    } else {
      chrome.browserAction.disable()
      chrome.browserAction.setIcon({ 'path': { '16': 'icons/16-gray.png' } })
    }
  })
}
