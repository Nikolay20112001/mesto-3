import "../pages/index.css";
import initialCards from "./cards.js";
import { createCard, deleteCard, like } from "./card.js";
import { openModal, closeModal } from "./modal.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getInitialCards,
  getProfileInfo,
  patchProfileInfo,
  postAddCard,
  deleteCardDelete,
  patchAvatarUpdate,
  addLike,
  deleteLike,
} from "./api.js";
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const places = document.querySelector(".places");
const placesContainer = places.querySelector(".places__list");
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
const deleteButton = placesContainer.querySelector(".card__delete-button");

const popups = document.querySelectorAll(".popup");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupCardImage = document.querySelector(".popup_type_image");
const popupImage = popupCardImage.querySelector(".popup__image");
const popupTitle = popupCardImage.querySelector(".popup__caption");

const popupEditAvatar = document.querySelector(".popup_type_avatar");

const formNewPlace = document.forms["new-place"];
const placeNameInput = formNewPlace.elements["place-name"];
const linkInput = formNewPlace.elements.link;
const placeSubmitButton = formNewPlace.querySelector(".popup__button");

const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;
const profileSubmitButton = formEditProfile.querySelector(".popup__button");

const formEditAvatar = document.forms["edit-avatar"];
const avatarInput = formEditAvatar.querySelector(".popup__input_type_avatar");
const avatarSubmitButton = formEditAvatar.querySelector(".popup__button");

const profile = document.querySelector(".profile");
const profileImage = profile.querySelector(".profile__image");
const profileInfo = profile.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");

let userId;

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

Promise.all([getInitialCards(), getProfileInfo()])
  .then(([cardsInfoResponse, profileInfoResponse]) => {
    userId = profileInfoResponse._id;
    profileName.textContent = profileInfoResponse.name;
    profileDescription.textContent = profileInfoResponse.about;
    profileImage.style[
      "background-image"
    ] = `url('${profileInfoResponse.avatar}')`;
    cardsInfoResponse.forEach(function (cardInfo) {
      placesContainer.append(
        createCard(
          cardTemplate,
          cardInfo.name,
          cardInfo.link,
          handleOpenPhoto,
          handleDeletePlace,
          handleLike,
          cardInfo,
          profileInfoResponse._id
        )
      );
    });
  })
  .catch(console.error);

popups.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => {
    closeModal(popup);
  });
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeModal(popup);
    }
  });
});

addButton.addEventListener("click", function () {
  clearValidation(popupAddCard, validationConfig);
  openModal(popupAddCard);
});

editButton.addEventListener("click", function () {
  clearValidation(popupEditProfile, validationConfig);
  openModal(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
});

profileImage.addEventListener("click", function () {
  clearValidation(popupEditAvatar, validationConfig);
  openModal(popupEditAvatar);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileSubmitButton.textContent = "Сохранение...";
  patchProfileInfo(nameInput.value, jobInput.value)
    .then(() => {
      profileName.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      closeModal(popupEditProfile);
    })
    .catch(console.error)
    .finally(() => {
      profileSubmitButton.textContent = "Сохранить";
    });
}

function handleNewPlace(evt) {
  evt.preventDefault();
  placeSubmitButton.textContent = "Сохранение...";
  postAddCard(placeNameInput.value, linkInput.value)
    .then((cardInfoResponse) => {
      placesContainer.prepend(
        createCard(
          cardTemplate,
          cardInfoResponse.name,
          cardInfoResponse.link,
          handleOpenPhoto,
          handleDeletePlace,
          handleLike,
          cardInfoResponse,
          userId
        )
      );
      formNewPlace.reset();
      closeModal(popupAddCard);
    })
    .catch(console.error)
    .finally(() => {
      placeSubmitButton.textContent = "Сохранить";
    });
}

function handleOpenPhoto(name, link) {
  openModal(popupCardImage);
  popupImage.src = link;
  popupImage.alt = name;
  popupTitle.textContent = name;
}

function handleNewAvatar(evt) {
  evt.preventDefault();
  avatarSubmitButton.textContent = "Сохранение...";
  patchAvatarUpdate(avatarInput.value)
    .then(() => {
      profileImage.style["background-image"] = `url('${avatarInput.value}')`;
      formEditAvatar.reset();
      closeModal(popupEditAvatar);
    })
    .catch(console.error)
    .finally(() => {
      avatarSubmitButton.textContent = "Сохранить";
    });
}

function handleDeletePlace(cardElement, cardId) {
  deleteCardDelete(cardId)
    .then(() => {
      deleteCard(cardElement);
    })
    .catch(console.error);
}

function handleLike(cardElement, cardInfo) {
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  if (!cardLikeButton.classList.contains("card__like-button_is-active")) {
    addLike(cardInfo._id)
      .then((data) => {
        like(cardLikeButton);
        cardLikeCounter.textContent = Array.from(data.likes).length;
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      });
  } else {
    deleteLike(cardInfo._id)
      .then((data) => {
        like(cardLikeButton);
        cardLikeCounter.textContent = Array.from(data.likes).length;
      })
      .catch(console.error); // выводим ошибку в консоль
  }
}
enableValidation(validationConfig);
formEditProfile.addEventListener("submit", handleEditProfileSubmit);
formNewPlace.addEventListener("submit", handleNewPlace);
formEditAvatar.addEventListener("submit", handleNewAvatar);
