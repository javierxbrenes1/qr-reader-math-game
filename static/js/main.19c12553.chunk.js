(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,a,t){e.exports=t(365)},148:function(e,a,t){},166:function(e,a){},364:function(e,a,t){},365:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(136),s=t.n(c),l=(t(148),t(81)),i=t(21),o=t(5),m=function(){return r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Espera mientras se carga tu pregunta..."))},u=function(e){var a=e.desc,t=e.children,n=e.id,c="heading".concat(n),s="collapse".concat(n),l="accordion".concat(n);return r.a.createElement("div",{className:"col-12 mt-4"},r.a.createElement("div",{id:l},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",id:c},r.a.createElement("h3",null,r.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#".concat(s),"aria-expanded":"true","aria-controls":s},a))),r.a.createElement("div",{id:s,className:"collapse show","aria-labelledby":c,"data-parent":"#".concat(l)},r.a.createElement("div",{className:"card-body bg-light"},r.a.createElement("div",{className:"row"},t))))))},d=t(28),p=t(57),f=t.n(p),v=t(26),E=t.n(v),b=function(e){var a=e.value;return r.a.createElement(E.a.Context,null,r.a.createElement(E.a.Node,{inline:!0},a))},g=function(e){var a=e.value;return r.a.createElement(E.a.Context,{input:"ascii"},r.a.createElement(E.a.Text,{text:a}))},h=function(e){var a=e.question,t=e.withInput,n=e.p,c=e.ml,s=a.type,l=a.value,i=a.optionId;return r.a.createElement("div",{className:"ml-".concat(c," p-").concat(n)},r.a.createElement("label",{className:"form-check-label d-flex"},t?r.a.createElement("input",{type:"radio",className:"form-check-input options align-self-center",value:i,name:"options",id:"option".concat(i)}):r.a.createElement("span",{className:"pr-3"},"Opci\xf3n ",i,": "),r.a.createElement("div",{className:"align-self-center",style:{textWeight:"bold"}},"text"===s?r.a.createElement("span",null,l):"math"===s?r.a.createElement(b,{value:l}):r.a.createElement(g,{value:l}))))};h.defaultProps={withInput:!0,p:3,ml:3};var y=h,N=t(138),w=t.n(N),O=t(137),j=t.n(O),k=function(e){var a=e.answers;if(void 0===a)return null;var t=Array.from(Object.keys(a),function(e){return a[e]}),n=j()(t,"response"),c=void 0===n[1]?0:n[1].length,s=void 0===n[0]?0:n[0].length;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"15em",height:"15em",margin:"0 auto"}},r.a.createElement(w.a,{data:[{title:"Respuestas Correctas",value:c,color:"#269A47"},{title:"Respuestas Incorrectas",value:s,color:"#FF644D"}],animate:!0,lineWidth:20,paddingAngle:18,rounded:!0,label:!0,labelStyle:{fontSize:"15px",fontFamily:"sans-serif"},labelPosition:60})))},q=r.a.memo(function(e){var a=e.id,t=e.quesDes,c=e.answer,s=e.options,l=e.answers,i=Object(n.useMemo)(function(){return s.map(function(e,a){return r.a.createElement(y,{key:a,question:e,withInput:!1,p:1,ml:1})})},[]);return r.a.createElement("div",{className:"col-12 col-lg-4 col-md-6"},r.a.createElement("div",{className:"card text-white bg-dark mb-3"},r.a.createElement("div",{className:"card-header",style:{height:"290px",overflow:"auto"}},r.a.createElement("div",null,r.a.createElement("span",null,"Pregunta ",a)," ",f()(t,{transform:function(e,a){return"tag"===e.type&&"mathsymbolwrapper"===e.name?r.a.createElement(b,{key:a,value:e.attribs.value}):"tag"===e.type&&"mathsymbolwrappertext"===e.name?r.a.createElement(g,{key:a,value:e.attribs.value}):void 0}})),r.a.createElement("div",{className:"options mt-3"},i)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Respuesta correcta: Opci\xf3n ",c.toUpperCase()),r.a.createElement(k,{answers:l}))))}),x=t(139),I=t.n(x),C=t(140),B=t.n(C),D=function(e){var a=e.question,t=e.answerDetails,c=Object(n.useState)(0),s=Object(o.a)(c,2),l=s[0],i=s[1],m=function(e,a){var t=Object(n.useMemo)(function(){return I()(Array.from(Object.keys(e).filter(function(e){return"desc"!==e}),function(a){return Object(d.a)({},e[a],{quesId:a,shortestId:parseInt(a.replace("ques",""))})}),["shortestId"])},[]),r=Object(n.useMemo)(function(){return t.filter(function(e){return parseInt(e.shortestId/10%10)===a})},[a]);return[t.length,r]}(a,l),u=Object(o.a)(m,2),p=u[0],f=u[1].map(function(e){return r.a.createElement(q,{key:e.shortestId,id:e.shortestId,quesDes:e.quesDes,answer:e.quesAnswer,options:e.quesOptions,answers:t[e.quesId]})});return r.a.createElement("div",{className:"d-flex flex-column container-fluid"},r.a.createElement("div",null,r.a.createElement(B.a,{previousLabel:"anterior",nextLabel:"siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:(p+10)/10,onPageChange:function(e){i(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})),r.a.createElement("div",{className:"row"},f))},A=function(e){var a=e.questions,t=e.answers,n=Object.keys(a).map(function(e){var n=a[e];return r.a.createElement(u,{key:e,id:e,desc:n.desc},r.a.createElement(D,{question:n,answerDetails:t[e]}))});return r.a.createElement("div",{className:"row w-100"},n)},S=function(e){var a=e.fireBaseDB,t=Object(n.useState)(!0),c=Object(o.a)(t,2),s=c[0],l=c[1],i=Object(n.useState)({}),u=Object(o.a)(i,2),d=u[0],p=u[1],f=Object(n.useState)({}),v=Object(o.a)(f,2),E=v[0],b=v[1];return Object(n.useEffect)(function(){a.ref("/app/groups").once("value").then(function(e){p(e.val())}),a.ref("/app/groupsResults").on("value",function(e){var a=e.val();b(a)}),l(!1)},[]),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},s||null===E||void 0===E||0===Object.entries(E).length?r.a.createElement(m,null):r.a.createElement(A,{questions:d,answers:E})))))},R=function(e){var a=e.type,t=e.title,n=e.message;return r.a.createElement("div",{className:"alert alert-dismissible alert-".concat(a)},r.a.createElement("h4",{className:"alert-heading"},t),r.a.createElement("p",{className:"mb-0"},n))},F=function(e){var a=e.options,t=e.onClick,c=Object(n.useState)(""),s=Object(o.a)(c,2),l=s[0],i=s[1],m=Object(n.useState)(!1),u=Object(o.a)(m,2),d=u[0],p=u[1],f=a.map(function(e){return r.a.createElement(y,{key:e.optionId,question:e,p:2})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("fieldset",{className:"form-group",onClick:function(e){e.target.classList.contains("options")&&i(e.target.value)}},r.a.createElement("legend",null,"Opciones"),f),r.a.createElement("div",{className:"text-right"},r.a.createElement("input",{type:"button",className:"btn btn-primary btn-lg",value:"Aceptar",onClick:function(){""===l?p(!0):t(l)}})),d?r.a.createElement("div",{className:"mt-3"},r.a.createElement(R,{type:"warning",title:"No hay respuesta \ud83e\udd28",message:"Debes marcar al menos una (\u261d\ufe0f) opci\xf3n para continuar."})):null)},L=function(e){var a=e.quesAnswer,t=e.quesDes,c=e.quesOptions,s=e.group,l=e.ques,i=e.fireBaseDB,m=Object(n.useState)({didAnswer:!1,optionChecked:""}),u=Object(o.a)(m,2),d=u[0],p=u[1];return d.didAnswer?d.optionChecked===a?r.a.createElement(R,{type:"success",title:"En hora buena \ud83d\ude03",message:"Tu respuesta fue correcta, sigue demostrando tus habilidades \ud83d\udc4c."}):r.a.createElement(R,{type:"danger",title:"uppps \ud83d\ude41",message:"Tu respuesta fue incorrecta, mejor suerte para la proxima \ud83d\udc4d."}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card border-primary mb-3",style:{width:"35rem"}},r.a.createElement("div",{className:"card-header"},f()(t,{transform:function(e,a){return"tag"===e.type&&"mathsymbolwrapper"===e.name?r.a.createElement(b,{key:a,value:e.attribs.value}):"tag"===e.type&&"mathsymbolwrappertext"===e.name?r.a.createElement(g,{key:a,value:e.attribs.value}):void 0}})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Selecciona tu respuesta ",r.a.createElement("span",{role:"img","aria-label":" Check"},"\u2714\ufe0f")),r.a.createElement(F,{options:c,onClick:function(e){var t={response:e===a?1:0},n=i.ref().child("/app/groupsResults/".concat(s,"/").concat(l)).push().key,r={};r["/app/groupsResults/".concat(s,"/").concat(l,"/").concat(n)]=t,i.ref().update(r),p({didAnswer:!0,optionChecked:e})}}))))},z=function(e){var a=e.children;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},a))))},P=function(e){var a=e.params,t=e.fireBaseDB,c=Object(n.useState)({loading:!0,failed:!1,quesAnswer:"",quesDes:"",quesOptions:[]}),s=Object(o.a)(c,2),l=s[0],i=s[1];return Object(n.useEffect)(function(){var e="/app/groups/".concat(a.group);t.ref(e).once("value").then(function(e){if(null===e.val())i(Object(d.a)({},l,{loading:!1,failed:!0}));else{var t=e.val()[a.ques];i(void 0===t||null===t?Object(d.a)({},l,{loading:!1,failed:!0}):Object(d.a)({},t,{loading:!1,failed:!1}))}})},[]),r.a.createElement(z,null,l.loading?r.a.createElement("div",{className:"h3"},r.a.createElement(m,null)):l.failed?r.a.createElement(R,{type:"light",title:"Ups.! \ud83d\ude44",message:"La pregunta no pudo ser encontrada. \ud83e\udd37"}):r.a.createElement(L,Object.assign({},l,a,{fireBaseDB:t})))},T=Object(i.e)(function(e){var a=e.match,t=e.fireBaseDB,n=a.params;return r.a.createElement(P,{fireBaseDB:t,params:n})}),M=t(83),U=(t(361),function(){return M.initializeApp({apiKey:"AIzaSyA0_QZHdFSdqdrj8u5KTtpxkwH6qsfdyz0",authDomain:"math-game-8294f.firebaseapp.com",databaseURL:"https://math-game-8294f.firebaseio.com",projectId:"math-game-8294f",storageBucket:"math-game-8294f.appspot.com",messagingSenderId:"254817267920",appId:"1:254817267920:web:182ce1fcc2004057"}),M.database()}),H=(t(364),function(){var e=U();return r.a.createElement(l.a,{basename:"/qr-reader-math-game"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/:group/:ques"},r.a.createElement(T,{fireBaseDB:e})),r.a.createElement(i.a,{path:"/admin"},r.a.createElement(S,{fireBaseDB:e}))))});s.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.19c12553.chunk.js.map