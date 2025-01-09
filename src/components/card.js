// @todo: Функция создания карточки
function createCard(
  cardTemplate,
  name,
  link,
  handleOpenPhoto,
  handleDeletePlace,
  handleLike,
  cardInfo,
  profileId
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  const likesMassiv = Array.from(cardInfo.likes);
  let likeCounter = Array.from(cardInfo.likes).length;
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector(".card__title").textContent = name;
  cardLikeCounter.textContent = likeCounter;
  if (cardInfo.owner._id === profileId) {
    cardDeleteButton.addEventListener("click", function () {
      handleDeletePlace(cardElement, cardInfo._id);
    });
  } else {
    cardDeleteButton.classList.add("card__delete-button-hide");
  }
  likesMassiv.forEach((likes) => {
    if (likes._id === profileId) {
      like(cardLikeButton);
    }
  });
  cardImage.addEventListener("click", function () {
    handleOpenPhoto(name, link);
  });
  cardLikeButton.addEventListener("click", function () {
    handleLike(cardElement, cardInfo);
  });
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

function like(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, like };
