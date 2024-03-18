export const makeDoMwithProperties = (domType, protyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

export const appendChildrenList = (target, childList) => {
  if (!Array.isArray(childList)) return;
  childList.forEach((children) => {
    target.appendChild(children);
  });
};
