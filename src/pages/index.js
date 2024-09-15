import "../pages/index.css";
// import "../scripts/EventPopup.js";
import EventPopups from "../scripts/EventPopup.js";
import Event from "../scripts/Event.js";
import Section from "../scripts/Section.js";

import pumpkinPatchImage from "../images/pumpkinpatch.png";
import costumeImage from "../images/costume.png";
import fallFestivalImage from "../images/fallfestival.png";

import Nav from "../scripts/Nav.js";

import {
  eventPopupSelector,
  eventsContainer,
  eventsListSelector,
  eventsTemplateSelector,
} from "../utils/constants.js";

const eventData = [
  {
    name: "Pumpkin Patch",
    date: "October 18",
    src: pumpkinPatchImage,
    alt: "Fall Festival",
  },
  {
    name: "Fall Festival",
    date: "October 21",
    src: fallFestivalImage,
    alt: "Pumpkin Patch",
  },
  {
    name: "Costume Party",
    date: "October 30-31",
    src: costumeImage,
    alt: "Costumes",
  },
];

const eventPopup = new EventPopups({ popupSelector: eventPopupSelector });
eventPopup.setEventListeners();

const openPopup = (data) => {
  eventPopup.open(data);
};

const handleEventItemClick = (data) => {
  openPopup(data);
};

const createEvent = (item) => {
  const event = new Event({
    data: item,
    eventSelector: eventsTemplateSelector,
    handleEventItemClick: handleEventItemClick,
  });
  const newEvent = event.getView();
  section.addItem(newEvent);
  return newEvent;
};

const section = new Section(
  { items: eventData, renderer: createEvent },
  eventsListSelector
);

section.renderItems();
