(()=>{"use strict";function e(e,t,n,r,o,c,a,u){var i=e.querySelector(".card").cloneNode(!0),s=i.querySelector(".card__image"),l=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-counter"),f=Array.from(a.likes).length;return s.src=n,s.alt=t,i.querySelector(".card__title").textContent=t,d.textContent=f,a.owner._id===u?l.addEventListener("click",(function(){o(i,a._id)})):l.classList.add("card__delete-button-hide"),i.querySelector(".card__image").addEventListener("click",(function(){r(t,n)})),i.querySelector(".card__like-button").addEventListener("click",(function(e){!function(e){e.target.classList.contains("card__like-button")&&e.target.classList.toggle("card__like-button_is-active")}(e),c(i,a,f)})),i}function t(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function n(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}var o=function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){u(e,n,t)}))},c=function(e,t,n){t.validity.valid?u(e,t,n):t.validity.patternMismatch?a(e,t,t.dataset.patternErrorMessage,n):a(e,t,t.validationMessage,n)},a=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error")),c=e.querySelector(r.submitButtonSelector);t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass),c.disabled=!0,c.classList.add(r.inactiveButtonClass)},u=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error")),o=e.querySelector(n.submitButtonSelector);t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="",o.disabled=!1,o.classList.remove(n.inactiveButtonClass)},i={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"a3bdff73-bbca-487b-9d79-560b8d0e6537","Content-Type":"application/json"}},s=function(){return fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector("#card-template").content,p=document.querySelector(".places").querySelector(".places__list"),m=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__edit-button"),y=(f.querySelector(".card").cloneNode(!0),p.querySelector(".card__delete-button"),document.querySelectorAll(".popup")),h=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_image"),b=S.querySelector(".popup__image"),q=S.querySelector(".popup__caption"),g=document.querySelector(".popup_type_avatar"),k=document.forms["new-place"],C=k.elements["place-name"],E=k.elements.link,L=k.querySelector(".popup__button"),j=document.forms["edit-profile"],x=j.elements.name,A=j.elements.description,P=j.querySelector(".popup__button"),U=document.forms["edit-avatar"],w=U.querySelector(".popup__input_type_avatar"),T=U.querySelector(".popup__button"),O=document.querySelector(".profile"),B=O.querySelector(".profile__image"),D=O.querySelector(".profile__info"),N=D.querySelector(".profile__title"),M=D.querySelector(".profile__description"),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function J(e,n){t(S),b.src=n,q.textContent=e}function H(e,t){(function(e){return fetch("".concat(i.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(t).then((function(){!function(e){e.remove()}(e)})).catch((function(e){console.log(e)}))}function z(e,t){var n,r=e.querySelector(".card__like-button"),o=e.querySelector(".card__like-counter");r.classList.contains("card__like-button_is-active")?(n=t._id,fetch("".concat(i.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){o.textContent=Array.from(e.likes).length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(t._id).then((function(e){o.textContent=Array.from(e.likes).length})).catch((function(e){console.log(e)}))}Promise.all([fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),s()]).then((function(t){var n=l(t,2),r=n[0],o=n[1];N.textContent=o.name,M.textContent=o.about,B.style["background-image"]="url('".concat(o.avatar,"')"),r.forEach((function(t){p.append(e(f,t.name,t.link,J,H,z,t,o._id))}))})).catch((function(e){console.log(e)})),y.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){o(e,I),r(e)}))})),y.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&(o(e,I),r(e))}))})),m.addEventListener("click",(function(){t(h)})),_.addEventListener("click",(function(){t(v),x.value=N.textContent,A.value=M.textContent})),B.addEventListener("click",(function(){t(g)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){n.addEventListener("input",(function(){c(e,n,t)}))}))}(t,e)}))}(I),j.addEventListener("submit",(function(e){var t,n;e.preventDefault(),P.textContent="Сохранение...",(t=x.value,n=A.value,fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){N.textContent=x.value,M.textContent=A.value,P.textContent="Сохранить",r(v)})).catch((function(e){console.log(e)}))})),k.addEventListener("submit",(function(t){var n,o;t.preventDefault(),L.textContent="Сохранение...",Promise.all([(n=C.value,o=E.value,fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify({name:n,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))),s()]).then((function(t){var n=l(t,2),o=n[0],c=n[1];p.prepend(e(f,o.name,o.link,J,H,z,o,c._id)),k.reset(),L.textContent="Сохранить",r(h)})).catch((function(e){console.log(e)}))})),U.addEventListener("submit",(function(e){var t;e.preventDefault(),T.textContent="Сохранение...",(t=w.value,fetch("".concat(i.baseUrl,"/users/me/avatar"),{headers:i.headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){B.style["background-image"]="url('".concat(w.value,"')"),U.reset(),T.textContent="Сохранить",r(g)})).catch((function(e){console.log(e)}))}))})();