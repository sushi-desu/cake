import { Model } from "../ts/model";
import { IShopItem } from "./item";
import { empty } from "./util";

export const setMainEventListener = (model: Model): void => {

  const form = document.getElementById('form') as HTMLFormElement;
  const descriptions = document.getElementById('descriptions');
  const details = document.getElementById('details');

  model.dispatcher.addEventListener('selectChange', () => {
    console.log('selectChange');
    const item = model.getSelectedItem();
    console.log(item);
    initForm(item);
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
    const descs = document.getElementById('descriptions');

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

    descs.appendChild(div);
    return div;
  }

  const removeDescriptionForm = () => {
    const rows = descriptions.querySelectorAll('.description');
    if (rows.length) {
      descriptions.removeChild(rows[rows.length - 1]);
    }
  }

  const addDetailsForm = () => {
    const details = document.getElementById('details');
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


  // init
  initForm(model.getSelectedItem());
}
