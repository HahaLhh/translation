(function(e){function t(t){for(var r,l,u=t[0],s=t[1],i=t[2],c=0,v=[];c<u.length;c++)l=u[c],a[l]&&v.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(v.length)v.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function l(e){return u.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"aa1497f8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e),o=function(t){s.onerror=s.onload=null,clearTimeout(i);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("在线翻译！！")]),n("h5",[e._v("高效 | 简单 | 快捷")]),n("translateform",{on:{FormTextFn:e.translateText}}),n("translateOutput",{domProps:{textContent:e._s(e.translatedText)}})],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"translateform"}},[n("form",{on:{submit:e.formSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Formintext,expression:"Formintext"}],attrs:{type:"text",placeholder:"请输入需要翻译的内容"},domProps:{value:e.Formintext},on:{input:function(t){t.target.composing||(e.Formintext=t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.language=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"en"}},[e._v("English")]),n("option",{attrs:{value:"ru"}},[e._v("Russian")]),n("option",{attrs:{value:"ko"}},[e._v("Korean")]),n("option",{attrs:{value:"ja"}},[e._v("Janpenese")])]),n("input",{attrs:{type:"submit",value:"翻译"}})])])},u=[],s={name:"Translateform",data:function(){return{Formintext:"",language:""}},methods:{formSubmit:function(e){e.preventDefault(),this.$emit("FormTextFn",this.Formintext,this.language)}}},i=s,c=n("2877"),p=Object(c["a"])(i,l,u,!1,null,null,null);p.options.__file="Translateform.vue";var v=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"translateOutput"}},[n("h2",[e._v(e._s(e.translatedText))])])},m=[],h={name:"translateOutput",props:["translatedText"]},d=h,_=Object(c["a"])(d,f,m,!1,null,null,null);_.options.__file="TranslateOutput.vue";var g=_.exports,b={data:function(){return{translatedText:""}},name:"app",components:{Translateform:v,TranslateOutput:g},methods:{translateText:function(e,t){var n=this;this.axios.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190131T051158Z.523af12efacf11c6.6940982bc5f2ee6e58edf47b9d309b8ad535947d&lang="+t+"&text="+e).then(function(e){n.translatedText=e.data.text[0]})}}},x=b,j=(n("7c55"),Object(c["a"])(x,a,o,!1,null,null,null));j.options.__file="App.vue";var y=j.exports,k=n("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},T=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],F={name:"HelloWorld",props:{msg:String}},P=F,$=(n("8a3c"),Object(c["a"])(P,O,E,!1,null,"73c49ef2",null));$.options.__file="HelloWorld.vue";var S=$.exports,C={name:"home",components:{HelloWorld:S}},H=C,W=Object(c["a"])(H,w,T,!1,null,null,null);W.options.__file="Home.vue";var A=W.exports;r["a"].use(k["a"]);var M=new k["a"]({mode:"history",routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),J=n("2f62");r["a"].use(J["a"]);var L=new J["a"].Store({state:{},mutations:{},actions:{}}),N=n("bc3a"),D=n.n(N),I=n("a7fe"),V=n.n(I);r["a"].use(V.a,D.a),r["a"].config.productionTip=!1,new r["a"]({router:M,store:L,render:function(e){return e(y)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},"8a3c":function(e,t,n){"use strict";var r=n("df50"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"assets/img/logo.82b9c7a5.png"},df50:function(e,t,n){}});