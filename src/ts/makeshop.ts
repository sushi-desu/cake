import { IShopItem } from './item'

export const write_to_makeshop = (item: IShopItem): void => {
  const frame = window.frames["mainframe"].document;

  // 非表示設定
  frame.getElementById('displayN').checked = true;
  // ポイント
  frame.getElementById('reserve_type').selectedIndex = 1;
  frame.getElementById('reserve').value = '1';
  // 数量設定
  frame.querySelector('#cover > table > tbody > tr > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table:nth-child(8) > tbody > tr:nth-child(13) > td > input[type="radio"]:nth-child(3)').click();
  // 陳列位置
  frame.querySelector('[name="special"]').selectedIndex = 1;

  const item_name = frame.getElementById('brandname');
  item_name.value = item.name;
  const item_price = frame.getElementById('sellprice');
  item_price.value = item.price;
  const item_jancode = frame.getElementById('jancode_input');
  item_jancode.value = item.jancode;
  const item_stock = frame.querySelector('[name="quantity"]');
  item_stock.value = item.makeshop_stock;
  const item_weight = frame.querySelector('[name="weight"]');
  item_weight.value = item.weight;

  const description_sp = frame.getElementById('smartphone_content2');
  description_sp.value = createDesc_sp(item.descriptions, item.details);

  frame.getElementById('cke_23').addEventListener('click', () => {
    const description_pc = frame.querySelector('#cke_1_contents > textarea');
    description_pc.value = createDesc_pc(item.descriptions);
  })

  frame.getElementById('cke_87').addEventListener('click', () => {
    const details_pc = frame.querySelector('#cke_2_contents > textarea');
    details_pc.value = createDetails_pc(item.details);
  })

  frame.getElementById('cke_23').click();
  frame.getElementById('cke_87').click();

}



const createDesc_sp = (desc_list, details_list) => {
  return createDesc_pc(desc_list) + createDetails_pc(details_list);
}

const createDesc_pc = (desc_list) => {
  if (desc_list.length === 0) {
    return '';
  }

  let result =
`<div id="item__desc">
  <img src="hoge.jpg">`;
  desc_list.forEach(desc => {
    result +=
`
  <h4>${desc.title}</h4>
  <p>${desc.body}</p>`;
  });
  result +=
`
  <hr>
</div>
`;
  return result;
}

const createDetails_pc = (details_list) => {
  if (details_list.length === 0) {
    return '';
  }

  let result =
`
<h2 class="remarks__title">商品詳細</h2>
<table class="remarks__table">
  <tbody>`;
  details_list.forEach(desc => {
    result +=
`
    <tr>
      <th>${desc.title}</th>
      <td>${desc.body}</td>
    </tr>`;
  })
  result +=
`
  </tbody>
</table>
`;
  return result;
}
