!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1228)}({0:function(n,e,t){(function(e){!function(e,t){n.exports=function(){"use strict";function n(n,e){return e={exports:{}},n(e,e.exports),e.exports}var t=function(n){var e=n.id,t=n.viewBox,r=n.content;this.id=e,this.viewBox=t,this.content=r};t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var n=this;["id","viewBox","content"].forEach(function(e){return delete n[e]})};var r=function(n){var e=!!document.importNode,t=(new DOMParser).parseFromString(n,"image/svg+xml").documentElement;return e?document.importNode(t,!0):t},o=("undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self,n(function(n,e){!function(e,t){n.exports=function(){function n(n){return n&&"object"==typeof n&&"[object RegExp]"!==Object.prototype.toString.call(n)&&"[object Date]"!==Object.prototype.toString.call(n)}function e(n){return Array.isArray(n)?[]:{}}function t(t,r){return r&&!0===r.clone&&n(t)?i(e(t),t,r):t}function r(e,r,o){var a=e.slice();return r.forEach(function(r,c){void 0===a[c]?a[c]=t(r,o):n(r)?a[c]=i(e[c],r,o):-1===e.indexOf(r)&&a.push(t(r,o))}),a}function o(e,r,o){var a={};return n(e)&&Object.keys(e).forEach(function(n){a[n]=t(e[n],o)}),Object.keys(r).forEach(function(c){n(r[c])&&e[c]?a[c]=i(e[c],r[c],o):a[c]=t(r[c],o)}),a}function i(n,e,i){var a=Array.isArray(e),c=i||{arrayMerge:r},s=c.arrayMerge||r;return a?Array.isArray(n)?s(n,e,i):t(e,i):o(n,e,i)}return i.all=function(n,e){if(!Array.isArray(n)||n.length<2)throw new Error("first argument should be an array with at least two elements");return n.reduce(function(n,t){return i(n,t,e)})},i}()}()})),i=n(function(n,e){var t={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};e.default=t,n.exports=e.default}),a=function(n){return Object.keys(n).map(function(e){return e+'="'+n[e].toString().replace(/"/g,"&quot;")+'"'}).join(" ")},c=i.svg,s=i.xlink,u={};u[c.name]=c.uri,u[s.name]=s.uri;var l=function(n,e){void 0===n&&(n="");var t=o(u,e||{});return"<svg "+a(t)+">"+n+"</svg>"};return function(n){function e(){n.apply(this,arguments)}n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e;var t={isMounted:{}};return t.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(n){return new e({id:n.getAttribute("id"),viewBox:n.getAttribute("viewBox"),content:n.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),n.prototype.destroy.call(this)},e.prototype.mount=function(n){if(this.isMounted)return this.node;var e="string"==typeof n?document.querySelector(n):n,t=this.render();return this.node=t,e.appendChild(t),t},e.prototype.render=function(){var n=this.stringify();return r(l(n)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,t),e}(t)}()}()}).call(e,t(42))},1:function(n,e,t){(function(e){!function(e,t){n.exports=function(){"use strict";function n(n,e){return e={exports:{}},n(e,e.exports),e.exports}function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}function r(n,e){return k(n).reduce(function(n,t){if(!t.attributes)return n;var r=k(t.attributes),o=e?r.filter(e):r;return n.concat(o)},[])}function o(n){return n.replace(T,function(n){return"%"+n[0].charCodeAt(0).toString(16).toUpperCase()})}function i(n,e,t){return k(n).forEach(function(n){var r=n.getAttribute(N);if(r&&0===r.indexOf(e)){var o=r.replace(e,t);n.setAttributeNS(j,N,o)}}),n}var a=("undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self,n(function(n,e){!function(e,t){n.exports=function(){function n(n){return n&&"object"==typeof n&&"[object RegExp]"!==Object.prototype.toString.call(n)&&"[object Date]"!==Object.prototype.toString.call(n)}function e(n){return Array.isArray(n)?[]:{}}function t(t,r){return r&&!0===r.clone&&n(t)?i(e(t),t,r):t}function r(e,r,o){var a=e.slice();return r.forEach(function(r,c){void 0===a[c]?a[c]=t(r,o):n(r)?a[c]=i(e[c],r,o):-1===e.indexOf(r)&&a.push(t(r,o))}),a}function o(e,r,o){var a={};return n(e)&&Object.keys(e).forEach(function(n){a[n]=t(e[n],o)}),Object.keys(r).forEach(function(c){n(r[c])&&e[c]?a[c]=i(e[c],r[c],o):a[c]=t(r[c],o)}),a}function i(n,e,i){var a=Array.isArray(e),c=i||{arrayMerge:r},s=c.arrayMerge||r;return a?Array.isArray(n)?s(n,e,i):t(e,i):o(n,e,i)}return i.all=function(n,e){if(!Array.isArray(n)||n.length<2)throw new Error("first argument should be an array with at least two elements");return n.reduce(function(n,t){return i(n,t,e)})},i}()}()})),c=n(function(n,e){var t={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};e.default=t,n.exports=e.default}),s=function(n){return Object.keys(n).map(function(e){return e+'="'+n[e].toString().replace(/"/g,"&quot;")+'"'}).join(" ")},u=c.svg,l=c.xlink,d={};d[u.name]=u.uri,d[l.name]=l.uri;var f,p=function(n,e){void 0===n&&(n="");var t=a(d,e||{});return"<svg "+s(t)+">"+n+"</svg>"},g=c.svg,h=c.xlink,v={attrs:(f={style:["position: absolute","width: 0","height: 0"].join("; ")},f[g.name]=g.uri,f[h.name]=h.uri,f)},m=function(n){this.config=a(v,n||{}),this.symbols=[]};m.prototype.add=function(n){var e=this,t=e.symbols,r=this.find(n.id);return r?(t[t.indexOf(r)]=n,!1):(t.push(n),!0)},m.prototype.remove=function(n){var e=this,t=e.symbols,r=this.find(n);return!!r&&(t.splice(t.indexOf(r),1),r.destroy(),!0)},m.prototype.find=function(n){return this.symbols.filter(function(e){return e.id===n})[0]||null},m.prototype.has=function(n){return null!==this.find(n)},m.prototype.stringify=function(){var n=this.config,e=n.attrs,t=this.symbols.map(function(n){return n.stringify()}).join("");return p(t,e)},m.prototype.toString=function(){return this.stringify()},m.prototype.destroy=function(){this.symbols.forEach(function(n){return n.destroy()})};var b=function(n){var e=n.id,t=n.viewBox,r=n.content;this.id=e,this.viewBox=t,this.content=r};b.prototype.stringify=function(){return this.content},b.prototype.toString=function(){return this.stringify()},b.prototype.destroy=function(){var n=this;["id","viewBox","content"].forEach(function(e){return delete n[e]})};var y,x=function(n){var e=!!document.importNode,t=(new DOMParser).parseFromString(n,"image/svg+xml").documentElement;return e?document.importNode(t,!0):t},w=function(n){function e(){n.apply(this,arguments)}n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e;var t={isMounted:{}};return t.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(n){return new e({id:n.getAttribute("id"),viewBox:n.getAttribute("viewBox"),content:n.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),n.prototype.destroy.call(this)},e.prototype.mount=function(n){if(this.isMounted)return this.node;var e="string"==typeof n?document.querySelector(n):n,t=this.render();return this.node=t,e.appendChild(t),t},e.prototype.render=function(){var n=this.stringify();return x(p(n)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,t),e}(b),_={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},k=function(n){return Array.prototype.slice.call(n,0)},E=navigator.userAgent,S={isChrome:/chrome/i.test(E),isFirefox:/firefox/i.test(E),isIE:/msie/i.test(E)||/trident/i.test(E),isEdge:/edge/i.test(E)},O=function(n,e){var t=document.createEvent("CustomEvent");t.initCustomEvent(n,!1,!1,e),window.dispatchEvent(t)},C=function(n){var e=[];return k(n.querySelectorAll("style")).forEach(function(n){n.textContent+="",e.push(n)}),e},M=function(n){return(n||window.location.href).split("#")[0]},A=function(n){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",function(e,t,r){O(n,{oldUrl:r,newUrl:t})})}])},U=function(n,e){return void 0===e&&(e="linearGradient, radialGradient, pattern"),k(n.querySelectorAll("symbol")).forEach(function(n){k(n.querySelectorAll(e)).forEach(function(e){n.parentNode.insertBefore(e,n)})}),n},j=c.xlink.uri,N="xlink:href",T=/[{}|\\\^\[\]`"<>]/g,L=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],B=L.map(function(n){return"["+n+"]"}).join(","),z=function(n,e,t,a){var c=o(t),s=o(a);r(n.querySelectorAll(B),function(n){var e=n.localName,t=n.value;return-1!==L.indexOf(e)&&-1!==t.indexOf("url("+c)}).forEach(function(n){return n.value=n.value.replace(c,s)}),i(e,c,s)},R={MOUNT:"mount",SYMBOL_MOUNT:"symbol_mount"},I=function(n){function e(e){var r=this;void 0===e&&(e={}),n.call(this,a(_,e));var o=t();this._emitter=o,this.node=null;var i=this,c=i.config;if(c.autoConfigure&&this._autoConfigure(e),c.syncUrlsWithBaseTag){var s=document.getElementsByTagName("base")[0].getAttribute("href");o.on(R.MOUNT,function(){return r.updateUrls("#",s)})}var u=this._handleLocationChange.bind(this);this._handleLocationChange=u,c.listenLocationChangeEvent&&window.addEventListener(c.locationChangeEvent,u),c.locationChangeAngularEmitter&&A(c.locationChangeEvent),o.on(R.MOUNT,function(n){c.moveGradientsOutsideSymbol&&U(n)}),o.on(R.SYMBOL_MOUNT,function(n){c.moveGradientsOutsideSymbol&&U(n.parentNode),(S.isIE||S.isEdge)&&C(n)})}n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(n){var e=this,t=e.config;void 0===n.syncUrlsWithBaseTag&&(t.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===n.locationChangeAngularEmitter&&(t.locationChangeAngularEmitter="angular"in window),void 0===n.moveGradientsOutsideSymbol&&(t.moveGradientsOutsideSymbol=S.isFirefox)},e.prototype._handleLocationChange=function(n){var e=n.detail,t=e.oldUrl,r=e.newUrl;this.updateUrls(t,r)},e.prototype.add=function(e){var t=this,r=n.prototype.add.call(this,e);return this.isMounted&&r&&(e.mount(t.node),this._emitter.emit(R.SYMBOL_MOUNT,e.node)),r},e.prototype.attach=function(n){var e=this,t=this;if(t.isMounted)return t.node;var r="string"==typeof n?document.querySelector(n):n;return t.node=r,this.symbols.forEach(function(n){n.mount(t.node),e._emitter.emit(R.SYMBOL_MOUNT,n.node)}),k(r.querySelectorAll("symbol")).forEach(function(n){var e=w.createFromExistingNode(n);e.node=n,t.add(e)}),this._emitter.emit(R.MOUNT,r),r},e.prototype.destroy=function(){var n=this,e=n.config,t=n.symbols,r=n._emitter;t.forEach(function(n){return n.destroy()}),r.off("*"),window.removeEventListener(e.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(n,e){void 0===n&&(n=this.config.mountTo),void 0===e&&(e=!1);var t=this;if(t.isMounted)return t.node;var r="string"==typeof n?document.querySelector(n):n,o=t.render();return this.node=o,e&&r.childNodes[0]?r.insertBefore(o,r.childNodes[0]):r.appendChild(o),this._emitter.emit(R.MOUNT,o),o},e.prototype.render=function(){return x(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(n,e){if(!this.isMounted)return!1;var t=document.querySelectorAll(this.config.usagesToUpdate);return z(this.node,t,M(n)+"#",M(e)+"#"),!0},Object.defineProperties(e.prototype,r),e}(m),$=n(function(n){/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,t){n.exports=function(){var n,e=[],t=document,r=t.documentElement.doScroll,o=(r?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return o||t.addEventListener("DOMContentLoaded",n=function(){for(t.removeEventListener("DOMContentLoaded",n),o=1;n=e.shift();)n()}),function(n){o?setTimeout(n,0):e.push(n)}}()}()});!window.__SVG_SPRITE__?(y=new I({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=y):y=window.__SVG_SPRITE__;var G=function(){var n=document.getElementById("__SVG_SPRITE_NODE__");n?y.attach(n):y.mount(document.body,!0)};return document.body?G():$(G),y}()}()}).call(e,t(42))},103:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.push([n.i,".icon_6f4 {\n  position: relative;\n\n  display: inline-block;\n\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.glyph_ce7 {\n  display: inline-block;\n\n  vertical-align: middle;\n  pointer-events: none;\n}\n\n.gray_dda {\n  color: #999;\n  color: var(--ring-secondary-color);\n}\n\n.hover_254 {\n  color: #80c6ff;\n  color: var(--ring-icon-hover-color);\n}\n\n.green_706 {\n  color: #59a869;\n  color: var(--ring-icon-success-color);\n}\n\n.magenta_f9b {\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.red_a5a {\n  color: #db5860;\n  color: var(--ring-icon-error-color);\n}\n\n.blue_5cf {\n  color: #008eff;\n  color: var(--ring-main-color);\n}\n\n.white_c3f {\n  color: #fff;\n  color: var(--ring-dark-text-color);\n}\n\n.loading_c82 {\n  -webkit-animation-name: icon-loading_857;\n          animation-name: icon-loading_857;\n  -webkit-animation-duration: 1200ms;\n          animation-duration: 1200ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes icon-loading_857 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes icon-loading_857 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n",""]),e.locals={icon:"icon_6f4",glyph:"glyph_ce7",gray:"gray_dda",hover:"hover_254",green:"green_706",magenta:"magenta_f9b",red:"red_a5a",blue:"blue_5cf",white:"white_c3f",loading:"loading_c82","icon-loading":"icon-loading_857"}},111:function(n,e,t){var r=t(0),o=t(1),i=new r({id:"ring-icon-chevron-right",use:"ring-icon-chevron-right-usage",viewBox:"0 0 16 16",content:'<symbol viewBox="0 0 16 16" id="ring-icon-chevron-right"><path d="M10.916 8a.31.31 0 0 1-.1.23l-4.67 4.67a.313.313 0 0 1-.46 0l-.5-.502a.32.32 0 0 1-.102-.23.32.32 0 0 1 .1-.23L9.125 8l-3.94-3.938a.316.316 0 0 1-.1-.23c0-.086.034-.163.1-.23l.502-.502a.318.318 0 0 1 .23-.1c.088 0 .163.034.23.1l4.67 4.67a.318.318 0 0 1 .1.23z" /></symbol>'});o.add(i),n.exports="#"+i.id},12:function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1228:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(55),o=t.n(r),i=t(967);o.a.module("Example.breadcrumb",[i.a]).controller("DemoCtrl",[function(){this.clickSecondLevel=function(){return alert("Second level was clicked")}}])},1233:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,".ring-breadcrumb{margin:20px 0 24px;font-size:0}.ring-breadcrumb_header{margin-bottom:0}.ring-breadcrumb_small .ring-breadcrumb__element{display:inline-block;height:16px;line-height:14px;font-size:13px;font-size:var(--ring-font-size)}.ring-breadcrumb__element{display:inline-block;height:24px;font-size:24px;line-height:28px;text-decoration:none}.ring-breadcrumb__element .ring-breadcrumb{display:inline}.ring-breadcrumb__element > span{display:inline-block}.ring-breadcrumb__element_active,.ring-breadcrumb .active{cursor:default}.ring-breadcrumb__element__description{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;position:relative;top:2px;width:400px;padding-left:16px;font-size:13px;font-size:var(--ring-font-size);line-height:16px}.ring-breadcrumb__sep__icon{margin:0 2px;margin-top:-14px;color:#dbdbdb;color:var(--ring-icon-disabled-color)}",""])},1250:function(n,e,t){n.exports='<div class=ring-breadcrumb> <span class=ring-breadcrumb__element ng-show=label> <rg-link ng-if=link ng-href={{link}}>{{label}}</rg-link> <rg-link ng-if="!link && onClick" ng-class="onClick && \'ring-link\'" ng-click="onClick({$event: $event})">{{label}}</rg-link> <span ng-if="!link && !onClick" ng-click="onClick({$event: $event})">{{label}}</span> </span> <span class=ring-breadcrumb__sep ng-show=label> <rg-icon class=ring-breadcrumb__sep__icon size=16 glyph='+t(111)+'></rg-icon> </span> <span class="ring-breadcrumb__element active" ng-transclude></span> </div> '},1256:function(n,e,t){var r=t(1233);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)},15:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},17:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(d(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(d(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c=i[1],s=i[2],u=i[3],l={css:c,media:s,sourceMap:u};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function i(n,e){var t=b(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),w.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(n.insertAt.before,t);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=l();t&&(n.attrs.nonce=t)}return u(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),i(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function l(){return t.nc}function d(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var u=x++;t=y||(y=c(e)),r=f.bind(null,t,u,!1),o=f.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),r=g.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(e),r=p.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function f(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=k(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function g(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=m.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),y=null,x=0,w=[],_=t(60);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var c=t[a],s=h[c.id];s.refs--,i.push(s)}n&&r(o(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete h[s.id]}}}};var k=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(566)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(645)},204:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.push([n.i,".link_46b {\n  cursor: pointer;\n  -webkit-transition: color 0.15s ease-out;\n  transition: color 0.15s ease-out;\n  -webkit-transition: color var(--ring-fast-ease);\n  transition: color var(--ring-fast-ease);\n  color: #0f5b99;\n  color: var(--ring-link-color);\n}\n\n.link_46b,\n  .link_46b:hover {\n  text-decoration: none;\n}\n\n.link_46b:hover,\n  .link_46b.hover_723 {\n  -webkit-transition: none;\n  transition: none;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.link_46b:hover .inner_e7d {\n  border-width: 0;\n  border-bottom: 2px solid;\n  border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n  border-image-slice: 0 0 100% 0;\n}\n\n.link_46b.active_8b4 {\n  color: inherit;\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover {\n  text-decoration: underline;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover .inner_e7d {\n  border: none;\n}\n\n.link_46b.pseudo_b5d:hover {\n  text-decoration: none;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.pseudo_b5d:hover .inner_e7d {\n  border: none;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  .link_46b:hover .inner_e7d {\n    border-bottom-width: 1px;\n  }\n}\n\n.inherit_bc0:not(:hover) {\n  color: inherit;\n}\n\n.pseudo_b5d {\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit\n}\n\n.pseudo_b5d::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n",""]),e.locals={link:"link_46b",hover:"hover_723",inner:"inner_e7d",active:"active_8b4",compatibilityUnderlineMode:"compatibilityUnderlineMode_a72",pseudo:"pseudo_b5d",inherit:"inherit_bc0"}},236:function(n,e,t){var r=t(204);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)},28:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(93),i=r(o),a=t(86),c=r(a);e.default=function(){function n(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=(0,c.default)(n);!(r=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},325:function(n,e,t){"use strict";var r=t(28),o=t.n(r),i=t(55),a=t.n(i),c=t(33),s=(t.n(c),t(54)),u=t(94),l=t(98),d=t.n(l),f=a.a.module("Ring.icon",[]),p=u.b.Size32;f.directive("rgIcon",[function(){return{restrict:"E",scope:{glyph:"@",loading:"=?",color:"@?",size:"@?",height:"@?",width:"@?"},template:'\n<svg\n  class="'+d.a.glyph+'"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  ng-style="style"\n>\n  <use ng-href="{{glyphPath}}" xlink:href=""></use>\n</svg>',controller:["$scope",function(n){n.$watch("glyph",function(e){n.glyphPath=t.i(s.f)(e)})}],link:function(n,e,t){t.$addClass("ring-icon"),t.$addClass(d.a.icon),n.$watch("loading",function(n){n?t.$addClass(d.a.loading):t.$removeClass(d.a.loading)}),n.$watch(function(){return n.color&&u.a[n.color]&&d.a[u.a[n.color]]},function(n,e){n&&(t.$addClass(n),e&&e!==n&&t.$removeClass(e))}),n.$watchGroup(["size","width","height"],function(e){var t=o()(e,3),r=t[0],i=t[1],a=t[2];if(!i&&!a){var c=(r||p)+"px";return void(n.style={width:c,height:c})}n.style={},i&&(n.style.width=i+"px"),a&&(n.style.height=a+"px")})}}}]),e.a=f.name},33:function(n,e,t){n.exports=t(2)(400)},39:function(n,e,t){"use strict";var r=t(92),o=t.n(r),i=new o.a;i.sniff(),e.a=i},42:function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},54:function(n,e,t){"use strict";function r(){var n=document.getElementsByTagName("base")[0];return n?n.href:void 0}function o(){var n=r(),e=window.location.protocol+"//"+window.location.host;return n?p.test(n)?n:e+n:e}function i(){return window.location.href.split("#")[0]}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;if(-1===n.indexOf("http://")&&-1===n.indexOf("https://")&&0!==n.indexOf("/")){var t=e();if(t)return t+n}return n}function c(n,e){return n&&-1===e.indexOf("http://")&&-1===e.indexOf("https://")?n+e:e}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return e()&&("firefox"===f.a.browser.name||"edge"===f.a.browser.name||"chrome"===f.a.browser.name&&f.a.browser.version[0]>=49)?t()+n:String(n)}function u(n){function e(n){return decodeURIComponent(n.replace(/\+/g," "))}if(null==n)return{};for(var t=/([^&;=]+)=?([^&;]*)/g,r={},o=void 0;null!=(o=t.exec(n));)r[e(o[1])]=e(o[2]);return r}function l(n,e){var t=-1===n.indexOf("?")?"?":"&",r=n,o=void 0,i=0;for(o in e)e.hasOwnProperty(o)&&null!=e[o]&&(r+=(0==i++?t:"&")+encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r}function d(n){return 0===n.indexOf("data:")}e.c=o,e.d=a,e.b=c,e.f=s,e.e=u,e.a=l,e.g=d;var f=t(39),p=/^[a-z]+:\/\//i},55:function(n,e,t){n.exports=t(2)(394)},60:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},751:function(n,e,t){"use strict";function r(){return{restrict:"E",transclude:!0,replace:!0,template:'\n<a class="'+c.a.link+" "+c.a.compatibilityUnderlineMode+'"\n><span class="'+c.a.inner+'" ng-transclude></span></a>\n    '}}var o=t(55),i=t.n(o),a=t(236),c=t.n(a),s=i.a.module("Ring.link",[]);s.directive("rgLink",[r]),e.a=s.name},86:function(n,e,t){n.exports={default:t(88),__esModule:!0}},88:function(n,e,t){t(20),t(19),n.exports=t(90)},90:function(n,e,t){n.exports=t(2)(447)},92:function(n,e,t){n.exports=t(2)(405)},93:function(n,e,t){n.exports={default:t(95),__esModule:!0}},94:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r={BLUE:"blue",DEFAULT:"",GRAY:"gray",GREEN:"green",MAGENTA:"magenta",RED:"red",WHITE:"white"},o={Size12:12,Size14:14,Size16:16,Size18:18,Size24:24,Size32:32,Size40:40,Size48:48,Size64:64,Size96:96,Size128:128}},95:function(n,e,t){t(20),t(19),n.exports=t(96)},96:function(n,e,t){n.exports=t(2)(223)},967:function(n,e,t){"use strict";var r=t(55),o=t.n(r),i=t(1256),a=(t.n(i),t(751)),c=t(325),s=o.a.module("Ring.breadcrumb",[a.a,c.a]);s.directive("rgBreadcrumb",[function(){return{template:t(1250),replace:!0,transclude:!0,restrict:"E",scope:{label:"@",link:"@",onClick:"&"}}}]),e.a=s.name},98:function(n,e,t){var r=t(103);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)}});