(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(6),d=n.n(i),a=(n(12),n(7)),r=n(2),s=(n(13),n(14),n(0));var l=function(e){var t=e.addTodo,n=Object(o.useState)(""),c=Object(r.a)(n,2),i=c[0],d=c[1];function a(){var e={id:(Date.now()+Math.random()).toString(),title:i,isDone:!1};t(e),d("")}return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"text",value:i,className:"new-input",placeholder:"write your task here",onKeyDown:function(e){13===e.keyCode&&a()},onChange:function(e){var t=e.target;d(t.value)}}),Object(s.jsx)("button",{onClick:a,children:"Add New Todo"})]})};n(16);var j=function(e){var t=e.title,n=e.id,c=e.handleIsEdit,i=e.editTodo,d=Object(o.useState)(t),a=Object(r.a)(d,2),l=a[0],j=a[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{onChange:function(e){var t=e.target;j(t.value)},value:l}),Object(s.jsx)("button",{onClick:function(){c(!1),i(n,l)},children:"Save Edit"})]})};var u=function(e){var t=e.title,n=e.isDone,c=e.id,i=e.completedTodo,d=e.deleteTodo,a=e.editTodo,l=Object(o.useState)(!1),u=Object(r.a)(l,2),b=u[0],O=u[1];function f(e){O(e)}return Object(s.jsx)("div",{children:b?Object(s.jsx)(j,{title:t,handleIsEdit:f,editTodo:a,id:c}):Object(s.jsxs)("li",{className:n?"itemDone":"",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"checkbox",className:"checkbox",checked:n,onChange:function(){return i(c)}}),t]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return f(!0)},className:"delete",children:Object(s.jsx)("i",{className:"fa fa-pencil"})}),Object(s.jsx)("button",{onClick:function(){return d(c)},className:"delete",children:Object(s.jsx)("i",{className:"fa fa-trash"})})]})]})})};n(17);var b=function(e){var t=e.todos,n=e.deleteTodo,o=e.completedTodo,c=e.editTodo;return Object(s.jsx)("div",{children:Object(s.jsx)("ul",{children:t.map((function(e,t){return Object(s.jsx)(u,{id:e.id,title:e.title,isDone:e.isDone,deleteTodo:n,completedTodo:o,editTodo:c},t)}))})})};function O(){var e=Object(o.useState)(JSON.parse(localStorage.getItem("todos"))||[]),t=Object(r.a)(e,2),n=t[0],c=t[1];function i(e){localStorage.setItem("todos",JSON.stringify(e)),c(e)}return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("h1",{children:"To Do List"})}),Object(s.jsxs)("main",{children:[Object(s.jsx)(l,{addTodo:function(e){i([].concat(Object(a.a)(n),[e]))}}),Object(s.jsx)(b,{todos:n,deleteTodo:function(e){i(n.filter((function(t){return t.id!==e})))},completedTodo:function(e){i(n.map((function(t){return t.id===e&&(t.isDone=!t.isDone),t})))},editTodo:function(e,t){var o=n.map((function(n){return n.id===e&&(n.title=t),n}));c(o)}}),Object(s.jsx)("button",{onClick:function(){return i([])},children:"Clear all"})]}),Object(s.jsx)("footer",{children:Object(s.jsx)("p",{children:"\xa9 2021"})})]})}var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,d=t.getTTFB;n(e),o(e),c(e),i(e),d(e)}))};d.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.3ba8d3b3.chunk.js.map