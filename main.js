(()=>{"use strict";function e(e,r,n,o,c,a,u,i){var l=e.querySelector(".card").cloneNode(!0),s=l.querySelector(".card__image"),d=l.querySelector(".card__delete-button"),p=l.querySelector(".card__like-button"),f=l.querySelector(".card__like-counter"),_=Array.from(u.likes),y=Array.from(u.likes).length;return s.src=n,s.alt=r,l.querySelector(".card__title").textContent=r,f.textContent=y,u.owner._id===i?d.addEventListener("click",(function(){c(l,u._id)})):d.classList.add("card__delete-button-hide"),_.forEach((function(e){e._id===i&&t(p)})),s.addEventListener("click",(function(){o(r,n)})),p.addEventListener("click",(function(){a(l,u)})),l}function t(e){e.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function n(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}var c=function(e,t){var r=e.querySelector(t.submitButtonSelector);Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){i(e,r,t)})),l(r,t)},a=function(e,t,r){t.validity.valid?i(e,t,r):t.validity.patternMismatch?u(e,t,t.dataset.patternErrorMessage,r):u(e,t,t.validationMessage,r)},u=function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error")),c=e.querySelector(n.submitButtonSelector);t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass),l(c,n)},i=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error")),o=e.querySelector(r.submitButtonSelector);t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent="",o.disabled=!1,o.classList.remove(r.inactiveButtonClass)},l=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)};function s(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var d={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"a3bdff73-bbca-487b-9d79-560b8d0e6537","Content-Type":"application/json"}};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var f,_=document.querySelector("#card-template").content,y=document.querySelector(".places").querySelector(".places__list"),m=document.querySelector(".profile__add-button"),h=document.querySelector(".profile__edit-button"),v=(_.querySelector(".card").cloneNode(!0),y.querySelector(".card__delete-button"),document.querySelectorAll(".popup")),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_image"),E=q.querySelector(".popup__image"),C=q.querySelector(".popup__caption"),k=document.querySelector(".popup_type_avatar"),L=document.forms["new-place"],g=L.elements["place-name"],x=L.elements.link,A=L.querySelector(".popup__button"),U=document.forms["edit-profile"],w=U.elements.name,T=U.elements.description,j=U.querySelector(".popup__button"),B=document.forms["edit-avatar"],O=B.querySelector(".popup__input_type_avatar"),P=B.querySelector(".popup__button"),D=document.querySelector(".profile"),N=D.querySelector(".profile__image"),M=D.querySelector(".profile__info"),I=M.querySelector(".profile__title"),J=M.querySelector(".profile__description"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function z(e,t){r(q),E.src=t,E.alt=e,C.textContent=e}function $(e,t){(function(e){return fetch("".concat(d.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:d.headers}).then(s)})(t).then((function(){!function(e){e.remove()}(e)})).catch(console.error)}function F(e,r){var n,o=e.querySelector(".card__like-button"),c=e.querySelector(".card__like-counter");o.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(d.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:d.headers}).then(s)}(r._id).then((function(e){t(o),c.textContent=Array.from(e.likes).length})).catch(console.error):(n=r._id,fetch("".concat(d.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:d.headers}).then(s)).then((function(e){t(o),c.textContent=Array.from(e.likes).length})).catch((function(e){console.log(e)}))}Promise.all([fetch("".concat(d.baseUrl,"/cards"),{headers:d.headers}).then(s),fetch("".concat(d.baseUrl,"/users/me"),{headers:d.headers}).then(s)]).then((function(t){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,u=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(r,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];f=a._id,I.textContent=a.name,J.textContent=a.about,N.style["background-image"]="url('".concat(a.avatar,"')"),c.forEach((function(t){y.append(e(_,t.name,t.link,z,$,F,t,a._id))}))})).catch(console.error),v.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){o(e)}))})),v.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&o(e)}))})),m.addEventListener("click",(function(){c(S,H),r(S)})),h.addEventListener("click",(function(){c(b,H),r(b),w.value=I.textContent,T.value=J.textContent})),N.addEventListener("click",(function(){c(k,H),r(k)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){r.addEventListener("input",(function(){a(e,r,t)}))}))}(t,e)}))}(H),U.addEventListener("submit",(function(e){var t,r;e.preventDefault(),j.textContent="Сохранение...",(t=w.value,r=T.value,fetch("".concat(d.baseUrl,"/users/me"),{method:"PATCH",headers:d.headers,body:JSON.stringify({name:t,about:r})}).then(s)).then((function(){I.textContent=w.value,J.textContent=T.value,o(b)})).catch(console.error).finally((function(){j.textContent="Сохранить"}))})),L.addEventListener("submit",(function(t){var r,n;t.preventDefault(),A.textContent="Сохранение...",(r=g.value,n=x.value,fetch("".concat(d.baseUrl,"/cards"),{method:"POST",headers:d.headers,body:JSON.stringify({name:r,link:n})}).then(s)).then((function(t){y.prepend(e(_,t.name,t.link,z,$,F,t,f)),L.reset(),o(S)})).catch(console.error).finally((function(){A.textContent="Сохранить"}))})),B.addEventListener("submit",(function(e){var t;e.preventDefault(),P.textContent="Сохранение...",(t=O.value,fetch("".concat(d.baseUrl,"/users/me/avatar"),{headers:d.headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then(s)).then((function(){N.style["background-image"]="url('".concat(O.value,"')"),B.reset(),o(k)})).catch(console.error).finally((function(){P.textContent="Сохранить"}))}))})();