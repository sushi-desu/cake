import { Model } from "../ts/model";
import { setMainEventListener } from "../ts/main";
import { setSidebarEventListener } from "../ts/sidebar";


const model = new Model();

setMainEventListener(model);
setSidebarEventListener(model);
