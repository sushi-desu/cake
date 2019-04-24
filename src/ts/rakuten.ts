import { IShopItem } from './item'

export const write_to_rakuten = (item: IShopItem): void => {

  // 倉庫に入れる
  const in_storehouse = document.getElementById('r36') as HTMLInputElement
  in_storehouse.checked = true;
  // 税別設定
  const tax_not_included = document.getElementById('r03') as HTMLInputElement
  tax_not_included.checked = true;

  const item_name = document.querySelector('[name="item_name"]') as HTMLInputElement;
  item_name.value = item.name;

  const item_price = document.querySelector('[name="price"]') as HTMLInputElement;
  item_price.value = item.price;

  const item_stock = document.getElementById('invnew_in01') as HTMLInputElement;
  item_stock.value = item.rakuten_stock;

  const item_jancode = document.querySelector('[name="rcatalog_id"]') as HTMLInputElement;
  item_jancode.value = item.jancode;

  const description_sp = document.getElementById('smart_caption') as HTMLInputElement;
  const description_pc = document.querySelector('[name="display_caption"]') as HTMLInputElement;

  const description = 
`<div ="" class="iteminfo">
  <img src="hoge.jpg">

  ${createDescription(item.descriptions)}
  ${createDetails(item.details)}

</div ="">
`

  description_sp.value = description;
  description_pc.value = description;
}



const createDescription = (desc_list) => {
  if (desc_list.length === 0) {
    return '';
  }

  let result = ``;
  desc_list.forEach(desc => {
    result +=
`  <h2 ="" >${desc.title}</h2 ="">
  <p>${desc.body}</p>
`;
  });
  return result;
}

const createDetails = (details_list) => {
  if (details_list.length === 0) {
    return '';
  }

  let result = `  <h2 ="">商品詳細</h2 ="">
  <table>
`;
  details_list.forEach(details => {
    result +=
`    <tr>
      <th>${details.title}</th>
      <td>${details.body}</td>
    </tr>
`;
  });
  result += `  </table>`;
  return result;
}
