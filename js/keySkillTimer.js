(()=>{var e={639:()=>{window.addOverlayListener||(console.log("common.min.js镜像文件访问失败，加载本地版本。"),function(){let e=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),t=null,n=[],p=0,s={},a={},o=null,i=!1;function r(e){if(a[e.type])for(let t of a[e.type])t(e)}e?(o=e=>{n?n.push(e):t.send(JSON.stringify(e))},function p(){t=new WebSocket(e[1]),t.addEventListener("error",(e=>{console.error(e)})),t.addEventListener("open",(()=>{console.log("Connected!");let e=n;n=null;for(let t of e)o(t)})),t.addEventListener("message",(e=>{try{e=JSON.parse(e.data)}catch(t){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&s[e.rseq]?(s[e.rseq](e),delete s[e.rseq]):r(e)})),t.addEventListener("close",(()=>{n=[],console.log("Trying to reconnect..."),setTimeout((()=>{p()}),300)}))}()):(o=(e,t)=>{n?n.push([e,t]):OverlayPluginApi.callHandler(JSON.stringify(e),t)},function e(){if(!window.OverlayPluginApi||!window.OverlayPluginApi.ready)return void setTimeout(e,300);let t=n;n=null,window.__OverlayCallback=r;for(let[e,n]of t)o(e,n)}()),window.dispatchOverlayEvent=r,window.addOverlayListener=(e,t)=>{i&&a[e]&&console.warn(`A new listener for ${e} has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().`),a[e]||(a[e]=[]),a[e].push(t)},window.removeOverlayListener=(e,t)=>{if(a[e]){let n=a[e],p=n.indexOf(t);p>-1&&n.splice(p,1)}},window.callOverlayHandler=e=>{let n;return t?(e.rseq=p++,n=new Promise((t=>{s[e.rseq]=t})),o(e)):n=new Promise((t=>{o(e,(e=>{t(null==e?null:JSON.parse(e))}))})),n},window.startOverlayEvents=()=>{i=!1,o({call:"subscribe",events:Object.keys(a)})}}())},998:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var p=n(44),s=n.n(p),a=n(292),o=n.n(a)()(s());o.push([e.id,'.GLA{text-shadow:-1px 0 1.5px #7b9aa2,0 1.5px 1.5px #7b9aa2,1px 0 1.5px #7b9aa2,0 -1.5px 1.5px #7b9aa2}.PGL{text-shadow:-1px 0 1.5px #b38915,0 1.5px 1.5px #b38915,1px 0 1.5px #b38915,0 -1.5px 1.5px #b38915}.MRD{text-shadow:-1px 0 1.5px #a91a16,0 1.5px 1.5px #a91a16,1px 0 1.5px #a91a16,0 -1.5px 1.5px #a91a16}.LNC{text-shadow:-1px 0 1.5px #3752d8,0 1.5px 1.5px #3752d8,1px 0 1.5px #3752d8,0 -1.5px 1.5px #3752d8}.ARC{text-shadow:-1px 0 1.5px #91ba5e,0 1.5px 1.5px #91ba5e,1px 0 1.5px #91ba5e,0 -1.5px 1.5px #91ba5e}.CNJ{text-shadow:-1px 0 1.5px #5f5f5f,0 1.5px 1.5px #5f5f5f,1px 0 1.5px #5f5f5f,0 -1.5px 1.5px #5f5f5f}.THM{text-shadow:-1px 0 1.5px #674598,0 1.5px 1.5px #674598,1px 0 1.5px #674598,0 -1.5px 1.5px #674598}.PLD{text-shadow:-1px 0 1.5px #7b9aa2,0 1.5px 1.5px #7ba1a2,1px 0 1.5px #7b9aa2,0 -1.5px 1.5px #7b9aa2}.MNK{text-shadow:-1px 0 1.5px #b38915,0 1.5px 1.5px #b38915,1px 0 1.5px #b38915,0 -1.5px 1.5px #b38915}.WAR{text-shadow:-1px 0 1.5px #a91a16,0 1.5px 1.5px #a91a16,1px 0 1.5px #a91a16,0 -1.5px 1.5px #a91a16}.DRG{text-shadow:-1px 0 1.5px #3752d8,0 1.5px 1.5px #3752d8,1px 0 1.5px #3752d8,0 -1.5px 1.5px #3752d8}.BRD{text-shadow:-1px 0 1.5px #91ba5e,0 1.5px 1.5px #91ba5e,1px 0 1.5px #91ba5e,0 -1.5px 1.5px #91ba5e}.WHM{text-shadow:-1px 0 1.5px #5f5f5f,0 1.5px 1.5px #5f5f5f,1px 0 1.5px #5f5f5f,0 -1.5px 1.5px #5f5f5f}.BLM{text-shadow:-1px 0 1.5px #674598,0 1.5px 1.5px #674598,1px 0 1.5px #674598,0 -1.5px 1.5px #674598}.ACN{text-shadow:-1px 0 1.5px #32670b,0 1.5px 1.5px #32670b,1px 0 1.5px #32670b,0 -1.5px 1.5px #32670b}.SMN{text-shadow:-1px 0 1.5px #32670b,0 1.5px 1.5px #32670b,1px 0 1.5px #32670b,0 -1.5px 1.5px #32670b}.SCH{text-shadow:-1px 0 1.5px #32307b,0 1.5px 1.5px #32307b,1px 0 1.5px #32307b,0 -1.5px 1.5px #32307b}.ROG{text-shadow:-1px 0 1.5px #ee2e48,0 1.5px 1.5px #ee2e48,1px 0 1.5px #ee2e48,0 -1.5px 1.5px #ee2e48}.NIN{text-shadow:-1px 0 1.5px #ee2e48,0 1.5px 1.5px #ee2e48,1px 0 1.5px #ee2e48,0 -1.5px 1.5px #ee2e48}.MCH{text-shadow:-1px 0 1.5px #148aa9,0 1.5px 1.5px #148aa9,1px 0 1.5px #148aa9,0 -1.5px 1.5px #148aa9}.DRK{text-shadow:-1px 0 1.5px #682531,0 1.5px 1.5px #682531,1px 0 1.5px #682531,0 -1.5px 1.5px #682531}.AST{text-shadow:-1px 0 1.5px #b1561c,0 1.5px 1.5px #b1561c,1px 0 1.5px #b1561c,0 -1.5px 1.5px #b1561c}.SAM{text-shadow:-1px 0 1.5px #e45a0f,0 1.5px 1.5px #e45a0f,1px 0 1.5px #e45a0f,0 -1.5px 1.5px #e45a0f}.RDM{text-shadow:-1px 0 1.5px #ac2997,0 1.5px 1.5px #ac2997,1px 0 1.5px #ac2997,0 -1.5px 1.5px #ac2997}.BLU{text-shadow:-1px 0 1.5px #183d9a,0 1.5px 1.5px #183d9a,1px 0 1.5px #183d9a,0 -1.5px 1.5px #183d9a}.GNB{text-shadow:-1px 0 1.5px #796d30,0 1.5px 1.5px #796d30,1px 0 1.5px #796d30,0 -1.5px 1.5px #796d30}.DNC{text-shadow:-1px 0 1.5px #8b6e6e,0 1.5px 1.5px #8b6e6e,1px 0 1.5px #8b6e6e,0 -1.5px 1.5px #8b6e6e}.RPR{text-shadow:-1px 0 1.5px #4c194c,0 1.5px 1.5px #4c194c,1px 0 1.5px #4c194c,0 -1.5px 1.5px #4c194c}.SGE{text-shadow:-1px 0 1.5px #3451a0,0 1.5px 1.5px #3451a0,1px 0 1.5px #3451a0,0 -1.5px 1.5px #3451a0}.VPR{text-shadow:-1px 0 1.5px #107210,0 1.5px 1.5px #107210,1px 0 1.5px #107210,0 -1.5px 1.5px #107210}.PCT{text-shadow:-1px 0 1.5px #ffa2f1,0 1.5px 1.5px #ffa2f1,1px 0 1.5px #ffa2f1,0 -1.5px 1.5px #ffa2f1}html body{overflow:hidden}html body>article{margin:0 auto;transform-origin:top;display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:nowrap}html body>article article{flex-shrink:0;margin:4px 3px;width:40px;height:40px;position:relative;font-weight:bold;font-family:"emoji"}html body>article article aside{width:60px;text-align:center;position:absolute;left:-10px;line-height:40px;z-index:1;font-size:18px;color:#fff;text-shadow:-1px 0 2px #000,0 1px 2px #000,1px 0 2px #000,0 -1px 2px #000}html body>article article img{filter:drop-shadow(1px 2px 2px #000);box-shadow:0 0 1px 1px #000;border-radius:50%;width:40px;height:40px;background-repeat:no-repeat;position:absolute}html body>article article .shadow{clip-path:inset(100% 0 0 0);background-color:#111;opacity:.75;height:40px;width:40px;border-radius:50%;position:absolute}html body>article article footer{z-index:454;position:absolute;bottom:-6px;font-size:8px;color:#fff;width:40px;text-align:center;white-space:nowrap;font-family:"宋体"}',"",{version:3,sources:["webpack://./src/keySkillTimer/index.scss","webpack://./resources/style/jobColor.scss"],names:[],mappings:"AAAA,KCAA,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAGF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAGF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,KAGF,iGACE,CAAA,KAIF,iGACE,CAAA,KAIF,iGACE,CAAA,UDlJA,eACE,CAAA,kBACA,aACE,CAAA,oBACA,CAAA,YACA,CAAA,kBACA,CAAA,0BACA,CAAA,gBACA,CAAA,0BACA,aAEE,CAAA,cACA,CAAA,UACA,CAAA,WACA,CAAA,iBACA,CAAA,gBACA,CAAA,mBACA,CAAA,gCACA,UACE,CAAA,iBACA,CAAA,iBACA,CAAA,UACA,CAAA,gBACA,CAAA,SACA,CAAA,cACA,CAAA,UACA,CAAA,yEACA,CAAA,8BAEF,oCACE,CAAA,2BACA,CAAA,iBACA,CAAA,UACA,CAAA,WACA,CAAA,2BACA,CAAA,iBACA,CAAA,kCAEF,2BACE,CAAA,qBACA,CAAA,WACA,CAAA,WACA,CAAA,UACA,CAAA,iBACA,CAAA,iBACA,CAAA,iCAEF,WACE,CAAA,iBACA,CAAA,WACA,CAAA,aACA,CAAA,UACA,CAAA,UACA,CAAA,iBACA,CAAA,kBACA,CAAA,gBACA",sourcesContent:['@import "../../resources/style/jobColor.scss";\nhtml {\n  body {\n    overflow: hidden;\n    > article {\n      margin: 0 auto;\n      transform-origin: top;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      flex-wrap: nowrap;\n      article {\n        // margin-top:40px !important;\n        flex-shrink: 0;\n        margin: 4px 3px;\n        width: 40px;\n        height: 40px;\n        position: relative;\n        font-weight: bold;\n        font-family: "emoji";\n        aside {\n          width: 60px;\n          text-align: center;\n          position: absolute;\n          left: -10px;\n          line-height: 40px;\n          z-index: 1;\n          font-size: 18px;\n          color: white;\n          text-shadow: -1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000;\n        }\n        img {\n          filter: drop-shadow(1px 2px 2px #000);\n          box-shadow: 0 0 1px 1px black;\n          border-radius: 50%;\n          width: 40px;\n          height: 40px;\n          background-repeat: no-repeat;\n          position: absolute;\n        }\n        .shadow {\n          clip-path: inset(100% 0 0 0);\n          background-color: #111;\n          opacity: 0.75;\n          height: 40px;\n          width: 40px;\n          border-radius: 50%;\n          position: absolute;\n        }\n        footer {\n          z-index: 454;\n          position: absolute;\n          bottom: -6px;\n          font-size: 8px;\n          color: white;\n          width: 40px;\n          text-align: center;\n          white-space: nowrap;\n          font-family: "宋体";\n        }\n      }\n    }\n  }\n}\n',".GLA {\n  text-shadow: -1px 0 1.5px rgb(123, 154, 162), 0 1.5px 1.5px rgb(123, 154, 162), 1px 0 1.5px rgb(123, 154, 162),\n    0 -1.5px 1.5px rgb(123, 154, 162);\n}\n\n.PGL {\n  text-shadow: -1px 0 1.5px rgb(179, 137, 21), 0 1.5px 1.5px rgb(179, 137, 21), 1px 0 1.5px rgb(179, 137, 21),\n    0 -1.5px 1.5px rgb(179, 137, 21);\n}\n\n.MRD {\n  text-shadow: -1px 0 1.5px rgb(169, 26, 22), 0 1.5px 1.5px rgb(169, 26, 22), 1px 0 1.5px rgb(169, 26, 22),\n    0 -1.5px 1.5px rgb(169, 26, 22);\n}\n\n.LNC {\n  text-shadow: -1px 0 1.5px rgb(55, 82, 216), 0 1.5px 1.5px rgb(55, 82, 216), 1px 0 1.5px rgb(55, 82, 216),\n    0 -1.5px 1.5px rgb(55, 82, 216);\n}\n\n.ARC {\n  text-shadow: -1px 0 1.5px rgb(145, 186, 94), 0 1.5px 1.5px rgb(145, 186, 94), 1px 0 1.5px rgb(145, 186, 94),\n    0 -1.5px 1.5px rgb(145, 186, 94);\n}\n\n.CNJ {\n  text-shadow: -1px 0 1.5px rgb(95, 95, 95), 0 1.5px 1.5px rgb(95, 95, 95), 1px 0 1.5px rgb(95, 95, 95), 0 -1.5px 1.5px rgb(95, 95, 95);\n}\n\n.THM {\n  text-shadow: -1px 0 1.5px rgb(103, 69, 152), 0 1.5px 1.5px rgb(103, 69, 152), 1px 0 1.5px rgb(103, 69, 152),\n    0 -1.5px 1.5px rgb(103, 69, 152);\n}\n\n.PLD {\n  text-shadow: -1px 0 1.5px rgb(123, 154, 162), 0 1.5px 1.5px rgb(123, 161, 162), 1px 0 1.5px rgb(123, 154, 162),\n    0 -1.5px 1.5px rgb(123, 154, 162);\n}\n\n.MNK {\n  text-shadow: -1px 0 1.5px rgb(179, 137, 21), 0 1.5px 1.5px rgb(179, 137, 21), 1px 0 1.5px rgb(179, 137, 21),\n    0 -1.5px 1.5px rgb(179, 137, 21);\n}\n\n.WAR {\n  text-shadow: -1px 0 1.5px rgb(169, 26, 22), 0 1.5px 1.5px rgb(169, 26, 22), 1px 0 1.5px rgb(169, 26, 22),\n    0 -1.5px 1.5px rgb(169, 26, 22);\n}\n\n.DRG {\n  text-shadow: -1px 0 1.5px rgb(55, 82, 216), 0 1.5px 1.5px rgb(55, 82, 216), 1px 0 1.5px rgb(55, 82, 216),\n    0 -1.5px 1.5px rgb(55, 82, 216);\n}\n\n.BRD {\n  text-shadow: -1px 0 1.5px rgb(145, 186, 94), 0 1.5px 1.5px rgb(145, 186, 94), 1px 0 1.5px rgb(145, 186, 94),\n    0 -1.5px 1.5px rgb(145, 186, 94);\n}\n\n.WHM {\n  text-shadow: -1px 0 1.5px rgb(95, 95, 95), 0 1.5px 1.5px rgb(95, 95, 95), 1px 0 1.5px rgb(95, 95, 95), 0 -1.5px 1.5px rgb(95, 95, 95);\n}\n\n.BLM {\n  text-shadow: -1px 0 1.5px rgb(103, 69, 152), 0 1.5px 1.5px rgb(103, 69, 152), 1px 0 1.5px rgb(103, 69, 152),\n    0 -1.5px 1.5px rgb(103, 69, 152);\n}\n\n.ACN {\n  text-shadow: -1px 0 1.5px rgb(50, 103, 11), 0 1.5px 1.5px rgb(50, 103, 11), 1px 0 1.5px rgb(50, 103, 11),\n    0 -1.5px 1.5px rgb(50, 103, 11);\n}\n\n.SMN {\n  text-shadow: -1px 0 1.5px rgb(50, 103, 11), 0 1.5px 1.5px rgb(50, 103, 11), 1px 0 1.5px rgb(50, 103, 11),\n    0 -1.5px 1.5px rgb(50, 103, 11);\n}\n\n.SCH {\n  text-shadow: -1px 0 1.5px rgb(50, 48, 123), 0 1.5px 1.5px rgb(50, 48, 123), 1px 0 1.5px rgb(50, 48, 123),\n    0 -1.5px 1.5px rgb(50, 48, 123);\n}\n\n.ROG {\n  text-shadow: -1px 0 1.5px rgb(238, 46, 72), 0 1.5px 1.5px rgb(238, 46, 72), 1px 0 1.5px rgb(238, 46, 72),\n    0 -1.5px 1.5px rgb(238, 46, 72);\n}\n\n.NIN {\n  text-shadow: -1px 0 1.5px rgb(238, 46, 72), 0 1.5px 1.5px rgb(238, 46, 72), 1px 0 1.5px rgb(238, 46, 72),\n    0 -1.5px 1.5px rgb(238, 46, 72);\n}\n\n.MCH {\n  text-shadow: -1px 0 1.5px rgb(20, 138, 169), 0 1.5px 1.5px rgb(20, 138, 169), 1px 0 1.5px rgb(20, 138, 169),\n    0 -1.5px 1.5px rgb(20, 138, 169);\n}\n\n.DRK {\n  text-shadow: -1px 0 1.5px rgb(104, 37, 49), 0 1.5px 1.5px rgb(104, 37, 49), 1px 0 1.5px rgb(104, 37, 49),\n    0 -1.5px 1.5px rgb(104, 37, 49);\n}\n\n.AST {\n  text-shadow: -1px 0 1.5px rgb(177, 86, 28), 0 1.5px 1.5px rgb(177, 86, 28), 1px 0 1.5px rgb(177, 86, 28),\n    0 -1.5px 1.5px rgb(177, 86, 28);\n}\n\n.SAM {\n  text-shadow: -1px 0 1.5px rgb(228, 90, 15), 0 1.5px 1.5px rgb(228, 90, 15), 1px 0 1.5px rgb(228, 90, 15),\n    0 -1.5px 1.5px rgb(228, 90, 15);\n}\n\n.RDM {\n  text-shadow: -1px 0 1.5px rgb(172, 41, 151), 0 1.5px 1.5px rgb(172, 41, 151), 1px 0 1.5px rgb(172, 41, 151),\n    0 -1.5px 1.5px rgb(172, 41, 151);\n}\n\n.BLU {\n  text-shadow: -1px 0 1.5px rgb(24, 61, 154), 0 1.5px 1.5px rgb(24, 61, 154), 1px 0 1.5px rgb(24, 61, 154),\n    0 -1.5px 1.5px rgb(24, 61, 154);\n}\n\n.GNB {\n  text-shadow: -1px 0 1.5px rgb(121, 109, 48), 0 1.5px 1.5px rgb(121, 109, 48), 1px 0 1.5px rgb(121, 109, 48),\n    0 -1.5px 1.5px rgb(121, 109, 48);\n}\n\n.DNC {\n  text-shadow: -1px 0 1.5px rgb(139, 110, 110), 0 1.5px 1.5px rgb(139, 110, 110), 1px 0 1.5px rgb(139, 110, 110),\n    0 -1.5px 1.5px rgb(139, 110, 110);\n}\n\n.RPR {\n  text-shadow: -1px 0 1.5px rgb(76, 25, 76), 0 1.5px 1.5px rgb(76, 25, 76), 1px 0 1.5px rgb(76, 25, 76), 0 -1.5px 1.5px rgb(76, 25, 76);\n}\n\n.SGE {\n  text-shadow: -1px 0 1.5px rgb(52, 81, 160), 0 1.5px 1.5px rgb(52, 81, 160), 1px 0 1.5px rgb(52, 81, 160),\n    0 -1.5px 1.5px rgb(52, 81, 160);\n}\n\n.VPR {\n  text-shadow: -1px 0 1.5px rgb(16, 114, 16), 0 1.5px 1.5px rgb(16, 114, 16), 1px 0 1.5px rgb(16, 114, 16),\n    0 -1.5px 1.5px rgb(16, 114, 16);\n}\n\n.PCT {\n  text-shadow: -1px 0 1.5px rgb(255, 162, 241), 0 1.5px 1.5px rgb(255, 162, 241), 1px 0 1.5px rgb(255, 162, 241),\n    0 -1.5px 1.5px rgb(255, 162, 241);\n}"],sourceRoot:""}]);const i=o},292:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",p=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),p&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),p&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,p,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(p)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var l=0;l<e.length;l++){var x=[].concat(e[l]);p&&o[x[0]]||(void 0!==a&&(void 0===x[5]||(x[1]="@layer".concat(x[5].length>0?" ".concat(x[5]):""," {").concat(x[1],"}")),x[5]=a),n&&(x[2]?(x[1]="@media ".concat(x[2]," {").concat(x[1],"}"),x[2]=n):x[2]=n),s&&(x[4]?(x[1]="@supports (".concat(x[4],") {").concat(x[1],"}"),x[4]=s):x[4]="".concat(s)),t.push(x))}},t}},44:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var p=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),a="/*# ".concat(s," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},796:e=>{"use strict";var t=[];function n(e){for(var n=-1,p=0;p<t.length;p++)if(t[p].identifier===e){n=p;break}return n}function p(e,p){for(var a={},o=[],i=0;i<e.length;i++){var r=e[i],l=p.base?r[0]+p.base:r[0],x=a[l]||0,c="".concat(l," ").concat(x);a[l]=x+1;var d=n(c),A={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==d)t[d].references++,t[d].updater(A);else{var b=s(A,p);p.byIndex=i,t.splice(i,0,{identifier:c,updater:b,references:1})}o.push(c)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=p(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var i=n(a[o]);t[i].references--}for(var r=p(e,s),l=0;l<a.length;l++){var x=n(a[l]);0===t[x].references&&(t[x].updater(),t.splice(x,1))}a=r}}},615:e=>{"use strict";var t={};e.exports=function(e,n){var p=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(n)}},784:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},940:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},765:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var p="";n.supports&&(p+="@supports (".concat(n.supports,") {")),n.media&&(p+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(p+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),p+=n.css,s&&(p+="}"),n.media&&(p+="}"),n.supports&&(p+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(p+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(p,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},93:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(p){var s=t[p];if(void 0!==s)return s.exports;var a=t[p]={id:p,exports:{}};return e[p](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var p in t)n.o(t,p)&&!n.o(e,p)&&Object.defineProperty(e,p,{enumerable:!0,get:t[p]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";n(639);let e={16483:0,16484:16486,16485:16486,25779:16487,7496:16481,2874:0,2890:0,2872:16500,16003:16192,16191:16192,16004:16196,16193:16196,16194:16196,16195:16196,3551:25751,16464:25751,25752:7387,16510:16508,3581:16549,16494:3562,16499:16498,16527:7515,38:7389,7415:16502,92:16478,23287:23290,18324:18325,23272:23285,23280:23285,23273:23275,11426:11427,11428:11429,52:0,48:0,3629:0,3580:0,7429:0,7449:0,16516:0,3631:0,16142:0,28:0,2259:0,2261:0,2262:0,2263:0,3582:0,110:0,117:0,16161:25758,16144:16165,3641:3643,25755:0,16546:0,16548:0,802:0,8324:0,24307:24313,2246:0,24402:24401,24403:0,17206:0,24288:24302,24289:24313};!function(){const e=document.querySelector("#loading");e&&e.remove();let t=document.createElement("div");t.style.height="100vh",t.style.width="100vw",t.style.zIndex="10",t.style.color="white",t.style.textShadow="-1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000",t.style.display="none",t.style.fontFamily="微软雅黑",t.style.fontWeight="bold",t.style.backgroundColor="rgba(0, 0, 150, 0.2)",t.style.position="fixed",t.style.bottom="0",t.style.fontSize="12px",t.style.alignItems="flex-end",t.style.justifyContent="center",t.id="readMe";let n=document.createElement("span");n.innerText="🔒在Overlay悬浮窗(ngld)插件中锁定此悬浮窗以开始使用。",t.appendChild(n),document.body.appendChild(t),document.addEventListener("onOverlayStateUpdate",(e=>document.querySelector("#readMe").style.display=e.detail.isLocked?"none":"flex"))}();let t={action:{casterID:2,casterName:3,actionID:4,actionName:5,targetID:6,targetName:7,castTime:8},status:{statusID:2,statusName:3,statusTime:4,casterID:5,casterName:6,targetID:7,targetName:8}},p={},s=e=>e?callOverlayHandler({call:"cactbotSay",text:e}):"";var a=n(796),o=n.n(a),i=n(765),r=n.n(i),l=n(615),x=n.n(l),c=n(940),d=n.n(c),A=n(784),b=n.n(A),u=n(93),m=n.n(u),C=n(998),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=x().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=b(),o()(C.A,g),C.A&&C.A.locals&&C.A.locals;let y=new URLSearchParams(new URL(window.location).search);setTimeout((()=>{if(!window.OverlayPluginApi&&null===y.get("OVERLAY_WS")&&null===y.get("HOST_PORT")){let e=document.createElement("header");document.body.appendChild(e),e.style.position="absolute",e.style.top=0,e.style.fontFamily="微软雅黑",e.style.fontSize="16px",e.style.color="white",e.style.textShadow="black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px";let t=30,n=setInterval((()=>{e.innerText=`请在ACT悬浮窗中添加此页面。（${t--}秒后消失）`,t<=-1&&(clearInterval(n),e.remove())}),1e3)}}),1e3);let f=[{ID:"1",en:"GLA",cn:"剑术师",jp:"剣術士",Role:"Tank",IsBaseCLass:!0,simple1:"剑",simple2:"剑术"},{ID:"2",en:"PGL",cn:"格斗家",jp:"格闘士",Role:"Dps",IsBaseCLass:!0,simple1:"格",simple2:"格斗"},{ID:"3",en:"MRD",cn:"斧术师",jp:"斧術士",Role:"Tank",IsBaseCLass:!0,simple1:"斧",simple2:"斧术"},{ID:"4",en:"LNC",cn:"枪术师",jp:"槍術士",Role:"Dps",IsBaseCLass:!0,simple1:"枪",simple2:"枪术"},{ID:"5",en:"ARC",cn:"弓箭手",jp:"弓術士",Role:"Dps",IsBaseCLass:!0,simple1:"弓",simple2:"弓箭"},{ID:"6",en:"CNJ",cn:"幻术师",jp:"幻術士",Role:"Healer",IsBaseCLass:!0,simple1:"幻",simple2:"幻术"},{ID:"7",en:"THM",cn:"咒术师",jp:"呪術士",Role:"Dps",IsBaseCLass:!0,simple1:"咒",simple2:"咒术"},{ID:"19",en:"PLD",cn:"骑士",jp:"ナイト",Role:"Tank",IsBaseCLass:!1,simple1:"骑",simple2:"骑士"},{ID:"20",en:"MNK",cn:"武僧",jp:"モンク",Role:"Dps",IsBaseCLass:!1,simple1:"僧",simple2:"武僧"},{ID:"21",en:"WAR",cn:"战士",jp:"戦士",Role:"Tank",IsBaseCLass:!1,simple1:"战",simple2:"战士"},{ID:"22",en:"DRG",cn:"龙骑士",jp:"竜騎士",Role:"Dps",IsBaseCLass:!1,simple1:"龙",simple2:"龙骑"},{ID:"23",en:"BRD",cn:"吟游诗人",jp:"吟遊詩人",Role:"Dps",IsBaseCLass:!1,simple1:"诗",simple2:"诗人"},{ID:"24",en:"WHM",cn:"白魔法师",jp:"白魔道士",Role:"Healer",IsBaseCLass:!1,simple1:"白",simple2:"白魔"},{ID:"25",en:"BLM",cn:"黑魔法师",jp:"黒魔道士",Role:"Dps",IsBaseCLass:!1,simple1:"黑",simple2:"黑魔"},{ID:"26",en:"ACN",cn:"秘术师",jp:"巴術士",Role:"Dps",IsBaseCLass:!0,simple1:"秘",simple2:"秘术"},{ID:"27",en:"SMN",cn:"召唤师",jp:"召喚士",Role:"Dps",IsBaseCLass:!1,simple1:"召",simple2:"召唤"},{ID:"28",en:"SCH",cn:"学者",jp:"学者",Role:"Healer",IsBaseCLass:!1,simple1:"学",simple2:"学者"},{ID:"29",en:"ROG",cn:"双剑师",jp:"双剣士",Role:"Dps",IsBaseCLass:!0,simple1:"双",simple2:"双剑"},{ID:"30",en:"NIN",cn:"忍者",jp:"忍者",Role:"Dps",IsBaseCLass:!1,simple1:"忍",simple2:"忍者"},{ID:"31",en:"MCH",cn:"机工士",jp:"機工士",Role:"Dps",IsBaseCLass:!1,simple1:"机",simple2:"机工"},{ID:"32",en:"DRK",cn:"暗黑骑士",jp:"暗黒騎士",Role:"Tank",IsBaseCLass:!1,simple1:"暗",simple2:"暗骑"},{ID:"33",en:"AST",cn:"占星术士",jp:"占星術師",Role:"Healer",IsBaseCLass:!1,simple1:"占",simple2:"占星"},{ID:"34",en:"SAM",cn:"武士",jp:"侍",Role:"Dps",IsBaseCLass:!1,simple1:"侍",simple2:"武士"},{ID:"35",en:"RDM",cn:"赤魔法师",jp:"赤魔道士",Role:"Dps",IsBaseCLass:!1,simple1:"赤",simple2:"赤魔"},{ID:"36",en:"BLU",cn:"青魔法师",jp:"青魔道士",Role:"Dps",IsBaseCLass:!1,simple1:"青",simple2:"青魔"},{ID:"37",en:"GNB",cn:"绝枪战士",jp:"ガンブレイカー",Role:"Tank",IsBaseCLass:!1,simple1:"绝",simple2:"绝枪"},{ID:"38",en:"DNC",cn:"舞者",jp:"踊り子",Role:"Dps",IsBaseCLass:!1,simple1:"舞",simple2:"舞者"},{ID:"39",en:"RPR",cn:"钐镰客",jp:"リーパー",Role:"Dps",IsBaseCLass:!1,simple1:"镰",simple2:"钐镰"},{ID:"40",en:"SGE",cn:"贤者",jp:"賢者",Role:"Healer",IsBaseCLass:!1,simple1:"贤",simple2:"贤者"},{ID:"41",en:"VPR",cn:"蝰蛇剑士",jp:"ヴァイパー",Role:"Dps",IsBaseCLass:!1,simple1:"蛇",simple2:"蝰蛇"},{ID:"42",en:"PCT",cn:"绘灵法师",jp:"ピクトマンサー",Role:"Dps",IsBaseCLass:!1,simple1:"绘",simple2:"绘灵"}];function v(e){return f.find((t=>t.ID===e.toString()))}let h=new URLSearchParams(new URL(window.location).search),j=[],w=[],I=null,D=!0;const L=["false"!==h.get("dajinengTTS"),"false"!==h.get("jianshangTTS"),"false"!==h.get("tuanfuTTS")],R="true"===h.get("international")?"global":"cn",E="global"===R?[{id:30,tts:"神圣领域",duration:10,recast1000ms:420,job:[19],type:0,level:50,icon:2502},{id:43,tts:"死斗",duration:10,recast1000ms:240,job:[3,21],type:0,level:42,icon:266},{id:3638,tts:"行尸走肉",duration:10,recast1000ms:300,job:[32],type:0,level:50,icon:3077},{id:16152,tts:"超火流星",duration:10,recast1000ms:360,job:[37],type:0,level:50,icon:3416},{id:140,tts:"天赐",duration:0,recast1000ms:180,job:[24],type:0,level:50,icon:2627},{id:25862,tts:"礼仪之铃",duration:15,recast1000ms:180,job:[24],type:0,level:90,icon:2649},{id:25868,tts:"跑快快",duration:20,recast1000ms:120,job:[28],type:0,level:90,icon:2878},{id:25874,tts:"大宇宙",duration:15,recast1000ms:180,job:[33],type:0,level:90,icon:3562},{id:24318,tts:"魂灵风息",duration:0,recast1000ms:120,job:[40],type:0,level:90,icon:3686},{id:7549,tts:"牵制",duration:e=>e>=98?15:10,recast1000ms:90,job:[2,4,20,22,30,34,39,41],type:1,level:22,icon:828},{id:7560,tts:"昏乱",duration:e=>e>=98?15:10,recast1000ms:90,job:[7,25,26,27,35,36,42],type:1,level:8,icon:861},{id:7535,tts:"雪愁",duration:e=>e>=98?15:10,recast1000ms:60,job:[1,3,19,21,32,37],type:1,level:22,icon:806},{id:3540,tts:"幕帘",duration:30,recast1000ms:90,job:[19],type:1,level:56,icon:2508},{id:7385,tts:"大翅膀",duration:5,recast1000ms:120,job:[19],type:1,level:70,icon:2515},{id:7388,tts:"摆脱",duration:15,recast1000ms:90,job:[21],type:1,level:68,icon:2563},{id:16471,tts:"布道",duration:15,recast1000ms:90,job:[32],type:1,level:76,icon:3087},{id:16160,tts:"光心",duration:15,recast1000ms:90,job:[37],type:1,level:64,icon:3424},{id:16536,tts:"节制",duration:20,recast1000ms:120,job:[24],type:1,level:80,icon:2645},{id:7405,tts:"行吟",duration:15,recast1000ms:90,job:[23],type:1,level:62,icon:2612},{id:16889,tts:"策动",duration:15,recast1000ms:90,job:[31],type:1,level:56,icon:3040},{id:2887,tts:"武解",duration:10,recast1000ms:120,job:[31],type:1,level:62,icon:3011},{id:16012,tts:"桑巴",duration:15,recast1000ms:90,job:[38],type:1,level:56,icon:3469},{id:25857,tts:"抗死",duration:10,recast1000ms:120,job:[35],type:1,level:86,icon:3237},{id:118,tts:"战歌",duration:20,recast1000ms:120,job:[5,23],type:2,level:50,icon:2601},{id:25785,tts:"光神曲",duration:20,recast1000ms:110,job:[5,23],type:2,level:90,icon:2622},{id:e=>e>=66?36957:2248,tts:"背刺",duration:20,recast1000ms:120,job:[29,30],type:2,level:66,icon:619},{id:24405,tts:"神秘环",duration:20,recast1000ms:120,job:[39],type:2,level:72,icon:3633},{id:3557,tts:"连祷",duration:20,recast1000ms:120,job:[4,22],type:2,level:52,icon:2585},{id:7396,tts:"义结金兰",duration:20,recast1000ms:120,job:[2,20],type:2,level:70,icon:2542},{id:25801,tts:"灼热之光",duration:20,recast1000ms:120,job:[27],type:2,level:66,icon:2780},{id:34675,tts:"画魔纹",duration:20,recast1000ms:120,job:[42],type:2,level:70,icon:3826},{id:7436,tts:"连环计",duration:20,recast1000ms:120,job:[28],type:2,level:66,icon:2815},{id:7520,tts:"鼓励",duration:20,recast1000ms:120,job:[35],type:2,level:58,icon:3218},{id:16196,tts:"技巧舞",duration:20,recast1000ms:120,job:[38],type:2,level:70,icon:3474},{id:16011,tts:"探戈",duration:20,recast1000ms:120,job:[38],type:2,level:62,icon:3471},{id:16552,tts:"占卜",duration:20,recast1000ms:120,job:[33],type:2,level:50,icon:3553}]:[{id:30,tts:"神圣领域",duration:10,recast1000ms:420,job:[19],type:0,level:50,icon:2502},{id:43,tts:"死斗",duration:10,recast1000ms:240,job:[3,21],type:0,level:42,icon:266},{id:3638,tts:"行尸走肉",duration:10,recast1000ms:300,job:[32],type:0,level:50,icon:3077},{id:16152,tts:"超火流星",duration:10,recast1000ms:360,job:[37],type:0,level:50,icon:3416},{id:140,tts:"天赐",duration:0,recast1000ms:180,job:[24],type:0,level:50,icon:2627},{id:25862,tts:"礼仪之铃",duration:15,recast1000ms:180,job:[24],type:0,level:90,icon:2649},{id:25868,tts:"跑快快",duration:20,recast1000ms:120,job:[28],type:0,level:90,icon:2878},{id:25874,tts:"大宇宙",duration:15,recast1000ms:180,job:[33],type:0,level:90,icon:3562},{id:24318,tts:"魂灵风息",duration:0,recast1000ms:120,job:[40],type:0,level:90,icon:3686},{id:7549,tts:"牵制",duration:10,recast1000ms:90,job:[2,4,20,22,30,34,39],type:1,level:22,icon:828},{id:7560,tts:"昏乱",duration:10,recast1000ms:90,job:[7,25,26,27,35,36],type:1,level:8,icon:861},{id:7535,tts:"雪愁",duration:10,recast1000ms:60,job:[1,3,19,21,32,37],type:1,level:22,icon:806},{id:3540,tts:"幕帘",duration:30,recast1000ms:90,job:[19],type:1,level:56,icon:2508},{id:7385,tts:"大翅膀",duration:5,recast1000ms:120,job:[19],type:1,level:70,icon:2515},{id:7388,tts:"摆脱",duration:15,recast1000ms:90,job:[21],type:1,level:68,icon:2563},{id:16471,tts:"布道",duration:15,recast1000ms:90,job:[32],type:1,level:76,icon:3087},{id:16160,tts:"光心",duration:15,recast1000ms:90,job:[37],type:1,level:64,icon:3424},{id:16536,tts:"节制",duration:20,recast1000ms:120,job:[24],type:1,level:80,icon:2645},{id:7405,tts:"行吟",duration:15,recast1000ms:90,job:[23],type:1,level:62,icon:2612},{id:16889,tts:"策动",duration:15,recast1000ms:90,job:[31],type:1,level:56,icon:3040},{id:2887,tts:"武解",duration:10,recast1000ms:120,job:[31],type:1,level:62,icon:3011},{id:16012,tts:"桑巴",duration:15,recast1000ms:90,job:[38],type:1,level:56,icon:3469},{id:25857,tts:"抗死",duration:10,recast1000ms:120,job:[35],type:1,level:86,icon:3237},{id:118,tts:"战歌",duration:15,recast1000ms:120,job:[5,23],type:2,level:50,icon:2601},{id:25785,tts:"光神曲",duration:15,recast1000ms:110,job:[5,23],type:2,level:90,icon:2622},{id:2248,tts:"背刺",duration:20,recast1000ms:120,job:[29,30],type:2,level:15,icon:613},{id:24405,tts:"神秘环",duration:20,recast1000ms:120,job:[39],type:2,level:72,icon:3633},{id:3557,tts:"连祷",duration:15,recast1000ms:120,job:[4,22],type:2,level:52,icon:2585},{id:7398,tts:"龙肠",duration:20,recast1000ms:120,job:[4,22],type:2,level:66,icon:2587},{id:7396,tts:"义结金兰",duration:15,recast1000ms:120,job:[2,20],type:2,level:70,icon:2542},{id:25801,tts:"灼热之光",duration:30,recast1000ms:120,job:[27],type:2,level:66,icon:2780},{id:7436,tts:"连环计",duration:15,recast1000ms:120,job:[28],type:2,level:66,icon:2815},{id:7520,tts:"鼓励",duration:20,recast1000ms:120,job:[35],type:2,level:58,icon:3218},{id:16196,tts:"技巧舞",duration:20,recast1000ms:120,job:[38],type:2,level:70,icon:3474},{id:16011,tts:"探戈",duration:20,recast1000ms:120,job:[38],type:2,level:62,icon:3471},{id:16552,tts:"占卜",duration:15,recast1000ms:120,job:[33],type:2,level:50,icon:3553}];function B(){document.querySelectorAll("body > article > article").forEach((e=>{null==e||e.cancel()}))}function P(e){if(!e)return;let t=[..."000000"],n=e.toString();if(n.length>3){const e=[...n].slice(0,n.length-3).concat(..."000");t=[...t.slice(0,6-e.length),...e]}let p=[..."000000"];return p=[...p.slice(0,6-n.length),...n],`${t.join("")}/${p.join("")}`}function S(){T([{id:"骑士ID",name:"虚构骑士",job:19,inParty:!0,level:100},{id:"武僧ID",name:"虚构武僧",job:20,inParty:!0,level:100},{id:"战士ID",name:"虚构战士",job:21,inParty:!0,level:100},{id:"龙骑ID",name:"虚构龙骑",job:22,inParty:!0,level:100},{id:"诗人ID",name:"虚构诗人",job:23,inParty:!0,level:100},{id:"白魔ID",name:"虚构白魔",job:24,inParty:!0,level:100},{id:"黑魔ID",name:"虚构黑魔",job:25,inParty:!0,level:100},{id:"召唤ID",name:"虚构召唤",job:27,inParty:!0,level:100},{id:"学者ID",name:"虚构学者",job:28,inParty:!0,level:100},{id:"忍者ID",name:"虚构忍者",job:30,inParty:!0,level:100},{id:"机工ID",name:"虚构机工",job:31,inParty:!0,level:100},{id:"暗骑ID",name:"虚构暗骑",job:32,inParty:!0,level:100},{id:"占星ID",name:"虚构占星",job:33,inParty:!0,level:100},{id:"武士ID",name:"虚构武士",job:34,inParty:!0,level:100},{id:"赤魔ID",name:"虚构赤魔",job:35,inParty:!0,level:100},{id:"青魔ID",name:"虚构青魔",job:36,inParty:!0,level:100},{id:"绝枪ID",name:"虚构绝枪",job:37,inParty:!0,level:100},{id:"舞者ID",name:"虚构舞者",job:38,inParty:!0,level:100},{id:"钐镰ID",name:"虚构钐镰",job:39,inParty:!0,level:100},{id:"贤者ID",name:"虚构贤者",job:40,inParty:!0,level:100},{id:"蝰蛇ID",name:"虚构蝰蛇",job:41,inParty:!0,level:100},{id:"画家ID",name:"虚构画家",job:42,inParty:!0,level:100}])}function G(e,t){return"function"==typeof e?e(t.level):e}function T(e){document.querySelectorAll("body > article").forEach((e=>{e.innerHTML=""}));for(const t of e){if(!t.inParty&&"false"!==h.get("inPartyOnly"))break;for(let n=0;n<E.length;n++){const p=E[n];if(p.job.includes(t.job)){const a=document.createElement("article"),o="function"==typeof p.id?p.id(t.level):p.id;if(a.style.order=n,(t.level||100)<p.level)continue;a.setAttribute("data-from",`${t.id}-${o}`);const i=document.createElement("aside"),r=G(p.recast1000ms,t),l=G(p.duration,t),x=G(p.tts,t),c=G(p.type,t);i.setAttribute("data-recast",r),i.setAttribute("data-duration",l),i.setAttribute("data-type",c),i.setAttribute("data-tts",x),i.innerText="",a.append(i);let d=document.createElement("img");if(!p.icon)throw new Error("icon is required");const A=P(p.icon);d.src=`https://cafemaker.wakingsands.com/i/${null!=A?A:"000000/000405"}.png`,d.onerror=()=>{d.src=`https://xivapi.com/i/${null!=A?A:"000000/000405"}.png`,d.onerror=null},a.append(d);let b=document.createElement("div");if(b.classList.add("shadow"),a.append(b),(null==e?void 0:e.reduce(((e,n)=>((n.job===t.job||p.job.find((e=>e===n.job)))&&e++,e)),0))>=2){let e=document.createElement("footer");const n=v(t.job);e.innerText=n.simple1,e.classList.add(n.en),a.append(e)}document.querySelector(`#no${p.type}`).append(a),a.use=function(){var e;L[c]&&(e=x)&&s(e);let t=i.getAttribute("data-recast"),n=parseInt(t),p=i.getAttribute("data-duration");i.innerText=p,clearInterval(a.timer),"0"===p?(b.style.clipPath="inset(0 0 0 0)",i.innerText=n):i.style.color="gold";let o=0;a.timer=setInterval((()=>{n-=.25,o++,n>t-p?(o%4==0&&(i.innerText=parseInt(p-(t-n))),b.style.clipPath=`inset(${100-(t-n)/p*100}% 0 0 0)`):(o%4==0&&(i.innerText=parseInt(n),i.style.color="white"),b.style.clipPath=`inset(${100-n/(t-p)*100}% 0 0 0)`),n<=0&&(null==a||a.cancel())}),250),j.push(a.timer)},a.cancel=()=>{clearInterval(a.timer),i.innerText="",b.style.clipPath="inset(100% 0 0 0)"}}}}}console.log(`当前处于${"global"===R?"国际服":"国服"}模式`),addOverlayListener("ChangePrimaryPlayer",(e=>I=e.charID.toString(16).toUpperCase())),addOverlayListener("PartyChanged",(e=>{w=e.party||[],D||setTimeout((()=>{T(w)}),1e3)})),addOverlayListener("LogLine",(n=>{if("21"===n.line[0]||"22"===n.line[0]&&"0"===n.line[45]){let o=function(e,n){if(t[n])for(const s in t[n])p[s]=e[t[n][s]];return p}(n.line,"action"),i=parseInt(o.actionID,16);const r=document.querySelector(`article[data-from="${o.casterID}-${s=i,null!==(a=e[s])&&void 0!==a?a:s}"]`);r&&r.use()}else"33"===n.line[0]&&"4000000F"===n.line[3]&&B();var s,a})),addOverlayListener("ChangeZone",(()=>B())),document.addEventListener("onOverlayStateUpdate",(e=>{e.detail.isLocked?(D=!1,T(w)):(D=!0,S())})),startOverlayEvents(),(location.href.includes("localhost")||location.href.includes("127.0.0.1"))&&S()})()})();