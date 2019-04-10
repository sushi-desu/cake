import { Model } from "./model";

export const setSidebarEventListener = (model: Model): void => {

  const itemlist = document.getElementById('itemlist');

  model.dispatcher.addEventListener('dataChange', () => {
    console.log('datachange');
    renderItemlist();
  });

  itemlist.addEventListener('click', (e: Event) => {
    const target: EventTarget | null = e.target;
    if (target && target instanceof HTMLLIElement) {
      const id = target.getAttribute('itemid');
      model.select(id);
    }
  });



  const renderItemlist = (): void => {
    empty(itemlist);

    model.getTitleList().forEach(item => {
      const li = document.createElement('li');
      li.setAttribute('itemid', item.id);
      li.innerText = item.title;

      itemlist.appendChild(li);
    });
  }

  const empty = (target: HTMLElement): void => {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  }
}
