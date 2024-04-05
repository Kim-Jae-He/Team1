import { getProductCard } from "./module/productCard.js";
import { appendChildList, makeDOMwithPro } from "./utils/dom.js";

const sectionDOM = document.getElementsByName("section")[0];

const productCard1 = getProductCard({
  imgSrc: "./public/assets/파프리카.jpg",
  id: 1,
  name: "파프리카 2입",
  discountPercent: 20,
  price: 2000,
  orignalPrcie: 2500,
});

sectionDOM.appendChild(productCard1);
