(this["webpackJsonplearning-management-system"]=this["webpackJsonplearning-management-system"]||[]).push([[0],{57:function(e,t,a){e.exports=a(70)},62:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(62),a(10)),u=a(7),i=a(76),s=a(79),m=a(49),d=a(50),E=a(80),b=a(81),f=a(78),g=a(77),h=a(54),p=function(e){var t=e.text,a=e.focus,n=e.name,c=e.onChange,l=e.type,o=e.required;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"mb-3"},r.a.createElement(i.a.Prepend,null,r.a.createElement(i.a.Text,{id:"basic-addon1"},t)),r.a.createElement(m.a,{type:l,name:n,placeholder:t,"aria-label":t,"aria-describedby":"basic-addon1",autoFocus:a,onChange:c,required:o})))},v=function(e){var t=e.text;return r.a.createElement("h1",null,t)},j=function(e){var t=e.variant,a=e.text,n=e.className,c=e.onClick;return r.a.createElement(d.a,{variant:t,className:n,onClick:c},a)},O=function(e){var t=e.text,a=e.onClick;return r.a.createElement(j,{variant:"primary",text:t,onClick:a})},w=function(e){var t=e.text;return r.a.createElement(j,{variant:"secondary",text:t,className:"ml-4"})},y=function(e){var t=e.title,a=e.children,n=e.lgShow,c=e.setLgShow;return r.a.createElement(f.a,{size:"lg",show:n,onHide:function(){return c(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"example-modal-sizes-title-lg"},t)),r.a.createElement(f.a.Body,null,a),r.a.createElement(f.a.Footer,null,r.a.createElement(O,{text:"Submit"}),r.a.createElement(w,{text:"Close"})))},C=function(e){var t=e.title,a=e.options,c=e.setSelectedValue,l=Object(n.useState)(""),u=Object(o.a)(l,2),s=u[0],d=u[1];return r.a.createElement(i.a,{className:"mb-3"},r.a.createElement(g.a,{as:i.a.Prepend,variant:"outline-secondary",title:t,id:"input-group-dropdown-1"},(a||[]).map((function(e){return r.a.createElement(h.a.Item,{key:e.id,id:e.id,href:"#",onClick:function(e){return function(e){d(e.target.innerText),c&&c(Number(e.target.id))}(e)}},e.name)}))),r.a.createElement(m.a,{"aria-describedby":"basic-addon1",value:s}))};a(67);var x=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)({username:"",password:""}),c=Object(o.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)({username:"",password:"",error:""}),m=Object(o.a)(s,2),d=m[0],E=m[1],b=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"username":return n.length<1?(E(Object(u.a)(Object(u.a)({},d),{},{username:"Please provide your username!"})),i(Object(u.a)(Object(u.a)({},l),{},{username:""}))):(i(Object(u.a)(Object(u.a)({},l),{},{username:n})),E(Object(u.a)(Object(u.a)({},d),{},{username:"",error:""})));case"password":return n.length<1?(E(Object(u.a)(Object(u.a)({},d),{},{password:"Please provide your password!"})),i(Object(u.a)(Object(u.a)({},l),{},{password:""}))):(i(Object(u.a)(Object(u.a)({},l),{},{password:n})),E(Object(u.a)(Object(u.a)({},d),{},{password:"",error:""})))}};return r.a.createElement("div",{className:"login"},r.a.createElement(v,{text:"Please Login"}),d.error?r.a.createElement("p",null,d.error):"",r.a.createElement(p,{type:"text",name:"username",text:"Username",focus:!0,value:l.username,onChange:function(e){return b(e)},required:!0}),d.username?r.a.createElement("p",null,d.username):"",r.a.createElement(p,{type:"password",name:"password",text:"Password",value:l.password,onChange:function(e){return b(e)},required:!0}),d.password?r.a.createElement("p",null,d.password):"",r.a.createElement(O,{text:"Login",onClick:function(){return function(e,t,a,n){if(0!==t.username.length&&0!==t.password.length&&0===a.username.length&&0===a.password.length&&0===a.error.length)return document.cookie="loggedin=true",e(!0);n(Object(u.a)(Object(u.a)({},a),{},{error:"Please provide both your username and password!"}))}(t,l,d,E)}}),r.a.createElement(w,{text:"Reset"}))},k=function(e){var t=e.text,a=e.onClick;return r.a.createElement(j,{variant:"outline-light",text:t,onClick:a})},S=function(e){var t=e.setIsAuthenticated,a=e.setCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{bg:"primary",variant:"dark"},r.a.createElement(b.a.Brand,{href:"#home"},"Navbar"),r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(E.a.Link,{href:"#home",onClick:function(){return a(1)}},"Home"),r.a.createElement(E.a.Link,{href:"#courses",onClick:function(){return a(2)}},"Courses"),r.a.createElement(E.a.Link,{href:"#students",onClick:function(){return a(3)}},"Students")),r.a.createElement(s.a,{inline:!0},r.a.createElement(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(k,{variant:"outline-light",text:"Search"})),r.a.createElement(E.a.Link,{href:"#",style:{color:"white"},onClick:function(){document.cookie="loggedin=false",t(!1)}},"Logout")))},N=function(){return r.a.createElement("div",null,"Dashboard")},I=function(){return r.a.createElement("div",{className:"addStudent"},r.a.createElement(p,{type:"number",name:"studentId",text:"Student ID",focus:!0}),r.a.createElement(C,{title:"Course name",options:[{id:1,name:"React"},{id:2,name:"SQL"},{id:3,name:"Nodejs"}]}))},L=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,"Student ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,{text:"Add a student",onClick:function(){return c(!a)}}),r.a.createElement(y,{title:"Create New Course",lgShow:a,setLgShow:c},r.a.createElement(I,null)))},P=function(){return r.a.createElement("div",null,"List of courses")},A=a(36),B=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(o.a)(l,2),s=i[0],m=i[1],d=function(e){var t=e.target.name,a=e.target.value;m(Object(u.a)(Object(u.a)({},s),{},Object(A.a)({},t,a)))};return r.a.createElement("div",{className:"createCourse"},r.a.createElement(p,{type:"text",name:"courseName",text:"Course name",focus:!0,onChange:function(e){return d(e)}}),r.a.createElement(C,{title:"Category",options:[{id:1,name:"Frontend"},{id:2,name:"Backend"},{id:3,name:"Database"}],setSelectedValue:function(e){c(e)}}),r.a.createElement(C,{title:"Sub Category",options:[{id:1,categoryId:1,name:"React"},{id:2,categoryId:1,name:"Angular"},{id:3,categoryId:1,name:"Vue"},{id:4,categoryId:2,name:"Nodejs"},{id:5,categoryId:2,name:"PHP"},{id:6,categoryId:3,name:"MongoDB"},{id:7,categoryId:3,name:"MySQL"}].filter((function(e){return e.categoryId===a}))}),r.a.createElement(p,{type:"number",name:"fee",text:"Fees",onChange:function(e){return d(e)}}))},F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,"Course ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,{text:"Create New Course",onClick:function(){return c(!a)}}),r.a.createElement(P,null),r.a.createElement(y,{title:"Create New Course",lgShow:a,setLgShow:c},r.a.createElement(B,null)))},q=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)(1),c=Object(o.a)(a,2),l=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{setIsAuthenticated:t,setCurrentPage:u}),function(){switch(l){case 1:return r.a.createElement(N,null);case 2:return r.a.createElement(F,null);case 3:return r.a.createElement(L,null);default:return r.a.createElement(N,null)}}())};a(68),a(69);var D=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){"true"===l("loggedin")&&c(!0)}),[a]);var l=function(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()};return r.a.createElement("div",{className:"App"},a?r.a.createElement(q,{setIsAuthenticated:c}):r.a.createElement(x,{setIsAuthenticated:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.129b02c0.chunk.js.map