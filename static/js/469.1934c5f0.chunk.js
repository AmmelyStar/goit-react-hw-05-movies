"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{722:function(t,e,r){r.d(e,{Bt:function(){return l},bI:function(){return f},wr:function(){return o},y:function(){return p},yK:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(340),s="e31eaaf260ec0a76b88e1d1e887ef52e";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},469:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),o=r(87),i=r(689),f="style_btnSearch__kDlkt",p="style_searchMoviesList__ARrBA",l=r(722),h=r(184),v=function(t){var e=t.submit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),c=n[0],u=n[1],v=(0,o.lr)(),m=(0,a.Z)(v,2),d=m[0],x=m[1],y=(0,i.TH)(),b=(0,s.useState)([]),k=(0,a.Z)(b,2),g=k[0],w=k[1];(0,s.useEffect)((function(){var t=d.get("query");t&&((0,l.bI)(t).then(w),u(localStorage.getItem("searchInputData")))}),[d]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c),""!==c.trim()&&(x({query:c}),localStorage.setItem("searchQuery",c),localStorage.setItem("searchInputData",c))},children:[(0,h.jsx)("button",{className:f,type:"submit",children:(0,h.jsx)("span",{children:"Search"})}),(0,h.jsx)("input",{name:"inputData",value:c,onChange:function(t){var e=t.target.value;u(e),localStorage.setItem("searchInputData",e)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),g.length>0&&(0,h.jsx)("ul",{children:g.map((function(t){var e=t.title,r=t.id;return(0,h.jsx)("li",{className:p,children:(0,h.jsx)(o.rU,{to:"/movies/".concat(r),state:{from:y},children:e})},r)}))})]})},m=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],i=(0,o.lr)(),f=(0,a.Z)(i,2),p=f[0],m=f[1],d=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.bI)(e);case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){p&&d(p)}),[p]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{submit:function(t){m(t)}}),r.map((function(t){return(0,h.jsx)(o.rU,{to:"/movies/".concat(t.id),children:t.title},t.id)}))]})}}}]);
//# sourceMappingURL=469.1934c5f0.chunk.js.map