(function(e){function n(n){for(var t,i,u=n[0],s=n[1],c=n[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);g&&g(n);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(t=!1)}t&&(o.splice(n--,1),e=u(u.s=a[0]))}return e}var t={},r={index:0},o=[];function i(e){return u.p+"static/js/"+({"pages-bookrack-bookrack":"pages-bookrack-bookrack","pages-detail-detail":"pages-detail-detail","pages-login-login":"pages-login-login","pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback":"pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback","pages-mall-mall":"pages-mall-mall","pages-pay-pay":"pages-pay-pay","pages-read-dir":"pages-read-dir","pages-read-read":"pages-read-read","pages-uni-feedback-uni-feedback":"pages-uni-feedback-uni-feedback","pages-mall-search":"pages-mall-search","pages-mine-mine":"pages-mine-mine","pages-share-share":"pages-share-share","pages-web-ad":"pages-web-ad","pages-web-url":"pages-web-url","pages-web-web":"pages-web-web"}[e]||e)+"."+{"pages-bookrack-bookrack":"b9d0c6d0","pages-detail-detail":"b3ed311f","pages-login-login":"392a6b7b","pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback":"d25ec1eb","pages-mall-mall":"827c4633","pages-pay-pay":"2f3e8c4d","pages-read-dir":"21909173","pages-read-read":"e17580ea","pages-uni-feedback-uni-feedback":"47ee08d5","pages-mall-search":"3c75dbe9","pages-mine-mine":"507e64fa","pages-share-share":"a547f08e","pages-web-ad":"263c8185","pages-web-url":"83805848","pages-web-web":"4c9c1810"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var n=[],a=r[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=t);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.name="ChunkLoadError",c.type=t,c.request=o,a[1](c)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,a){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(a,t,function(n){return e[n]}.bind(null,t));return a},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="./",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var g=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("b0b3")},"06e0":function(e,n,a){"use strict";a.r(n);var t=a("98e8"),r=a.n(t);for(var o in t)"default"!==o&&function(e){a.d(n,e,(function(){return t[e]}))}(o);n["default"]=r.a},"08a6":function(e,n,a){"use strict";(function(e){var n=a("4ea4"),t=n(a("e143"));e["____BF080B1____"]=!0,delete e["____BF080B1____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"阅读"},tabBar:{color:"#7A7E83",selectedColor:"#3cc51f",backgroundColor:"#111227",list:[{pagePath:"pages/mall/mall",iconPath:"static/tabbar/l-tabbar-3.png",selectedIconPath:"static/l-icon-dot.png",text:"发现",redDot:!1,badge:""},{pagePath:"pages/bookrack/bookrack",iconPath:"static/tabbar/l-tabbar-2.png",selectedIconPath:"static/l-icon-dot.png",text:"书架",redDot:!1,badge:""},{pagePath:"pages/mine/mine",iconPath:"static/tabbar/l-tabbar-4.png",selectedIconPath:"static/logo.png",text:"我的",redDot:!1,badge:""}],borderStyle:"black"}},e.__uniConfig.compilerVersion="3.1.4",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:3e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={maps:{}},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-mall-mall",(function(e){var n={component:Promise.all([a.e("pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback"),a.e("pages-mall-mall")]).then(function(){return e(a("1818"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-bookrack-bookrack",(function(e){var n={component:a.e("pages-bookrack-bookrack").then(function(){return e(a("bd7f"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-mine-mine",(function(e){var n={component:a.e("pages-mine-mine").then(function(){return e(a("e588"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-detail-detail",(function(e){var n={component:a.e("pages-detail-detail").then(function(){return e(a("2310"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-login-login",(function(e){var n={component:a.e("pages-login-login").then(function(){return e(a("9862"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-pay-pay",(function(e){var n={component:Promise.all([a.e("pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback"),a.e("pages-pay-pay")]).then(function(){return e(a("13b5"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-read-read",(function(e){var n={component:Promise.all([a.e("pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback"),a.e("pages-read-read")]).then(function(){return e(a("8c8b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-read-dir",(function(e){var n={component:Promise.all([a.e("pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback"),a.e("pages-read-dir")]).then(function(){return e(a("bf94"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-mall-search",(function(e){var n={component:a.e("pages-mall-search").then(function(){return e(a("236e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-uni-feedback-uni-feedback",(function(e){var n={component:Promise.all([a.e("pages-mall-mall~pages-pay-pay~pages-read-dir~pages-read-read~pages-uni-feedback-uni-feedback"),a.e("pages-uni-feedback-uni-feedback")]).then(function(){return e(a("2283"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-web-ad",(function(e){var n={component:a.e("pages-web-ad").then(function(){return e(a("535b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-web-web",(function(e){var n={component:a.e("pages-web-web").then(function(){return e(a("2225"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-web-url",(function(e){var n={component:a.e("pages-web-url").then(function(){return e(a("aa90"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-share-share",(function(e){var n={component:a.e("pages-share-share").then(function(){return e(a("a16d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/mall/mall",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"发现",titleNView:!1})},[e("pages-mall-mall",{slot:"page"})])}},meta:{id:1,name:"pages-mall-mall",isNVue:!1,maxWidth:0,pagePath:"pages/mall/mall",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/bookrack/bookrack",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"书架",titleNView:!1})},[e("pages-bookrack-bookrack",{slot:"page"})])}},meta:{id:2,name:"pages-bookrack-bookrack",isNVue:!1,maxWidth:0,pagePath:"pages/bookrack/bookrack",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:0}},{path:"/pages/mine/mine",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"我的",titleNView:!1})},[e("pages-mine-mine",{slot:"page"})])}},meta:{id:3,name:"pages-mine-mine",isNVue:!1,maxWidth:0,pagePath:"pages/mine/mine",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"详情"})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登录",titleNView:!1})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:0}},{path:"/pages/pay/pay",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"订单充值"})},[e("pages-pay-pay",{slot:"page"})])}},meta:{name:"pages-pay-pay",isNVue:!1,maxWidth:0,pagePath:"pages/pay/pay",windowTop:44}},{path:"/pages/read/read",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"阅读正文",titleNView:!1})},[e("pages-read-read",{slot:"page"})])}},meta:{name:"pages-read-read",isNVue:!1,maxWidth:0,pagePath:"pages/read/read",windowTop:0}},{path:"/pages/read/dir",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"目录 (上下滑动)",enablePullDownRefresh:!0})},[e("pages-read-dir",{slot:"page"})])}},meta:{name:"pages-read-dir",isNVue:!1,maxWidth:0,pagePath:"pages/read/dir",windowTop:44}},{path:"/pages/mall/search",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"搜索",titleNView:{buttons:[{text:"搜索",float:"right",color:"#fff"}],searchInput:{align:"center",placeholder:"名称或作者",borderRadius:"50upx"}}})},[e("pages-mall-search",{slot:"page"})])}},meta:{name:"pages-mall-search",isNVue:!1,maxWidth:0,pagePath:"pages/mall/search",windowTop:44}},{path:"/pages/uni-feedback/uni-feedback",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"反馈",titleNView:{}})},[e("pages-uni-feedback-uni-feedback",{slot:"page"})])}},meta:{name:"pages-uni-feedback-uni-feedback",isNVue:!1,maxWidth:0,pagePath:"pages/uni-feedback/uni-feedback",windowTop:44}},{path:"/pages/web/ad",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",titleNView:{}})},[e("pages-web-ad",{slot:"page"})])}},meta:{name:"pages-web-ad",isNVue:!1,maxWidth:0,pagePath:"pages/web/ad",windowTop:44}},{path:"/pages/web/web",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",titleNView:{}})},[e("pages-web-web",{slot:"page"})])}},meta:{name:"pages-web-web",isNVue:!1,maxWidth:0,pagePath:"pages/web/web",windowTop:44}},{path:"/pages/web/url",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"选择线路",titleNView:{}})},[e("pages-web-url",{slot:"page"})])}},meta:{name:"pages-web-url",isNVue:!1,maxWidth:0,pagePath:"pages/web/url",windowTop:44}},{path:"/pages/share/share",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"分享给好友",titleNView:{}})},[e("pages-share-share",{slot:"page"})])}},meta:{name:"pages-share-share",isNVue:!1,maxWidth:0,pagePath:"pages/share/share",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},2863:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={set:function(n,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:86400;t=(new Date).getTime()+1e3*t;var r={v:a,exp:t};try{uni.setStorageSync(n,r)}catch(o){e.log(o)}},get:function(n){try{var a=uni.getStorageSync(n);if(!a)return;return a.exp<(new Date).getTime()?void uni.removeStorageSync(n):a.v}catch(t){e.log(t)}}};n.default=a}).call(this,a("5a52")["default"])},"46eb":function(e,n,a){"use strict";a.r(n);var t=a("53d8"),r=a("06e0");for(var o in r)"default"!==o&&function(e){a.d(n,e,(function(){return r[e]}))}(o);a("7dd6");var i,u=a("f0c5"),s=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);n["default"]=s.exports},"53d8":function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[]},"66ec":function(e,n,a){var t=a("70a3");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var r=a("4f06").default;r("27cf2e60",t,!0,{sourceMap:!1,shadowMode:!1})},"693c":function(e,n,a){"use strict";var t=a("4ea4");a("a4d3"),a("e01a"),a("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a("5530")),o=t(a("d4ec")),i=t(a("bee2")),u=t(a("ade3")),s=Symbol("config"),c=Symbol("isCompleteURL"),l=Symbol("requestBefore"),g=Symbol("requestAfter"),d=function(){function e(){(0,o.default)(this,e),(0,u.default)(this,s,{baseURL:"",header:{"content-type":"application/json"},method:"GET",dataType:"json",responseType:"text"}),(0,u.default)(this,"interceptors",{request:function(n){e[l]=n||function(e){return e}},response:function(n){e[g]=n||function(e){return e}}})}return(0,i.default)(e,[{key:"setConfig",value:function(e){this[s]=e(this[s])}},{key:"request",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.baseURL=n.baseURL||this[s].baseURL,n.dataType=n.dataType||this[s].dataType,n.url=e[c](n.url)?n.url:n.baseURL+n.url,n.data=n.data,n.header=(0,r.default)((0,r.default)({},n.header),this[s].header),n.method=n.method||this[s].method,n=(0,r.default)((0,r.default)({},n),e[l](n)),new Promise((function(a,t){n.success=function(n){a(e[g](n))},n.fail=function(n){t(e[g](n))},uni.request(n)}))}},{key:"get",value:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.url=e,a.data=n,a.method="GET",this.request(a)}},{key:"post",value:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.url=e,a.data=n,a.method="POST",this.request(a)}}],[{key:l,value:function(e){return e}},{key:g,value:function(e){return e}},{key:c,value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}}]),e}();d.install=function(e){e.mixin({beforeCreate:function(){this.$options.minRequest&&(e._minRequest=this.$options.minRequest)}}),Object.defineProperty(e.prototype,"$minApi",{get:function(){return e._minRequest.apis}}),Object.defineProperty(e.prototype,"$minRequest",{get:function(){return e._minRequest}})};var p=d;n.default=p},"70a3":function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */uni-page-body,\r\nuni-page{background-color:var(--c-bg-1);color:var(--c-txt-1);font-size:var(--f-size-4);\r\n\t\r\n\r\n\t/* font-size */--f-size-1:%?30?%;--f-size-2:%?32?%;--f-size-3:%?34?%;--f-size-4:%?36?%;--f-size-5:%?40?%;--f-size-6:%?44?%;\r\n\r\n\t/* color | background */--c-txt-1:#fff;--c-txt-2:#95a1a6;--c-txt-3:#cdced0;--c-bg-1:#000;--c-bg-2:#7e7f94;--c-bg-3:#0b0c21;\r\n\r\n\t/* padding-left | right */--pad-lr:%?32?%;\r\n\r\n\t/* navbar-height */--h-head:%?96?%;\r\n\r\n\t/* input placeholder text color */--c-input-holder:#696a7f}\r\n\r\n/* init button */uni-button,\r\nuni-button{margin:0;padding:0;color:var(--c-txt-1);background-color:var(--c-bg-1)}uni-button:after,\r\nuni-button:after{border:none;width:100%;height:100%}.button-hover{color:inherit;background-color:inherit}\r\n\r\n/* init img */uni-image > img,\r\nimg{vertical-align:middle}.l-status{width:100%;height:0;background-color:initial}\r\n\r\n/* clear both  */.l-clear-both:after{content:" ";display:block;width:0;height:0;clear:both;zoom:1}\r\n\r\n/* navbar -fixed -placeholder */.content{position:relative}.l-fixed{position:fixed;width:100%;z-index:999;top:0;background-color:var(--c-bg-3)}.l-placeholder{width:100%;\r\nheight:calc(0px + var(--h-head));\n}\r\n\r\n/* l-head-search */.l-head{padding:0 %?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:var(--h-head)}.l-search{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?16?% %?26?%;margin-right:%?16?%;border-radius:%?32?%;background-color:#222338}.l-icon-search{width:%?29?%;height:%?29?%}.l-search-input{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0 %?12?%}.l-holder{color:var(--c-input-holder)}\r\n\r\n/* l-swiper */.l-body{padding:0 var(--pad-lr)}.l-swiper{margin:%?36?% 0 0;height:%?248?%}.l-swiper-item{height:100%;overflow:hidden;border-radius:%?26?%}.l-carousel-img{width:100%;height:100%}\r\n\r\n/* l-icon */.l-icon-more{width:%?30?%;\r\n\t/* height: 27rpx; */vertical-align:middle;margin-left:%?12?%}body.?%PAGE?%{background-color:var(--c-bg-1)}',""]),e.exports=n},"7dd6":function(e,n,a){"use strict";var t=a("66ec"),r=a.n(t);r.a},"98e8":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={globalData:{tokenInfo:{},userInfo:{},currentBook:{},currentChapter:{},urlParam:{},searchBookName:"",isTestUrl:!1,books:[],vip:0},onLaunch:function(){e.log("App Launch");var n=this.$cache.get("base_url");if(e.log(n),n){var a=uni.getStorageSync("tokenInfo");a?(this.$options.globalData.tokenInfo=a,e.log("globalData.tokenInfo 初始化成功"),e.log(a),this.$minApi.getUserInfoWithToken(),this.$options.globalData.vip=1):this.$options.globalData.vip=uni.getStorageSync("vip")}else uni.redirectTo({url:"/pages/web/url"})},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};n.default=a}).call(this,a("5a52")["default"])},b0b3:function(e,n,a){"use strict";var t=a("4ea4"),r=t(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("08a6"),a("06b9");var o=t(a("e143")),i=t(a("46eb")),u=t(a("2ef0")),s=t(a("2863")),c=t(a("693c")),l=t(a("f3da"));o.default.config.productionTip=!1,i.default.mpType="app",o.default.prototype.$toast=function(e){uni.showToast({title:e,icon:"none"})},o.default.prototype.$modal=function(e){uni.showModal({title:"提示",content:e,showCancel:!1})},o.default.prototype.currentPage=function(){var e=getCurrentPages();return e[e.length-1]},o.default.prototype._=u.default,o.default.prototype.$cache=s.default,o.default.use(c.default);var g=new o.default((0,r.default)((0,r.default)({},i.default),{},{minRequest:l.default}));g.$mount()},f3da:function(e,n,a){"use strict";(function(e){var t=a("4ea4");a("fb6a"),a("d3b7"),a("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a("693c")),o=new r.default;o.interceptors.request((function(e){if("undefined"!=typeof getApp().globalData.tokenInfo){var n=getApp().globalData.tokenInfo;n&&(e.header.Authorization=n.token_type+" "+n.access_token)}return e})),o.interceptors.response((function(n){var a=n.statusCode;switch(e.log(a),a){case 200:return n.data;case 401:getApp().globalData.userInfo=null,getApp().globalData.tokenInfo=null,uni.removeStorageSync("tokenInfo"),uni.redirectTo({url:"/pages/login/login"});break;case 422:uni.showToast({title:n.data.message,icon:"none"});break;case 500:uni.showToast({title:"接口异常",icon:"none"});break}return Promise.reject(n)})),o.setConfig((function(n){n.baseURL="https://cdn.vipsnovel.com";var a=uni.getStorageSync("base_url");return a&&a.v&&(a.exp<(new Date).getTime()?uni.removeStorageSync("base_url"):n.baseURL=a.v),e.log(n),n}));var i={apis:{warpRandomString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.s=Math.random().toString(36).slice(-8),e},sendVerifyCode:function(e){return o.post("/api/user/sms",e)},loginWithMobile:function(e){return o.post("/api/user/login",e)},getUserInfoWithToken:function(){return o.get("/api/user/info",this.warpRandomString()).then((function(n){e.log("/api/user/info then"),getApp().globalData.userInfo=n}))},getUserBookrack:function(){return o.get("/api/user/books",this.warpRandomString())},getBookChapters:function(e,n){var a={page:n};return o.get("/api/book/"+e.id+"/chapters",this.warpRandomString(a))},getBookInfo:function(e){return o.get("/api/book/"+e.id)},getChapterInfo:function(e){return o.get("/api/chapter/"+e.id,this.warpRandomString())},getChapterNext:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?o.get("/api/chapter/"+e.id+"/next",this.warpRandomString()):o.get("/api/chapter/"+e.id+"/next")},getLastRead:function(e){return o.get("/api/book/"+e.id+"/last-read",this.warpRandomString())},updateLastRead:function(e){return o.post("/api/chapter/last-read/"+e.id)},getBookTags:function(){return o.get("/api/book/tags")},getUserShare:function(e){return o.get("/api/user/share",this.warpRandomString())},getBookSearch:function(e){return o.get("/api/book/search",e)},storeBook:function(e){return o.post("/api/user/book/"+e.id)},deleteBook:function(e){return o.post("/api/user/book/"+e.id,this.warpRandomString({_method:"DELETE"}))},getBookHot:function(){var e=getApp().globalData.vip||1,n={vip:e};if(e){var a=getApp().globalData.urlParam.page||0;a++,getApp().globalData.urlParam.page=a,n.page=a}return o.get("/api/book/hot",n)},checkUpgrade:function(e){return o.post("/api/upgrade",e)},getAd:function(){var e=getCurrentPages(),n=e[e.length-1].route,a={path:n};return o.get("/api/ad",a)},postAd:function(e){return o.post("/api/ad/"+e)},postOrder:function(e){return o.post("/api/user/order",e)},postSign:function(){return o.post("/api/user/sign")},getHelpDocs:function(){return o.get("/api/user/helper-docs")},seedUserWorkOrder:function(e){return o.post("/api/user/work-order",e)},getUserWorkOrders:function(){return o.get("/api/user/work-order",this.warpRandomString())},getConfig:function(e){var n={key:e};return o.get("/api/config",this.warpRandomString(n))}}};n.default=i}).call(this,a("5a52")["default"])}});