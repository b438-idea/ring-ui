!function(t){function o(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}var n={};o.m=t,o.c=n,o.i=function(t){return t},o.d=function(t,n,r){o.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="/",o(o.s=1060)}({1060:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n(477),i=(n.n(r),n(449)),e=(n.n(i),n(474)),a=(n.n(e),n(996)),l=(n.n(a),n(419));n.n(l)},12:function(t,o){function n(t,o){var n=t[1]||"",i=t[3];if(!i)return n;if(o&&"function"==typeof btoa){var e=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([e]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var o=[];return o.toString=function(){return this.map(function(o){var r=n(o,t);return o[2]?"@media "+o[2]+"{"+r+"}":r}).join("")},o.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var e=this[i][0];"number"==typeof e&&(r[e]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),o.push(a))}},o}},1234:function(t,o,n){var r=n(450);o=t.exports=n(12)(!1),o.push([t.i,'.ring-button{color:#444;color:var(--ring-text-color);font-size:12px;font-family:system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;font-family:var(--ring-font-family);background-color:#fff;background-image:-webkit-gradient(linear, left bottom, left top, from(#f0f0f0), to(#fff));background-image:linear-gradient(to top, #f0f0f0, #fff);color:#444;color:var(--ring-text-color);text-decoration:none;display:inline-block;position:relative;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:24px;line-height:24px;padding:0 16px;margin:0;outline:0;border:0;border-radius:3px;border-radius:var(--ring-border-radius);-webkit-box-shadow:inset 0 1px 0 0 #ccc,inset 1px 0 0 0 #ccc,inset -1px 0 0 0 #ccc,inset 0 -1px 0 0 #bfbfbf;box-shadow:inset 0 1px 0 0 #ccc,inset 1px 0 0 0 #ccc,inset -1px 0 0 0 #ccc,inset 0 -1px 0 0 #bfbfbf;cursor:default}.ring-button:focus:not([disabled]):not(.ring-button_loader){-webkit-box-shadow:0 0 0 2px rgba(37, 183, 255, .5) !important;box-shadow:0 0 0 2px rgba(37, 183, 255, .5) !important;z-index:3}.ring-button[disabled]{opacity:.5;pointer-events:none}.ring-button:hover:not([disabled]):not(.ring-button_loader){background-color:#fff;background-image:-webkit-gradient(linear, left bottom, left top, from(#e9e9e9), to(#fff));background-image:linear-gradient(to top, #e9e9e9, #fff);-webkit-box-shadow:inset 0 0 0 1px #aaa;box-shadow:inset 0 0 0 1px #aaa;z-index:1}.ring-button:active:not([disabled]):not(.ring-button_loader),.ring-button.ring-button_active:not([disabled]):not(.ring-button_loader){background:#b8d1e5;background:var(--ring-icon-color);-webkit-box-shadow:inset 0 0 0 1px #25b7ff,inset 0 1px 4px 0 rgba(3, 116, 172, .5);box-shadow:inset 0 0 0 1px #25b7ff,inset 0 1px 4px 0 rgba(3, 116, 172, .5);z-index:2}.ring-button:active:focus:not([disabled]):not(.ring-button_loader),.ring-button.ring-button_active:focus:not([disabled]):not(.ring-button_loader){-webkit-box-shadow:0 0 0 2px rgba(37, 183, 255, .5),inset 0 1px 2px 1px rgba(0, 0, 0, .1) !important;box-shadow:0 0 0 2px rgba(37, 183, 255, .5),inset 0 1px 2px 1px rgba(0, 0, 0, .1) !important}.ring-button .ring-icon{color:#999;color:var(--ring-secondary-color);line-height:8px;vertical-align:1px;top:auto}.ring-button sup{line-height:0}.ring-button__icon.ring-button__icon{display:none}.ring-button_icon .ring-button__icon.ring-button__icon{display:inline-block}.ring-button::-moz-focus-inner{outline:0;padding:0;border:0}.ring-button_loader{pointer-events:none}.ring-button_loader[disabled]{opacity:1}.ring-button_primary{background-color:#ff8543;background-image:-webkit-gradient(linear, left bottom, left top, from(#ff5a00), to(#ff8543));background-image:linear-gradient(to top, #ff5a00, #ff8543);-webkit-box-shadow:inset 0 -2px 0 -1px #cc4902;box-shadow:inset 0 -2px 0 -1px #cc4902;color:#fff}.ring-button_primary:hover:not([disabled]):not(.ring-button_loader){background-color:#ff9f6b;background-image:-webkit-gradient(linear, left bottom, left top, from(#ff5a00), to(#ff9f6b));background-image:linear-gradient(to top, #ff5a00, #ff9f6b);-webkit-box-shadow:inset 0 0 0 1px #cc4902;box-shadow:inset 0 0 0 1px #cc4902}.ring-button_primary:active:not([disabled]):not(.ring-button_loader),.ring-button_primary.ring-button_active:not([disabled]):not(.ring-button_loader){background-color:#ff5a00;background-image:-webkit-gradient(linear, left bottom, left top, from(#ff8543), to(#ff5a00));background-image:linear-gradient(to top, #ff8543, #ff5a00);-webkit-box-shadow:inset 0 2px 0 -1px #cc4902;box-shadow:inset 0 2px 0 -1px #cc4902}.ring-button_primary .ring-icon{color:#fff}.ring-button_blue{background-color:#25b7ff;background-image:-webkit-gradient(linear, left bottom, left top, from(#0084ff), to(#25b7ff));background-image:linear-gradient(to top, #0084ff, #25b7ff);-webkit-box-shadow:inset 0 -2px 0 -1px #015099;box-shadow:inset 0 -2px 0 -1px #015099;color:#fff}.ring-button_blue:hover:not([disabled]):not(.ring-button_loader){background-color:#5bc9ff;background-image:-webkit-gradient(linear, left bottom, left top, from(#0084ff), to(#5bc9ff));background-image:linear-gradient(to top, #0084ff, #5bc9ff);-webkit-box-shadow:inset 0 0 0 1px #0077e5;box-shadow:inset 0 0 0 1px #0077e5}.ring-button_blue:active:not([disabled]):not(.ring-button_loader),.ring-button_blue.ring-button_active:not([disabled]):not(.ring-button_loader){background-color:#0084ff;background-image:-webkit-gradient(linear, left bottom, left top, from(#25b7ff), to(#0084ff));background-image:linear-gradient(to top, #25b7ff, #0084ff);-webkit-box-shadow:inset 0 2px 0 -1px #0077e5;box-shadow:inset 0 2px 0 -1px #0077e5}.ring-button_blue .ring-icon{color:#fff}.ring-button_delayed .ring-button__content:after{content:"\\2026"}.ring-button_danger{color:#c22731;color:var(--ring-error-color)}.ring-button_danger .ring-icon{color:inherit}.ring-button_short{width:32px;padding:0}@-webkit-keyframes button-progress{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-4px);transform:translateX(-4px)}}@keyframes button-progress{from{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-4px);transform:translateX(-4px)}}@-webkit-keyframes button-loader-appear{0%{display:none;opacity:0}99%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes button-loader-appear{0%{display:none;opacity:0}99%{display:block;opacity:0}100%{display:block;opacity:1}}.ring-button__loader{display:none;opacity:0;position:absolute;left:0;bottom:0;width:100%;height:100%;margin-bottom:0;max-width:none;background-color:transparent;overflow:hidden}.ring-button__loader:after{content:"";bottom:0;left:0;position:absolute;right:-4px;top:0;-webkit-animation:button-progress 200ms linear infinite;animation:button-progress 200ms linear infinite;background-repeat:repeat;background-image:url('+r(n(1360))+")}.ring-button_loader .ring-button__loader{display:block;opacity:1;-webkit-animation:button-loader-appear 75ms linear 1;animation:button-loader-appear 75ms linear 1}.ring-button_loader.ring-button_default .ring-button__loader{background-image:url("+r(n(1359))+")}",""])},1359:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgogIDxzdHlsZT4KICAgIGxpbmUgewogICAgICBzdHJva2U6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC42KTsKICAgIH0KICA8L3N0eWxlPgogIDxsaW5lIHgxPSIwIiB5MT0iNSIgeDI9IjUiIHkyPSIwIiAvPgogIDxsaW5lIHgxPSItMSIgeTE9IjEiIHgyPSIxIiB5Mj0iLTEiIC8+CiAgPGxpbmUgeDE9IjQiIHkxPSI2IiB4Mj0iNiIgeTI9IjQiIC8+Cjwvc3ZnPgo="},1360:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgogIDxzdHlsZT4KICAgIGxpbmUgewogICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTsKICAgIH0KICA8L3N0eWxlPgogIDxsaW5lIHgxPSIwIiB5MT0iNSIgeDI9IjUiIHkyPSIwIiAvPgogIDxsaW5lIHgxPSItMSIgeTE9IjEiIHgyPSIxIiB5Mj0iLTEiIC8+CiAgPGxpbmUgeDE9IjQiIHkxPSI2IiB4Mj0iNiIgeTI9IjQiIC8+Cjwvc3ZnPgo="},17:function(t,o,n){function r(t,o){for(var n=0;n<t.length;n++){var r=t[n],i=u[r.id];if(i){i.refs++;for(var e=0;e<i.parts.length;e++)i.parts[e](r.parts[e]);for(;e<r.parts.length;e++)i.parts.push(c(r.parts[e],o))}else{for(var a=[],e=0;e<r.parts.length;e++)a.push(c(r.parts[e],o));u[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,o){for(var n=[],r={},i=0;i<t.length;i++){var e=t[i],a=o.base?e[0]+o.base:e[0],l=e[1],s=e[2],p=e[3],g={css:l,media:s,sourceMap:p};r[a]?r[a].parts.push(g):n.push(r[a]={id:a,parts:[g]})}return n}function e(t,o){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=_[_.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(o,r.nextSibling):n.appendChild(o):n.insertBefore(o,n.firstChild),_.push(o);else if("bottom"===t.insertAt)n.appendChild(o);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=v(t.insertAt.before,n);n.insertBefore(o,i)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var o=_.indexOf(t);o>=0&&_.splice(o,1)}function l(t){var o=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=g();n&&(t.attrs.nonce=n)}return p(o,t.attrs),e(t,o),o}function s(t){var o=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",p(o,t.attrs),e(t,o),o}function p(t,o){Object.keys(o).forEach(function(n){t.setAttribute(n,o[n])})}function g(){return n.nc}function c(t,o){var n,r,i,e;if(o.transform&&t.css){if(!(e=o.transform(t.css)))return function(){};t.css=e}if(o.singleton){var p=y++;n=h||(h=l(o)),r=f.bind(null,n,p,!1),i=f.bind(null,n,p,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(o),r=d.bind(null,n,o),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(o),r=b.bind(null,n),i=function(){a(n)});return r(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;r(t=o)}else i()}}function f(t,o,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(o,i);else{var e=document.createTextNode(i),a=t.childNodes;a[o]&&t.removeChild(a[o]),a.length?t.insertBefore(e,a[o]):t.appendChild(e)}}function b(t,o){var n=o.css,r=o.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,o,n){var r=n.css,i=n.sourceMap,e=void 0===o.convertToAbsoluteUrls&&i;(o.convertToAbsoluteUrls||e)&&(r=I(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var u={},m=function(t){var o;return function(){return void 0===o&&(o=t.apply(this,arguments)),o}}(function(){return window&&document&&document.all&&!window.atob}),x=function(t,o){return o?o.querySelector(t):document.querySelector(t)},v=function(t){var o={};return function(t,n){if("function"==typeof t)return t();if(void 0===o[t]){var r=x.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}o[t]=r}return o[t]}}(),h=null,y=0,_=[],I=n(60);t.exports=function(t,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");o=o||{},o.attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=m()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var n=i(t,o);return r(n,o),function(t){for(var e=[],a=0;a<n.length;a++){var l=n[a],s=u[l.id];s.refs--,e.push(s)}t&&r(i(t,o),o);for(var a=0;a<e.length;a++){var s=e[a];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete u[s.id]}}}};var w=function(){var t=[];return function(o,n){return t[o]=n,t.filter(Boolean).join("\n")}}()},419:function(t,o,n){var r=n(435);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,n(17)(r,i),r.locals&&(t.exports=r.locals)},435:function(t,o,n){o=t.exports=n(12)(!1),o.push([t.i,".ring-input-size_xs.ring-input-size_xs{display:inline-block;width:50px}.ring-input-size_xs.ring-input-size_xs ~ .ring-error-bubble{left:52px}.ring-input-size_s.ring-input-size_s{display:inline-block;width:100px}.ring-input-size_s.ring-input-size_s ~ .ring-error-bubble{left:102px}.ring-input-size_md.ring-input-size_md{display:inline-block;width:200px}.ring-input-size_md.ring-input-size_md ~ .ring-error-bubble{left:202px}.ring-input-size_l.ring-input-size_l{display:inline-block;width:400px}.ring-input-size_l.ring-input-size_l ~ .ring-error-bubble{left:402px}",""])},449:function(t,o,n){var r=n(462);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,n(17)(r,i),r.locals&&(t.exports=r.locals)},450:function(t,o){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},462:function(t,o,n){o=t.exports=n(12)(!1),o.push([t.i,'.ring-form{color:#444;color:var(--ring-text-color);font-size:13px;font-size:var(--ring-font-size);font-family:system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;font-family:var(--ring-font-family)}.ring-form_white-bg{background:#fff}.ring-form_border{border:1px solid #bbb;border:1px solid var(--ring-disabled-color);border-radius:2px}.ring-form_rows .ring-form__label{float:none;max-width:none}.ring-form_rows .ring-form__control{margin-left:0;width:336px}.ring-form__wrap{padding:24px 32px 0 32px;margin-bottom:0}.ring-form__header{min-height:13px;padding-bottom:16px}.ring-form__control__description{padding-top:4px;font-size:12px;font-size:var(--ring-font-size-smaller);line-height:16px !important;color:#999;color:var(--ring-secondary-color);max-width:900px;display:block}.ring-form__title-img{float:left;height:32px;border:0}.ring-form__title{display:block;margin-bottom:8px;font-weight:bold}.ring-form__main-title{color:#444;color:var(--ring-text-color);font-size:13px;font-size:var(--ring-font-size);font-family:system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;font-family:var(--ring-font-family);font-size:19px}.ring-form__title_separated{margin:24px 0}.ring-form__group{position:relative;margin:16px 0}.ring-form__group:first-child{margin-top:0}.ring-form__group:after{clear:both;content:"";display:block}.ring-form__group_united{padding-bottom:0}.ring-form__group .ring_form__group,.ring-form__group_nested{padding-top:0;padding-left:16px}.ring-form__group .ring_form__group .ring-form__control,.ring-form__group_nested .ring-form__control{margin-left:144px}.ring-form__label{position:relative;top:0;display:inline-block;float:left;max-width:144px;line-height:16px;padding-top:4px;vertical-align:top}.ring-form__label .ring-checkbox__label,.ring-form__label .ring-radio-btn__label{top:-2px}.ring-form__label_title{font-weight:bold}.ring-form__control{position:relative;min-height:24px;margin-left:160px;width:auto;line-height:24px;vertical-align:top}.ring-form__control_text:after{content:"";display:inline-block;height:24px;vertical-align:middle}.ring-form__control_secondary{position:absolute;top:8px;left:216px}.ring-form__control_on{color:#1c8c32;color:var(--ring-success-color)}.ring-form__control_off{color:#999;color:var(--ring-secondary-color)}.ring-form__control-link{position:relative;top:6px}.ring-form__control_small{margin-left:128px !important}.ring-form__info{margin-bottom:-6px;width:680px;margin-left:160px;line-height:20px}.ring-form__control__part{margin-right:8px}.ring-form__group_short{padding-bottom:0;padding-top:4px}.ring-form__group_short:last-child{padding-bottom:8px}.ring-form__group_short .ring-form__control{margin-left:24px}.ring-form_small .ring-form__label{max-width:96px}.ring-form_small .ring-form__control{margin-left:128px}',""])},474:function(t,o,n){var r=n(568);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,n(17)(r,i),r.locals&&(t.exports=r.locals)},477:function(t,o,n){var r=n(511);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,n(17)(r,i),r.locals&&(t.exports=r.locals)},511:function(t,o,n){o=t.exports=n(12)(!1),o.push([t.i,".ring-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding-right:4px;padding-left:4px;padding-bottom:3px;border:1px solid #b8d1e5;border:1px solid var(--ring-borders-color);background-color:#fff;background-color:var(--ring-content-background-color);color:#444;color:var(--ring-text-color);font-size:13px;font-size:var(--ring-font-size);font-family:system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;font-family:var(--ring-font-family);line-height:20px;height:24px;width:100%}.ring-input:active,.ring-input:focus,.ring-input_active,.ring-input_focus{border-color:#008eff;border-color:var(--ring-main-color);outline:0}.ring-input_correct{border-color:#1c8c32;border-color:var(--ring-success-color)}.ring-input_error{border-color:#c22731;border-color:var(--ring-error-color)}.ring-input_no-resize{resize:none}.ring-input_filter-popup{min-width:200px;width:100%}.ring-input_material{padding-left:0;padding-right:0;border-top:0;border-left:0;border-right:0}.ring-input.ring-input:disabled,.ring-input.ring-input[disabled],.ring-input.ring-input_disabled{border-color:#dedede;background-color:#f8f8f8;color:#bbb;color:var(--ring-disabled-color)}textarea.ring-input{height:auto;min-height:64px;resize:vertical;vertical-align:top}textarea.ring-input::-webkit-input-placeholder{color:#bbb;color:var(--ring-disabled-color)}textarea.ring-input:-ms-input-placeholder{color:#bbb;color:var(--ring-disabled-color)}textarea.ring-input::-ms-input-placeholder{color:#bbb;color:var(--ring-disabled-color)}textarea.ring-input::placeholder{color:#bbb;color:var(--ring-disabled-color)}",""])},568:function(t,o,n){o=t.exports=n(12)(!1),o.push([t.i,".ring-panel{position:relative;margin-top:16px;padding:16px 0 16px 16px;border-top:1px solid rgba(0, 42, 76, .1)}.ring-panel:empty{display:none}.ring-panel button{margin-right:8px}.ring-panel_no-border{border-top:none}.ring-panel_black{border:1px solid #000}.ring-panel__4x{padding:16px 32px}.ring-panel__panel-controls{position:relative}.ring-panel__icon-list{list-style:none;position:relative;top:8px;display:inline-block;margin:0;padding:0}.ring-panel__icon-list + *{position:absolute;top:8px;right:0;line-height:24px}.ring-panel__icon{float:left;margin-right:8px}.ring-panel__icon-img{display:block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzMwNUI5MTlCMjA2ODExODIyQUFENzFFMTFDQzUzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjc4RkRGQTQzRUIxMUUzQTlENkFBMjZDQUVDOTUzQiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjc4RkRGOTQzRUIxMUUzQTlENkFBMjZDQUVDOTUzQiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjlDQUNCRDgyRjIwNjgxMTgyMkFFN0E1QzJERjY5ODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzczMDVCOTE5QjIwNjgxMTgyMkFBRDcxRTExQ0M1M0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6geVGSAAADAFBMVEWOqcvb5e7ql4vtyo3e6fGl1Yfmw4uo04e8lI6TuNf89vWatdWMpcWsydylyYugyYWr0pum0oeWw96lzYax2Ynqxoyzyt6uqonK2+nr9O2UvNqeyoXByMymwtnct4mZqoX67+/09feMpcDZ6cy23Ir2+fvpzo388vHtzI67w8aRqoWs14in0IafyIXEopnGw8XmlIqp1em6zong6/P0r5ze6u/Z5vGRtNOtqpLu2pSlrKr09/nsmIvt8/jJ2ufplorr1pPsmYzf7dSUvtvV4+6Uute024num42Rs9G2x6XCwYnt0JDIzdGTutmOpsiWsoqRsdXY5O/1sJ2Kna7jvoqp1IeWwN2ZtIvw9fnr8vfW5O/B1t601omVvtv7/P2SttXp8PfDoZvb5/Gbr4iMpL6Ur4jT4e3HzdG/x83xrJuj1Iao0IeizIadyYXsmoyizoagzIahzYafzIbrmIur1oiq1Yek0Iaiz4at2IjolYrz9/qgzYam0Yej0Ibn7/Wkz4al0Ifsz5D9+/vu25XuzY+fy4WhzobG2Obt8/fAt57I37fo0ZDGo5zU3+v09PPqvbeeutfupJSq2Ieo14ers7SUqoXi6/PC1OSu2Iju2ZTj7PTj7PPazau32+rfwYzv6dnonYu/1dXQrIidx4WnzIynyNysxd2408LMyryyu8Clr7OvsarTtIqzr5Ww3Ynfxb6Xw9/e4t7d69zg0Kruxr/m7vbTtZnt9fGiyZHnyY6PrdSWwd7bv7m2ytLW4euQr9Xm8eLFvb3Kxa7Ipp3dvIrFr47ZpprAx8vg7tmovNGPobDd5/Dy8/Gky4ao0JGjv4fxuKqImKeUvNiyrIvx9vmq04fI2t/JtZTAmZPYuIqUp47ev47rqp/Z3uLG4u3b5uvu2ZPBytHFy8/X5fDY2Mq7xMzk7+2ZrMnuyMLj6/Dn3sTk7fX139zl7fbJvIy1wLuhzIbPtY6spIzC0+HF1+S0y+Cjzob49vis2oi+xcmu24jszo+l0IaRr8ySrIeJm6yg+ybXAAACQUlEQVR42mKIi36YnvE0I93Hx0df/2Bioh4IHF7fxBB91/qeoaHh3Kq4Jq4LmSZBQUEmJiaZx/YwPLLu5QzbsMF5qbUq1xumPEcgsGFyn9jD8EiVV0powwahS/tUv3PdKbYBAiYme/cbDDJVslJhu4WEwnirvqtvsS8uLgaK27tzMByv4vWNDQMC1w5F9ReVTEwg8co8DoafV6bHS8UCASdLhEK/gT0QVFYa2HAwaEZMM3eVAoJ4RluFbV5GMSIxRl6LFgAlbCPFzDmBwMN4u3J2xYyKCm3tklKVTwwrI7fWTfCIj/eQlXRacrVEu6SkpLSUfV04w6nTs17XiXFzf5VU5hMOLS0NDQ1lZ6/5Fc4Q/Pfkl8DZCbaRJ/jOCrKDgKBgTf0Pf4bgAKUUJaV2Y+Mu/gZBIKipqWmoz58EkmBgYFBKY2HZtKSwDAhqa8vL8z9MTmX4vx8owSOWlGTqdK61HCiYn19Y0MoKlNjFw+Pn99zFzMz0gIB0W1thIVBcmvUfw0XuZRIsb13s0h4/NnsmkFtdXV1QJJ0LlFiVYPe+8+PNNdefMEZFme4oAoJW6dwsLYYpe4/KhbCxsYXc3Hw/KnC5bkFBa2vuYqCE1e0QUVFmIGA7Mufx42u6QNsLgXZoMVioiTJraGi0tLTsnLfRzO5sTc2f+m85k6cyrO321vj9u7HR29t75yvGz8JX2dmzddi1kxlWvHN4MNOyGQQc5r9c6KYCBG4i5z0Z+g5dFocCi9VWt+TBINnzDECAAQBkitj8QhHPQQAAAABJRU5ErkJggg==);width:24px;height:24px;opacity:.5;-webkit-transition:.2s;transition:.2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;outline:0}.ring-panel__icon-img:hover{opacity:1}.ring-panel__b-rem{display:block;margin-bottom:8px}",""])},60:function(t,o){t.exports=function(t){var o="undefined"!=typeof window&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=o.protocol+"//"+o.host,r=n+o.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,o){var i=o.trim().replace(/^"(.*)"$/,function(t,o){return o}).replace(/^'(.*)'$/,function(t,o){return o});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return t;var e;return e=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(e)+")"})}},996:function(t,o,n){var r=n(1234);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,n(17)(r,i),r.locals&&(t.exports=r.locals)}});