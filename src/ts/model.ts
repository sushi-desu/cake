import { getLocalStorage, lastSelectedId } from "./chromeApi";
import { IShopItem } from "./item";
import { zip, uniqueId } from "./util"

export class Model {

  private _itemList: IShopItem[];
  private _id: string;
  dispatcher: HTMLDivElement;
  private _datachange: Event;
  private _selectchange: Event;

  constructor() {
    this._itemList = getLocalStorage();
    this._id = lastSelectedId();
    this.dispatcher = document.createElement('div');
    this._datachange = new Event('dataChange');
    this._selectchange = new Event('selectChange');
  }


  getTitleList = (): { title: string, id: string }[] => {
    return this._itemList.map(item => ({title: item.name, id: item.id}) )
  }

  getSelectedItem = (): IShopItem => {
    return this._itemList.find(item => item.id === this._id);
  }

  select = (id: string): void => {
    this._id = id;
    this.dispatcher.dispatchEvent(this._selectchange);
  }

  updateItem = (type: 'update' | 'new' | 'delete', form?: FormData): void => {

    if (type === "update") {

      const index = this._itemList.findIndex(item => item.id === this._id);
      if (index === -1) { alert('no index'); }

      this._itemList[index] = this.form_to_item(this._id, form);
      this.dispatcher.dispatchEvent(this._datachange);

    } else if (type === "new") {

      const newid = uniqueId();
      this._itemList.push( this.form_to_item(newid, form) );
      this.dispatcher.dispatchEvent(this._datachange);
      this.select(newid);

    } else if (type === "delete") {

      const index = this._itemList.findIndex(item => item.id === this._id)
      if (index === -1) { alert('no index'); }

      this._itemList = this._itemList.filter( item => item.id !== this._id );
      this.dispatcher.dispatchEvent(this._datachange);
      this.select(this._itemList[index-1].id);
    }

    console.log(this._itemList);
  }

  dispatchEvents = (): void => {
    this.dispatcher.dispatchEvent(this._datachange);
    this.dispatcher.dispatchEvent(this._selectchange);
  }



  private form_to_item = (id: string, form: FormData): IShopItem => {
    return {
      id: id,
      name: form.get('name').toString(),
      price: form.get('price').toString(),
      weight: form.get('weight').toString(),
      rakuten_stock: form.get('rakuten_stock').toString(),
      makeshop_stock: form.get('makeshop_stock').toString(),
      jancode: form.get('jancode').toString(),
      descriptions: this.convert('description', form),
      details: this.convert('detail', form)
    }
  }

  private convert = (type: 'description' | 'detail', form: FormData): {title: string, body: string}[] => {
    const titles = form.getAll(`${ type }_title`);
    const bodies = form.getAll(`${ type }_body`);

    // 入力欄が存在しない、または空欄の場合は空のリストを返す
    if ( (titles.length === 0) || (titles[0] === "") ) {
      return [];
    }

    return zip((t, b) => ({title: t.toString(), body: b.toString()}), titles, bodies);
  }
}

