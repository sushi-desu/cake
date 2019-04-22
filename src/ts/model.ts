import { getLocalStorage, lastSelectedId } from "./chromeApi";
import { IShopItem } from "./item";
import { zip, uniqueId } from "./util"

export class Model {

  private _itemList: IShopItem[];
  private _id: string | null;
  dispatcher: HTMLDivElement;
  private _datachange: Event;
  private _selectchange: Event;

  constructor() {
    this._itemList = getLocalStorage();
    this._id = lastSelectedId();
    this.dispatcher = document.createElement('div');
    this._datachange = new Event('dataChange');
    this._selectchange = new Event('selectChange');

    this.dispatcher.addEventListener('dataChange', () => {
      console.log('dataChange');
      console.log(this._itemList);
    });
    this.dispatcher.addEventListener('selectChange', () => {
      console.log('selectChange');
      console.log(this.getSelectedItem());
    });
  }


  getTitleList = (): { title: string, id: string }[] => {
    return this._itemList.map(item => ({title: item.name, id: item.id}) )
  }

  getSelectedItem = (): IShopItem => {
    return this._id === null
      ? {id: "", name: "", price: "", weight: "", rakuten_stock: "", makeshop_stock: "", jancode: "", descriptions: [{title: "", body: ""}], details: [{title: "", body: ""}]}
      : this._itemList.find(item => item.id === this._id);
  }

  select = (id: string | null): void => {
    this._id = id;
    this.dispatcher.dispatchEvent(this._selectchange);
  }

  update = (form: FormData): void => {
    const index = this._itemList.findIndex(item => item.id === this._id);
    if (index === -1) { alert('no index'); }

    this._itemList[index] = this.form_to_item(this._id, form);
    this.dispatcher.dispatchEvent(this._datachange);
  }

  new = (form: FormData):void => {
    const newid = uniqueId();
    this._itemList.push(this.form_to_item(newid, form));
    this.dispatcher.dispatchEvent(this._datachange);
    this.select(newid);
  }

  delete = (): void => {
    const index = this._itemList.findIndex(item => item.id === this._id)
    if (index === -1) { alert('no index'); }

    this._itemList = this._itemList.filter(item => item.id !== this._id);
    this.dispatcher.dispatchEvent(this._datachange);

    if (this._itemList.length === 0) {
      this.select(null); // リストが空の場合は空のアイテムを選択
    } else if (index > 0) {
      this.select(this._itemList[index - 1].id); // それ以外は一つ前のアイテムを選択
    } else {
      this.select(this._itemList[0].id); // 先頭が削除された場合は先頭のアイテムを選択
    }
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

