import { Model } from "../ts/model";
import { setMainEventListener } from "../ts/main";
import { setSidebarEventListener } from "../ts/sidebar";
import { setNavbarEventListener } from "../ts/navbar";


const model = new Model();
model.ready.then(() => {
  setMainEventListener(model);
  setSidebarEventListener(model);
  setNavbarEventListener();

  // initialize
  model.dispatchEvents();
})
