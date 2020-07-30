(this["webpackJsonplearning-management-system"]=this["webpackJsonplearning-management-system"]||[]).push([[0],{66:function(e,t,a){e.exports=a(83)},71:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),u=(a(71),a(8)),l=a(7),s=a(89),i=a(95),m=a(58),d=a(93),g=a(94),f=a(92),b=a(90),E=a(63),C=a(91),p=function(e){var t=e.text,a=e.focus,n=e.name,c=e.onChange,o=e.type,u=e.required,l=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"mb-3"},r.a.createElement(s.a.Prepend,null,r.a.createElement(s.a.Text,{id:"basic-addon1"},t)),r.a.createElement(i.a,{type:o,name:n,placeholder:t,value:l,"aria-label":t,"aria-describedby":"basic-addon1",autoFocus:a,onChange:c,required:u})))},v=function(e){var t=e.text;return r.a.createElement("h1",null,t)},y=function(e){var t=e.variant,a=e.text,n=e.className,c=e.onClick;return r.a.createElement(m.a,{variant:t,className:n,onClick:c},a)},j=function(e){var t=e.text,a=e.onClick;return r.a.createElement(y,{variant:"primary",text:t,onClick:a})},h=function(e){var t=e.text,a=e.onClick;return r.a.createElement(y,{variant:"secondary",onClick:a,text:t,className:"ml-4"})},O=function(e){var t=e.text,a=e.title,n=e.children,c=e.lgShow,o=e.setLgShow,u=e.onClick,l=e.setIsCreate;return r.a.createElement(f.a,{size:"lg",show:c,onHide:function(){return o(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"example-modal-sizes-title-lg"},a)),r.a.createElement(f.a.Body,null,n),r.a.createElement(f.a.Footer,null,r.a.createElement(j,{text:t,onClick:u}),r.a.createElement(h,{text:"Close",onClick:function(){o(!1),l(!0)}})))},w=function(e){var t=e.name,a=e.title,c=e.options,o=e.setSelectedValue,l=e.onChange,m=e.value,d=c.filter((function(e){return e.id===m})),g=Object(n.useState)((d[0]||[]).name),f=Object(u.a)(g,2),C=f[0],p=f[1];return r.a.createElement(s.a,{className:"mb-3"},r.a.createElement(b.a,{as:s.a.Prepend,variant:"outline-secondary",title:a,id:"input-group-dropdown-1"},(c||[]).map((function(e){return r.a.createElement(E.a.Item,{key:e.id,name:t,id:e.id,href:"#",onClick:function(e){return function(e){p(e.target.innerText),o&&o(Number(e.target.id)),l(e.target.name,Number(e.target.id))}(e)}},e.name)}))),r.a.createElement(i.a,{"aria-describedby":"basic-addon1",value:C}))},N=function(e){var t=e.tableHeads,a=e.tableRows,n=e.onClick;return r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"10px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,(t||[]).map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,(a||[]).map((function(e){return r.a.createElement("tr",null,Object.values(e).map((function(e){return r.a.createElement("td",null,e)})),r.a.createElement("td",null,r.a.createElement(j,{id:e.id,text:"Edit",onClick:function(){return n(e)}})))}))))};a(76);var x=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)({username:"",password:""}),c=Object(u.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)({username:"",password:"",error:""}),m=Object(u.a)(i,2),d=m[0],g=m[1],f=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"username":return n.length<1?(g(Object(l.a)(Object(l.a)({},d),{},{username:"Please provide your username!"})),s(Object(l.a)(Object(l.a)({},o),{},{username:""}))):(s(Object(l.a)(Object(l.a)({},o),{},{username:n})),g(Object(l.a)(Object(l.a)({},d),{},{username:"",error:""})));case"password":return n.length<1?(g(Object(l.a)(Object(l.a)({},d),{},{password:"Please provide your password!"})),s(Object(l.a)(Object(l.a)({},o),{},{password:""}))):(s(Object(l.a)(Object(l.a)({},o),{},{password:n})),g(Object(l.a)(Object(l.a)({},d),{},{password:"",error:""})))}};return r.a.createElement("div",{className:"login"},r.a.createElement(v,{text:"Please Login"}),d.error?r.a.createElement("p",null,d.error):"",r.a.createElement(p,{type:"text",name:"username",text:"Username",focus:!0,value:o.username,onChange:function(e){return f(e)},required:!0}),d.username?r.a.createElement("p",null,d.username):"",r.a.createElement(p,{type:"password",name:"password",text:"Password",value:o.password,onChange:function(e){return f(e)},required:!0}),d.password?r.a.createElement("p",null,d.password):"",r.a.createElement(j,{text:"Login",onClick:function(){return function(e,t,a,n){if(0!==t.username.length&&0!==t.password.length&&0===a.username.length&&0===a.password.length&&0===a.error.length)return document.cookie="loggedin=true",e(!0);n(Object(l.a)(Object(l.a)({},a),{},{error:"Please provide both your username and password!"}))}(t,o,d,g)}}),r.a.createElement(h,{text:"Reset"}))},S=a(9),k=a(26),I=(a(77),function(e){var t=e.setIsAuthenticated;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{bg:"primary",variant:"dark"},r.a.createElement(g.a.Brand,{href:"#home"},"Navbar"),r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(k.b,{to:"/"},"Home"),r.a.createElement(k.b,{to:"/course"},"Course"),r.a.createElement(k.b,{to:"/student"},"Student")),r.a.createElement(d.a.Link,{href:"#",style:{color:"white"},onClick:function(){document.cookie="loggedin=false",t(!1)}},"Logout")))}),A=function(){return r.a.createElement("div",null,"Dashboard")},L=a(49),B=a(27),F=function(e){var t=e.setNewStudent,a=e.newStudent,c=Object(n.useState)(a.courseCategory||0),o=Object(u.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(a),d=Object(u.a)(m,2),g=d[0],f=d[1];Object(n.useEffect)((function(){t(g)}),[g,t]);var b=function(e,t){f(Object(l.a)(Object(l.a)({},g),{},Object(B.a)({},e,t)))};return r.a.createElement("div",{className:"addStudent"},r.a.createElement(p,{type:"number",name:"studentId",text:"Student ID",focus:!0,value:g.studentId,onChange:function(e){return b(e.target.name,e.target.value)}}),r.a.createElement(p,{type:"text",name:"studentName",text:"Student name",value:g.studentName,onChange:function(e){return b(e.target.name,e.target.value)}}),r.a.createElement(p,{type:"email",name:"studentEmail",text:"Student email",value:g.studentEmail,onChange:function(e){return b(e.target.name,e.target.value)}}),r.a.createElement(w,{name:"courseCategory",title:"Course Category",options:[{id:1,name:"Frontend"},{id:2,name:"Backend"},{id:3,name:"Database"}],value:g.courseCategory,setSelectedValue:function(e){i(e)},onChange:function(e,t){return b(e,t)}}),r.a.createElement(w,{name:"courseName",title:"Course name",value:g.courseName,options:[{id:1,courseCategoryId:1,name:"React"},{id:2,courseCategoryId:1,name:"Angular"},{id:3,courseCategoryId:1,name:"Vue"},{id:4,courseCategoryId:2,name:"Nodejs"},{id:5,courseCategoryId:2,name:"PHP"},{id:6,courseCategoryId:3,name:"MongoDB"},{id:7,courseCategoryId:3,name:"MySQL"}].filter((function(e){return e.courseCategoryId===s})),onChange:function(e,t){return b(e,t)}}))},P=function(e){var t=e.listOfStudents,a=e.onClick;return r.a.createElement(N,{onClick:a,tableHeads:["Id","Student id","Name","Email","Course category","Course name","Actions"],tableRows:t})},H=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),s=l[0],i=l[1],m=Object(n.useState)({}),d=Object(u.a)(m,2),g=d[0],f=d[1],b=Object(n.useState)([{id:1,studentId:10,studentName:"John",studentEmail:"john@gmail.com",courseCategory:2,courseName:4},{id:2,studentId:125,studentName:"Mike",studentEmail:"mike@mikeharrington.com",courseCategory:1,courseName:1}]),E=Object(u.a)(b,2),C=E[0],v=(E[1],Object(n.useState)([{id:1,studentId:10,studentName:"John",studentEmail:"john@gmail.com",courseCategory:2,courseName:4},{id:2,studentId:125,studentName:"Mike",studentEmail:"mike@mikeharrington.com",courseCategory:1,courseName:1}])),y=Object(u.a)(v,2),h=y[0],w=y[1];Object(n.useEffect)((function(){f({})}),[s,f]);return r.a.createElement("div",null,"Student ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,{text:"Add a student",onClick:function(){return i(!s)}}),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",marginTop:"10px"}},r.a.createElement(p,{type:"text",name:"filter",text:"Filter By Name",autofocus:!0,onChange:function(e){var t=e.target.value,a=C.filter((function(e){return e.studentName.toLowerCase().includes(t.toLowerCase())}));w(""===t?C:a)}})),r.a.createElement(P,{listOfStudents:h,onClick:function(e){return function(e){i(!0),f(e),c(!1)}(e)}}),r.a.createElement(O,{title:"Add a student",text:"Add",onClick:a?function(){var e=Object(L.a)(h);e.push(g),w(e)}:function(){var e=h.map((function(e){return e.id===g.id?g:e}));w(e),c(!0)},lgShow:s,setLgShow:i,setIsCreate:c},r.a.createElement(F,{newStudent:g,setNewStudent:f})))},R=function(e){var t=e.setNewCourse,a=e.newCourse,c=Object(n.useState)(a.category||0),o=Object(u.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(a),d=Object(u.a)(m,2),g=d[0],f=d[1];Object(n.useEffect)((function(){t(g)}),[g,t]);var b=function(e,t){f(Object(l.a)(Object(l.a)({},g),{},Object(B.a)({},e,t)))};return r.a.createElement("div",{className:"createCourse"},r.a.createElement(p,{type:"text",name:"courseName",text:"Course name",focus:!0,value:g.courseName,onChange:function(e){return b(e.target.name,e.target.value)}}),r.a.createElement(w,{name:"category",title:"Category",options:[{id:1,name:"Frontend"},{id:2,name:"Backend"},{id:3,name:"Database"}],value:g.category,setSelectedValue:function(e){return i(e)},onChange:function(e,t){return b(e,t)}}),r.a.createElement(w,{name:"subCategory",title:"Sub Category",value:g.subCategory,options:[{id:1,categoryId:1,name:"React"},{id:2,categoryId:1,name:"Angular"},{id:3,categoryId:1,name:"Vue"},{id:4,categoryId:2,name:"Nodejs"},{id:5,categoryId:2,name:"PHP"},{id:6,categoryId:3,name:"MongoDB"},{id:7,categoryId:3,name:"MySQL"}].filter((function(e){return e.categoryId===s})),onChange:function(e,t){return b(e,t)}}),r.a.createElement(p,{type:"number",name:"fee",text:"Fees",value:g.fee,onChange:function(e){return b(e.target.name,e.target.value)}}))},M=function(e){var t=e.listOfCourses,a=e.onClick;return r.a.createElement(N,{onClick:a,tableHeads:["Id","Name","Category","Sub category","Fees","Actions"],tableRows:t})},D=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),s=l[0],i=l[1],m=Object(n.useState)({}),d=Object(u.a)(m,2),g=d[0],f=d[1],b=Object(n.useState)([{id:1,courseName:"Nodejs",category:2,subCategory:5,fee:100},{id:2,courseName:"Reactjs",category:1,subCategory:3,fee:50}]),E=Object(u.a)(b,2),C=E[0],v=(E[1],Object(n.useState)([{id:1,courseName:"Nodejs",category:2,subCategory:5,fee:100},{id:2,courseName:"Reactjs",category:1,subCategory:3,fee:50}])),y=Object(u.a)(v,2),h=y[0],w=y[1];Object(n.useEffect)((function(){f({})}),[s,f]);return r.a.createElement("div",null,"Course ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,{text:"Create New Course",onClick:function(){return i(!s)}}),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",marginTop:"10px"}},r.a.createElement(p,{type:"text",name:"filter",text:"Filter By Name",autofocus:!0,onChange:function(e){var t=e.target.value,a=C.filter((function(e){return e.courseName.toLowerCase().includes(t.toLowerCase())}));w(""===t?C:a)}})),r.a.createElement(M,{listOfCourses:h,onClick:function(e){return function(e){i(!0),f(e),c(!1)}(e)}}),r.a.createElement(O,{title:"Create new course",text:"Create",onClick:a?function(){var e=Object(L.a)(h);e.push(g),w(e)}:function(){var e=h.map((function(e){return e.id===g.id?g:e}));w(e),c(!0)},lgShow:s,setLgShow:i,setIsCreate:c},r.a.createElement(R,{newCourse:g,setNewCourse:f})))},T=function(e){var t=e.setIsAuthenticated;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{setIsAuthenticated:t}),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:A}),r.a.createElement(S.a,{path:"/student",component:H}),r.a.createElement(S.a,{path:"/course",component:D})))};a(81),a(82);var V=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){"true"===o("loggedin")&&c(!0)}),[a]);var o=function(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()};return r.a.createElement("div",{className:"App"},a?r.a.createElement(T,{setIsAuthenticated:c}):r.a.createElement(x,{setIsAuthenticated:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.5d167fd1.chunk.js.map