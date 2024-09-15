class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

  open() {
    this.popup.classList.add("event-popup_open");
    document.addEventListener("keydown", this._handleCloseEsc);
  }

  close() {
    this.popup.classList.remove("event-popup_open");
    document.removeEventListener("keydown", this._handleCloseEsc);
  }

  _handleCloseEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this.closeButton = this.popup.querySelector(".event-popup__close-button");
    this.closeButton.addEventListener("click", this.close.bind(this));
    this.popup.addEventListener("mousedown", (evt) => {
      evt.stopPropagation();
      if (evt.target === this.popup) {
        this.close(evt);
      }
    });
  }
}

export default Popup;
