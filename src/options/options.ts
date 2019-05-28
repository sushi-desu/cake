import { Model } from '../ts/model'
import { setMainEventListener } from '../ts/main'
import { setSidebarEventListener } from '../ts/sidebar'
import { setNavbarEventListener } from '../ts/navbar'
;(async () => {
  const model = new Model()
  await model.ready
  setMainEventListener(model)
  setSidebarEventListener(model)
  setNavbarEventListener(model)

  // initialize
  model.dispatchEvents()
})()
