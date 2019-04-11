import { Model } from "../ts/model";
import { IShopItem } from "./item";

export const setMainEventListener = (model: Model): void => {

  const form = document.getElementById('form') as HTMLFormElement;

  model.dispatcher.addEventListener('selectChange', () => {
    console.log('selectChange');
    const item = model.getSelectedItem();
    console.log(item);
    initForm(item);
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  document.getElementById('save').addEventListener('click', () => {
    const data = new FormData(form);
    model.updateItem("update" , data);
    console.log('update');
  });

  document.getElementById('new').addEventListener('click', () => {
    const data = new FormData(form);
    model.updateItem("new", data);
  });

  document.getElementById('delete').addEventListener('click', () => {
    model.updateItem("delete");
  })


  const initForm = (item: IShopItem): void => {
    return;
  }
}
