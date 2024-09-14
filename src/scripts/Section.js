class Section {
  constructor({ items, renderer }, listSelector) {
    this._items = items;
    this._renderer = renderer;
    this._list = document.querySelector(listSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._list.append(item);
  }
}

export default Section;
