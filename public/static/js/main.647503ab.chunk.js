(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,n){t.exports=n(47)},25:function(t,e,n){},26:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},27:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(16),c=n.n(s),l=(n(25),n(3)),o=n(4),r=n(6),u=n(5),d=n(7),h=(n(26),n(27),n(18)),p=n(1),m=n(8),v=n.n(m),b=function(t){var e=t.list,n=t.onRemoveList,i=void 0===n?function(t){return t}:n,s=t.editingList,c=void 0===s?function(t){return t}:s;return a.a.createElement("div",{className:"single-list",key:e.id},a.a.createElement("h4",null,e.title),a.a.createElement("p",null,e.excerpt),a.a.createElement("button",{onClick:function(){return c(e.id)}},"Edit"),a.a.createElement("button",{onClick:function(){return i(e.id)}},"Erase"),a.a.createElement("hr",null))},f=n(17),g=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).handleChange=function(t){n.setState(Object(f.a)({},t.target.name,t.target.value))},n.state={id:n.props.list.id,title:n.props.list.title,excerpt:n.props.list.excerpt},n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.state,n=e.id,i=e.title,a=e.excerpt;this.props.editList(n,i,a)}},{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{name:"title",type:"text",placeholder:"Title...",value:this.state.title,onChange:this.handleChange}),a.a.createElement("input",{name:"excerpt",type:"text",placeholder:"Excerpt...",value:this.state.excerpt,onChange:this.handleChange}),a.a.createElement("button",null,"Update List"))}}]),e}(i.Component),j=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={lists:[],editingListId:null},n.addNewList=n.addNewList.bind(Object(p.a)(Object(p.a)(n))),n.removeList=n.removeList.bind(Object(p.a)(Object(p.a)(n))),n.editingList=n.editingList.bind(Object(p.a)(Object(p.a)(n))),n.editList=n.editList.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;v.a.get("http://localhost:3001/api/v1/lists.json").then(function(e){console.log(e),t.setState({lists:e.data})}).catch(function(t){return console.log(t)})}},{key:"addNewList",value:function(t,e){var n=this;v.a.post("/api/v1/lists",{list:{title:t,excerpt:e}}).then(function(t){console.log(t);var e=[].concat(Object(h.a)(n.state.lists),[t.data]);n.setState({lists:e})}).catch(function(t){console.log(t)})}},{key:"removeList",value:function(t){var e=this;v.a.delete("/api/v1/lists/"+t).then(function(n){var i=e.state.lists.filter(function(e){return e.id!==t});e.setState({lists:i})}).catch(function(t){return console.log(t)})}},{key:"editingList",value:function(t){this.setState({editingListId:t})}},{key:"editList",value:function(t,e,n){var i=this;v.a.put("/api/v1/lists/"+t,{list:{title:e,excerpt:n}}).then(function(a){console.log(a);var s=i.state.lists;s[t-1]={id:t,title:e,excerpt:n},i.setState(function(){return{lists:s,editingListId:null}})}).catch(function(t){return console.log(t)})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"Lists-container"},this.state.lists.map(function(e){return t.state.editingListId===e.id?a.a.createElement(g,{list:e,key:e.id,editList:t.editList}):a.a.createElement(b,{list:e,key:e.id,onRemoveList:t.removeList,editingList:t.editingList})}))}}]),e}(i.Component),O=function(t){function e(){return Object(l.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",{className:"App-title"},"Hello there Stranger!")),a.a.createElement(j,null))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.647503ab.chunk.js.map