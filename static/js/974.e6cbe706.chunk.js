"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{722:function(t,n,e){e.d(n,{Bt:function(){return v},bI:function(){return p},wr:function(){return o},y:function(){return f},yK:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(340),s="e31eaaf260ec0a76b88e1d1e887ef52e";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},974:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(861),a=e(439),c=e(757),u=e.n(c),s=e(722),o=e(791),i=e(689),p={},f=e(184),v=function(){var t=(0,i.UO)().movieId,n=(0,o.useState)([]),e=(0,a.Z)(n,2),c=e[0],v=e[1];(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Bt)(t);case 3:e=n.sent,v(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();t&&n()}),[t]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{onClick:function(){window.history.back()},className:p.btnGoBack,children:"Go back"}),c&&c.length>0?c.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author:",t.author]}),(0,f.jsx)("p",{children:t.content})]},t.id)})):(0,f.jsx)("p",{children:"No reviews"})]})}}}]);
//# sourceMappingURL=974.e6cbe706.chunk.js.map