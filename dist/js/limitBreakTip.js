!function(){var e={5378:function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}window.OverlayPluginApi||function(){var t=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),r=null,o=[],i=0,a={},s={},c=null,l=!1;function u(e){if(s[e.type]){var t,r=n(s[e.type]);try{for(r.s();!(t=r.n()).done;)(0,t.value)(e)}catch(e){r.e(e)}finally{r.f()}}}t?(c=function(e){o?o.push(e):r.send(JSON.stringify(e))},function e(){(r=new WebSocket(t[1])).addEventListener("error",(function(e){console.error(e)})),r.addEventListener("open",(function(){console.log("Connected!");var e=o;o=null;var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;c(i)}}catch(e){r.e(e)}finally{r.f()}})),r.addEventListener("message",(function(e){try{e=JSON.parse(e.data)}catch(n){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&a[e.rseq]?(a[e.rseq](e),delete a[e.rseq]):u(e)})),r.addEventListener("close",(function(){o=[],console.log("Trying to reconnect..."),setTimeout((function(){e()}),300)}))}()):(c=function(e,n){o?o.push([e,n]):OverlayPluginApi.callHandler(JSON.stringify(e),n)},function t(){if(window.OverlayPluginApi&&window.OverlayPluginApi.ready){var r=o;o=null,window.__OverlayCallback=u;var i,a=n(r);try{for(a.s();!(i=a.n()).done;){var s=e(i.value,2),l=s[0],A=s[1];c(l,A)}}catch(e){a.e(e)}finally{a.f()}}else setTimeout(t,300)}()),window.dispatchOverlayEvent=u,window.addOverlayListener=function(e,n){l&&s[e]&&console.warn("A new listener for ".concat(e," has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().")),s[e]||(s[e]=[]),s[e].push(n)},window.removeOverlayListener=function(e,n){if(s[e]){var t=s[e],r=t.indexOf(n);r>-1&&t.splice(r,1)}},window.callOverlayHandler=function(e){var n;return r?(e.rseq=i++,n=new Promise((function(n){a[e.rseq]=n})),c(e)):n=new Promise((function(n){c(e,(function(e){n(null==e?null:JSON.parse(e))}))})),n},window.startOverlayEvents=function(){l=!1,c({call:"subscribe",events:Object.keys(s)})}}()},4434:function(e,n,t){"use strict";var r=t(7537),o=t.n(r),i=t(3645),a=t.n(i)()(o());a.push([e.id,'*{box-sizing:border-box;padding:0;margin:0}body{font-size:20px;color:#fff;padding:2px 4px}#show{font-size:14px;text-shadow:-1px 0 1.5px #91ba5e,0 1.5px 1.5px #91ba5e,1px 0 1.5px #91ba5e,0 -1.5px 1.5px #91ba5e}#show::before{content:"LB:"}#extra{text-shadow:-1px 0 2px #a91a16,0 1.5px 2px #a91a16,1px 0 2px #a91a16,0 -1.5px 2px #a91a16;font-weight:bold}#extraAll{position:absolute;top:21px;right:0;font-size:14px;text-shadow:-1px 0 2px #a91a16,0 1.5px 2px #a91a16,1px 0 2px #a91a16,0 -1.5px 2px #a91a16}#extraAll::before{content:"奖励:"}.anime{-webkit-animation:anime 5s;animation:anime 5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes anime{0%{opacity:0;height:0px;font-size:.5em}4%{opacity:1;height:26px;font-size:1.2em}6%{font-size:1em}70%{opacity:1}90%{opacity:0;height:26px}100%{opacity:0;height:0px}}@keyframes anime{0%{opacity:0;height:0px;font-size:.5em}4%{opacity:1;height:26px;font-size:1.2em}6%{font-size:1em}70%{opacity:1}90%{opacity:0;height:26px}100%{opacity:0;height:0px}}',"",{version:3,sources:["webpack://./src/limitBreakTip/index.scss"],names:[],mappings:"AAAA,EAAA,qBACE,CAAA,SACA,CAAA,QACA,CAAA,KAEF,cACE,CAAA,UACA,CAAA,eACA,CAAA,MAEF,cAIE,CAAA,iGACA,CAAA,cAJA,aACE,CAAA,OAMJ,yFACE,CAAA,gBACA,CAAA,UAEF,iBAIE,CAAA,QACA,CAAA,OACA,CAAA,cACA,CAAA,yFACA,CAAA,kBAPA,aACE,CAAA,OAQJ,0BACE,CADF,kBACE,CAAA,oCACA,CADA,4BACA,CAAA,yBAEF,GACE,SACE,CAAA,UACA,CAAA,cACA,CAAA,GAEF,SACE,CAAA,WACA,CAAA,eACA,CAAA,GAEF,aACE,CAAA,IAEF,SACE,CAAA,IAEF,SACE,CAAA,WACA,CAAA,KAEF,SACE,CAAA,UACA,CAAA,CAzBF,iBAEF,GACE,SACE,CAAA,UACA,CAAA,cACA,CAAA,GAEF,SACE,CAAA,WACA,CAAA,eACA,CAAA,GAEF,aACE,CAAA,IAEF,SACE,CAAA,IAEF,SACE,CAAA,WACA,CAAA,KAEF,SACE,CAAA,UACA,CAAA",sourcesContent:['* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbody {\r\n  font-size: 20px;\r\n  color: white;\r\n  padding: 2px 4px;\r\n}\r\n#show {\r\n  &::before {\r\n    content: "LB:";\r\n  }\r\n  font-size: 14px;\r\n  text-shadow: -1px 0 1.5px rgb(145, 186, 94), 0 1.5px 1.5px rgb(145, 186, 94), 1px 0 1.5px rgb(145, 186, 94),\r\n    0 -1.5px 1.5px rgb(145, 186, 94);\r\n}\r\n#extra {\r\n  text-shadow: -1px 0 2px rgb(169, 26, 22), 0 1.5px 2px rgb(169, 26, 22), 1px 0 2px rgb(169, 26, 22), 0 -1.5px 2px rgb(169, 26, 22);\r\n  font-weight: bold;\r\n}\r\n#extraAll {\r\n  &::before {\r\n    content: "奖励:";\r\n  }\r\n  position: absolute;\r\n  top: 21px;\r\n  right: 0;\r\n  font-size: 14px;\r\n  text-shadow: -1px 0 2px rgb(169, 26, 22), 0 1.5px 2px rgb(169, 26, 22), 1px 0 2px rgb(169, 26, 22), 0 -1.5px 2px rgb(169, 26, 22);\r\n}\r\n.anime {\r\n  animation: anime 5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes anime {\r\n  0% {\r\n    opacity: 0;\r\n    height: 0px;\r\n    font-size: 0.5em;\r\n  }\r\n  4% {\r\n    opacity: 1;\r\n    height: 26px;\r\n    font-size: 1.2em;\r\n  }\r\n  6% {\r\n    font-size: 1em;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n  }\r\n  90% {\r\n    opacity: 0;\r\n    height: 26px;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    height: 0px;\r\n  }\r\n}\r\n'],sourceRoot:""}]),n.Z=a},3645:function(e){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},7537:function(e){"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}},3379:function(e){"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,A="".concat(l," ").concat(u);i[l]=u+1;var p=t(A),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var f=o(d,r);r.byIndex=s,n.splice(s,0,{identifier:A,updater:f,references:1})}a.push(A)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:function(e){"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:function(e){"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:function(e,n,t){"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:function(e){"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:function(e){"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";t(5378);var e=t(3379),n=t.n(e),r=t(7795),o=t.n(r),i=t(569),a=t.n(i),s=t(3565),c=t.n(s),l=t(9216),u=t.n(l),A=t(4589),p=t.n(A),d=t(4434),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,function(){var e=document.querySelector("#loading");e&&e.remove();var n=document.createElement("div");n.style.height="100vh",n.style.width="100vw",n.style.zIndex="10",n.style.color="white",n.style.textShadow="-1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000",n.style.display="none",n.style.fontFamily="微软雅黑",n.style.fontWeight="bold",n.style.backgroundColor="rgba(0, 0, 150, 0.2)",n.style.position="fixed",n.style.bottom="0",n.style.fontSize="12px",n.style.alignItems="flex-end",n.style.justifyContent="center",n.id="readMe";var t=document.createElement("span");t.innerText="🔒这是供用户调整悬浮窗尺寸的蓝色背景，在ACT的Overlay(ngld)插件中锁定此悬浮窗便即会消失。",n.appendChild(t),document.body.appendChild(n),document.addEventListener("onOverlayStateUpdate",(function(e){return document.querySelector("#readMe").style.display=e.detail.isLocked?"none":"flex"}));var r=document.createElement("span");r.style.height="5px",r.style.width="1px",r.style.position="fixed",r.style.top="0px",r.style.left="50%",r.style.backgroundColor="rgba(0,0,0,0.1)",n.appendChild(r)}();var y,x,v=new URLSearchParams(new URL(window.location).search),C=(setTimeout((function(){if(!window.OverlayPluginApi&&null===v.get("OVERLAY_WS")&&null===v.get("HOST_PORT")){var e=document.createElement("div");e.innerText="找不到OverlayPluginApi或WS服务，请在ACT悬浮窗中添加此页面，而不是浏览器中。\n若在OBS中添加请启用OverlayPlugin WSServer并在OBS的浏览器链接后追加OVERLAY_WS参数",document.body.appendChild(e),e.style.position="absolute",e.style.top=0,e.style.fontFamily="微软雅黑",e.style.fontSize="16px",e.style.color="white",e.style.textShadow="black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px"}}),1e3),new URLSearchParams(new URL(window.location).search)),h=parseInt(null!==(y=C.get("LBMax"))&&void 0!==y?y:3e4),m=Math.ceil(1e3*(parseInt(null!==(x=C.get("automatic"))&&void 0!==x?x:220)/h).toFixed(4))/1e3,g=0,b=0,w=0,E=0,T=document.querySelector("#show"),S=document.querySelector("#extra"),O=document.querySelector("#extraAll");function L(){E=0,T.innerHTML="0%",S.innerHTML="",O.innerText="0%"}function F(e){if("36"===e.line[0]){var n=(b=parseInt(e.line[2],16)/h)-g;if(T.innerHTML="".concat((100*b).toFixed(2),"%"),n>m){var t;w+=n,E+=n,O.innerText="".concat((100*E).toFixed(0),"%");var r=(100*w).toFixed(0);if(parseInt(null===(t=S.lastChild)||void 0===t?void 0:t.innerText)===r-1)S.lastChild.innerText="+".concat(r,"%");else{var o=document.createElement("p");o.innerText="+".concat(r,"%"),o.classList.add("anime"),o.setAttribute("data-time",(new Date).toTimeString().substring(0,8)),S.appendChild(o)}}else w=0;g=b,n<-.1&&L()}}addOverlayListener("ChangeZone",(function(){return L()})),addOverlayListener("onPartyWipe",(function(){return L()})),addOverlayListener("LogLine",(function(e){return F(e)})),startOverlayEvents(),"true"===C.get("test")&&function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=0;e({line:n[0]});for(var o=function(o){var i=new Date(n[o][1])-new Date(n[o-1][1]);r+=i,setTimeout((function(){e({line:n[o]})}),r/t)},i=1;i<n.length;i++)o(i)}(F,[["36","2021-12-28T21:38:30.3580000+08:00","0000"],["36","2021-12-28T21:38:33.3580000+08:00","00DC"],["36","2021-12-28T21:38:34.8290000+08:00","0208"],["36","2021-12-28T21:38:36.3460000+08:00","02E4"],["36","2021-12-28T21:38:37.8630000+08:00","0410"],["36","2021-12-28T21:38:39.3360000+08:00","04EC"],["36","2021-12-28T21:38:42.3720000+08:00","05C8"],["36","2021-12-28T21:38:45.3620000+08:00","06A4"],["36","2021-12-28T21:38:47.8140000+08:00","07D0"],["36","2021-12-28T21:38:47.8140000+08:00","08FC"],["36","2021-12-28T21:38:47.8140000+08:00","0A28"],["36","2021-12-28T21:38:47.8140000+08:00","0B54"],["36","2021-12-28T21:38:47.8140000+08:00","0C80"],["36","2021-12-28T21:38:48.3510000+08:00","0D5C"],["36","2021-12-28T21:38:50.6220000+08:00","0E88"],["36","2021-12-28T21:38:50.8900000+08:00","0FB4"],["36","2021-12-28T21:38:51.0230000+08:00","10E0"],["36","2021-12-28T21:38:51.1570000+08:00","120C"],["36","2021-12-28T21:38:51.3360000+08:00","12E8"],["36","2021-12-28T21:38:54.3690000+08:00","13C4"],["36","2021-12-28T21:38:57.3570000+08:00","14A0"],["36","2021-12-28T21:38:58.3360000+08:00","15CC"],["36","2021-12-28T21:38:58.3360000+08:00","16F8"],["36","2021-12-28T21:38:58.3360000+08:00","1824"],["36","2021-12-28T21:38:58.3360000+08:00","1950"],["36","2021-12-28T21:38:58.3360000+08:00","1A7C"],["36","2021-12-28T21:39:00.3410000+08:00","1B58"],["36","2021-12-28T21:39:03.3690000+08:00","1C34"],["36","2021-12-28T21:39:04.2630000+08:00","1D60"],["36","2021-12-28T21:39:06.3600000+08:00","1E3C"]],2)}()}();