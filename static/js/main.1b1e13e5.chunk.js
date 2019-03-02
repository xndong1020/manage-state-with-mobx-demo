(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(55)},32:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a,o,r,l,c,i,u,s,d=n(0),p=n.n(d),b=n(7),m=n.n(b),h=(n(32),n(3)),f=n(4),v=n(9),O=n(8),j=n(10),E=n(26),y=n.n(E),w=n(6),g=(n(33),Object(w.observer)(a=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.store,t=e.todos,n=e.todosCount;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",null,"We have ",n," records"),p.a.createElement("div",null,p.a.createElement("table",null,p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("td",null,"Todo Id"),p.a.createElement("td",null,"User Id"),p.a.createElement("td",null,"Title"),p.a.createElement("td",null,"Status"))),p.a.createElement("tbody",null,t.map(function(e){return p.a.createElement(k,{key:e.id,todo:e})})))))}}]),t}(d.Component))||a),k=function(e){var t=e.todo;return p.a.createElement("tr",null,p.a.createElement("td",null,t.id),p.a.createElement("td",null,t.userId),p.a.createElement("td",null,t.title),p.a.createElement("td",null,t.completed?"true":"false"))},C=g,T=n(11),D=n(12),I=n(5),x=(n(18),n(1)),z=Object(w.observer)((r=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o))),Object(T.a)(n,"title",l,Object(D.a)(Object(D.a)(n))),n.handleInput=function(e){var t=e.target.value;n.title=t},n.handleSubmit=function(e){e.preventDefault();var t=n.props.store,a=t.todosCount;(0,t.addTodo)({id:a+1,userId:2,title:n.title,completed:!1})},n}return Object(j.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return p.a.createElement("form",null,p.a.createElement("div",null,p.a.createElement("label",{htmlFor:""},"Name"),p.a.createElement("input",{type:"text",name:"title",onChange:this.handleInput,placeholder:"Enter title"})),p.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit"))}}]),t}(d.Component),l=Object(I.a)(r.prototype,"title",[x.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),o=r))||o,S=Object(w.observer)(function(e){var t=e.store.removeTodo;return p.a.createElement("div",null,p.a.createElement("button",{onClick:t},"Remove"))}),F=n(14),W=n.n(F),B=n(24),J=n(25),P=n.n(J),A=(c=function(){function e(){Object(h.a)(this,e),Object(T.a)(this,"todos",i,this),Object(T.a)(this,"addTodo",u,this),Object(T.a)(this,"removeTodo",s,this),this.loadData()}return Object(f.a)(e,[{key:"loadData",value:function(){var e=Object(B.a)(W.a.mark(function e(){var t;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://jsonplaceholder.typicode.com/todos/");case 2:t=e.sent,this.todos=t.data.splice(0,30);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"todosCount",get:function(){return this.todos.length}}]),e}(),i=Object(I.a)(c.prototype,"todos",[x.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(I.a)(c.prototype,"todosCount",[x.computed],Object.getOwnPropertyDescriptor(c.prototype,"todosCount"),c.prototype),Object(I.a)(c.prototype,"loadData",[x.action],Object.getOwnPropertyDescriptor(c.prototype,"loadData"),c.prototype),u=Object(I.a)(c.prototype,"addTodo",[x.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.todos.push(t)}}}),s=Object(I.a)(c.prototype,"removeTodo",[x.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.todos.pop()}}}),c),N=(n(54),new A),R=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(z,{store:N}),p.a.createElement(C,{store:N}),p.a.createElement(S,{store:N}),p.a.createElement(y.a,null))}}]),t}(d.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(p.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.1b1e13e5.chunk.js.map