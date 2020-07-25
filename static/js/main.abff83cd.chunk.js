(this["webpackJsonplearning-management-system"]=this["webpackJsonplearning-management-system"]||[]).push([[0],{60:function(e,t,a){e.exports=a(73)},65:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),u=(a(65),a(8)),o=a(7),s=a(79),i=a(83),m=a(52),d=a(53),b=a(84),E=a(85),f=a(82),g=a(80),h=a(57),p=a(81),v=function(e){var t=e.text,a=e.focus,n=e.name,c=e.onChange,l=e.type,u=e.required;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"mb-3"},r.a.createElement(s.a.Prepend,null,r.a.createElement(s.a.Text,{id:"basic-addon1"},t)),r.a.createElement(m.a,{type:l,name:n,placeholder:t,"aria-label":t,"aria-describedby":"basic-addon1",autoFocus:a,onChange:c,required:u})))},O=function(e){var t=e.text;return r.a.createElement("h1",null,t)},j=function(e){var t=e.variant,a=e.text,n=e.className,c=e.onClick;return r.a.createElement(d.a,{variant:t,className:n,onClick:c},a)},C=function(e){var t=e.text,a=e.onClick;return r.a.createElement(j,{variant:"primary",text:t,onClick:a})},w=function(e){var t=e.text,a=e.onClick;return r.a.createElement(j,{variant:"secondary",onClick:a,text:t,className:"ml-4"})},y=function(e){var t=e.text,a=e.title,n=e.children,c=e.lgShow,l=e.setLgShow,u=e.onClick;return r.a.createElement(f.a,{size:"lg",show:c,onHide:function(){return l(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"example-modal-sizes-title-lg"},a)),r.a.createElement(f.a.Body,null,n),r.a.createElement(f.a.Footer,null,r.a.createElement(C,{text:t,onClick:u}),r.a.createElement(w,{text:"Close",onClick:function(){l(!1)}})))},S=function(e){var t=e.name,a=e.title,c=e.options,l=e.setSelectedValue,o=e.onChange,i=Object(n.useState)(""),d=Object(u.a)(i,2),b=d[0],E=d[1];return r.a.createElement(s.a,{className:"mb-3"},r.a.createElement(g.a,{as:s.a.Prepend,variant:"outline-secondary",title:a,id:"input-group-dropdown-1"},(c||[]).map((function(e){return r.a.createElement(h.a.Item,{key:e.id,name:t,id:e.id,href:"#",onClick:function(e){return function(e){E(e.target.innerText),l&&l(Number(e.target.id)),o(e.target.name,Number(e.target.id))}(e)}},e.name)}))),r.a.createElement(m.a,{"aria-describedby":"basic-addon1",value:b}))},k=function(e){var t=e.tableHeads,a=e.tableRows,n=1;return r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,(t||[]).map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,(a||[]).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,n++),Object.values(e).map((function(e){return r.a.createElement("td",null,e)})),r.a.createElement("td",null,"edit"))}))))};a(70);var x=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)({username:"",password:""}),c=Object(u.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)({username:"",password:"",error:""}),m=Object(u.a)(i,2),d=m[0],b=m[1],E=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"username":return n.length<1?(b(Object(o.a)(Object(o.a)({},d),{},{username:"Please provide your username!"})),s(Object(o.a)(Object(o.a)({},l),{},{username:""}))):(s(Object(o.a)(Object(o.a)({},l),{},{username:n})),b(Object(o.a)(Object(o.a)({},d),{},{username:"",error:""})));case"password":return n.length<1?(b(Object(o.a)(Object(o.a)({},d),{},{password:"Please provide your password!"})),s(Object(o.a)(Object(o.a)({},l),{},{password:""}))):(s(Object(o.a)(Object(o.a)({},l),{},{password:n})),b(Object(o.a)(Object(o.a)({},d),{},{password:"",error:""})))}};return r.a.createElement("div",{className:"login"},r.a.createElement(O,{text:"Please Login"}),d.error?r.a.createElement("p",null,d.error):"",r.a.createElement(v,{type:"text",name:"username",text:"Username",focus:!0,value:l.username,onChange:function(e){return E(e)},required:!0}),d.username?r.a.createElement("p",null,d.username):"",r.a.createElement(v,{type:"password",name:"password",text:"Password",value:l.password,onChange:function(e){return E(e)},required:!0}),d.password?r.a.createElement("p",null,d.password):"",r.a.createElement(C,{text:"Login",onClick:function(){return function(e,t,a,n){if(0!==t.username.length&&0!==t.password.length&&0===a.username.length&&0===a.password.length&&0===a.error.length)return document.cookie="loggedin=true",e(!0);n(Object(o.a)(Object(o.a)({},a),{},{error:"Please provide both your username and password!"}))}(t,l,d,b)}}),r.a.createElement(w,{text:"Reset"}))},N=function(e){var t=e.text,a=e.onClick;return r.a.createElement(j,{variant:"outline-light",text:t,onClick:a})},I=function(e){var t=e.setIsAuthenticated,a=e.setCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{bg:"primary",variant:"dark"},r.a.createElement(E.a.Brand,{href:"#home"},"Navbar"),r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{href:"#home",onClick:function(){return a(1)}},"Home"),r.a.createElement(b.a.Link,{href:"#courses",onClick:function(){return a(2)}},"Courses"),r.a.createElement(b.a.Link,{href:"#students",onClick:function(){return a(3)}},"Students")),r.a.createElement(i.a,{inline:!0},r.a.createElement(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(N,{variant:"outline-light",text:"Search"})),r.a.createElement(b.a.Link,{href:"#",style:{color:"white"},onClick:function(){document.cookie="loggedin=false",t(!1)}},"Logout")))},A=function(){return r.a.createElement("div",null,"Dashboard")},L=a(48),P=a(24),F=function(e){var t=e.setNewStudent,a=Object(n.useState)({}),c=Object(u.a)(a,2),l=c[0],s=c[1];Object(n.useEffect)((function(){t(l)}),[t,l]);var i=function(e,t){s(Object(o.a)(Object(o.a)({},l),{},Object(P.a)({},e,t)))};return r.a.createElement("div",{className:"addStudent"},r.a.createElement(v,{type:"number",name:"studentId",text:"Student ID",focus:!0,onChange:function(e){return i(e.target.name,e.target.value)}}),r.a.createElement(v,{type:"text",name:"studentName",text:"Student name",onChange:function(e){return i(e.target.name,e.target.value)}}),r.a.createElement(v,{type:"email",name:"studentEmail",text:"Student email",onChange:function(e){return i(e.target.name,e.target.value)}}),r.a.createElement(S,{name:"courseName",title:"Course name",options:[{id:1,name:"Frontend"},{id:2,name:"Backend"},{id:3,name:"Database"}],onChange:function(e,t){return i(e,t)}}))},B=function(e){var t=e.listOfStudents;return r.a.createElement(k,{tableHeads:["Id","Student id","Name","Email","Course name","Actions"],tableRows:t})},H=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),b=d[0],E=d[1];return r.a.createElement("div",null,"Student ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C,{text:"Add a student",onClick:function(){return c(!a)}}),r.a.createElement(B,{listOfStudents:b}),r.a.createElement(y,{title:"Add a student",text:"Add",onClick:function(){var e=Object(L.a)(b);e.push(s),E(e)},lgShow:a,setLgShow:c},r.a.createElement(F,{setNewStudent:i})))},D=function(e){var t=e.listOfCourses;return r.a.createElement(k,{tableHeads:["Id","Name","Category","Sub category","Fees","Actions"],tableRows:t})},R=function(e){var t=e.setNewCourse,a=Object(n.useState)(0),c=Object(u.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)({}),m=Object(u.a)(i,2),d=m[0],b=m[1];Object(n.useEffect)((function(){t(d)}),[d,t]);var E=function(e,t){b(Object(o.a)(Object(o.a)({},d),{},Object(P.a)({},e,t)))};return r.a.createElement("div",{className:"createCourse"},r.a.createElement(v,{type:"text",name:"courseName",text:"Course name",focus:!0,onChange:function(e){return E(e.target.name,e.target.value)}}),r.a.createElement(S,{name:"category",title:"Category",options:[{id:1,name:"Frontend"},{id:2,name:"Backend"},{id:3,name:"Database"}],setSelectedValue:function(e){return s(e)},onChange:function(e,t){return E(e,t)}}),r.a.createElement(S,{name:"subCategory",title:"Sub Category",options:[{id:1,categoryId:1,name:"React"},{id:2,categoryId:1,name:"Angular"},{id:3,categoryId:1,name:"Vue"},{id:4,categoryId:2,name:"Nodejs"},{id:5,categoryId:2,name:"PHP"},{id:6,categoryId:3,name:"MongoDB"},{id:7,categoryId:3,name:"MySQL"}].filter((function(e){return e.categoryId===l})),onChange:function(e,t){return E(e,t)}}),r.a.createElement(v,{type:"number",name:"fee",text:"Fees",onChange:function(e){return E(e.target.name,e.target.value)}}))},q=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),b=d[0],E=d[1];return r.a.createElement("div",null,"Course ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C,{text:"Create New Course",onClick:function(){return c(!a)}}),r.a.createElement(D,{listOfCourses:b}),r.a.createElement(y,{title:"Create New Course",text:"Create",onClick:function(){var e=Object(L.a)(b);e.push(s),E(e)},lgShow:a,setLgShow:c},r.a.createElement(R,{setNewCourse:i})))},z=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)(1),c=Object(u.a)(a,2),l=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{setIsAuthenticated:t,setCurrentPage:o}),function(){switch(l){case 1:return r.a.createElement(A,null);case 2:return r.a.createElement(q,null);case 3:return r.a.createElement(H,null);default:return r.a.createElement(A,null)}}())};a(71),a(72);var M=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){"true"===l("loggedin")&&c(!0)}),[a]);var l=function(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()};return r.a.createElement("div",{className:"App"},a?r.a.createElement(z,{setIsAuthenticated:c}):r.a.createElement(x,{setIsAuthenticated:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.abff83cd.chunk.js.map