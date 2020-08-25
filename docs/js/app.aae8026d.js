(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d216214":"e238e43d","chunk-2d216257":"256ee085","chunk-718c3938":"fc7095e4"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/calligraphy/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"page-container md-layout-row"},[n("md-app",[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title"},[t._v("Calligraphy")])]),n("md-app-drawer",{attrs:{"md-persistent":"mini","md-permanent":"clipped"}},[n("md-list",{staticStyle:{height:"100%"}},[n("md-list-item",{on:{click:t.toggleMenu}},[n("md-icon",[t._v("visibility")])],1),n("md-list-item",{on:{click:t.toggleMenu}},[n("md-icon",[t._v("create")])],1),n("md-list-item",{on:{click:t.toggleMenu}},[n("md-icon",[t._v("colorize")])],1),n("md-list-item",{staticStyle:{"margin-top":"auto"},on:{click:t.toggleMenu}},[n("md-icon",[t._v("help")])],1)],1)],1),n("md-app-content",[n("div",{staticClass:"md-layout md-center md-alignment-center-space-between"},[n("div",{staticClass:"md-layout-item md-size-50"},[n("md-field",[n("label",{attrs:{for:"fonturl"}},[t._v("Font URL")]),n("md-input",{attrs:{id:"fonturl"},model:{value:t.fontURL,callback:function(e){t.fontURL=e},expression:"fontURL"}})],1)],1),n("div",{staticClass:"md-layout-item md-size-30 md-layout md-alignment-center-right"},[n("div",{staticClass:"md-layout-item"},[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.loadFile(t.fontURL)}}},[t._v(" Load Font "),n("md-icon",[t._v("cached")])],1)],1),n("div",{staticClass:"md-layout-item"},[n("md-button",{staticClass:"md-raised md-primary",on:{click:t.createPDF}},[t._v(" Save PDF "),n("md-icon",{staticClass:"md-size-1x"},[t._v("get_app")])],1)],1)]),n("div",{staticClass:"md-layout-item md-size-100"},[n("md-card",{staticStyle:{padding:"1.5em 1.5em 1.8em"}},[n("span",{attrs:{id:"font-data"}},[t._v(t._s(t.fontData))])])],1)])])],1)],1)])},i=[],r=n("8baf"),s=n("bc3a"),c=n.n(s),l={name:"App",components:{},data:function(){return{fontURL:"https://themes.googleusercontent.com/static/fonts/anonymouspro/v3/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",fontData:null,directAxios:c.a.create({baseURL:""}),menuVisible:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible},getFonts:function(){this.directAxios.get({url:"https://www.googleapis.com/webfonts/v1/webfonts?key=".concat(Object({NODE_ENV:"production",BASE_URL:"/calligraphy/"}).FONT_API_KEY)})},createPDF:function(){var t=new r["a"];this.fontData||this.loadFile(this.fontURL),console.log(this.fontData),t.addFileToVFS("antic.ttf",this.fontData),t.addFont("antic.ttf","Antic","regular"),t.setFont("Antic","regular"),t.setFontSize(15),t.text("Some Text with Google Fonts",5,10),t.save("test.pdf")},loadFile:function(t){var e=this;this.directAxios.get(t,{responseType:"blob"}).then((function(t){var n=new FileReader;n.readAsDataURL(t.data),n.onload=function(t){console.log(e),e.fontData=t.target.result.substring(21)}}))}}},u=l,d=(n("034f"),n("2877")),f=Object(d["a"])(u,a,i,!1,null,null,null),m=f.exports,p=n("a7fe"),g=n.n(p),v=n("998c"),h=n.n(v),y=n("43f9"),b=n.n(y),_=n("ee8c"),w=n.n(_);n("51de"),n("e094"),n("8da8");o["default"].use(h.a,{languages:{json:w.a}}),o["default"].use(b.a),o["default"].use(g.a,c.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.aae8026d.js.map