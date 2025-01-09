import { checkResponse } from "../utils/utils.js";

const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-mag-4",
  headers: {
    authorization: "a3bdff73-bbca-487b-9d79-560b8d0e6537",
    "Content-Type": "application/json",
  },
};

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
};

const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
};

const patchProfileInfo = (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: description,
    }),
  }).then(checkResponse);
};

const postAddCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
};

const deleteCardDelete = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
};

const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

const patchAvatarUpdate = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResponse);
};

export {
  getInitialCards,
  getProfileInfo,
  patchProfileInfo,
  postAddCard,
  deleteCardDelete,
  addLike,
  deleteLike,
  patchAvatarUpdate,
};
