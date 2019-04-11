import { IShopItem } from "./item";

export const getLocalStorage = (): IShopItem[] => {
  // TEST
  return [
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
    }
  ]
}

export const lastSelectedId = (): string => {
  return "hogehoge";
}
