
const importbtn = document.getElementById('import')
const exportbtn = document.getElementById('export')

export const setNavbarEventListener = () => {

  importbtn.addEventListener('click', () => {
    console.log('import')
  })

  exportbtn.addEventListener('click', () => {
    chrome.storage.local.get(null, (items) => { // null implies all items
      const url = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items))
      const date = new Date(Date.now())
      const name = `itemlist${date.toISOString().slice(0, 19).replace(/[-,:]/g, '')}.json`
      chrome.downloads.download({
        url: url,
        filename: name
      })
    })
  })
}
