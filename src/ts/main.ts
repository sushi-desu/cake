import { Model } from "../ts/model";
import { IShopItem } from "./item";
import { empty } from "./util";

const form = document.getElementById('form') as HTMLFormElement;
const descriptions = document.getElementById('descriptions');
const details = document.getElementById('details');
const savebtn = document.getElementById('save') as HTMLButtonElement;
const newbtn = document.getElementById('new') as HTMLButtonElement;
const deletebtn = document.getElementById('delete') as HTMLButtonElement;

export const setMainEventListener = (model: Model): void => {

  model.dispatcher.addEventListener('selectChange', () => {
    const item = model.getSelectedItem();
    initForm(item);
  })

  form.addEventListener('input', () => {
    if (is_valid(form)) {
      savebtn.disabled = false;
      newbtn.disabled = false;
    } else {
      savebtn.disabled = true;
      newbtn.disabled = true;
    }
  });

  savebtn.addEventListener('click', () => {
    const data = new FormData(form);
    model.update(data);
  });

  newbtn.addEventListener('click', () => {
    const data = new FormData(form);
    model.new(data);
  });

  deletebtn.addEventListener('click', () => {
    model.delete();
  });

  document.querySelector('.descriptions-field button.plus').addEventListener('click', () => {
    addDescriptionForm();
  });

  document.querySelector('.descriptions-field button.minus').addEventListener('click', () => {
    removeDescriptionForm();
  });

  document.querySelector('.details-field button.plus').addEventListener('click', () => {
    addDetailsForm();
  });

  document.querySelector('.details-field button.minus').addEventListener('click', () => {
    removeDetailsForm();
  });

}


const is_valid = (form: HTMLFormElement): boolean => {
  return form.checkValidity();
}

const initForm = (item: IShopItem): void => {
  empty(descriptions);
  empty(details);

  const inputs = form.elements;
  inputs['name'].value = item.name;
  inputs['price'].value = item.price;
  inputs['weight'].value = item.weight;
  inputs['rakuten_stock'].value = item.rakuten_stock;
  inputs['makeshop_stock'].value = item.makeshop_stock;
  inputs['jancode'].value = item.jancode;

  item.descriptions.forEach(desc => {
    const div = addDescriptionForm();
    const title = div.querySelector('[name="description_title"]') as HTMLInputElement;
    const body = div.querySelector('[name="description_body"]') as HTMLInputElement;
    title.value = desc.title;
    body.value = desc.body;
  });
  item.details.forEach(detail => {
    const div = addDetailsForm();
    const title = div.querySelector('[name="detail_title"]') as HTMLInputElement;
    const body = div.querySelector('[name="detail_body"]') as HTMLInputElement;
    title.value = detail.title;
    body.value = detail.body;
  });
}

const addDescriptionForm = () => {
  const div = document.createElement('div')
  div.classList.add('description', 'field');
  div.innerHTML = `
      <span class="label">タイトル</span>
      <div class="control">
        <input class="input" type="text" name="description_title">
      </div>
      <span class="label">本文</span>
      <div class="control">
        <textarea class="textarea" name="description_body"></textarea>
      </div>`;

  descriptions.appendChild(div);
  return div;
}

const removeDescriptionForm = () => {
  const rows = descriptions.querySelectorAll('.description');
  if (rows.length) {
    descriptions.removeChild(rows[rows.length - 1]);
  }
}

const addDetailsForm = () => {
  const div = document.createElement('div');
  div.classList.add('detail');
  div.innerHTML = `
      <div class="columns is-mobile">
        <div class="column is-one-third">
          <div class="field">
            <span class="label">タイトル</span>
            <input class="input" type="text" name="detail_title">
          </div>
        </div>
        <div class="column">
          <div class="field">
            <span class="label">内容</span>
            <input class="input" type="text" name="detail_body">
          </div>
        </div>
      </div>`;

  details.appendChild(div);
  return div;
}

const removeDetailsForm = () => {
  const rows = details.querySelectorAll('.detail');
  if (rows.length) {
    details.removeChild(rows[rows.length - 1]);
  }
}
