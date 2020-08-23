(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d216214":"e238e43d","chunk-2d216257":"256ee085","chunk-718c3938":"fc7095e4"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/calligraphy/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"md-layout md-center md-alignment-center-center"},[n("div",{staticClass:"md-layout-item md-size-50"},[n("md-field",[n("label",{attrs:{for:"fonturl"}},[t._v("Font URL")]),n("md-input",{attrs:{id:"fonturl"},model:{value:t.fontURL,callback:function(e){t.fontURL=e},expression:"fontURL"}})],1)],1),n("div",{staticClass:"md-layout-item md-size-20"},[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.loadFile(t.fontURL)}}},[t._v("Load Font")])],1),n("div",{staticClass:"md-layout-item md-size-20"},[n("md-button",{staticClass:"md-raised md-primary",on:{click:t.createPDF}},[t._v("Save PDF")])],1),n("div",{staticClass:"md-layout-item md-size-100"},[n("md-card",{staticStyle:{padding:"0.10em 0.3em"}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:JSON.stringify({data:t.fontData}),expression:"JSON.stringify({'data': fontData})"}]},[n("code",{staticClass:"json"})])])],1)])])},o=[],i=n("8baf"),s=n("bc3a"),u=n.n(s),c={name:"App",components:{},data:function(){return{fontURL:"https://themes.googleusercontent.com/static/fonts/anonymouspro/v3/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",fontData:null,directAxios:u.a.create({baseURL:""})}},methods:{createPDF:function(){var t=new i["a"];this.fontData||this.loadFile(this.fontURL),t.addFileToVFS("antic.ttf",this.fontURL),t.addFont("antic.ttf","Antic","regular"),t.setFont("Antic","regular"),t.setFontSize(15),t.text("Some Text with Google Fonts",0,10),t.save("test.pdf")},loadFile:function(t){var e=this;this.directAxios.get(t,{responseType:"blob"}).then((function(t){var n=new FileReader;n.readAsDataURL(t.data),n.onload=function(t){console.log(e),e.fontData=t.target.result.substring(21)}}))}}},l=c,d=(n("034f"),n("2877")),f=Object(d["a"])(l,a,o,!1,null,null,null),p=f.exports,m=n("a7fe"),h=n.n(m),v=n("998c"),g=n.n(v),y=n("43f9"),b=n.n(y),w=n("ee8c"),j=n.n(w);n("51de"),n("e094"),n("8da8");r["default"].use(g.a,{languages:{json:j.a}}),r["default"].use(b.a),r["default"].use(h.a,u.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(p)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.201cd440.js.map