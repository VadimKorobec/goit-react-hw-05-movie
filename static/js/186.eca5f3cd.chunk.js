"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(439),a=t(791),u=t(689),c=t(32),s=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],o=(0,a.useState)(!1),p=(0,n.Z)(o,2),f=p[0],h=p[1],v=(0,u.UO)().moviesId;return(0,a.useEffect)((function(){(0,c.q5)(v).then(i),t.length>0&&h(!0)}),[v,t]),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:f?t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("p",{children:"We don't have any reviews for this movie"})})})}},32:function(e,r,t){t.d(r,{Wf:function(){return o},fh:function(){return p},q5:function(){return h},rj:function(){return i},yo:function(){return f}});var n=t(861),a=t(687),u=t.n(a),c=t(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="30f8890b4b18c3650777b7120811d941",i=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?",{params:{api_key:s,page:1}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?&language=en-US&query=".concat(r,"&page=1&include_adult=false "),{params:{api_key:s,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"?&language=en-US "),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits?&language=en-US"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews?&language=en-US "),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.eca5f3cd.chunk.js.map