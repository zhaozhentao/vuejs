webpackJsonp([3],{"3jxE":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("Dd8w"),i=n.n(a),o=n("NYxO"),r={name:"TheEntry",computed:i()({},Object(o.b)(["auth","user"]))},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),t._v(" "),n("span",{staticClass:"caret"})]),t._v(" "),t._m(0)])]):n("div",{staticClass:"nav navbar-nav github-login"},[t._m(1),t._v(" "),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册\n    ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-sign-out text-md"}),this._v("退出")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-default login-btn",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-user"}),this._v(" 登 录\n    ")])}]};var c={name:"TheHeader",components:{TheEntry:n("VU/8")(r,l,!1,function(t){n("nf27")},"data-v-0ea45f00",null).exports},data:function(){return{activeNavIndex:0,logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])],1),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,s){return n("li",{class:{active:s===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(s)}}},[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},staticRenderFns:[]};var v=n("VU/8")(c,u,!1,function(t){n("m03c")},"data-v-48b3cbe0",null).exports;function d(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),s=n.style;if(void 0===e)s.display="none";else{var a=t.getBoundingClientRect(),i=window.getComputedStyle(t,null),o=parseInt(i.getPropertyValue("padding-right"))||0,r=parseInt(i.getPropertyValue("padding-top"))||0;s.visibility="hidden",s.display="block",n.querySelector(".popover-content").textContent=e,s.left=a.left-n.offsetWidth/2+(t.offsetWidth-o)/2+"px",s.top=a.top-n.offsetHeight+r+"px",s.display="block",s.visibility="visible"}}var p={name:"TheFooter",directives:{title:{bind:function(t,e,n){var s=["mouseenter","mouseleave","click"],a=function(n){"mouseenter"===n.type?d(t,e.value):d()};s.forEach(function(e){t.addEventListener(e,a,!1)}),t.destroy=function(){s.forEach(function(e){t.removeEventListener(e,a,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}}},data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])})),t._v(" "),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}))])])])])])])},staticRenderFns:[]};var f={name:"App",components:{TheFooter:n("VU/8")(p,h,!1,function(t){n("YQW0")},"data-v-7742b972",null).exports,TheHeader:v}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var g=n("VU/8")(f,m,!1,function(t){n("3jxE")},null,null).exports,b=n("/ocq");s.a.use(b.a);var _=[{path:"/auth/register",name:"Register",component:function(){return n.e(0).then(n.bind(null,"0jH9"))}},{path:"/",name:"Home",component:function(){return n.e(1).then(n.bind(null,"j7e0"))}},{path:"*",redirect:"/"}],y=new b.a({mode:"history",routes:_});y.beforeEach(function(t,e,n){y.app.$options.store.state.auth&&-1!==t.path.indexOf("/auth/")?n("/"):n()});var C=y,w=n("pFYg"),x=n.n(w);function k(t,e,n){n=n&&"object"===(void 0===n?"undefined":x()(n))?n:{};var s="string"==typeof t.value?t.value.trim():"",a=n,i=a.title,o=void 0===i?"该项":i,r=a.error,l="";if(e.required&&""===s)l=o+"不能为空";else if(n.target){var c=document.querySelector(n.target);(c?c.value:null)!==s&&(l="输入的"+o+"不匹配")}else if(n.regex)try{n.regex.test(s)||(l=o+"格式不正确")}catch(t){}l?E(t,void 0===r?l:r):E(t)}function E(t,e){var n=t.parentElement,s=function(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var s=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(s),n=e.querySelector(".help-block")}return n}(t);void 0===e?(s.style.display="none",n.classList.remove("has-error")):(s.textContent=e,s.style.display="block",n.classList.add("has-error"))}var S={bind:function(t,e,n){var s=e.value,a=e.arg,i=e.modifiers,o=-1!==["change","blur","input"].indexOf(a)?a:"change",r=function(){E(t)},l=function(){k(t,i,s)};t.addEventListener("input",r,!1),t.addEventListener(o,l,!1),t.destroy=function(){t.removeEventListener("input",r,!1),t.removeEventListener(o,l,!1),t.destroy=null}},inserted:function(t,e,n){var s=e.value,a=e.modifiers,i=t.closest("[data-validator-form]"),o=i?i.querySelector("[type=submit]"):null;if(o){var r=function(){k(t,a,s),i.querySelectorAll(".has-error").length?o.canSubmit=!1:o.canSubmit=!0};o.addEventListener("click",r,!1),t.destroySubmitBtn=function(){o.removeEventListener("click",r,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}};s.a.directive("validator",S);var N={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var I=n("VU/8")(N,T,!1,function(t){n("zh3L")},"data-v-5f48b72d",null).exports;s.a.component("Message",I);var j=n("ssT3");s.a.use(o.a);var L={user:j.a.getItem("user"),auth:j.a.getItem("auth")},U={UPDATE_USER:function(t,e){t.user=e,j.a.setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,j.a.setItem("auth",e)}},F={login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),C.push("/")}},R=new o.a.Store({state:L,mutations:U,actions:F});s.a.config.productionTip=!1,new s.a({el:"#app",router:C,store:R,components:{App:g},template:"<App/>"})},YQW0:function(t,e){},m03c:function(t,e){},nf27:function(t,e){},ssT3:function(t,e,n){"use strict";var s=n("mvHQ"),a=n.n(s),i=localStorage;e.a={setItem:function(t,e){i.setItem(t,a()(e))},getItem:function(t){try{return JSON.parse(i.getItem(t))}catch(t){return null}},removeItem:function(t){i.removeItem(t)}}},zh3L:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.672de77274f832592613.js.map