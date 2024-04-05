import { appendChildList, makeDOMwithPro } from "../utils/dom.js";

export const getProductCard = ({
  imgSrc,
  names,
  discountPercent,
  price,
  originalPrice,
}) => {
  const productCard = makeDOMwithPro("div", {
    className: "product-card",
  });
  const productImageCon = makeDOMwithPro("img", {
    src: imgSrc,
    alt: names,
  });
  const cartToggleBtn = makeDOMwithPro("button", {
    className: "cart-toggle-btn",
    type: "button",
  });
  const cartimage = makeDOMwithPro("img", {
    className: "cart-img",
    src: "public/assets/cart.png",
  });

  cartToggleBtn.appendChild(cartimage);

  appendChildList(productCard, [productImageCon, cartToggleBtn]);
  const productDescription = makeDOMwithPro("div", {
    className: "product-description",
  });

  const productName = makeDOMwithPro("div", {
    className: "product-name",
    innerHTML: names,
  });
  const productPricecontainer = makeDOMwithPro("div", {
    className: "product-price-con",
  });
  const productDiscount = makeDOMwithPro("div", {
    className: "product-discount-percent",
    innerHTML: `${discountPercent}%`,
  });
  const productPrice = makeDOMwithPro("div", {
    className: "product-price",
    innerHTML: `${price.toLocaleString()}원`,
  });
  const productOriginalPrice = makeDOMwithPro("div", {
    className: "product-original-price",
    innerHTML: `${originalPrice}원`,
  });

  appendChildList(productPricecontainer, [productDiscount, productPrice]);
  appendChildList(productDescription, [
    productName,
    productPricecontainer,
    productOriginalPrice,
  ]);

  appendChildList(productCard, [productDescription]);

  return productCard;
};
