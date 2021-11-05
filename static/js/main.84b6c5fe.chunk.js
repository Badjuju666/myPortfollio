(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=(n(11),n(2)),l=n(0);var j=function(e){return Object(l.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(l.jsx)("h1",{children:"Julian Graves"}),e.children]})};function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var u=function(e){var t=e.pages,n=void 0===t?[]:t,r=e.setCurrentPage,a=e.currentPage;return Object(c.useEffect)((function(){document.title=o(a.name)}),[a]),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(l.jsx)("li",{className:"mx-5 ".concat(a.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return r(e)},children:o(e.name)})},e.name)}))})})};var d=function(){return Object(l.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/Badjuju666"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/julian-graves-218812a3/"}].map((function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:e.name})},e.name)}))})},b=function(e){return Object(l.jsx)("div",{children:e.children})},m=n.p+"static/media/itme.807b9aa4.jpg";var h=function(){return Object(l.jsxs)("section",{classname:"my-5",children:[Object(l.jsx)("img",{classname:"my-2",src:m,style:{width:"20%"},alt:"cover avatar"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:"Welcome to my webpage, I am a full stack web-developer. With my freetime I practice and build my skills by working on personal projects or running through older projects from the time I spent with UCLA's Full Stack Coding Bootcamp."})})]})},x=n.p+"static/media/RunBuddy.eac1c46e.png";var O=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Run Buddy"}),Object(l.jsx)("p",{children:"Run Buddy"}),Object(l.jsx)("div",{className:"flex=row",children:Object(l.jsx)("img",{src:x,style:{width:"50%"},alt:"Run Buddy Application Screenshot",className:"img-thumbnail mx-1"})})]})},f=n(3),p=n(5);var g=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),j=i[0],o=i[1],u=n.name,d=n.email,b=n.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));j||(r(Object(p.a)(Object(p.a)({},n),{},Object(f.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h3",{"data-testid":"h1tag",children:"Send me anything"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.prevenDefault(),j||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:m})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:m})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:m})]}),j&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:j})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var v=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Links"}),Object(l.jsx)("a",{href:"https://docs.google.com/document/d/1hb4v_eMdKvalkqiQQ9Lw7_u8j_qmJeMxBvTFxG1IW7w/edit?usp=sharing",children:"Resume Link"}),Object(l.jsx)("h2",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"Javascript"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h2",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySql, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})};var w=function(e){var t=e.currentPage;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:o(t.name)}),Object(l.jsx)(b,{children:function(){switch(t.name){case"about me":return Object(l.jsx)(h,{});case"portfolio":return Object(l.jsx)(O,{});case"contact":return Object(l.jsx)(g,{});case"resume":return Object(l.jsx)(v,{});default:return Object(l.jsx)(h,{})}}()})]})};n(13);var y=function(){var e=Object(c.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(s.a)(e,1)[0],n=Object(c.useState)(t[0]),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{children:Object(l.jsx)(u,{pages:t,setCurrentPage:i,currentPage:a})}),Object(l.jsx)("main",{children:Object(l.jsx)(w,{currentPage:a})}),Object(l.jsx)(d,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),k()}},[[14,1,2]]]);
//# sourceMappingURL=main.84b6c5fe.chunk.js.map