(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-center-user-center"],{"0188":function(A,t,e){var n=e("6571");"string"===typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);var r=e("4f06").default;r("62c84902",n,!0,{sourceMap:!1,shadowMode:!1})},1273:function(A,t,e){"use strict";e.r(t);var n=e("3603"),r=e("9deb");for(var a in r)"default"!==a&&function(A){e.d(t,A,(function(){return r[A]}))}(a);e("4613");var i,o=e("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"716794dc",null,!1,n["a"],i);t["default"]=s.exports},"2a6b":function(A,t,e){"use strict";(function(A){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{userInfo:{},showSettingName:!1,invateCode:""}},computed:{vip_end:function(){return this.userInfo?new Date(1*this.userInfo.vip_end).toLocaleString():""}},onShow:function(){A.log("onShow"),this.userInfo=this.$store.state.userInfo},onLoad:function(){var t=this.$store.state.userInfo,e=this.$store.state.network;A.log("onload"),!t&&e&&this.$goto("login/login")},methods:{handleSign:function(){var A=(new Date).toLocaleDateString();if(this.userInfo.signDate!=A){this.userInfo.signDate=A;var t=18e5,e=(new Date).getTime();this.userInfo.vip_end>e?this.userInfo.vip_end+=t:this.userInfo.vip_end=e+t,this.$store.commit("setUserInfo",this.userInfo),this.$modal("签到成功")}else this.$toast("今天已签到")},handleCode:function(){this.invateCode?this.invateCode="":this.$toast("不能为空")}}};t.default=e}).call(this,e("5a52")["default"])},"2f89":function(A,t,e){var n=e("90da");"string"===typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);var r=e("4f06").default;r("0545a81f",n,!0,{sourceMap:!1,shadowMode:!1})},3603:function(A,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var n={uIcon:e("dc76").default},r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"u-avatar",style:[A.wrapStyle],on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.click.apply(void 0,arguments)}}},[!A.uText&&A.avatar?e("v-uni-image",{staticClass:"u-avatar__img",style:[A.imgStyle],attrs:{src:A.avatar,mode:A.imgMode},on:{error:function(t){arguments[0]=t=A.$handleEvent(t),A.loadError.apply(void 0,arguments)}}}):A.uText?e("v-uni-text",{staticClass:"u-line-1",style:{fontSize:"38rpx"}},[A._v(A._s(A.uText))]):A._t("default"),A.showSex?e("v-uni-view",{staticClass:"u-avatar__sex",class:["u-avatar__sex--"+A.sexIcon],style:[A.uSexStyle]},[e("u-icon",{attrs:{name:A.sexIcon,size:"20"}})],1):A._e(),A.showLevel?e("v-uni-view",{staticClass:"u-avatar__level",style:[A.uLevelStyle]},[e("u-icon",{attrs:{name:A.levelIcon,size:"20"}})],1):A._e()],2)},a=[]},4613:function(A,t,e){"use strict";var n=e("0188"),r=e.n(n);r.a},"465bd":function(A,t,e){"use strict";e.r(t);var n=e("2a6b"),r=e.n(n);for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);t["default"]=r.a},"626b":function(A,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var n={uNavbar:e("169d").default,uIcon:e("dc76").default,uAvatar:e("1273").default,uCellGroup:e("a95d").default,uCellItem:e("41d0").default},r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",[e("u-navbar",{attrs:{title:"用户中心","is-back":!1}},[e("u-icon",{staticClass:"u-m-r-30",attrs:{slot:"right",name:"setting",size:"44"},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.$goto("user-center/setting")}},slot:"right"})],1),e("v-uni-view",{staticClass:"u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30"},[e("v-uni-view",{staticClass:"u-m-r-10"},[e("u-avatar",{attrs:{src:A.userInfo.avatar||"/static/icon/head.png",size:"140"}})],1),e("v-uni-view",{staticClass:"u-flex-1"},[e("v-uni-view",{staticClass:"u-font-18 u-p-b-20"},[A._v(A._s(A.userInfo.nickname||A.userInfo.mobile||"游客"))]),e("v-uni-view",{staticClass:"u-font-14 u-tips-color"},[A._v("ID:"+A._s(A.$strLimit(A.userInfo.uuid,24)))])],1),e("v-uni-view",{staticClass:"u-m-l-10 u-p-10"},[e("u-icon",{attrs:{name:"edit-pen",size:"30"},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.$goto("user-center/update-user-info")}}})],1)],1),e("v-uni-view",{staticClass:"u-m-t-20"},[e("u-cell-group",{attrs:{title:"财务"}},[e("u-cell-item",{attrs:{icon:"eye",title:"VIP到期",value:A.vip_end,arrow:!1},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.$goto("pay/pay")}}}),e("u-cell-item",{attrs:{icon:"fingerprint",title:"每日签到",arrow:!1,"hover-class":"cell-hover-class"},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.handleSign.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"u-m-t-20"},[e("u-cell-group",{attrs:{title:"帮助"}},[e("u-cell-item",{attrs:{icon:"share",title:"分享",arrow:!1},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.$goto("share")}}}),e("u-cell-item",{attrs:{icon:"chat",title:"工单",arrow:!1},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.$goto("uni-feedback/uni-feedback")}}})],1)],1)],1)},a=[]},6571:function(A,t,e){var n=e("24fb");t=n(!1),t.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-avatar[data-v-716794dc]{display:inline-flex;align-items:center;justify-content:center;font-size:%?28?%;color:#606266;border-radius:10px;position:relative}.u-avatar__img[data-v-716794dc]{width:100%;height:100%}.u-avatar__sex[data-v-716794dc]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:%?100?%;top:5%;z-index:1;right:-7%;border:1px #fff solid}.u-avatar__sex--man[data-v-716794dc]{background-color:#2979ff}.u-avatar__sex--woman[data-v-716794dc]{background-color:#fa3534}.u-avatar__sex--none[data-v-716794dc]{background-color:#f90}.u-avatar__level[data-v-716794dc]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:%?100?%;bottom:5%;z-index:1;right:-7%;border:1px #fff solid;background-color:#f90}',""]),A.exports=t},"90da":function(A,t,e){var n=e("24fb");t=n(!1),t.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.camera[data-v-737a439a]{width:54px;height:44px}.camera[data-v-737a439a]:active{background-color:#ededed}.user-box[data-v-737a439a]{background-color:#fff}',""]),A.exports=t},"93c7":function(A,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",r={name:"u-avatar",props:{bgColor:{type:String,default:"transparent"},src:{type:String,default:""},size:{type:[String,Number],default:"default"},mode:{type:String,default:"circle"},text:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},index:{type:[String,Number],default:""},sexIcon:{type:String,default:"man"},levelIcon:{type:String,default:"level"},levelBgColor:{type:String,default:""},sexBgColor:{type:String,default:""},showSex:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},data:function(){return{error:!1,avatar:this.src?this.src:n}},watch:{src:function(A){A?(this.avatar=A,this.error=!1):(this.avatar=n,this.error=!0)}},computed:{wrapStyle:function(){var A={};return A.height="large"==this.size?"120rpx":"default"==this.size?"90rpx":"mini"==this.size?"70rpx":this.size+"rpx",A.width=A.height,A.flex="0 0 ".concat(A.height),A.backgroundColor=this.bgColor,A.borderRadius="circle"==this.mode?"500px":"5px",this.text&&(A.padding="0 6rpx"),A},imgStyle:function(){var A={};return A.borderRadius="circle"==this.mode?"500px":"5px",A},uText:function(){return String(this.text)[0]},uSexStyle:function(){var A={};return this.sexBgColor&&(A.backgroundColor=this.sexBgColor),A},uLevelStyle:function(){var A={};return this.levelBgColor&&(A.backgroundColor=this.levelBgColor),A}},methods:{loadError:function(){this.error=!0,this.avatar=n},click:function(){this.$emit("click",this.index)}}};t.default=r},"9deb":function(A,t,e){"use strict";e.r(t);var n=e("93c7"),r=e.n(n);for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);t["default"]=r.a},a014:function(A,t,e){"use strict";e.r(t);var n=e("626b"),r=e("465bd");for(var a in r)"default"!==a&&function(A){e.d(t,A,(function(){return r[A]}))}(a);e("ce13");var i,o=e("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"737a439a",null,!1,n["a"],i);t["default"]=s.exports},ce13:function(A,t,e){"use strict";var n=e("2f89"),r=e.n(n);r.a}}]);