import { getProductCard } from "./module/productCard.js";

const productCard = getProductCard({
  id: 1,
  imgSrc: "KJH/입문자부터자바스크립트/public/assets/파프리카.jpg",
  name: "파프리카 2입",
  discountPercent: 20,
  price: 2000,
  orignalPrcie: 2500,
});

document.body.appendChild(productCard);
