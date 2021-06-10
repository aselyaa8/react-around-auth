(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),i=(a(11),a(2)),o=a.p+"static/media/logo.4e8e0a1d.svg",l=a(0);var d=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,alt:"Around Kazakhstan",className:"logo"})})},u=a(5),m=a(6),h=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(u.a)(this,e),this.baseUrl=a,this.headers=n}return Object(m.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this.baseUrl+"/users/me",{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e){var t=e.name,a=e.about;return console.log(t,a),fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:a})}).then(this._checkResponse)}},{key:"updateUserAvatar",value:function(e){return fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this.baseUrl+"/cards",{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"postCard",value:function(e){return fetch(this.baseUrl+"/cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this.headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch(this.baseUrl+"/cards/likes/"+e,{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch(this.baseUrl+"/cards/likes/"+e,{method:"DELETE",headers:this.headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-9",headers:{authorization:"1700817e-a1e9-4638-acf5-4cd690372eaf","Content-Type":"application/json"}});var b=function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("button",{"aria-label":"delete",type:"button",className:"card__delete-button"}),Object(l.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}}),Object(l.jsx)("h2",{className:"card__text",children:e.card.name}),Object(l.jsxs)("div",{className:"card__like",children:[Object(l.jsx)("button",{"aria-label":"Like",type:"button",className:"card__like-button card__like-button_disabled"}),Object(l.jsx)("div",{className:"card__like-overlay"}),Object(l.jsx)("p",{className:"card__like-count",children:e.card.likes.length})]})]})};var j=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),d=o[0],u=o[1],m=Object(n.useState)(""),j=Object(i.a)(m,2),p=j[0],_=j[1],f=Object(n.useState)([]),O=Object(i.a)(f,2),x=O[0],v=O[1];return Object(n.useEffect)((function(){h.getUserInfo().then((function(e){c(e.name),u(e.about),_(e.avatar)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){h.getInitialCards().then((function(e){var t=e.map((function(e){return{name:e.name,link:e.link,likes:e.likes,ownerId:e.owner._id,cardId:e._id}}));v(t)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-container",children:[Object(l.jsx)("img",{src:p,alt:"portrait of user",className:"profile__avatar"}),Object(l.jsx)("div",{className:"profile__avatar-edit-container",children:Object(l.jsx)("button",{"aria-label":"Edit",type:"button",className:"profile__avatar-edit",onClick:e.onEditAvatar})})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:s}),Object(l.jsx)("button",{"aria-label":"Edit",type:"button",className:"profile__edit-button",onClick:e.onEditProfile}),Object(l.jsx)("p",{className:"profile__description",children:d})]}),Object(l.jsx)("button",{"aria-label":"Add",type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"cards",children:x.map((function(t,a){return Object(l.jsx)(b,{card:t,onCardClick:e.onCardClick},a)}))})]})};var p=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Around The U.S."})})};var _=function(e){var t="modal modal-".concat(e.name);return t+=e.isOpen?" modal_opened":"",Object(l.jsx)("div",{className:t,children:Object(l.jsxs)("div",{className:"modal__container",children:[Object(l.jsxs)("form",{className:"form",name:"edit-profile",children:[Object(l.jsx)("h2",{className:"form__heading",children:e.title}),e.children,Object(l.jsx)("button",{"aria-label":"Submit",type:"submit",className:"form__save-button",children:"Save"})]}),Object(l.jsx)("button",{"aria-label":"Close",type:"button",className:"modal__close-button",onClick:e.onClose})]})})};var f=function(e){var t=0!==Object.keys(e.card).length?"modal_opened":"";return Object(l.jsx)("div",{className:"modal modal-figure ".concat(t),children:Object(l.jsxs)("div",{className:"modal__container",children:[Object(l.jsxs)("figure",{className:"modal__figure",children:[Object(l.jsx)("img",{src:e.card.link,alt:e.card.name,className:"modal__image"}),Object(l.jsx)("figcaption",{className:"modal__image-caption",children:e.card.name})]}),Object(l.jsx)("button",{"aria-label":"Close",type:"button",className:"modal__close-button",onClick:e.onClose})]})})};var O=function(){function e(){x(!1),c(!1),m(!1),g({})}var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),u=o[0],m=o[1],h=Object(n.useState)(!1),b=Object(i.a)(h,2),O=b[0],x=b[1],v=Object(n.useState)({}),N=Object(i.a)(v,2),k=N[0],g=N[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(d,{}),Object(l.jsx)(j,{onEditProfile:function(e,t){c(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){var t=e.name,a=e.link;g({name:t,link:a})}}),Object(l.jsx)(p,{}),Object(l.jsxs)(_,{isOpen:s,onClose:e,title:"Edit profile",name:"edit",children:[Object(l.jsx)("input",{id:"name-input",type:"text",name:"name",className:"form__input form__input_type_name",minLength:"2",maxLength:"40",placeholder:"Name",required:!0}),Object(l.jsx)("span",{id:"name-input-error",className:"form__input-error"}),Object(l.jsx)("input",{id:"description-input",type:"text",name:"about",className:"form__input form__input_type_description",minLength:"2",maxLength:"200",placeholder:"About",required:!0}),Object(l.jsx)("span",{id:"description-input-error",className:"form__input-error"})]}),Object(l.jsxs)(_,{isOpen:u,onClose:e,title:"New place",name:"add",inputOne:"Title",inputTwo:"Image link",children:[Object(l.jsx)("input",{id:"name-input",type:"text",name:"name",className:"form__input form__input_type_name",minLength:"2",maxLength:"40",placeholder:"Title",required:!0}),Object(l.jsx)("span",{id:"name-input-error",className:"form__input-error"}),Object(l.jsx)("input",{id:"description-input",type:"url",name:"about",className:"form__input form__input_type_description",minLength:"2",maxLength:"200",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{id:"description-input-error",className:"form__input-error"})]}),Object(l.jsxs)(_,{isOpen:O,onClose:e,title:"Change profile picture",name:"avatar-edit",children:[Object(l.jsx)("input",{id:"description-input",type:"url",name:"about",className:"form__input form__input_type_description",minLength:"2",maxLength:"200",placeholder:"url",required:!0}),Object(l.jsx)("span",{id:"description-input-error",className:"form__input-error"})]}),Object(l.jsx)(f,{card:k,onClose:e}),Object(l.jsx)("div",{className:"modal modal-delete-confirm",children:Object(l.jsxs)("div",{className:"modal__container",children:[Object(l.jsxs)("form",{className:"form form-delete-confirm",name:"delete-confirm",children:[Object(l.jsx)("h2",{className:"form__heading",children:"Are you sure?"}),Object(l.jsx)("button",{"aria-label":"delete-confirm",type:"submit",className:"form__save-button",children:"Yes"})]}),Object(l.jsx)("button",{"aria-label":"Close",type:"button",className:"modal__close-button"})]})})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.c805d384.chunk.js.map