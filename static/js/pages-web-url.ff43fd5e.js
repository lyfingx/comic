(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-web-url"],{1796:function(t,n,e){"use strict";e.r(n);var c=e("a48f"),r=e.n(c);for(var u in c)"default"!==u&&function(t){e.d(n,t,(function(){return c[t]}))}(u);n["default"]=r.a},"36c1":function(t,n,e){"use strict";var c;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return c}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view")},u=[]},a48f:function(t,n,e){"use strict";var c;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{urls:["https://cdn.vipsnovel.com","https://api.vipsnovel.com","http://ip.vipsnovel.com"]}},onShow:function(){var t=this;this.$loading("正在检测线路...."),c=setInterval((function(){var n=t.urls.shift();n?(t.$toast("测试:"+n),t.check(n)):(clearInterval(c),uni.showModal({title:"提示",content:"请检查网络是否开启",showCancel:!1}))}),6e3)},onHide:function(){clearInterval(c)},methods:{check:function(t){var n=this;uni.request({url:t,timeout:1e4,success:function(e){clearInterval(c),n.$cache.set("base_url",t,60),window.location.href="/"}})}},mounted:function(){var t=this.urls.shift();this.check(t)}};n.default=r},aa90:function(t,n,e){"use strict";e.r(n);var c=e("36c1"),r=e("1796");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);var a,i=e("f0c5"),o=Object(i["a"])(r["default"],c["b"],c["c"],!1,null,"685c9aee",null,!1,c["a"],a);n["default"]=o.exports}}]);