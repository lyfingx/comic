(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin-coin"],{"02d8":function(t,e,i){"use strict";var a=i("a6b7"),n=i.n(a);n.a},1608:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiTabs",props:{tabs:{type:Array,default:function(){return[]}},height:{type:Number,default:80},padding:{type:Number,default:30},bgColor:{type:String,default:"#FFFFFF"},isFixed:{type:Boolean,default:!1},top:{type:Number,default:44},unlined:{type:Boolean,default:!1},currentTab:{type:Number,default:0},sliderWidth:{type:Number,default:68},sliderHeight:{type:Number,default:6},sliderBgColor:{type:String,default:"#5677fc"},sliderRadius:{type:String,default:"50rpx"},bottom:{type:String,default:"0"},itemWidth:{type:String,default:"25%"},color:{type:String,default:"#666"},selectedColor:{type:String,default:"#5677fc"},size:{type:Number,default:28},bold:{type:Boolean,default:!1}},watch:{currentTab:function(){this.checkCor()}},created:function(){var t=this;setTimeout((function(){uni.getSystemInfo({success:function(e){t.winWidth=e.windowWidth,t.checkCor()}})}),50)},data:function(){return{winWidth:0,scrollLeft:0}},methods:{checkCor:function(){var t=this.tabs.length,e=this.winWidth/750*this.padding,i=this.winWidth-2*e,a=(i/t-this.winWidth/750*this.sliderWidth)/2+e,n=a;this.currentTab>0&&(n+=i/t*this.currentTab),this.scrollLeft=n},swichTabs:function(t){var e=this.tabs[t];if(!e||!e.disabled)return this.currentTab!=t&&void this.$emit("change",{index:Number(t)})}}};e.default=a},2223:function(t,e,i){"use strict";i.r(e);var a=i("cca0"),n=i("8fad");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("beab");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"1c714182",null,!1,a["a"],o);e["default"]=r.exports},"651a":function(t,e,i){var a=i("ad46");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b66fb2aa",a,!0,{sourceMap:!1,shadowMode:!1})},"7bb0":function(t,e,i){"use strict";i.r(e);var a=i("c21f"),n=i("d88a");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("02d8");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"6ecf07c0",null,!1,a["a"],o);e["default"]=r.exports},"8fad":function(t,e,i){"use strict";i.r(e);var a=i("a99c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},a6b7:function(t,e,i){var a=i("aacc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("003ee700",a,!0,{sourceMap:!1,shadowMode:!1})},a99c:function(t,e,i){"use strict";(function(t){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("7bb0")),s={components:{tuiTabs:n.default},data:function(){return{data:{},is_withdraw:!1,list:[],userData:{},showModal:!1,currentTab:0,tabs:[{name:"今日收入"},{name:"昨日收入"},{name:"最近1月"},{name:"提现记录"}]}},onLoad:function(){uni.showLoading(),this.userData=getApp().globalData.userInfo,this.loadData()},methods:{loadData:function(){var t=this;this.$minApi.getUserCoin().then((function(e){t.data=e,t.list=e.todayData,uni.hideLoading()}))},changeTab:function(e){this.currentTab=e.index,t.log("tab:"+this.currentTab),this.list=[],this.is_withdraw=!1,3==this.currentTab?(this.is_withdraw=!0,this.list=this.data.withdrawData):0==this.currentTab?this.list=this.data.todayData:1==this.currentTab?this.list=this.data.yesterdayData:2==this.currentTab&&(this.list=this.data.monthData)},navTo:function(t){uni.navigateTo({url:t})}},onPullDownRefresh:function(){this.loadData(),setTimeout((function(){uni.stopPullDownRefresh()}),500)}};e.default=s}).call(this,i("5a52")["default"])},aacc:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-tabs-view[data-v-6ecf07c0]{width:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;z-index:1}.tui-tabs-relative[data-v-6ecf07c0]{position:relative}.tui-tabs-fixed[data-v-6ecf07c0]{position:fixed;left:0}.tui-tabs-fixed[data-v-6ecf07c0]::before,\n.tui-tabs-relative[data-v-6ecf07c0]::before{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0}.tui-unlined[data-v-6ecf07c0]::before{border-bottom:0!important}.tui-tabs-item[data-v-6ecf07c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-tabs-disabled[data-v-6ecf07c0]{opacity:.6}.tui-tabs-title[data-v-6ecf07c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;z-index:2}.tui-tabs-active[data-v-6ecf07c0]{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.tui-tabs-slider[data-v-6ecf07c0]{position:absolute;left:0;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;z-index:0;-webkit-transform:translateZ(0);transform:translateZ(0)}',""]),t.exports=e},ad46:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1c714182]{background:#f6f6f6;color:#000;height:100%}.ns[data-v-1c714182]{width:100%;height:60px;text-align:center;line-height:%?200?%;color:#fff;font-size:%?34?%;font-weight:700;background:-webkit-linear-gradient(left,#ff8440,#ff1e0f);background:linear-gradient(90deg,#ff8440,#ff1e0f)}.top[data-v-1c714182]{margin-top:%?20?%}.flexView[data-v-1c714182]{width:100%;height:100%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flexView .scrollView[data-v-1c714182]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;position:relative;padding-bottom:%?116?%}.flexView .scrollView .head-read[data-v-1c714182]{background:-webkit-linear-gradient(left,#ff8440,#ff1e0f);background:linear-gradient(90deg,#ff8440,#ff1e0f);background-color:#ff8440;padding-bottom:%?100?%}.flexView .scrollView .head-read .flex[data-v-1c714182]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?50?%;position:relative}.flexView .scrollView .head-read .flex .read-img[data-v-1c714182]{width:%?120?%;height:%?120?%;border-radius:100%;overflow:hidden;margin-right:%?20?%;border:%?4?% solid hsla(0,0%,100%,.3)}.flexView .scrollView .head-read .flex .flex-box[data-v-1c714182]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;font-size:%?26?%;color:#333}.flexView .scrollView .head-read .flex .flex-box-text[data-v-1c714182]{margin:%?10?% 0;color:#f5f5f5;font-weight:400}.flexView .scrollView .head-read .flex .arrow[data-v-1c714182]{position:relative;padding-right:%?30?%}.flexView .scrollView .head-read .flex .arrow span[data-v-1c714182]{font-size:%?28?%;color:#fff}.flexView .scrollView .head-read .flex .arrow[data-v-1c714182]:after{content:" ";display:inline-block;height:%?12?%;width:%?12?%;border-width:%?4?% %?4?% 0 0;border-color:#848484;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:%?-4?%;position:absolute;top:50%;margin-top:%?-8?%;right:%?4?%;border-radius:%?2?%}.flexView .scrollView .head-read .flex .arrow-one[data-v-1c714182]:after{border-color:#fff;margin-top:%?-6?%}.flexView .scrollView .white-box[data-v-1c714182]{width:94%;background:#fff;border-radius:%?10?%;margin:%?-120?% auto %?20?%;box-shadow:0 %?6?% %?20?% #e7e7e7}.flexView .scrollView .white-box .tx[data-v-1c714182]{padding-top:%?26?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center}.flexView .scrollView .white-box .tx-grid[data-v-1c714182]{box-sizing:border-box}.flexView .scrollView .white-box .tx-grid[data-v-1c714182]:first-child{margin-left:%?40?%}.flexView .scrollView .white-box .tx-grid-comm-sign[data-v-1c714182]{display:block;border-radius:%?40?% 0 0 %?40?%;font-size:%?26?%;padding:%?16?% %?44?%;background:-webkit-linear-gradient(left,#fef082,#ffc551);background:linear-gradient(90deg,#fef082,#ffc551);background-color:#fef082;color:#cf4400}.flexView .scrollView .white-box .tx-grid-text[data-v-1c714182]{display:block;color:#333;font-size:%?26?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.flexView .scrollView .white-box .tx-grid-text .title[data-v-1c714182]{font-size:%?26?%;font-weight:400;color:#ff6423}.flexView .scrollView .white-box .tx-grid-text .money[data-v-1c714182]{font-size:%?60?%;color:#ff6423;letter-spacing:%?2?%;margin-bottom:%?10?%}.flexView .scrollView .white-box .tx-grid-text .money-b[data-v-1c714182]{font-size:%?28?%}.flexView .scrollView .white-box .palace[data-v-1c714182]{padding-bottom:%?20?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexView .scrollView .white-box .palace-grid[data-v-1c714182]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;box-sizing:border-box}.flexView .scrollView .white-box .palace-grid[data-v-1c714182]:not(:last-child):after{width:%?1?%;height:%?80?%;background:#fddece;content:" ";display:inline-block;position:absolute;top:0;right:0}.flexView .scrollView .white-box .palace-grid-text[data-v-1c714182]{display:block;text-align:center;color:#333;font-size:%?32?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.flexView .scrollView .white-box .palace-grid-text-name[data-v-1c714182]{font-size:%?26?%;font-weight:400;color:#ff8a4a}.flexView .scrollView .white-box .palace-grid-text-data[data-v-1c714182]{font-size:%?32?%;color:#ff8a4a;letter-spacing:%?2?%;margin-bottom:%?5?%}.flexView .scrollView .white-box .palace-grid-text-data-b[data-v-1c714182]{font-size:%?20?%}.list-view[data-v-1c714182]{position:relative;width:100%;overflow:hidden}.list-item[data-v-1c714182]{width:100%;padding:%?30?% %?28?%;box-sizing:border-box;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #eaeef1}.item-last[data-v-1c714182]::after{left:0!important}.content-box[data-v-1c714182]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.des-box[data-v-1c714182]{min-height:%?80?%;padding-left:%?28?%;box-sizing:border-box;vertical-align:top;color:#333;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tit[data-v-1c714182]{font-size:%?32?%;max-width:%?420?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.source[data-v-1c714182]{margin:%?12?% 0}.time[data-v-1c714182]{color:#888}.money[data-v-1c714182]{font-size:%?38?%;font-weight:500;color:#ff1e0f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:%?20?%}.less[data-v-1c714182]{color:#4caf50!important}.tip[data-v-1c714182]{margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;font-size:%?24?%;color:#888}body.?%PAGE?%[data-v-1c714182]{background:#f6f6f6}',""]),t.exports=e},beab:function(t,e,i){"use strict";var a=i("651a"),n=i.n(a);n.a},c21f:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-tabs-view",class:[t.isFixed?"tui-tabs-fixed":"tui-tabs-relative",t.unlined?"tui-unlined":""],style:{height:t.height+"rpx",padding:"0 "+t.padding+"rpx",background:t.bgColor,top:t.isFixed?t.top+"px":"auto"}},[t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-tabs-item",style:{width:t.itemWidth},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.swichTabs(a)}}},[i("v-uni-view",{staticClass:"tui-tabs-title",class:{"tui-tabs-active":t.currentTab==a,"tui-tabs-disabled":e.disabled},style:{color:t.currentTab==a?t.selectedColor:t.color,fontSize:t.size+"rpx",lineHeight:t.size+"rpx",fontWeight:t.bold&&t.currentTab==a?"bold":"normal"}},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"tui-tabs-slider",style:{transform:"translateX("+t.scrollLeft+"px)",width:t.sliderWidth+"rpx",height:t.sliderHeight+"rpx",borderRadius:t.sliderRadius,bottom:t.bottom,background:t.sliderBgColor,marginBottom:"50%"==t.bottom?"-"+t.sliderHeight/2+"rpx":0}})],2)},s=[]},cca0:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={tuiTabs:i("7bb0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"flexView"},[i("v-uni-view",{staticClass:"scrollView"},[i("v-uni-view",{staticClass:"head-read"}),i("v-uni-view",{staticClass:"white-box"},[i("v-uni-view",{staticClass:"tx"},[i("v-uni-view",{staticClass:"tx-grid"},[i("v-uni-view",{staticClass:"tx-grid-text"},[i("v-uni-view",{staticClass:"title"},[t._v("可提现余额")]),i("v-uni-view",{staticClass:"money"},[i("v-uni-text",[t._v(t._s(t.userData.coin/100))]),i("v-uni-text",{staticClass:"money-b"},[t._v("元")])],1)],1)],1),i("v-uni-view",{staticClass:"tx-grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/coin/withdraw")}}},[i("span",{staticClass:"tx-grid-comm-sign"},[t._v("立即提现")])])],1),i("v-uni-view",{staticClass:"palace palace-one"},[i("v-uni-view",{staticClass:"palace-grid"},[i("v-uni-view",{staticClass:"palace-grid-text"},[i("v-uni-view",{staticClass:"palace-grid-text-data"},[i("v-uni-text",[t._v(t._s(t.data.todayCoin/100))]),i("v-uni-text",{staticClass:"palace-grid-text-data-b"},[t._v("元")])],1),i("v-uni-view",{staticClass:"palace-grid-text-name"},[t._v("今日到账")])],1)],1),i("v-uni-view",{staticClass:"palace-grid"},[i("v-uni-view",{staticClass:"palace-grid-text"},[i("v-uni-view",{staticClass:"palace-grid-text-data"},[i("v-uni-text",[t._v(t._s(t.data.yesterdayCoin/100))]),i("v-uni-text",{staticClass:"palace-grid-text-data-b"},[t._v("元")])],1),i("v-uni-view",{staticClass:"palace-grid-text-name"},[t._v("昨日到账")])],1)],1),i("v-uni-view",{staticClass:"palace-grid"},[i("v-uni-view",{staticClass:"palace-grid-text"},[i("v-uni-view",{staticClass:"palace-grid-text-data"},[i("v-uni-text",[t._v(t._s(t.data.withdrawCoin/100*-1))]),i("v-uni-text",{staticClass:"palace-grid-text-data-b"},[t._v("元")])],1),i("v-uni-view",{staticClass:"palace-grid-text-name"},[t._v("累计提现")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"top"},[i("tui-tabs",{attrs:{tabs:t.tabs,height:88,currentTab:t.currentTab,sliderWidth:150,sliderHeight:60,bottom:"50%",color:"#888",selectedColor:"#fff",sliderBgColor:"#ff8a4a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"list-view"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"list-item",attrs:{"hover-class":"hover","hover-stay-time":150,bindtap:"detail"}},[i("v-uni-view",{staticClass:"content-box"},[i("v-uni-view",{staticClass:"des-box"},[i("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.note))]),3==t.currentTab?i("v-uni-view",{staticClass:"source",style:{color:1==e.ext_value?"#4caf50":-1==e.ext_value?"#ff1e0f":"#00b7ff"}},[t._v("提现"+t._s(1==e.ext_value?"成功":-1==e.source_id?"失败":"处理中"))]):t._e(),i("v-uni-view",{staticClass:"time"},[t._v(t._s(e.created_at))])],1)],1),i("v-uni-view",{staticClass:"money",class:{less:t.is_withdraw}},[t._v(t._s(t.is_withdraw?"":"+")+t._s(e.value/100))])],1)})),1),i("v-uni-view",{staticClass:"tip"},[t._v("仅显示近半年内的收支记录")])],1),i("v-uni-view",{staticClass:"cu-modal",class:t.showModal?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("名词解释")]),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal=!1}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl",staticStyle:{"text-align":"left"}},[i("v-uni-view",[i("v-uni-text",{staticClass:"text-red"},[t._v("可提现余额：")]),i("v-uni-text",[t._v("当前您可以提现的金额")])],1),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"text-red"},[t._v("即将到账：")]),i("v-uni-text",[t._v("交易中的金额，交易成功后可提现")])],1),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"text-red"},[t._v("累计到账：")]),i("v-uni-text",[t._v("累计交易成功的金额")])],1),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"text-red"},[t._v("累计提现：")]),i("v-uni-text",[t._v("累计提现成功的金额")])],1),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"text-red"},[t._v("*注：所有金额币种均为人民币，单位为元，符号￥")])],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal=!1}}},[t._v("我已知晓")])],1)],1)],1)],1)],1)],1)},s=[]},d88a:function(t,e,i){"use strict";i.r(e);var a=i("1608"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);