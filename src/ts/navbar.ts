
const importbtn = document.getElementById('import')
const exportbtn = document.getElementById('export')
const modal = document.getElementById('import-modal')
const html = document.documentElement

export const setNavbarEventListener = () => {

  importbtn.addEventListener('click', () => {
    openModal(modal)
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


const openModal = (target: HTMLElement): void => {
  target.classList.add('is-active')
  html.classList.add('is-clipped')
}
