(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,a,t){e.exports=t(368)},149:function(e,a,t){},167:function(e,a){},367:function(e,a,t){},368:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(136),c=t.n(s),l=(t(149),t(81)),i=t(21),o=t(5),m=function(){return r.a.createElement("div",{className:"text-center my-5"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Espera mientras se carga tu pregunta...")))},u=function(e){var a=e.desc,t=e.children,n=e.id,s=e.removeStadistics,c="heading".concat(n),l="collapse".concat(n),i="accordion".concat(n);return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{id:i},r.a.createElement("div",{className:"card",style:{minWidth:"450px"}},r.a.createElement("div",{className:"card-header",id:c},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h3",{className:"align-self-center"},r.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#".concat(l),"aria-expanded":"true","aria-controls":l},a)),r.a.createElement("button",{className:"btn btn-outline-warning align-self-center",onClick:function(){return s(n)}},"Reiniciar estadisticas"))),r.a.createElement("div",{id:l,className:"collapse show","aria-labelledby":c,"data-parent":"#".concat(i)},r.a.createElement("div",{className:"card-body bg-light"},r.a.createElement("div",{className:"row"},t))))))},d=t(57),p=t.n(d),f=t(26),v=t.n(f),E=function(e){var a=e.value;return r.a.createElement(v.a.Context,null,r.a.createElement(v.a.Node,{inline:!0},a))},b=function(e){var a=e.value;return r.a.createElement(v.a.Context,{input:"ascii"},r.a.createElement(v.a.Text,{text:a}))},g=function(e){var a=e.question,t=e.withInput,n=e.p,s=e.ml,c=a.type,l=a.value,i=a.optionId;return r.a.createElement("div",{className:"ml-".concat(s," p-").concat(n)},r.a.createElement("label",{className:"form-check-label d-flex"},t?r.a.createElement("input",{type:"radio",className:"form-check-input options align-self-center",value:i,name:"options",id:"option".concat(i)}):r.a.createElement("span",{className:"pr-3"},"Opci\xf3n ",i,": "),r.a.createElement("div",{className:"align-self-center",style:{textWeight:"bold"}},"text"===c?r.a.createElement("span",null,l):"math"===c?r.a.createElement(E,{value:l}):r.a.createElement(b,{value:l}))))};g.defaultProps={withInput:!0,p:3,ml:3};var h=g,N=t(138),y=t.n(N),w=t(137),j=t.n(w),O=function(e){var a=e.answers;if(void 0===a)return null;var t=Array.from(Object.keys(a),function(e){return a[e]}),n=j()(t,"response"),s=void 0===n[1]?0:n[1].length,c=void 0===n[0]?0:n[0].length;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"15em",height:"15em",margin:"0 auto"}},r.a.createElement(y.a,{data:[{title:"Respuestas Correctas",value:s,color:"#269A47"},{title:"Respuestas Incorrectas",value:c,color:"#FF644D"}],animate:!0,lineWidth:20,paddingAngle:18,rounded:!0,label:!0,labelStyle:{fontSize:"15px",fontFamily:"sans-serif"},labelPosition:60})))},k=r.a.memo(function(e){var a=e.id,t=e.quesDes,s=e.answer,c=e.options,l=e.answers,i=Object(n.useMemo)(function(){return c.map(function(e,a){return r.a.createElement(h,{key:a,question:e,withInput:!1,p:1,ml:1})})},[]);return r.a.createElement("div",{className:"col-12 col-lg-4 col-md-6"},r.a.createElement("div",{className:"card text-white bg-dark mb-3"},r.a.createElement("div",{className:"card-header",style:{height:"290px",overflow:"auto"}},r.a.createElement("div",null,r.a.createElement("span",null,"Pregunta ",a)," ",p()(t,{transform:function(e,a){return"tag"===e.type&&"mathsymbolwrapper"===e.name?r.a.createElement(E,{key:a,value:e.attribs.value}):"tag"===e.type&&"mathsymbolwrappertext"===e.name?r.a.createElement(b,{key:a,value:e.attribs.value}):void 0}})),r.a.createElement("div",{className:"options mt-3"},i)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Respuesta correcta: Opci\xf3n ",s.toUpperCase()),r.a.createElement(O,{answers:l}))))}),q=t(28),x=t(139),C=t.n(x),I=function(e,a){var t=Object(n.useMemo)(function(){return C()(Array.from(Object.keys(e).filter(function(e){return"desc"!==e}),function(a){return Object(q.a)({},e[a],{quesId:a,shortestId:parseInt(a.replace("ques",""))})}),["shortestId"])},[e]),r=Object(n.useMemo)(function(){return t.filter(function(e){return parseInt(e.shortestId/10%10)===a})},[a]);return[t.length,r]},B=t(140),D=t.n(B),S=function(e){var a=e.question,t=e.answerDetails,s=Object(n.useState)(0),c=Object(o.a)(s,2),l=c[0],i=c[1],m=I(a,l),u=Object(o.a)(m,2),d=u[0],p=u[1].map(function(e){return r.a.createElement(k,{key:e.shortestId,id:e.shortestId,quesDes:e.quesDes,answer:e.quesAnswer,options:e.quesOptions,answers:t[e.quesId]})});return r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(D.a,{previousLabel:"anterior",nextLabel:"siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:(d+10)/10,onPageChange:function(e){i(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))),r.a.createElement("div",{className:"row"},p))},A=function(e){var a=e.questions,t=e.answers,n=e.removeStadistics,s=Object.keys(a).map(function(e){var s=a[e];return r.a.createElement(u,{key:e,id:e,desc:s.desc,removeStadistics:n},r.a.createElement(S,{question:s,answerDetails:t[e]}))});return r.a.createElement("div",{className:"row"},s)},R=t(141),F=t.n(R),L=function(e){var a=e.fireBaseDB,t=Object(n.useState)(!0),s=Object(o.a)(t,2),c=s[0],l=s[1],i=Object(n.useState)({}),u=Object(o.a)(i,2),d=u[0],p=u[1],f=Object(n.useState)({}),v=Object(o.a)(f,2),E=v[0],b=v[1];Object(n.useEffect)(function(){a.ref("/app/groups").once("value").then(function(e){p(e.val())}),a.ref("/app/groupsResults").on("value",function(e){var a=e.val();b(a)}),l(!1)},[]);return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Estadisticas"),r.a.createElement("p",{className:"lead"},"Preguntas, sus opciones y respuestas correctas, asi como un resumen del conocimiento de los estudiantes."))),r.a.createElement("div",{className:"container"},c||null===E||void 0===E||0===Object.entries(E).length?r.a.createElement(m,null):r.a.createElement(A,{questions:d,answers:E,removeStadistics:function(e){a.ref("/app/groupsResults/".concat(e)).remove()}})),r.a.createElement(F.a,null))},P=function(e){var a=e.type,t=e.title,n=e.message;return r.a.createElement("div",{className:"alert alert-dismissible alert-".concat(a)},r.a.createElement("h4",{className:"alert-heading"},t),r.a.createElement("p",{className:"mb-0"},n))},z=function(e){var a=e.options,t=e.onClick,s=Object(n.useState)(""),c=Object(o.a)(s,2),l=c[0],i=c[1],m=Object(n.useState)(!1),u=Object(o.a)(m,2),d=u[0],p=u[1],f=a.map(function(e){return r.a.createElement(h,{key:e.optionId,question:e,p:2})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("fieldset",{className:"form-group",onClick:function(e){e.target.classList.contains("options")&&i(e.target.value)}},r.a.createElement("legend",null,"Opciones"),f),r.a.createElement("div",{className:"text-right"},r.a.createElement("input",{type:"button",className:"btn btn-primary btn-lg",value:"Aceptar",onClick:function(){""===l?p(!0):t(l)}})),d?r.a.createElement("div",{className:"mt-3"},r.a.createElement(P,{type:"warning",title:"No hay respuesta \ud83e\udd28",message:"Debes marcar al menos una (\u261d\ufe0f) opci\xf3n para continuar."})):null)},T=function(e){var a=e.quesAnswer,t=e.quesDes,s=e.quesOptions,c=e.group,l=e.ques,i=e.fireBaseDB,m=Object(n.useState)({didAnswer:!1,optionChecked:""}),u=Object(o.a)(m,2),d=u[0],f=u[1];return d.didAnswer?d.optionChecked===a?r.a.createElement(P,{type:"success",title:"En hora buena \ud83d\ude03",message:"Tu respuesta fue correcta, sigue demostrando tus habilidades \ud83d\udc4c."}):r.a.createElement(P,{type:"danger",title:"uppps \ud83d\ude41",message:"Tu respuesta fue incorrecta, mejor suerte para la proxima \ud83d\udc4d."}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card border-primary mb-3",style:{width:"35rem"}},r.a.createElement("div",{className:"card-header"},p()(t,{transform:function(e,a){return"tag"===e.type&&"mathsymbolwrapper"===e.name?r.a.createElement(E,{key:a,value:e.attribs.value}):"tag"===e.type&&"mathsymbolwrappertext"===e.name?r.a.createElement(b,{key:a,value:e.attribs.value}):void 0}})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Selecciona tu respuesta ",r.a.createElement("span",{role:"img","aria-label":" Check"},"\u2714\ufe0f")),r.a.createElement(z,{options:s,onClick:function(e){var t={response:e===a?1:0},n=i.ref().child("/app/groupsResults/".concat(c,"/").concat(l)).push().key,r={};r["/app/groupsResults/".concat(c,"/").concat(l,"/").concat(n)]=t,i.ref().update(r),f({didAnswer:!0,optionChecked:e})}}))))},M=function(e){var a=e.children;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},a))))},U=function(e){var a=e.params,t=e.fireBaseDB,s=Object(n.useState)({loading:!0,failed:!1,quesAnswer:"",quesDes:"",quesOptions:[]}),c=Object(o.a)(s,2),l=c[0],i=c[1];return Object(n.useEffect)(function(){var e="/app/groups/".concat(a.group);t.ref(e).once("value").then(function(e){if(null===e.val())i(Object(q.a)({},l,{loading:!1,failed:!0}));else{var t=e.val()[a.ques];i(void 0===t||null===t?Object(q.a)({},l,{loading:!1,failed:!0}):Object(q.a)({},t,{loading:!1,failed:!1}))}})},[]),r.a.createElement(M,null,l.loading?r.a.createElement("div",{className:"h3"},r.a.createElement(m,null)):l.failed?r.a.createElement(P,{type:"light",title:"Ups.! \ud83d\ude44",message:"La pregunta no pudo ser encontrada. \ud83e\udd37"}):r.a.createElement(T,Object.assign({},l,a,{fireBaseDB:t})))},W=Object(i.e)(function(e){var a=e.match,t=e.fireBaseDB,n=a.params;return r.a.createElement(U,{fireBaseDB:t,params:n})}),H=t(83),J=(t(364),function(){return H.initializeApp({apiKey:"AIzaSyA0_QZHdFSdqdrj8u5KTtpxkwH6qsfdyz0",authDomain:"math-game-8294f.firebaseapp.com",databaseURL:"https://math-game-8294f.firebaseio.com",projectId:"math-game-8294f",storageBucket:"math-game-8294f.appspot.com",messagingSenderId:"254817267920",appId:"1:254817267920:web:182ce1fcc2004057"}),H.database()}),K=(t(367),function(){var e=J();return r.a.createElement(l.a,{basename:"/qr-reader-math-game"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/:group/:ques"},r.a.createElement(W,{fireBaseDB:e})),r.a.createElement(i.a,{path:"/admin"},r.a.createElement(L,{fireBaseDB:e}))))});c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.0eef6f52.chunk.js.map