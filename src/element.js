const element = {
  create: (tagName, attributes, ...children) => {
    let element = document.createElement(tagName);

    for (key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    children.forEach((child) => {
      element.appendChild(child);
    });

    return element;
  },
};

export default element;
