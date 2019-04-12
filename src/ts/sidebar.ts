import { Model } from "./model";
import { empty } from "./util";

export const setSidebarEventListener = (model: Model): void => {

  const itemlist = document.getElementById('itemlist');

  model.dispatcher.addEventListener('dataChange', () => {
    console.log('datachange');
    renderItemlist();
  });

  itemlist.addEventListener('click', (e: Event) => {
    const target: EventTarget | null = e.target;
    if (target && target instanceof HTMLAnchorElement) {
      const id = target.getAttribute('itemid');
      model.select(id);
    }
  });



  const renderItemlist = (): void => {
    empty(itemlist);

    model.getTitleList().forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('itemid', item.id);
      a.innerText = item.title;

      li.appendChild(a);
      itemlist.appendChild(li);
    });
  }


  // init
  renderItemlist();
}
