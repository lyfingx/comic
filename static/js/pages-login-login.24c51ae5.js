(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"264a":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uTabs:n("be83").default,uButton:n("3e96").default,uCellGroup:n("a95d").default,uField:n("9e6f").default,uVerificationCode:n("7899").default},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login"},[n("u-tabs",{attrs:{list:e.list,"font-size":"35",current:e.current},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}}),0==e.current?n("v-uni-view",[n("v-uni-view",{staticClass:"login_button"},[n("u-button",{attrs:{shape:"square",type:"warning","custom-style":{"background-color":"#fed23d","font-size":"30rpx",color:"#000000",height:"92rpx"},"throttle-time":"5000"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginWithGuest()}}},[e._v("游客登录")])],1)],1):e._e(),1==e.current?n("v-uni-view",[n("v-uni-view",{staticClass:"login_form"},[n("u-cell-group",[n("u-field",{attrs:{label:"账号",required:!0,placeholder:"邮箱/账号 自动注册"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("u-field",{attrs:{label:"密码",required:!0,placeholder:"至少6位"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("v-uni-view",{staticClass:"login_button"},[n("u-button",{attrs:{shape:"square",type:"warning","custom-style":{"background-color":"#fed23d","font-size":"30rpx",color:"#000000",height:"92rpx"},"throttle-time":"5000"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginWithUsername()()}}},[e._v("登录")])],1)],1):e._e(),2==e.current?n("v-uni-view",[n("v-uni-view",{staticClass:"login_form"},[n("u-cell-group",[n("u-field",{attrs:{label:"手机号",required:!0,placeholder:"仅支持大陆手机号码"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),n("u-field",{attrs:{label:"验证码",required:!0,placeholder:"验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("u-button",{attrs:{slot:"right",size:"mini",type:"success"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}},slot:"right"},[e._v(e._s(e.codeText))])],1),n("u-verification-code",{ref:"uCode",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"login_button"},[n("u-button",{attrs:{shape:"square",type:"warning","custom-style":{"background-color":"#fed23d","font-size":"30rpx",color:"#000000",height:"92rpx"},"throttle-time":"5000"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginWithMobile()}}},[e._v("登录")])],1)],1):e._e()],1)},a=[]},"4ed4":function(e,t,n){"use strict";n.r(t);var i=n("264a"),s=n("f62c");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("ae22");var o,r=n("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"60aab0fe",null,!1,i["a"],o);t["default"]=u.exports},"6a4d":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".login[data-v-60aab0fe]{margin-left:%?70?%;margin-right:%?70?%;display:flex;justify-content:center;flex-wrap:wrap}.login .login_form[data-v-60aab0fe]{width:100%}.login .login_button[data-v-60aab0fe]{margin-top:%?200?%;width:100%;margin-right:%?400?%}.registered[data-v-60aab0fe]{margin-top:%?40?%;width:100%;font-size:%?22?%;display:flex;justify-content:center;align-items:center}",""]),e.exports=t},7493:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-code-wrap"})},a=[]},7899:function(e,t,n){"use strict";n.r(t);var i=n("7493"),s=n("9aa4");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("854a");var o,r=n("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"9d4a1b3e",null,!1,i["a"],o);t["default"]=u.exports},"817f":function(e,t,n){var i=n("6a4d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("617a467c",i,!0,{sourceMap:!1,shadowMode:!1})},"854a":function(e,t,n){"use strict";var i=n("ebaa"),s=n.n(i);s.a},"8f3f":function(e,t,n){"use strict";n("a9e3"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=i},"9aa4":function(e,t,n){"use strict";n.r(t);var i=n("8f3f"),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},ae22:function(e,t,n){"use strict";var i=n("817f"),s=n.n(i);s.a},c52a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{list:[{name:"游客"},{name:"账号密码"}],current:0,codeText:"",mobile:"",code:"",username:"",password:"",uuid:"",share_uuid:"",systemInfo:{},userInfo:this.$store.state.userInfo}},methods:{change:function(e){this.current=e},codeChange:function(e){this.codeText=e},getCode:function(){var e=this;this.$refs.uCode.canGetCode?(this.$minApi.sendVerifyCode({mobile:this.mobile}).then((function(e){uni.showModal({title:"验证码",content:e.message,showCancel:!1})})),setTimeout((function(){e.$refs.uCode.start()}),1e3)):this.$u.toast("倒计时结束后再发送")},loginWithGuest:function(){this.mobile="",this.code="",this.sendLogin()},loginWithUsername:function(){this.mobile="",this.code="",this.username?this.password?this.sendLogin():this.$toast("密码不能为空"):this.$toast("用户名不能为空")},loginWithMobile:function(){this.mobile?this.code?this.sendLogin():this.$toast("验证码不能为空"):this.$toast("手机号码不能为空")},sendLogin:function(){var e=this,t={uuid:this.uuid,email:this.username,password:this.password,share_uuid:this.share_uuid,reg_time:this.$nowTime(),device_info:this.systemInfo},n="share_uuid_"+this.share_uuid+".";this.$minApi.postDataByKey(n,t).then((function(t){e.$toast("登录成功"),e.$store.commit("initUserInfo"),setTimeout((function(){uni.reLaunch({url:"/pages/index/index"})}),3e3)})).catch((function(t){e.$toast("error")}))}},onLoad:function(){this.systemInfo=uni.getSystemInfoSync(),this.uuid=this.systemInfo.deviceId,this.userInfo;var e=uni.getStorageSync("query");e&&e.uuid&&(this.share_uuid=e.uuid),this.$loading("自动登录..."),this.sendLogin()}};t.default=n}).call(this,n("5a52")["default"])},c6bb:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-code-wrap[data-v-9d4a1b3e]{width:0;height:0;position:fixed;z-index:-1}',""]),e.exports=t},ebaa:function(e,t,n){var i=n("c6bb");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("9c28e760",i,!0,{sourceMap:!1,shadowMode:!1})},f62c:function(e,t,n){"use strict";n.r(t);var i=n("c52a"),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a}}]);