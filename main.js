window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectAll(selector);
  },
  style(node, styleObj) {
    for (let key in styleObj) {
      node.style[key] = styleObj[key];
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
