!function(e){function t(t){for(var r,o,i=t[0],c=t[1],a=t[2],s=0,d=[];s<i.length;s++)o=i[s],D[o]&&d.push(D[o][0]),D[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(A&&A(t);d.length;)d.shift()();return k.push.apply(k,a||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==D[i]&&(r=!1)}r&&(k.splice(t--,1),e=C(C.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!g[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--m&&0===y&&x()}(e,t),r&&r(e,t)};var o,i=!0,c="ca63242369584f5dfd8c",a=1e4,s={},d=[],u=[];var l=[],p="idle";function f(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,v,_,m=0,y=0,b={},w={},g={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=a,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=C.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;w={},b={},g=e.c,_=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in v={},D)R(n);return"prepare"===p&&0===y&&0===m&&x(),t});var t}function R(e){g[e]?(w[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=C.p+""+e+"."+c+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function x(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,i,a;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((i=E[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var s=0;s<i.parents.length;s++){var d=i.parents[s],u=E[d];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([d]),moduleId:c,parentId:d};-1===t.indexOf(d)&&(u.hot._acceptedDependencies[c]?(n[d]||(n[d]=[]),l(n[d],[c])):(delete n[d],t.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var j;a=O(w);var R=!1,x=!1,P=!1,k="";switch((j=v[w]?u(a):{type:"disposed",moduleId:w}).chain&&(k="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(R=new Error("Aborted because of self decline: "+j.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(R=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(R=new Error("Aborted because "+a+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(j),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(R)return f("abort"),Promise.reject(R);if(x)for(a in y[a]=v[a],l(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,a)&&(h[a]||(h[a]=[]),l(h[a],j.outdatedDependencies[a]));P&&(l(m,[j.moduleId]),y[a]=b)}var F,H=[];for(r=0;r<m.length;r++)a=m[r],E[a]&&E[a].hot._selfAccepted&&H.push({module:a,errorHandler:E[a].hot._selfAccepted});f("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete D[e]}(e)});for(var S,A,I=m.slice();I.length>0;)if(a=I.pop(),i=E[a]){var M={},T=i.hot._disposeHandlers;for(o=0;o<T.length;o++)(n=T[o])(M);for(s[a]=M,i.hot.active=!1,delete E[a],delete h[a],o=0;o<i.children.length;o++){var U=E[i.children[o]];U&&((F=U.parents.indexOf(a))>=0&&U.parents.splice(F,1))}}for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(i=E[a]))for(A=h[a],o=0;o<A.length;o++)S=A[o],(F=i.children.indexOf(S))>=0&&i.children.splice(F,1);for(a in f("apply"),c=_,y)Object.prototype.hasOwnProperty.call(y,a)&&(e[a]=y[a]);var $=null;for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(i=E[a])){A=h[a];var q=[];for(r=0;r<A.length;r++)if(S=A[r],n=i.hot._acceptedDependencies[S]){if(-1!==q.indexOf(n))continue;q.push(n)}for(r=0;r<q.length;r++){n=q[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:a,dependencyId:A[r],error:e}),t.ignoreErrored||$||($=e)}}}for(r=0;r<H.length;r++){var W=H[r];a=W.module,d=[a];try{C(a)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:n,originalError:e}),t.ignoreErrored||$||($=n),$||($=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:a,error:e}),t.ignoreErrored||$||($=e)}}return $?(f("fail"),Promise.reject($)):(f("idle"),new Promise(function(e){e(m)}))}var E={},D={1:0},k=[];function C(t){if(E[t])return E[t].exports;var n=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:P,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:s[e]};return o=void 0,t}(t),parents:(u=d,d=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=E[e];if(!t)return C;var n=function(n){return t.hot.active?(E[n]?-1===E[n].parents.indexOf(e)&&E[n].parents.push(e):(d=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var i in C)Object.prototype.hasOwnProperty.call(C,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===p&&f("prepare"),y++,C.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(b[e]||R(e),0===y&&0===m&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),C.t(e,-2&t)},n}(t)),n.l=!0,n.exports}C.m=e,C.c=E,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)C.d(n,r,function(t){return e[t]}.bind(null,r));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="dist/",C.h=function(){return c};var F=window.webpackJsonp=window.webpackJsonp||[],H=F.push.bind(F);F.push=t,F=F.slice();for(var S=0;S<F.length;S++)t(F[S]);var A=H;k.push([43,0]),n()}([function(e,t){e.exports=Vue},,function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item active"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/counter"}},[this._v("Counter")])],1),this._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/fetchdata"}},[this._v("Fetch data")])],1)])])},o=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement;this._self._c;return this._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Hello, world!")]),e._v(" "),n("p",[e._v("Welcome to your new single-page application, built with:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://get.asp.net/"}},[e._v("ASP.NET Core")]),e._v(" and "),n("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"}},[e._v("C#")]),e._v(" for cross-platform server-side code")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js")]),e._v(" and "),n("a",{attrs:{href:"http://www.typescriptlang.org/"}},[e._v("TypeScript")]),e._v(" for client-side code")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://webpack.github.io/"}},[e._v("Webpack")]),e._v(" for building and bundling client-side resources")]),e._v(" "),n("li",[n("a",{attrs:{href:"http://getbootstrap.com/"}},[e._v("Bootstrap")]),e._v(" for layout and styling")])]),e._v(" "),n("p",[e._v("To help you get started, we've also set up:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Client-side navigation")]),e._v(". For example, click "),n("em",[e._v("Counter")]),e._v(" then "),n("em",[e._v("Back")]),e._v(" to return here.")]),e._v(" "),n("li",[n("strong",[e._v("Webpack dev middleware")]),e._v(". In development mode, there's no need to run the "),n("code",[e._v("webpack")]),e._v(" build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.")]),e._v(" "),n("li",[n("strong",[e._v("Hot module replacement")]),e._v(". In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Vue app will be rebuilt and a new instance injected is into the page.")]),e._v(" "),n("li",[n("strong",[e._v("Efficient production builds")]),e._v(". In production mode, development-time features are disabled, and the "),n("code",[e._v("webpack")]),e._v(" build tool produces minified static CSS and JavaScript files.")])])])}];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app-root"}},[t("div",[t("menu-component")],1),this._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-9"},[t("router-view")],1)])])},o=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Counter")]),e._v(" "),n("p",[e._v("This is a simple example of a Vue.js component.")]),e._v(" "),n("p",[e._v("Current count: "),n("strong",[e._v(e._s(e.currentcount))])]),e._v(" "),n("button",{on:{click:e.incrementCounter}},[e._v("Increment")])])},o=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Weather forecast")]),e._v(" "),n("p",[e._v("This component demonstrates fetching data from the server.")]),e._v(" "),e.forecasts.length?n("table",{staticClass:"table"},[e._m(0),e._v(" "),n("tbody",e._l(e.forecasts,function(t){return n("tr",[n("td",[e._v(e._s(t.dateFormatted))]),e._v(" "),n("td",[e._v(e._s(t.temperatureC))]),e._v(" "),n("td",[e._v(e._s(t.temperatureF))]),e._v(" "),n("td",[e._v(e._s(t.summary))])])}))]):n("p",[n("em",[e._v("Loading...")])])])},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Date")]),this._v(" "),t("th",[this._v("Temp. (C)")]),this._v(" "),t("th",[this._v("Temp. (F)")]),this._v(" "),t("th",[this._v("Summary")])])])}];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},,,,function(e,t,n){"use strict";var r,o=n(0),i=n.n(o),c=n(8),a=n(13),s=n.n(a),d=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forecasts=[],t}return d(t,e),t.prototype.mounted=function(){var e=this;fetch("api/SampleData/WeatherForecasts").then(function(e){return e.json()}).then(function(t){e.forecasts=t})},t=u([c.a],t)}(i.a);s()(function(){s()("body").append("hhh")});t.a=l},function(e,t,n){"use strict";var r,o=n(0),i=n.n(o),c=n(8),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.currentcount=0,t}return a(t,e),t.prototype.incrementCounter=function(){this.currentcount++},t=s([c.a],t)}(i.a);t.a=d},function(e,t,n){"use strict";var r,o=n(0),i=n.n(o),c=n(8),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t=s([Object(c.a)({components:{MenuComponent:n(16).default}})],t)}(i.a);t.a=d},function(e,t){e.exports=jQuery},function(e,t){e.exports=VueRouter},,function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1),i=Object(o.a)({},r.render,r.staticRenderFns,!1,null,null,null),c=n(9);c.install(n(0)),c.compatible&&(e.hot.accept(),e.hot.data?c.reload("92636d94",i.options):c.createRecord("92636d94",i.options),e.hot.accept(2,function(e){r=n(2),c.rerender("92636d94",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="ClientApp/components/navmenu/navmenu.vue.html",t.default=i.exports},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(12),i=n(1),c=Object(i.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null),a=n(9);a.install(n(0)),a.compatible&&(e.hot.accept(),e.hot.data?a.reload("38eec4b8",c.options):a.createRecord("38eec4b8",c.options),e.hot.accept(4,function(e){r=n(4),a.rerender("38eec4b8",{render:r.render,staticRenderFns:r.staticRenderFns})})),c.options.__file="ClientApp/components/app/app.vue.html",t.default=c.exports},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(10),i=n(1),c=Object(i.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null),a=n(9);a.install(n(0)),a.compatible&&(e.hot.accept(),e.hot.data?a.reload("09ca2332",c.options):a.createRecord("09ca2332",c.options),e.hot.accept(6,function(e){r=n(6),a.rerender("09ca2332",{render:r.render,staticRenderFns:r.staticRenderFns})})),c.options.__file="ClientApp/components/fetchdata/fetchdata.vue.html",t.default=c.exports},,,,function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(11),i=n(1),c=Object(i.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null),a=n(9);a.install(n(0)),a.compatible&&(e.hot.accept(),e.hot.data?a.reload("2131d3c2",c.options):a.createRecord("2131d3c2",c.options),e.hot.accept(5,function(e){r=n(5),a.rerender("2131d3c2",{render:r.render,staticRenderFns:r.staticRenderFns})})),c.options.__file="ClientApp/components/counter/counter.vue.html",t.default=c.exports},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(1),i=Object(o.a)({},r.render,r.staticRenderFns,!1,null,null,null),c=n(9);c.install(n(0)),c.compatible&&(e.hot.accept(),e.hot.data?c.reload("535b66dc",i.options):c.createRecord("535b66dc",i.options),e.hot.accept(3,function(e){r=n(3),c.rerender("535b66dc",{render:r.render,staticRenderFns:r.staticRenderFns})})),i.options.__file="ClientApp/components/home/home.vue.html",t.default=i.exports},function(e,t){e.exports=bootstrap},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(26),n(24);var r=n(0),o=n.n(r),i=n(14),c=n.n(i);o.a.use(c.a);var a=[{path:"/",component:n(23).default},{path:"/counter",component:n(22).default},{path:"/fetchdata",component:n(18).default}];new o.a({el:"#app-root",router:new c.a({mode:"history",routes:a}),render:function(e){return e(n(17).default)}})},,,,,,,,,,,,,,function(e,t){e.exports=vendor_a97868f6692b1f00d16f},function(e,t,n){e.exports=n(41)(2)},function(e,t,n){n(42),n(40),e.exports=n(27)}]);
//# sourceMappingURL=main.js.map