import { makeDOMwithPro } from "../utils/dom.js";
import { getProductCard } from "./productCard.js";

export const getProductList = (getProductInfoList) => {
  const productListContainer = makeDOMwithPro("div", {
    className: "product-list-con",
  });

  getProductInfoList.forEach((productInfo) => {
    productListContainer.appendChild(
      getProductCard({
        ...productInfo,
      })
    );
  });

  return productListContainer;
};
