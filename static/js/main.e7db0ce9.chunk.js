(this["webpackJsonplearning-management-system"]=this["webpackJsonplearning-management-system"]||[]).push([[0],{57:function(e,t,a){e.exports=a(70)},62:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(62),a(8)),u=a(76),i=a(79),s=a(49),m=a(50),d=a(80),E=a(81),f=a(78),g=a(77),h=a(54),b=function(e){var t=e.text,a=e.focus,n=e.name,c=e.onChange,l=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"mb-3"},r.a.createElement(u.a.Prepend,null,r.a.createElement(u.a.Text,{id:"basic-addon1"},t)),r.a.createElement(s.a,{type:l,name:n,placeholder:t,"aria-label":t,"aria-describedby":"basic-addon1",autoFocus:a,onChange:c})))},v=function(e){var t=e.text;return r.a.createElement("h1",null,t)},p=function(e){var t=e.variant,a=e.text,n=e.className,c=e.onClick;return r.a.createElement(m.a,{variant:t,className:n,onClick:c},a)},y=function(e){var t=e.text,a=e.onClick;return r.a.createElement(p,{variant:"primary",text:t,onClick:a})},C=function(e){var t=e.text;return r.a.createElement(p,{variant:"secondary",text:t,className:"ml-4"})},x=function(e){var t=e.title,a=e.children,n=e.lgShow,c=e.setLgShow;return r.a.createElement(f.a,{size:"lg",show:n,onHide:function(){return c(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"example-modal-sizes-title-lg"},t)),r.a.createElement(f.a.Body,null,a),r.a.createElement(f.a.Footer,null,r.a.createElement(y,{text:"Submit"}),r.a.createElement(C,{text:"Close"})))},S=function(e){var t=e.title,a=e.options,c=e.setSelectedValue,l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],d=i[1];return r.a.createElement(u.a,{className:"mb-3"},r.a.createElement(g.a,{as:u.a.Prepend,variant:"outline-secondary",title:t,id:"input-group-dropdown-1"},(a||[]).map((function(e){return r.a.createElement(h.a.Item,{key:e.id,id:e.id,href:"#",onClick:function(e){return function(e){d(e.target.innerText),c&&c(Number(e.target.id))}(e)}},e.name)}))),r.a.createElement(s.a,{"aria-describedby":"basic-addon1",value:m}))},w=(a(67),function(e){var t=e.setIsAuthenticated,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],d=s[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),g=f[0],h=f[1],p=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"username":return n.length<1?(h("Please provide your username"),u("")):u(n);case"password":return n.length<1?(h("Please provide your password"),d("")):d(n)}};return r.a.createElement("div",{className:"login"},r.a.createElement(v,{text:"Please Login"}),g?r.a.createElement("p",null,g):"",r.a.createElement(b,{type:"text",name:"username",text:"Username",focus:!0,onChange:function(e){return p(e)}}),r.a.createElement(b,{type:"password",name:"password",text:"Password",onChange:function(e){return p(e)}}),r.a.createElement(y,{text:"Login",onClick:function(){l&&""!==m?t(!0):h("Please provide your username and password")}}),r.a.createElement(C,{text:"Reset"}))}),j=function(e){var t=e.text,a=e.onClick;return r.a.createElement(p,{variant:"outline-light",text:t,onClick:a})},k=function(e){var t=e.setIsAuthenticated,a=e.setCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{bg:"primary",variant:"dark"},r.a.createElement(E.a.Brand,{href:"#home"},"Navbar"),r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"#home",onClick:function(){return a(1)}},"Home"),r.a.createElement(d.a.Link,{href:"#courses",onClick:function(){return a(2)}},"Courses"),r.a.createElement(d.a.Link,{href:"#students",onClick:function(){return a(3)}},"Students")),r.a.createElement(i.a,{inline:!0},r.a.createElement(s.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(j,{variant:"outline-light",text:"Search"})),r.a.createElement(d.a.Link,{href:"#",style:{color:"white"},onClick:function(){return t(!1)}},"Logout")))},O=function(){return r.a.createElement("div",null,"Dashboard")},N=function(){return r.a.createElement("div",{className:"addStudent"},r.a.createElement(b,{type:"number",name:"studentId",text:"Student ID",focus:!0}),r.a.createElement(S,{title:"Course name",options:[{id:1,name:"React"},{id:2,name:"SQL"},{id:3,name:"Nodejs"}]}))},I=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,"Student ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,{text:"Add a student",onClick:function(){return c(!a)}}),r.a.createElement(x,{title:"Create New Course",lgShow:a,setLgShow:c},r.a.createElement(N,null)))},L=function(){return r.a.createElement("div",null,"List of courses")},P=a(44),A=a(47),B=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),u=Object(o.a)(l,2),i=u[0],s=u[1],m=function(e){var t=e.target.name,a=e.target.value;s(Object(A.a)(Object(A.a)({},i),{},Object(P.a)({},t,a)))};return r.a.createElement("div",{className:"createCourse"},r.a.createElement(b,{type:"text",name:"courseName",text:"Course name",focus:!0,onChange:function(e){return m(e)}}),r.a.createElement(S,{title:"Category",options:[{id:1,name:"Frontend"},{id:2,name:"Backend"},{id:3,name:"Database"}],setSelectedValue:function(e){c(e)}}),r.a.createElement(S,{title:"Sub Category",options:[{id:1,categoryId:1,name:"React"},{id:2,categoryId:1,name:"Angular"},{id:3,categoryId:1,name:"Vue"},{id:4,categoryId:2,name:"Nodejs"},{id:5,categoryId:2,name:"PHP"},{id:6,categoryId:3,name:"MongoDB"},{id:7,categoryId:3,name:"MySQL"}].filter((function(e){return e.categoryId===a}))}),r.a.createElement(b,{type:"number",name:"fee",text:"Fees",onChange:function(e){return m(e)}}))},F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,"Course ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,{text:"Create New Course",onClick:function(){return c(!a)}}),r.a.createElement(L,null),r.a.createElement(x,{title:"Create New Course",lgShow:a,setLgShow:c},r.a.createElement(B,null)))},D=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)(1),c=Object(o.a)(a,2),l=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{setIsAuthenticated:t,setCurrentPage:u}),function(){switch(l){case 1:return r.a.createElement(O,null);case 2:return r.a.createElement(F,null);case 3:return r.a.createElement(I,null);default:return r.a.createElement(O,null)}}())};a(68),a(69);var H=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},a?r.a.createElement(D,{setIsAuthenticated:c}):r.a.createElement(w,{setIsAuthenticated:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.e7db0ce9.chunk.js.map