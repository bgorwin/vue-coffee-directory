(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a79":function(t,e,s){t.exports=s.p+"img/about-parallax-background.638107ee.png"},"166a":function(t,e,s){},3408:function(t,e,s){},3716:function(t,e,s){"use strict";var i=s("9fc8"),a=s.n(i);a.a},"3ad0":function(t,e,s){},"61d2":function(t,e,s){},7613:function(t,e,s){t.exports=s.p+"img/default-img.e06edacd.jpg"},"899c":function(t,e,s){},"94aa":function(t,e,s){},"9d26":function(t,e,s){"use strict";var i=s("132d");e["a"]=i["a"]},"9fc8":function(t,e,s){},db42:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-parallax",{attrs:{id:"parallax-image-about",dark:"",height:"820",src:s("0a79")}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("h1",{staticClass:"font-weight-thin parallax-title"},[t._v("About Coffee Passport")]),i("h4",{staticClass:"subheading about-sub-heading"},[t._v("Make supporting local coffee shops in your city easy!")])])],1)],1),i("v-container",[i("v-row",{attrs:{id:"second-section"}},[i("v-col",{attrs:{xs:"12",sm:"12",md:"6",lg:"6"}},[i("v-img",{attrs:{id:"about-image",src:s("7613")}})],1),i("v-col",{attrs:{id:"about-writeup",xs:"12",sm:"12",md:"6",lg:"6"}},[i("blockquote",{staticClass:"blockquote"},[t._v(" Coffee Passpord is an application that helps coffee lovers find the perfect coffee ship while in the city they're living in or traveling through. Each coffee shop has a rating, address and image to help with finding which one suits your coffee needs... ")])])],1)],1),i("div",{attrs:{id:"third-row"}},[i("v-container",[i("v-row",t._l(t.abouts,(function(e){return i("v-col",{key:""+e.title,attrs:{xs:"12",sm:"12",md:"6",lg:"4"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline text-center"},[t._v(" "+t._s(e.title)+" ")])],1)],1),i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/mountain.jpg",height:"194"}}),i("v-card-text",[t._v(t._s(e.description))])],1)],1)})),1)],1)],1)],1)},a=[],n={data:function(){return{abouts:[{title:"Discover New Shops",description:"When in a new city, discover high quality coffee shops that you may not find on other apps"},{title:"Rated Coffee Shop",description:"Find shops that are only highly rated by users who have been there"},{title:"Why Use Coffee-Passport",description:"Coffee-Passpord is a list of highly rated coffee shops where coffee shop owners have a passion for bringing you the finest coffee roasting for the perfect cup"}]}}},l=n,r=(s("3716"),s("2877")),o=s("6544"),h=s.n(o),d=s("b0af"),c=s("99d9"),u=s("62ad"),p=s("a523"),m=s("adda"),v=(s("61d2"),s("a9ad")),g=s("1c87"),f=s("4e82"),b=s("7560"),y=s("f2e7"),x=s("5607"),w=s("80d2"),C=s("d9bd"),I=s("58df");const _=Object(I["a"])(v["a"],g["a"],b["a"],Object(f["a"])("listItemGroup"),Object(y["b"])("inputValue"));var $=_.extend().extend({name:"v-list-item",directives:{Ripple:x["a"]},inheritAttrs:!1,inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...g["a"].options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(g["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&Object(C["d"])("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-"+this._uid):this.isInList&&(t.role="listitem")),t}},render(t){let{tag:e,data:s}=this.generateRouteLink();s.attrs={...s.attrs,...this.genAttrs()},s[this.to?"nativeOn":"on"]={...s[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===w["j"].enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.setTextColor(this.color,s),i)}}),V=(s("3ad0"),s("8dd9")),B=(V["a"].extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...V["a"].options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),s("db42"),s("9d26")),k=s("2b0e"),O=k["a"].extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:s}){return e.staticClass=("v-list-item__icon "+(e.staticClass||"")).trim(),t("div",e,s)}}),A=s("7e2b"),j=k["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(C["d"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}}),S=s("3206"),L=s("0789");const z=Object(I["a"])(A["a"],j,v["a"],Object(S["a"])("list"),y["a"]);z.extend().extend({name:"v-list-group",directives:{ripple:x["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(B["a"],t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(O,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement($,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent(()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},Object(w["i"])(this))])},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(O,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(L["a"],this.genItems())])}}),s("899c"),s("166a");var M=s("a452");const E=Object(I["a"])(M["a"],b["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.internalValue===t;const t=this.internalValue;return Array.isArray(t)?e=>t.includes(e):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(C["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return null==t.value||""===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==s):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find(t=>!t.disabled);if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex(e=>e===t);this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t("div",this.genData(),this.$slots.default)}});E.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),Object(I["a"])(E,v["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...E.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...E.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),k["a"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:s=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";const i=s.filter(t=>!1===t.isComment&&" "!==t.text);return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,s)}}),s("3408");var T=s("24b2"),G=s("a236"),D=Object(I["a"])(v["a"],T["a"],G["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(w["d"])(this.size),minWidth:Object(w["d"])(this.size),width:Object(w["d"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),H=D;H.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...H.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=H.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});Object(w["e"])("v-list-item__action-text","span");const N=Object(w["e"])("v-list-item__content","div"),R=Object(w["e"])("v-list-item__title","div");Object(w["e"])("v-list-item__subtitle","div");s("94aa");var P=k["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}});const q=Object(I["a"])(P);var W=q.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[s,i])}}),J=s("0fd9"),F=Object(r["a"])(l,i,a,!1,null,"0b9bacfe",null);e["default"]=F.exports;h()(F,{VCard:d["a"],VCardText:c["c"],VCol:u["a"],VContainer:p["a"],VImg:m["a"],VListItem:$,VListItemContent:N,VListItemTitle:R,VParallax:W,VRow:J["a"]})}}]);
//# sourceMappingURL=about.62fc83bc.js.map