(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/user.5d12cbb3.svg"},31:function(e,t,a){e.exports=a.p+"static/media/post.9801223d.svg"},40:function(e,t,a){e.exports=a.p+"static/media/logo.f4dbe595.png"},44:function(e,t,a){e.exports=a(80)},49:function(e,t,a){},51:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(30),o=a.n(s),l=(a(49),a(2)),r=a(3),i=a(5),m=a(4),u=a(6),d=a(84),h=a(82),p=(a(51),a(83)),b=a(85),E=a(8),v=a(14),f=a.n(v),j=a(31),O=a.n(j),g=a(21),y=a(43),k=a(20),N=a.n(k),C=N.a.mark(w);function w(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Hello Sagas!");case 1:case"end":return e.stop()}},C,this)}var I={baseUrl:"https://jsonplaceholder.typicode.com",colorsLoading:{color:"#191919",highlightColor:"#888"}},B=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:I},S=Object(y.a)(),x=Object(g.b)(B,Object(g.a)(S));S.run(w);var D=x,M=a(12),U=a.n(M),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).colorsLoading=D.getState().colorsLoading,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"post shadow"},c.a.createElement("img",{src:O.a}),c.a.createElement(M.SkeletonTheme,{color:this.colorsLoading.color,highlightColor:this.colorsLoading.highlightColor},c.a.createElement("div",null,c.a.createElement("div",{className:"title"},this.props.title||c.a.createElement(U.a,null)," "),c.a.createElement("div",null,this.props.body||c.a.createElement(U.a,null)," "),this.props.id?c.a.createElement("div",{className:"detail-link"},c.a.createElement(h.a,{to:"/post/".concat(this.props.id)},"detail")):null)))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={allPosts:[]},a.getData=a.getData.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getData",value:function(){var e=this;f.a.get("".concat(D.getState().baseUrl,"/posts")).then(function(t){e.setState({allPosts:t.data})})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},this.state.allPosts.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(P,{id:e.id,title:e.title,body:e.body}))}))}}]),t}(n.Component),A=a(15),J=a.n(A),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"comment shadow"},c.a.createElement("img",{src:J.a}),c.a.createElement("div",null,c.a.createElement("div",{className:"title"},this.props.name," "),c.a.createElement("div",null,this.props.body," ")))}}]),t}(n.Component),F=a(33),H=a.n(F),R=a(34),_=a.n(R),q=a(35),z=a.n(q),G=a(36),K=a.n(G),Q=a(37),V=a.n(Q),W=a(38),X=a.n(W),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={post:{},user:{},comments:[],more:!1},a.getPostById=a.getPostById.bind(Object(E.a)(Object(E.a)(a))),a.getUserById=a.getUserById.bind(Object(E.a)(Object(E.a)(a))),a.getCommentsById=a.getCommentsById.bind(Object(E.a)(Object(E.a)(a))),a.isMore=a.isMore.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getUserById",value:function(e){var t=this;f.a.get("".concat(D.getState().baseUrl,"/users/").concat(e)).then(function(e){t.setState({user:e.data})})}},{key:"getCommentsById",value:function(e){var t=this;f.a.get("".concat(D.getState().baseUrl,"/posts/").concat(e,"/comments")).then(function(e){t.setState({comments:e.data})})}},{key:"getPostById",value:function(e){var t=this;f.a.get("".concat(D.getState().baseUrl,"/posts/").concat(e)).then(function(e){t.setState({post:e.data}),t.getUserById(e.data.userId)}).catch(function(e){t.props.history.push("/"),console.log(e)})}},{key:"isMore",value:function(){this.setState({more:!this.state.more})}},{key:"componentDidMount",value:function(){D.subscribe(function(){return console.log("Look ma, Redux!!")}),this.getPostById(this.props.match.params.id),this.getCommentsById(this.props.match.params.id)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(M.SkeletonTheme,{color:"#202020",highlightColor:"#444"},c.a.createElement("div",{className:"user-info"},c.a.createElement("div",{className:"general"},c.a.createElement("img",{src:J.a}),c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement(X.a,{className:"icon"}),this.state.user.name||c.a.createElement(U.a,{width:150})),c.a.createElement("div",null,c.a.createElement(z.a,{className:"icon"}),this.state.user.email?c.a.createElement("a",{href:"mailto:".concat(this.state.user.email)},this.state.user.email):c.a.createElement(U.a,{width:150})),c.a.createElement("div",null,c.a.createElement(K.a,{className:"icon"}),this.state.user.phone||c.a.createElement(U.a,{width:150})),c.a.createElement("div",null,c.a.createElement(V.a,{className:"icon"}),this.state.user.website?c.a.createElement("a",{href:"http://".concat(this.state.user.website),target:"_blank"},this.state.user.website," "):c.a.createElement(U.a,{width:150})),c.a.createElement("div",{className:"more"},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"more-less",onClick:this.isMore},this.state.more?c.a.createElement(H.a,null):c.a.createElement(_.a,null)))),c.a.createElement("div",{className:"additional "+(this.state.more?"active":"")},this.state.user.company?c.a.createElement("div",{className:"description"},c.a.createElement("div",null,"Company:"),c.a.createElement("div",null,"name: ",this.state.user.company.name),c.a.createElement("div",null,"catch phrase: ",this.state.user.company.catchPhrase),c.a.createElement("div",null,"bs: ",this.state.user.company.bs)):null,this.state.user.address?c.a.createElement("div",{className:"description"},c.a.createElement("div",null,"Address:"),c.a.createElement("div",null,"city: ",this.state.user.address.city),c.a.createElement("div",null,"street: ",this.state.user.address.street),c.a.createElement("div",null,"suite: ",this.state.user.address.suite)):null)))),c.a.createElement("div",{className:"container"},c.a.createElement(P,{title:this.state.post.title,body:this.state.post.body}),c.a.createElement("h1",null," comments(",this.state.comments.length,")"),this.state.comments?c.a.createElement("div",null,this.state.comments.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(T,{name:e.name,body:e.body}))})):c.a.createElement(U.a,{count:3}))))}}]),t}(n.Component),Z=[{path:"/",exact:!0,component:L},{path:"/contact",exact:!0,component:function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,"coming soon")}}]),t}(n.Component)},{path:"/about",exact:!0,component:function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,"coming soon")}}]),t}(n.Component)},{path:"/post/:id",exact:!0,component:Y},{path:"*",restricted:!1,component:function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,"NotFound")}}]),t}(n.Component)}],$=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,Object(b.a)(Z))}}]),t}(n.Component),ee=a(40),te=a.n(ee),ae=a(41),ne=a.n(ae),ce=a(42),se=a.n(ce),oe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.a,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"all-content"},c.a.createElement("header",null,c.a.createElement(h.a,{to:"/"},c.a.createElement("div",null,c.a.createElement("img",{src:te.a}),"logo")),c.a.createElement("div",{style:{flex:1}}),c.a.createElement(h.a,{to:"/contact"},c.a.createElement(ne.a,null),"contact"),c.a.createElement(h.a,{to:"/about"},c.a.createElement(se.a,null),"about")),c.a.createElement($,null)),c.a.createElement("footer",null,c.a.createElement(h.a,{to:"/contact"},"contact"),c.a.createElement(h.a,{to:"/about"},"about")))))}}]),t}(n.Component);o.a.render(c.a.createElement(oe,null),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.2a606c05.chunk.js.map