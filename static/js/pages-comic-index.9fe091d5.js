(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comic-index"],{"0da4":function(t,e,i){var n=i("a353");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6cc56c72",n,!0,{sourceMap:!1,shadowMode:!1})},"100f":function(t,e,i){var n=i("9c8b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7577c292",n,!0,{sourceMap:!1,shadowMode:!1})},"169d":function(t,e,i){"use strict";i.r(e);var n=i("fdc7"),a=i("18ca");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("763c");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"67988de8",null,!1,n["a"],r);e["default"]=c.exports},"18ca":function(t,e,i){"use strict";i.r(e);var n=i("64ba"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3e53":function(t,e,i){"use strict";var n=i("0da4"),a=i.n(n);a.a},"3f4a":function(t,e,i){"use strict";var n=i("100f"),a=i.n(n);a.a},4109:function(t,e,i){"use strict";i.r(e);var n=i("5db2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},4284:function(t,e,i){var n=i("b1e8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("26b17ca6",n,!0,{sourceMap:!1,shadowMode:!1})},"57ab":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("dc76").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[i("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[]},"5db2":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=n},"5fa4":function(t,e,i){"use strict";var n=i("4284"),a=i.n(n);a.a},"64ba":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),a={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=o},"763c":function(t,e,i){"use strict";var n=i("e401"),a=i.n(n);a.a},7766:function(t,e,i){"use strict";i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=0,a={props:{wavesColor:{type:String,default:"rgba(0, 0, 0, .15)"},itemClass:{type:String,default:""}},data:function(){return n++,{rippleTop:0,rippleLeft:0,field:{},active:Boolean,wavesId:"waves_"+n}},methods:{onTap:function(t){this.$emit("onTap")},onTouchstart:function(t){var e=this;this.active=!1,this.$nextTick((function(){e.activeWaves(t)}))},activeWaves:function(t){var e=this;this.getClientRect().then((function(i){var n,a;i.height&&(i.finalWidth=i.height>i.width?i.height:i.width,i.finalWidth&&(e.field=i,n=t.touches[0].clientX,a=t.touches[0].clientY,e.rippleTop=a-i.top-i.finalWidth/2,e.rippleLeft=n-i.left-i.finalWidth/2,e.$nextTick((function(){e.active=!0}))))}))},getClientRect:function(){var t=this;return new Promise((function(e){var i=uni.createSelectorQuery().in(t),n="#"+t.wavesId;i.select(n).boundingClientRect((function(t){e(t)})).exec()}))}}};e.default=a},8844:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-67988de8]{width:100%}.u-navbar-fixed[data-v-67988de8]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-67988de8]{width:100%}.u-navbar-inner[data-v-67988de8]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-67988de8]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-67988de8]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-67988de8]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-67988de8]{flex:1}.u-title[data-v-67988de8]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-67988de8]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-67988de8]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},"91e7":function(t,e,i){"use strict";i.r(e);var n=i("ce60"),a=i("d4d2");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5fa4");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"8bd10b30",null,!1,n["a"],r);e["default"]=c.exports},"9c8b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.waves[data-v-1ebcc17c]{position:relative;overflow:hidden}.waves .waves-ripple[data-v-1ebcc17c]{position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1}.waves .active[data-v-1ebcc17c]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1.2s ease-out,-webkit-transform .5s ease-out;transition:opacity 1.2s ease-out,transform .5s ease-out;transition:opacity 1.2s ease-out,transform .5s ease-out,-webkit-transform .5s ease-out}',""]),t.exports=e},a353:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-empty[data-v-21937aaa]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-21937aaa]{margin-bottom:%?20?%}.u-slot-wrap[data-v-21937aaa]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},a6de:function(t,e,i){"use strict";i.r(e);var n=i("7766"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b1e8:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".comicdetails[data-v-8bd10b30]{font-family:Microsoft Yahei}.top_box[data-v-8bd10b30]{width:100%;height:%?334?%}.top_box uni-image[data-v-8bd10b30]{width:100%;height:100%}.top_box .mask[data-v-8bd10b30]{width:100%;height:100%;background:rgba(4,4,63,.1)}.top_box .btn_c[data-v-8bd10b30]{display:flex;justify-content:flex-end;align-items:flex-start;height:100%;color:#fff;opacity:1}.top_content[data-v-8bd10b30]{width:100%}.top_content uni-image[data-v-8bd10b30]{width:100%}.tabs[data-v-8bd10b30]{display:flex}.tabs .u_tabs[data-v-8bd10b30]{color:#666;font-size:%?30?%;font-family:Microsoft Yahei;height:%?86?%;border-bottom:%?2?% #e6e6e6 solid;width:100%;display:flex;justify-content:center;align-items:center}.tabs .u_tab_active[data-v-8bd10b30]{color:#f5a623;font-weight:700}.details[data-v-8bd10b30]{padding-left:%?30?%;padding-right:%?30?%}.details .introduction[data-v-8bd10b30]{font-size:%?26?%}.details .author[data-v-8bd10b30]{font-size:%?26?%;margin-bottom:%?28?%}.details uni-view[data-v-8bd10b30]{margin-top:%?20?%}.details .detailstop[data-v-8bd10b30]{border-bottom:%?7?% soild #cdcdcd}.details .title[data-v-8bd10b30]{font-size:%?30?%}.details .title .cnumber[data-v-8bd10b30]{font-size:%?21?%;color:#999;margin-left:%?12?%}.details .detailsbottom[data-v-8bd10b30]{background-color:#fff;border-top:%?7?% soild #a0cfff}.details .comment[data-v-8bd10b30]{font-size:%?26?%;border-bottom:%?2?% #e6e6e6 solid}.details .comment .nick_name[data-v-8bd10b30]{margin-top:%?8?%;color:#666}.details .comment .create_time[data-v-8bd10b30]{margin-top:%?20?%;color:#999;font-size:%?14?%}.details .comment .comment_content[data-v-8bd10b30]{margin-top:%?28?%;margin-bottom:%?28?%;color:#555}.chapter_list[data-v-8bd10b30]{padding-left:%?30?%;padding-right:%?30?%;font-weight:700}.chapter_list .chapter[data-v-8bd10b30]{margin-top:%?30?%}.chapter_list .chapter uni-image[data-v-8bd10b30]{height:%?140?%;width:100%}.chapter_list .chapter .chapter_title[data-v-8bd10b30]{font-size:%?29?%}.chapter_list .chapter .update_time[data-v-8bd10b30]{margin-top:%?10?%;font-size:%?17?%;font-weight:400;color:#9d9d9d}.bottom_nav[data-v-8bd10b30]{position:fixed;bottom:0;left:0;width:100%;height:%?97?%;display:flex;justify-content:space-between}.bottom_nav .favor_button[data-v-8bd10b30]{width:45%;height:%?97?%;font-weight:700;line-height:%?97?%;text-align:center;font-size:%?30?%}.bottom_nav .start_button[data-v-8bd10b30]{width:50%;height:%?97?%;font-weight:700;line-height:%?97?%;text-align:center;background-color:#fde23d;font-size:%?30?%}.booklist_box[data-v-8bd10b30]{display:flex;flex-wrap:wrap;justify-content:space-between}.carton_box_2[data-v-8bd10b30]{margin-top:%?25?%;width:49%}.carton_box_2 uni-image[data-v-8bd10b30]{width:100%;border-radius:%?5?%}.carton_box_2 .book_name[data-v-8bd10b30]{font-weight:700;font-size:%?28?%;line-height:%?30?%;overflow:hidden;height:%?60?%}.carton_box_3[data-v-8bd10b30]{margin-top:%?25?%;width:32%}.carton_box_3 uni-image[data-v-8bd10b30]{width:100%;height:%?314?%;border-radius:%?5?%}.carton_box_3 .book_name[data-v-8bd10b30]{font-weight:700;font-size:%?28?%;line-height:%?30?%;overflow:hidden;height:%?60?%}",""]),t.exports=e},b887:function(t,e,i){"use strict";i.r(e);var n=i("57ab"),a=i("4109");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3e53");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"21937aaa",null,!1,n["a"],r);e["default"]=c.exports},cd70:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"waves",class:t.itemClass,attrs:{id:t.wavesId},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchstart(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[t._t("default"),i("v-uni-view",{staticClass:"waves-ripple",class:{active:t.active},style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.field.finalWidth+"px",height:t.field.finalWidth+"px","background-color":t.wavesColor}})],2)},o=[]},ce60:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("169d").default,uIcon:i("dc76").default,uTag:i("c240").default,waves:i("ece5").default,uRow:i("5dc0").default,uCol:i("7ce3").default,uEmpty:i("b887").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.comic&&t.comic.id?i("v-uni-view",{staticClass:"comicdetails"},[i("u-navbar",{attrs:{title:t.comic.name,"is-back":!1}},[i("u-icon",{staticClass:"u-m-r-30",attrs:{slot:"right",name:"share",size:"44"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$goto("share")}},slot:"right"})],1),i("v-uni-view",{staticClass:"top_box",style:{background:"url("+t.comic.icon+") no-repeat","background-clip":"content-box","background-size":"cover"}},[i("v-uni-view",{staticClass:"mask"},[i("v-uni-view",{staticClass:"btn_c"},[i("u-tag",{staticClass:"u-m-r-10 u-m-t-20",attrs:{text:t.hotTxt,shape:"circle",type:"error"}})],1)],1)],1),i("waves",{attrs:{wavesColor:"#ff9900"}},[i("v-uni-view",{staticClass:"tabs"},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u_tabs",class:{" u_tab_active":t.current==n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(n)}}},[t._v(t._s(e.name))])})),1)],1),0===t.current?i("v-uni-view",{staticClass:"details"},[i("v-uni-view",{staticClass:"detailstop"},[t.comic.tags&&t.comic.tags.length?i("v-uni-view",t._l(t.comic.tags,(function(t,e){return i("u-tag",{key:e,staticClass:"u-m-l-20",attrs:{text:t,type:"warning",mode:"light",shape:"circle"}})})),1):t._e(),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("作品简介")])],1),i("v-uni-view",{staticClass:"introduction"},[i("v-uni-text",[t._v(t._s(t.comic.desc))])],1),i("v-uni-view",{staticClass:"author"},[i("v-uni-text",[t._v("作者："+t._s(t.comic.author))])],1),i("v-uni-view",[i("v-uni-text",[t._v("状态："+t._s(t._f("statusParse")(t.comic.status)))])],1)],1),t.comic.note?i("v-uni-view",{staticClass:"detailsbottom"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("精彩漫评")])],1),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.comic.note))])],1)],1):t._e(),i("u-row",{attrs:{gutter:"16"}},[i("u-col",{attrs:{span:"9"}},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("猜你喜欢")])],1)],1)],1),i("v-uni-view",{staticClass:"booklist_box"},t._l(t.likeList,(function(e,n){return i("v-uni-view",{key:e.id,staticClass:"carton_box_3",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLikeComic(e)}}},[i("v-uni-image",{attrs:{src:e.icon}}),i("v-uni-view",{staticClass:"book_name"},[t._v(t._s(e.name))])],1)})),1),i("br"),i("br"),i("br"),i("br")],1):t._e(),1===t.current?i("v-uni-view",{staticClass:"chapter_list"},[t.chapters.length?t._e():i("u-empty"),t._l(t.chapters,(function(e,n){return i("v-uni-view",{staticClass:"chapter",attrs:{index:n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoChapterDetail(e)}}},[i("u-row",{attrs:{gutter:"36"}},[i("u-col",{attrs:{span:"5"}},[i("v-uni-image",{attrs:{src:t.comic.icon,mode:"center","lazy-load":!0}})],1),i("u-col",{attrs:{span:"7"}},[i("v-uni-view",{staticClass:"chapter_title"},[t._v(t._s(e.title))]),i("v-uni-view")],1)],1)],1)}))],2):t._e(),0==t.current?i("v-uni-view",{staticClass:"bottom_nav"},[i("v-uni-view",{staticClass:"favor_button"}),i("v-uni-view",{staticClass:"start_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoChapterDetail()}}},[t._v("开始阅读")])],1):t._e()],1):t._e()},o=[]},d4d2:function(t,e,i){"use strict";i.r(e);var n=i("db12"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},db12:function(t,e,i){"use strict";(function(t){i("4de4"),i("7db0"),i("c975"),i("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("443a"),a={data:function(){return{comic:{},chapters:[],list:[{name:"详情"},{name:"目录"}],endlist:[{name:"全部",id:null},{name:"连载中",id:0},{name:"已完结",id:1}],current:0,comment:"",likeList:[]}},onLoad:function(t){var e=t.id;this.getComicInfo(e)},computed:{hotTxt:function(){return"热度 "+(this.comic.hot||1)*this.$u.random(1e4,2e4)}},methods:{getComicInfo:function(t){if(t){var e=this.$store.state.comics.find((function(e){return e.id==t}));e&&(e.chapters?this.initComic(e):(this.getChapters(e),this.$minApi.postReadComic(e)))}},initComic:function(t){this.comic=t,this.$store.commit("setComic",this.comic);var e=uni.getStorageSync(this.comic.id+"_last");e&&e.id&&e.status?uni.redirectTo({url:"/pages/comic/comic"}):(uni.setNavigationBarTitle({title:this.comic.name}),this.chapters=this.comic.chapters,this.getLikeBooks())},handleLikeComic:function(t){this.getComicInfo(t.id)},getLikeBooks:function(){var t=this,e=this.$store.state.comics.filter((function(e){return e.tags.filter((function(e){return t.comic.tags.filter((function(t){return t.indexOf(e)>-1})).length})).length}));e.length,this.likeList=e.slice(0,3)},getChapters:function(t){var e=this;uni.showLoading(),(0,n.getComicChapters)(t).then((function(t){uni.hideLoading(),e.getComicInfo(t.id)}))},gotoChapterDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$goto("comic/comic?id="+t.id)},changeTab:function(t){this.current=t}},filters:{statusParse:function(t){var e="已下架";switch(t){case 0:e="待上架";break;case 1:e="连载中";break;case 2:e="已完结";break}return e}}};e.default=a}).call(this,i("5a52")["default"])},e401:function(t,e,i){var n=i("8844");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7b20138f",n,!0,{sourceMap:!1,shadowMode:!1})},ece5:function(t,e,i){"use strict";i.r(e);var n=i("cd70"),a=i("a6de");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3f4a");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"1ebcc17c",null,!1,n["a"],r);e["default"]=c.exports},fdc7:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("dc76").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]}}]);