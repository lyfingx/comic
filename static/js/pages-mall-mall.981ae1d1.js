(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mall-mall"],{1818:function(t,e,i){"use strict";i.r(e);var n=i("86c2"),a=i("baf4");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6939");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"498d60dd",null,!1,n["a"],r);e["default"]=s.exports},"1c70":function(t,e,i){"use strict";i.r(e);var n=i("e7e5"),a=i("e38a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8e77");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"6b3316bb",null,!1,n["a"],r);e["default"]=s.exports},6443:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.l-h3[data-v-498d60dd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.l-h3-title[data-v-498d60dd]{font:700 var(--f-size-3) normal;color:var(--c-bg-2)}.l-h3-more[data-v-498d60dd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:var(--c-bg-2)}.imgBox[data-v-498d60dd]{width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.imgBox .leftBox[data-v-498d60dd],\r\n.imgBox .rightBox[data-v-498d60dd]{width:49%;margin-bottom:auto}.imgBox .leftBox .imgItem[data-v-498d60dd],\r\n.imgBox .rightBox .imgItem[data-v-498d60dd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.imgBox .leftBox .imgItem .imgDes[data-v-498d60dd],\r\n.imgBox .rightBox .imgItem .imgDes[data-v-498d60dd]{padding:%?8?% %?20?% 0;box-sizing:border-box;font-size:12px;display:-webkit-box;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis}.imgBox .leftBox .imgItem .img[data-v-498d60dd],\r\n.imgBox .rightBox .imgItem .img[data-v-498d60dd]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}',""]),t.exports=e},6837:function(t,e,i){var n=i("6443");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("dd1a1720",n,!0,{sourceMap:!1,shadowMode:!1})},6870:function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9312")),o={name:"UniNoticeBar",components:{uniIcons:a.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],i=new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(i){t.textWidth=i[0].width,e()}))})),n=new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(i){t.boxWidth=i[0].width,e()}))}));e.push(i),e.push(n),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=o},6939:function(t,e,i){"use strict";var n=i("6837"),a=i.n(n);a.a},"6fdd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".tui-divider[data-v-6b3316bb]{width:100%;position:relative;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;overflow:hidden}.tui-divider-line[data-v-6b3316bb]{position:absolute;height:%?1?%;top:50%;left:50%;-webkit-transform:scaleY(.5) translateX(-50%) translateZ(0);transform:scaleY(.5) translateX(-50%) translateZ(0)}.tui-divider-text[data-v-6b3316bb]{position:relative;text-align:center;padding:0 %?18?%;z-index:1}",""]),t.exports=e},"7bb2":function(t,e,i){var n=i("fb1d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("431606a2",n,!0,{sourceMap:!1,shadowMode:!1})},"7d28":function(t,e,i){"use strict";i.r(e);var n=i("8f72"),a=i("ad0d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c125");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"2640f4c2",null,!1,n["a"],r);e["default"]=s.exports},"86c2":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniNoticeBar:i("7d28").default,divider:i("1c70").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[t.systemNotice?n("uni-notice-bar",{attrs:{showIcon:"true",scrollable:"true",single:"true",text:t.systemNotice}}):t._e(),n("v-uni-view",{staticClass:"l-head"},[n("v-uni-view",{staticClass:"l-search",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search()}}},[n("v-uni-image",{staticClass:"l-icon-search",attrs:{src:i("f345"),mode:""}}),n("v-uni-input",{staticClass:"l-search-input",attrs:{type:"text","placeholder-class":"l-holder"}})],1)],1),n("v-uni-view",{staticClass:"l-body"},[n("v-uni-swiper",{staticClass:"l-swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:500,"indicator-color":"var(--c-bg-2)","indicator-active-color":"#41bdb2",circular:!0}},t._l(t.banners,(function(e,i){return n("v-uni-swiper-item",{key:i},[n("v-uni-view",{staticClass:"l-swiper-item"},[n("v-uni-image",{staticClass:"l-carousel-img",attrs:{src:e.url,mode:"aspectFill","lazy-load":"true"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.adClick(e)}}})],1)],1)})),1)],1),n("v-uni-view",{staticClass:"l-h3"},[n("v-uni-text",{staticClass:"l-h3-title"},[t._v("漫画广场")])],1),n("divider"),n("v-uni-view",{staticClass:"imgBox"},[n("v-uni-view",{staticClass:"leftBox",attrs:{id:"left"}},t._l(t.lList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"imgItem",style:{height:2*e.height+36+"rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navtoDetail(e)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:e.imgUrl}}),n("v-uni-view",{staticClass:"imgDes"},[t._v(t._s(e.title))])],1)})),1),n("v-uni-view",{staticClass:"rightBox",attrs:{id:"right"}},t._l(t.rList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"imgItem",style:{height:2*e.height+36+"rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navtoDetail(e)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:e.imgUrl}}),n("v-uni-view",{staticClass:"imgDes"},[t._v(t._s(e.title))])],1)})),1)],1)],1)},o=[]},"8e77":function(t,e,i){"use strict";var n=i("982d"),a=i.n(n);a.a},"8f72":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("9312").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!0===t.showClose||"true"===t.showClose?i("uni-icons",{staticClass:"uni-noticebar-close",attrs:{type:"closeempty",color:t.color,size:"12"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),!0===t.showIcon||"true"===t.showIcon?i("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:"14"}}):t._e(),i("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)}},[i("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[i("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.moreText)},style:{color:t.color,width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),!0===t.showGetMore||"true"===t.showGetMore?i("v-uni-view",{staticClass:"uni-noticebar__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMore.apply(void 0,arguments)}}},[t.moreText?i("v-uni-text",{staticClass:"uni-noticebar__more-text",style:{color:t.moreColor}},[t._v(t._s(t.moreText))]):t._e(),i("uni-icons",{attrs:{type:"arrowright",color:t.moreColor,size:"14"}})],1):t._e()],1):t._e()},o=[]},"982d":function(t,e,i){var n=i("6fdd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d66b7fca",n,!0,{sourceMap:!1,shadowMode:!1})},ad0d:function(t,e,i){"use strict";i.r(e);var n=i("6870"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b886:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiDivider",props:{height:{type:Number,default:100},width:{type:String,default:"100%"},dividerColor:{type:String,default:"#e5e5e5"},color:{type:String,default:"#999"},size:{type:Number,default:24},bold:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fafafa"},gradual:{type:Boolean,default:!1},gradualColor:{type:Array,default:function(){return["#eee","#ccc"]}}},methods:{getBgColor:function(t,e,i){var n=i;return t&&(n="linear-gradient(to right,"+e[0]+","+e[1]+","+e[1]+","+e[0]+")"),n}}};e.default=n},baf4:function(t,e,i){"use strict";i.r(e);var n=i("f4f2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c125:function(t,e,i){"use strict";var n=i("7bb2"),a=i.n(n);a.a},e38a:function(t,e,i){"use strict";i.r(e);var n=i("b886"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e7e5:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-divider",style:{height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-divider-line",style:{width:t.width,background:t.getBgColor(t.gradual,t.gradualColor,t.dividerColor)}}),i("v-uni-view",{staticClass:"tui-divider-text",style:{color:t.color,fontSize:t.size+"rpx",lineHeight:t.size+"rpx",background:t.bgcolor,fontWeight:t.bold?"bold":"normal"}},[t._t("default")],2)],1)},o=[]},f345:function(t,e){t.exports="data:image/png;base64,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"},f4f2:function(t,e,i){"use strict";(function(t){i("4160"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{banners:[{url:"/static/banner/1.jpg"},{url:"/static/banner/2.jpg"},{url:"/static/banner/3.jpg"}],systemNotice:null,lList:[],rList:[]}},onLoad:function(){var t=this;this.query=uni.createSelectorQuery().in(this),this.query.select("#left").boundingClientRect(),this.query.select("#right").boundingClientRect(),setTimeout((function(){t.getList()}),100)},onShow:function(){},computed:{},onReachBottom:function(){this.lList.length>50||this.getList()},methods:{search:function(){uni.navigateTo({url:"/pages/mall/search"})},navtoDetail:function(t){getApp().globalData.currentBook=t,uni.navigateTo({url:"/pages/detail/detail"})},getList:function(){var e=this;this.$loading();var i,n,a=0,o=0;i=this.lList,n=this.rList,this.query.exec((function(e){t.log("e"),t.log(e),a=e[0].height,o=e[1].height}));var r=this.$cache.get("cache_hot_page_1");if(!this.lList.length&&r)return this.lList=r.lList,void(this.rList=r.rList);var l=this.lList.length?1:0;this.$minApi.getBookHot(l).then((function(r){var l=e.lList.length;if(r.forEach((function(e){e.title=e.name,e.height=240,e.imgUrl=e.icon,t.log("tempLeft",a),t.log("tempRight",o),a<=o?(i.push(e),a+=e.height):(n.push(e),o+=e.height)})),t.log("llist length"+e.lList.length),!l){var s={lList:i,rList:n};e.$cache.set("cache_hot_page_1",s,259200)}e.lList=i,e.rList=n}))},getBanner:function(){},adClick:function(t){getApp().globalData.urlParam={keyword:t.link},uni.navigateTo({url:"/pages/mall/search"})},getConfig:function(){var t=this;this.$minApi.getConfig("system_notice").then((function(e){t.systemNotice=e}))},goLastRead:function(){var t=this.$cache.get("last_read_book");t&&uni.showModal({title:"接着阅读?",content:t.name,success:function(e){e.confirm&&(getApp().globalData.currentBook=t,uni.navigateTo({url:"/pages/read/read"}))}})}},mounted:function(){this.getConfig(),this.goLastRead()}};e.default=n}).call(this,i("5a52")["default"])},fb1d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-noticebar[data-v-2640f4c2]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:6px 12px;margin-bottom:10px}.uni-noticebar-close[data-v-2640f4c2]{margin-right:5px}.uni-noticebar-icon[data-v-2640f4c2]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-2640f4c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-2640f4c2]{line-height:18px}.uni-noticebar__content-wrapper--single[data-v-2640f4c2],\r\n.uni-noticebar__content-wrapper--scrollable[data-v-2640f4c2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-noticebar__content-wrapper--scrollable[data-v-2640f4c2]{position:relative;height:18px}.uni-noticebar__content--scrollable[data-v-2640f4c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-2640f4c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-noticebar__content-text[data-v-2640f4c2]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-2640f4c2]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-2640f4c2]{position:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-2640f4c2 10s 0s linear infinite both;animation:notice-data-v-2640f4c2 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-2640f4c2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-2640f4c2]{font-size:14px}@-webkit-keyframes notice-data-v-2640f4c2{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-2640f4c2{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e}}]);