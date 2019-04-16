import { IShopItem } from "./item";
import { uniqueId } from "./util"

export const getLocalStorage = (): IShopItem[] => {
  // TEST
  const sample = [
    {
      id: 'hogehoge',
      name: '松尾ミユキ ミルクガラス皿 ねこ',
      price: '600',
      weight: '235',
      rakuten_stock: '3',
      makeshop_stock: '3',
      jancode: "4589533595659",
      descriptions: [{ title: "松尾ミユキ ミルクガラス皿 ねこ", body: "名古屋生まれのイラストレーター松尾ミユキさんデザインの真っ白なお皿が登場しました。シンプルでかわいいデザインなので、どんなシーンでもお使いいただけます。" }],
      details: [{ title: "商品名", body: "松尾ミユキ Milk Glass Dish Cat" }, { title: "サイズ", body: "直径 17.5cm・厚さ 17mm" }]
    },
    {
      id: 'test2',
      name: '木のプレート',
      price: '200',
      weight: '120',
      rakuten_stock: '2',
      makeshop_stock: '4',
      jancode: '010002555555',
      descriptions: [{ title: 'おすすめ商品', body: '木でできたプレートです。'}, {title: '特徴的な色', body: '味わい深い色です。'}],
      details: []
    },
    {
      id: 'test3',
      name: '適当な商品',
      price: '200',
      weight: '120',
      rakuten_stock: '2',
      makeshop_stock: '4',
      jancode: '010002555555',
      descriptions: [{ title: 'おすすめ商品', body: '木でできたプレートです。' }, { title: '特徴的な色', body: '味わい深い色です。' }],
      details: []
    },
    {
      id: 'test4',
      name: '本棚',
      price: '200',
      weight: '120',
      rakuten_stock: '2',
      makeshop_stock: '4',
      jancode: '010002555555',
      descriptions: [{ title: 'おすすめ商品', body: '木でできたプレートです。' }, { title: '特徴的な色', body: '味わい深い色です。' }],
      details: []
    },
    {
      id: 'test5',
      name: 'がんこほんぽ タワシ',
      price: '200',
      weight: '120',
      rakuten_stock: '2',
      makeshop_stock: '4',
      jancode: '010002555555',
      descriptions: [{ title: 'おすすめ商品', body: '木でできたプレートです。' }, { title: '特徴的な色', body: '味わい深い色です。' }],
      details: []
    }
  ];

  return sample.concat(Array(100).fill(0).map((e, i) => {
    const n = sample[i%5];
    return {
      id: uniqueId(),
      name: n.name,
      price: n.price,
      weight: n.weight,
      rakuten_stock: n.rakuten_stock,
      makeshop_stock: n.makeshop_stock,
      jancode: n.jancode,
      descriptions: n.descriptions,
      details: n.details
    }
  }));
}

export const lastSelectedId = (): string => {
  return "hogehoge";
}
