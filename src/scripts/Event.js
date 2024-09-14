class Event {
  constructor({ data, eventSelector, handleEventItemClick }) {
    this.name = data.name;
    this.link = data.src;
    this.alt = data.alt;
    this.date = data.date;
    this._eventSelector = eventSelector;
    this._handleEventItemClick = handleEventItemClick;
  }

  //clone the template element with all its content
  _getTemplate() {
    return document
      .querySelector(this._eventSelector)
      .content.querySelector(".events__list-item")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleEventItemClick({
        name: this.name,
        date: this.date,
        src: this.link,
      });
    });
  }
  getView() {
    this._element = this._getTemplate();
    //find the children of the element
    this._name = this._element.querySelector(".events__name");
    this._date = this._element.querySelector(".events__date");
    this._image = this._element.querySelector(".events__image");
    //set the values
    this._name.textContent = this.name;
    this._date.textContent = this.date;
    this._image.src = this.link;
    this._image.alt = this.alt;

    this._setEventListeners();
    return this._element;
  }
}

export default Event;
