(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bookrack-bookrack"],{"1d65":function(n,t,r){var e=r("ab63");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=r("4f06").default;a("129b31ec",e,!0,{sourceMap:!1,shadowMode:!1})},7099:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAACTUlEQVR4Xu2cz2oTURjFzxmtuBH1EcSXUFrtVpssM6Ez7VpfoQUFhYK+gq7tRJIsp212KrTiS1g37q3iQmh7P0lIC/6ZSeAjnaY5WYa5c7/743fPvQOXS5yDXz1O7gJ8arCFYTl7gdHGTntzr+ryWHUB9Xi5YWALwOW/ajkiLMk7b7tV1lgpoFqa3sSh7QO4UQDhO+Z4ayvLvlUFqVJA9Ua6YrQ3ZYOncTXvZpszCWgpTtYIvCgFRD7P29kzASogQOBl3mmtC5AA/UtgrCkmg0ZkkAAJUGG+aoqNWHoESIB8uxMZJINkkI+ADPLxUwbJIBnkIyCDfPyUQTJIBvkIyCAfP2WQDJJBPgIyyMdPGXSRDOofJLDDUI8Y3bYQrvrcGK+1kXcILI54+j3I3nhv9D/FgK92BdsnByYGhxdqjTQG7XXJKQt/z9P1hgMYH211sw5rjeV7IN8BuDRdY5h4tccwu89anOwAeDDx7qazg14f0A8A16az/olX/VOAyhkPAGmKFUPqKaSL4RwHRouDZX6pmTRpeKVl/pTWgRGPt9ut9ukhzvO6USTskxk+TDyOATCKfgULnzkX5X9sFM+i8//1oW+xi/QtVoVFMkgG+byTQTJIBvkIyCAfP2WQDJJBPgIyyMdPGSSDZJCPgAzy8VMGySAZ5CMgg3z8lEEySAb5CMggHz9lkAw6A4Nm+XocXbA0QrDhFV1fAFwveHS2r+jqQym75A3GtH/S1DeRfa0rvcPspPSHzZX5yMITAPPD/z4S2Mg7rV3f8PytfwOmTZr2a1xqEwAAAABJRU5ErkJggg=="},7419:function(n,t,r){"use strict";(function(n){r("4160"),r("caad"),r("2532"),r("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{books:[],tokenInfo:""}},onShow:function(){this.books=JSON.parse(JSON.stringify(getApp().globalData.books)),this.syncBooks(),this._.isEmpty(getApp().globalData.userInfo)&&this.$minApi.getUserInfoWithToken(),this.books.length||this.$toast("书架空空,去选一本吧")},onLoad:function(){var n=this;this.remoteBookrack(),setTimeout((function(){n.currentPage().route.includes("bookrack")&&n.$toast("长按书籍可删除")}),5e3)},onPullDownRefresh:function(){this.remoteBookrack(),uni.stopPullDownRefresh()},methods:{navtoDetail:function(n){getApp().globalData.currentBook=n,uni.navigateTo({url:"/pages/read/read"})},search:function(){uni.navigateTo({url:"/pages/mall/search"})},syncBooks:function(){var n=this;this.books.length&&this.books.forEach((function(t,r,e){t.read_chapter_id&&n.$minApi.storeBook(t).then((function(a){n.$minApi.updateLastRead({id:t.read_chapter_id}),t.read_chapter_id=null,e[r]=t}))}))},remoteBookrack:function(){var t=this;this.$loading("同步中..."),this.$minApi.getUserBookrack().then((function(r){n.log(r),t.books=r,getApp().globalData.books=r}))},deleteBook:function(n){var t=this;this.$loading("确认删除中..."),setTimeout((function(){uni.showModal({title:"确认删除?",content:n.name,success:function(r){r.confirm&&t.$minApi.deleteBook(n).then((function(n){t.remoteBookrack(),t.$toast("删除成功")}))}})}),2500)}}};t.default=e}).call(this,r("5a52")["default"])},9718:function(n,t,r){"use strict";var e;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"l-fixed"},[e("v-uni-view",{staticClass:"l-status"})],1),e("v-uni-view",{staticClass:"l-body l-clear-both"},[n._l(n.books,(function(t,r){return e("v-uni-view",{key:r,staticClass:"l-li",on:{click:function(r){arguments[0]=r=n.$handleEvent(r),n.navtoDetail(t)},longpress:function(r){arguments[0]=r=n.$handleEvent(r),n.deleteBook(t)}}},[e("v-uni-image",{staticClass:"l-li-img",attrs:{src:t.icon,mode:"aspectFill"}}),t.pivot&&t.last_chapter_created_at>t.pivot.updated_at?e("v-uni-icon",{staticStyle:{float:"left"},attrs:{type:"waiting",size:"20",color:"white"}}):n._e(),e("v-uni-view",{staticClass:"l-li-txt"},[n._v(n._s(t.name))])],1)})),e("v-uni-view",{staticClass:"l-add"},[e("v-uni-view",{staticClass:"l-add-view",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.search()}}},[e("v-uni-image",{staticClass:"l-icon-add",attrs:{src:r("7099"),mode:"","lazy-load":"true"}})],1)],1)],2)],1)},i=[]},ab63:function(n,t,r){var e=r("24fb");t=e(!1),t.push([n.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* l-body */.l-body[data-v-67e3b4ac]{padding:var(--pad-lr) 0 var(--pad-lr) var(--pad-lr)}.l-ul[data-v-67e3b4ac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?32?%}.l-add[data-v-67e3b4ac],\r\n.l-li[data-v-67e3b4ac]{width:28%;float:left;height:%?392?%;margin-right:5%;margin-bottom:%?32?%}.l-li[data-v-67e3b4ac]{text-align:center}.l-add-view[data-v-67e3b4ac],\r\n.l-li-img[data-v-67e3b4ac]{width:100%;height:%?300?%;border-radius:%?10?%;margin-bottom:%?8?%;z-index:0}.l-add-view[data-v-67e3b4ac]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;border:%?6?% solid #7e7f94;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.l-icon-add[data-v-67e3b4ac]{width:%?36?%;height:%?36?%}.l-li-txt[data-v-67e3b4ac]{padding:0 %?10?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}",""]),n.exports=t},bd7f:function(n,t,r){"use strict";r.r(t);var e=r("9718"),a=r("c89d");for(var i in a)"default"!==i&&function(n){r.d(t,n,(function(){return a[n]}))}(i);r("f99d");var o,s=r("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"67e3b4ac",null,!1,e["a"],o);t["default"]=c.exports},c89d:function(n,t,r){"use strict";r.r(t);var e=r("7419"),a=r.n(e);for(var i in e)"default"!==i&&function(n){r.d(t,n,(function(){return e[n]}))}(i);t["default"]=a.a},f99d:function(n,t,r){"use strict";var e=r("1d65"),a=r.n(e);a.a}}]);