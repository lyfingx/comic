(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"0730":function(t,e,a){"use strict";a.r(e);var i=a("a578"),n=a("c482");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e0a7");var o,d=a("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"3675bbd0",null,!1,i["a"],o);e["default"]=l.exports},1962:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={divider:a("1c70").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"l-body"},[i("v-uni-view",{staticClass:"l-dl"},[i("v-uni-image",{staticClass:"l-dt",attrs:{src:t.book.icon,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"l-dd"},[i("v-uni-view",{staticClass:"l-dd-title"},[t._v(t._s(t.book.name))]),i("v-uni-view",{staticClass:"l-dd-sub"},[t._v("作者："+t._s(t.book.author||"迭名"))]),i("v-uni-view",{staticClass:"l-dd-sub"},[t._v("标签: "+t._s(t.book.tags))]),i("v-uni-view",{staticClass:"l-dd-sub"},[t._v("状态: "+t._s(t.status))]),i("v-uni-view",{staticClass:"l-dd-content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.read(t.book.last_chapter_id)}}},[t._v("最新: "+t._s(t.book.last_chapter_title))])],1)],1),i("v-uni-view",{staticClass:"l-body-select"},t._l(t.tab_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"l-body-tab",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.share(e)}}},[i("v-uni-image",{class:e.className,attrs:{src:e.icon,mode:""}}),t._v(t._s(e.title))],1)})),1),i("v-uni-view",{staticClass:"l-list"},[i("v-uni-view",{staticClass:"l-h3"},[i("v-uni-text",{staticClass:"l-h3-title"},[t._v("简介")])],1),i("v-uni-view",{staticClass:"l-list-view"},[t._v(t._s(t.book.desc))]),i("divider"),i("v-uni-view",{staticClass:"l-h3"},[i("v-uni-text",{staticClass:"l-h3-title"},[t._v("老司机点评")])],1),i("v-uni-view",{staticClass:"l-list-view"},[i("v-uni-text",[t._v(t._s(t.book.note))])],1)],1)],1),i("v-uni-view",{staticClass:"l-body-fixed"},[i("v-uni-view",{staticClass:"l-handle-btn l-buy-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.read()}}},[t._v("开始阅读")])],1),t.isShare?i("v-uni-view",{staticClass:"l-share"},[i("v-uni-view",{staticClass:"l-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShare=!t.isShare}}},[t._v("取消")]),i("v-uni-view",{staticClass:"l-share-img"},[i("v-uni-image",{staticClass:"l-icon-share-list",attrs:{src:a("7672"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$toast("分享到不知道哪里去了")}}}),i("v-uni-image",{staticClass:"l-icon-share-list",attrs:{src:a("261c"),mode:""}}),i("v-uni-image",{staticClass:"l-icon-share-list",attrs:{src:a("71dc"),mode:""}}),i("v-uni-image",{staticClass:"l-icon-share-list",attrs:{src:a("9dd1"),mode:""}})],1),i("v-uni-view",{staticClass:"l-share-btn"},[i("v-uni-button",{staticClass:"l-share-botton",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$toast("分享所有")}}},[t._v("一键分享")])],1)],1):t._e()],1)},r=[]},"1acd":function(t,e,a){var i=a("ebb0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("06a3c599",i,!0,{sourceMap:!1,shadowMode:!1})},"1c70":function(t,e,a){"use strict";a.r(e);var i=a("e7e5"),n=a("e38a");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("8e77");var o,d=a("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6b3316bb",null,!1,i["a"],o);e["default"]=l.exports},2310:function(t,e,a){"use strict";a.r(e);var i=a("1962"),n=a("c4f5");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("64d6");var o,d=a("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"f3ea32da",null,!1,i["a"],o);e["default"]=l.exports},"261c":function(t,e,a){t.exports=a.p+"static/img/l-icon-share-list-2.2f1a5c84.png"},"64d6":function(t,e,a){"use strict";var i=a("1acd"),n=a.n(i);n.a},"6ac5":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("0730")),r={components:{uniTag:n.default},data:function(){return{book:"",page:1,bookimg:"",tab_list:[{title:"收藏",className:"l-icon-share l-icon-share-1",icon:"../../static/detail/l-icon-share-1.png"},{title:"分享",className:"l-icon-share l-icon-share-2",icon:"../../static/detail/l-icon-share-2.png"},{title:"放入书架",className:"l-icon-share l-icon-share-3",icon:"../../static/detail/l-icon-share-3.png"},{title:"目录",className:"l-icon-share l-icon-share-4",icon:"../../static/detail/l-icon-share-4.png"}],isShare:!1}},onLoad:function(t){t.share&&(this.isShare=!0)},computed:{status:function(){return 0==this.book.status?"待上线":this.book.status<0?"已下架":2==this.book.status?"已完结":"连载中"}},methods:{navtoSection:function(){uni.navigateTo({url:"/pages/section/section"})},share:function(t){"分享"===t.title?uni.navigateTo({url:"/pages/share/share"}):"目录"==t.title?uni.navigateTo({url:"/pages/read/dir"}):(this.$toast("操作成功"),this.book.read_chapter_id=1,getApp().globalData.books.push(this.book))},read:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.book.status<1)this.$modal(this.status);else{var e="/pages/read/read";t&&(e=e+"?chapter_id="+t),uni.navigateTo({url:e})}},shareWechat:function(){},shareZone:function(){},shareWeibo:function(){},shareQQ:function(){}},mounted:function(){var t=getApp().globalData.currentBook;this._.isEmpty(t)&&(this.$toast("未找到书籍参数"),setTimeout((function(){uni.navigateTo({url:"/pages/mall/search"})}),1e3)),this.book=t}};e.default=r},"6fdd":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-divider[data-v-6b3316bb]{width:100%;position:relative;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;overflow:hidden}.tui-divider-line[data-v-6b3316bb]{position:absolute;height:%?1?%;top:50%;left:50%;-webkit-transform:scaleY(.5) translateX(-50%) translateZ(0);transform:scaleY(.5) translateX(-50%) translateZ(0)}.tui-divider-text[data-v-6b3316bb]{position:relative;text-align:center;padding:0 %?18?%;z-index:1}",""]),t.exports=e},"71dc":function(t,e,a){t.exports=a.p+"static/img/l-icon-share-list-3.94f04c61.png"},7672:function(t,e,a){t.exports=a.p+"static/img/l-icon-share-list-1.79c77cbb.png"},8805:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=i},"8e77":function(t,e,a){"use strict";var i=a("982d"),n=a.n(i);n.a},"982d":function(t,e,a){var i=a("6fdd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d66b7fca",i,!0,{sourceMap:!1,shadowMode:!1})},"9dd1":function(t,e,a){t.exports=a.p+"static/img/l-icon-share-list-4.2ebd6335.png"},a578:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.text?a("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+t.type,!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.inverted||"true"===t.inverted?t.type+"-uni-tag--inverted":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[a("v-uni-text",{class:["default"===t.type?"uni-tag--default":"uni-tag-text",!0===t.inverted||"true"===t.inverted?"uni-tag-text--"+t.type:"","small"===t.size?"uni-tag-text--small":""]},[t._v(t._s(t.text))])],1):t._e()},r=[]},a9de:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-tag[data-v-3675bbd0]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-3675bbd0]{border-radius:15px}.uni-tag--mark[data-v-3675bbd0]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-3675bbd0]{opacity:.5}.uni-tag--small[data-v-3675bbd0]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-3675bbd0]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-3675bbd0]{font-size:%?24?%!important}.uni-tag-text[data-v-3675bbd0]{color:#fff;font-size:%?28?%}.uni-tag-text--primary[data-v-3675bbd0]{color:#007aff!important}.uni-tag-text--success[data-v-3675bbd0]{color:#4cd964!important}.uni-tag-text--warning[data-v-3675bbd0]{color:#f0ad4e!important}.uni-tag-text--error[data-v-3675bbd0]{color:#dd524d!important}.uni-tag--primary[data-v-3675bbd0]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-3675bbd0]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-3675bbd0]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-3675bbd0]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-3675bbd0]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-3675bbd0]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-3675bbd0]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-3675bbd0]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-3675bbd0]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}',""]),t.exports=e},b886:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiDivider",props:{height:{type:Number,default:100},width:{type:String,default:"100%"},dividerColor:{type:String,default:"#e5e5e5"},color:{type:String,default:"#999"},size:{type:Number,default:24},bold:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fafafa"},gradual:{type:Boolean,default:!1},gradualColor:{type:Array,default:function(){return["#eee","#ccc"]}}},methods:{getBgColor:function(t,e,a){var i=a;return t&&(i="linear-gradient(to right,"+e[0]+","+e[1]+","+e[1]+","+e[0]+")"),i}}};e.default=i},b922:function(t,e,a){var i=a("a9de");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5f1e7c95",i,!0,{sourceMap:!1,shadowMode:!1})},c482:function(t,e,a){"use strict";a.r(e);var i=a("8805"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},c4f5:function(t,e,a){"use strict";a.r(e);var i=a("6ac5"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e0a7:function(t,e,a){"use strict";var i=a("b922"),n=a.n(i);n.a},e38a:function(t,e,a){"use strict";a.r(e);var i=a("b886"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e7e5:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-divider",style:{height:t.height+"rpx"}},[a("v-uni-view",{staticClass:"tui-divider-line",style:{width:t.width,background:t.getBgColor(t.gradual,t.gradualColor,t.dividerColor)}}),a("v-uni-view",{staticClass:"tui-divider-text",style:{color:t.color,fontSize:t.size+"rpx",lineHeight:t.size+"rpx",background:t.bgcolor,fontWeight:t.bold?"bold":"normal"}},[t._t("default")],2)],1)},r=[]},ebb0:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".content[data-v-f3ea32da]{padding-bottom:%?108?%}.l-body-fixed[data-v-f3ea32da]{position:fixed;bottom:0;left:0;height:%?98?%;display:-webkit-box;display:-webkit-flex;display:flex;width:calc(100% - var(--pad-lr) - var(--pad-lr));padding:0 var(--pad-lr);-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:nowrap;background-color:#373a49;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.l-look-btn[data-v-f3ea32da]{width:30%;background-color:var(--c-txt-2)}.l-buy-btn[data-v-f3ea32da]{width:100%;background-color:#0068b7}.l-handle-btn[data-v-f3ea32da]{font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:%?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?80?%}.l-dl[data-v-f3ea32da]{margin-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?320?%}.l-dt[data-v-f3ea32da]{width:%?216?%;height:100%;border-radius:%?6?%;margin-right:%?24?%}.l-dd[data-v-f3ea32da]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?12?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.l-dd-title[data-v-f3ea32da]{font:700 var(--f-size-5) normal}.l-dd-sub[data-v-f3ea32da]{color:var(--c-txt-2);font:var(--f-size-2)/var(--f-size-4) normal}.l-dd-content[data-v-f3ea32da]{width:100%;color:#868dab;font:var(--f-size-2) normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.l-dd-footer[data-v-f3ea32da]{color:var(--c-txt-3);font:var(--f-size-2)/var(--f-size-4) normal}.l-dd-view-footer[data-v-f3ea32da]{width:100%;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:2}.l-dd-img[data-v-f3ea32da]{width:%?40?%;height:%?40?%;border-radius:50%;margin-right:%?6?%}.l-icon-star[data-v-f3ea32da]{width:%?30?%;height:%?28?%;margin-right:%?4?%}.l-dd-grade[data-v-f3ea32da]{color:#f9174d;margin-left:%?28?%;font-size:var(--f-size-5)}.l-icon-share[data-v-f3ea32da]{margin-right:%?18?%}.l-icon-share-1[data-v-f3ea32da]{width:%?29?%;height:%?28?%}.l-icon-share-2[data-v-f3ea32da]{width:%?25?%;height:%?27?%}.l-icon-share-3[data-v-f3ea32da]{width:%?27?%;height:%?22?%}.l-icon-share-4[data-v-f3ea32da]{width:%?30?%;height:%?24?%}.l-body-tab[data-v-f3ea32da],\n.l-body-select[data-v-f3ea32da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.l-body-tab[data-v-f3ea32da]{padding:%?40?% 0 %?12?%}.l-list[data-v-f3ea32da]{padding-top:%?40?%}.l-h3[data-v-f3ea32da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.l-h3-title[data-v-f3ea32da]{font:700 var(--f-size-4) normal}.l-h3-more[data-v-f3ea32da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:var(--c-bg-2)}\n\n/* list */.l-list-view[data-v-f3ea32da]{padding-top:%?40?%;color:var(--c-bg-2);font-size:medium}.l-icon-like[data-v-f3ea32da],\n.l-icon-star-blank[data-v-f3ea32da]{width:%?22?%;height:%?20?%;margin-right:%?4?%}.l-icon-like[data-v-f3ea32da]{margin-right:%?12?%}.l-list-content[data-v-f3ea32da]{background-color:rgba(245,247,249,.2);border-radius:%?16?%;padding:%?35?% %?32?%;margin-top:%?32?%}.l-list-c-foot-l-name[data-v-f3ea32da]{margin-right:%?20?%}.l-list-c-head[data-v-f3ea32da]{font-size:var(--f-size-3);padding-bottom:%?25?%}.l-list-c-body[data-v-f3ea32da]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;color:var(--c-txt-2);font-size:var(--f-size-1);margin-bottom:%?35?%}.l-list-c-foot[data-v-f3ea32da]{color:var(--c-txt-2);font-size:var(--f-size-1);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n\n/* share */.l-share[data-v-f3ea32da]{position:fixed;bottom:0;left:0;width:calc(100% - var(--pad-lr) - var(--pad-lr));padding:%?32?% var(--pad-lr);z-index:999;background-color:#080932}.l-icon-share-list[data-v-f3ea32da]{width:%?130?%;height:%?130?%}.l-share-img[data-v-f3ea32da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.l-close[data-v-f3ea32da]{text-align:right;margin-bottom:%?27?%}.l-share-btn[data-v-f3ea32da]{padding:%?56?% %?70?% 0}.l-share-botton[data-v-f3ea32da]{border-radius:%?40?%}",""]),t.exports=e}}]);