import { write_to_rakuten } from '../ts/rakuten'
import { write_to_makeshop } from '../ts/makeshop'
import { getItem } from '../ts/chromeApi'

const host = window.location.host

if (host === 'item.rms.rakuten.co.jp') {
  getItem().then(item => {
    write_to_rakuten(item)
  })
} else if (host === 'shop16.makeshop.jp') {
  getItem().then(item => {
    write_to_makeshop(item)
  })
}
