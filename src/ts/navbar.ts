import { Model } from './model'
import { updateStorage } from './chromeApi'
import { getAll } from './util'

const importbtn = document.getElementById('import')
const exportbtn = document.getElementById('export')
const startbtn = document.getElementById('import_start')

const modal = document.getElementById('import-modal')
const overwrite = document.getElementById('overwrite') as HTMLInputElement
const file_input = modal.querySelector(
  'input[name="import_file"]'
) as HTMLInputElement
const modalCloses = getAll(
  '.modal-background, .modal-close, .modal-card-foot > .button'
)
const html = document.documentElement

export const setNavbarEventListener = (model: Model) => {
  importbtn.addEventListener('click', () => {
    openModal(modal)
  })

  modalCloses.forEach(element => {
    element.addEventListener('click', () => {
      closeModal(modal)
    })
  })

  file_input.addEventListener('change', () => {
    showFileName(file_input)
  })

  startbtn.addEventListener('click', async () => {
    if (!file_input.files.length) {
      return
    }

    const result = await importFile(file_input)
    const response = await updateStorage(overwrite.checked, result)

    await model.init()
    model.dispatchEvents()
    showImportNotifications(response)
  })

  exportbtn.addEventListener('click', () => {
    chrome.storage.local.get(null, items => {
      // null implies all items
      const url =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(items))
      const date = new Date(Date.now())
      const name = `itemlist${date
        .toISOString()
        .slice(0, 19)
        .replace(/[-,:]/g, '')}.json`
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

const closeModal = (target: HTMLElement): void => {
  target.classList.remove('is-active')
  html.classList.remove('is-clipped')
}

const showFileName = (input: HTMLInputElement): void => {
  const name = modal.querySelector('.file-name') as HTMLSpanElement
  if (input.files.length !== 0) {
    name.innerText = input.files[0].name
  } else {
    name.innerText = ''
  }
}

const importFile = async (input: HTMLInputElement) => {
  const json = await read(input.files[0])
  const result = JSON.parse(json)
  return result
}

const showImportNotifications = (response: {
  success: boolean
  message: string
}): void => {
  console.log(response)
}

const read = (file: File) => {
  const reader = new FileReader()
  reader.readAsText(file)

  return new Promise<string>(resolve => {
    reader.onload = (e: ProgressEvent & { target: { result: string } }) => {
      resolve(e.target.result)
    }
  })
}
