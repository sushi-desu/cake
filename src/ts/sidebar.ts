import { Model } from "./model";
import { empty } from "./util";
import { EVENTS } from "./constant";

const itemlist = document.getElementById('itemlist') as HTMLUListElement;

export const setSidebarEventListener = (model: Model): void => {

  model.dispatcher.addEventListener(EVENTS.DATA_CHANGE, () => {
    renderItemlist(model.getTitleList());
  });

  model.dispatcher.addEventListener(EVENTS.SELECT_CHANGE, () => {
    highlightSelectedItem(model.getSelectedItem().id);
  });

  itemlist.addEventListener('click', (e: Event) => {
    const target: EventTarget | null = e.target;
    if (target && target instanceof HTMLAnchorElement) {
      const id = target.getAttribute('itemid');
      model.select(id);
    }
  });

}


const renderItemlist = (titlelist: {title: string, id: string}[]): void => {
  empty(itemlist);

  titlelist.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('itemid', item.id);
    a.innerText = item.title;

    li.appendChild(a);
    itemlist.appendChild(li);
  });
}

const highlightSelectedItem = (id: string): void => {
  // clear highlight
  const pre_selected_li = itemlist.querySelectorAll('.is-active');
  pre_selected_li.forEach(li => {
    li.classList.remove('is-active');
  });

  const selected_li = itemlist.querySelector(`[itemid="${id}"]`);
  if (selected_li === null) { return; }
  selected_li.classList.add('is-active');
}
