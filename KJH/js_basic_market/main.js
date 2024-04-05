import { getProductList } from "./module/productList.js";

const productList = getProductList([
  {
    id: 1,
    imgSrc: "/js_basic_market/public/assets/단호박.jpg",
    name: "단호박",
    discountPercent: 20,
    price: 4000,
    orignalPrcie: 5000,
  },
]);

document.body.appendChild(productList);
