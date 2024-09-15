import Popup from "./Popup.js";

class EventPopups extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this.eventPopup = document.querySelector(popupSelector);
    this.eventName = document.querySelector(".event-popup__name");
    this.eventDate = document.querySelector(".event-popup__date");
    this.eventImage = document.querySelector(".event-popup__image");
  }

  open = (data) => {
    this.eventName.textContent = data.name;
    this.eventDate.textContent = data.date;
    this.eventImage.src = data.src;
    super.open();
  };

  setEventListeners() {
    super.setEventListeners();
  }
}

export default EventPopups;
