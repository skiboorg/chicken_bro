(globalThis["webpackChunkchicken_bro"]=globalThis["webpackChunkchicken_bro"]||[]).push([[197],{6197:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>J});var s=l(9835),i=l(6970),a=l(499),u=l(5613),n=l.n(u),o=l(4043),c=l(3703);const r=e=>((0,s.dD)("data-v-c8f7898a"),e=e(),(0,s.Cn)(),e),h={class:"table"},_=r((()=>(0,s._)("p",{class:"text-white text-outline-dark text-ub"},[(0,s.Uk)(" Молодец! У тебя все готово для ухода за курами. Теперь тебе нужно купить яйца и поместить их в инкубатор. Из яиц вылупляются цыплята, их тип зависит от типа яиц, которые ты купишь. Подробности ты узнаешь нажав на яйцо, перед покупкой. Но знай, настоящему фермеру нужно знать все о видах куриц, уходом за ними, иначе они могут умереть."),(0,s._)("br"),(0,s._)("br"),(0,s.Uk)(" Всю необходимую информацию, ты можешь получить в книге фермера, которая продается на ярмарке.А можешь и не покупать ее, но тогда ты не будешь знать, какие есть особенности у разных видов кур и их дополнительные потребности.")],-1))),g={class:"text-right"},d={__name:"ChikenHouseTutorial",setup(e){const t=(0,a.iH)(!0);function l(){c.Z.set("chiken_house_tutorial",!0),t.value=!1}return(0,s.wF)((()=>{let e=c.Z.getItem("chiken_house_tutorial");console.log(e),t.value=!e})),(e,i)=>{const a=(0,s.up)("q-btn"),u=(0,s.up)("q-dialog");return(0,s.wg)(),(0,s.j4)(u,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),persistent:""},{default:(0,s.w5)((()=>[(0,s._)("div",h,[_,(0,s._)("div",g,[(0,s.Wm)(a,{onClick:l,class:"text-ub text-h6 text-outline text-negative","no-caps":"",unelevated:"",flat:"",label:"Продолжить игру"})])])])),_:1},8,["modelValue"])}}};var p=l(1639),m=l(2074),x=l(7065),v=l(9984),b=l.n(v);const w=(0,p.Z)(d,[["__scopeId","data-v-c8f7898a"]]),k=w;b()(d,"components",{QDialog:m.Z,QBtn:x.Z});var f=l(6928),y=l(8093),j=l(7713);const Z={class:"container"},H={class:"house-wrapper"},$={class:"shop-title flex items-center justify-between"},q=(0,s._)("p",{class:"text-ub text-outline text-h3 text-negative title"},"Ваш курятник",-1),C=(0,s._)("p",null,null,-1),D={class:"row q-col-gutter-lg"},U={class:"col-4"},W={class:"house-item"},Y=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши инкубаторы, поилки, кормушки",-1),K={class:"house-item-grid"},Q={class:"col-4"},S={class:"house-item"},T=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши цыплята",-1),I={class:"house-item-grid"},V={class:"col-4"},F={class:"house-item"},A=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши бройлеры",-1),B={class:"house-item-grid"},O={components:{Incubator:o.Z,ChikenHouseTutorial:k}},P=Object.assign(O,{__name:"ChickHouse",setup(e){const t=(0,f.t)();return(0,s.wF)((async()=>{await t.getUser()})),(e,t)=>{const l=(0,s.up)("q-scroll-area"),u=(0,s.up)("chick"),c=(0,s.up)("broiler"),r=(0,s.up)("q-page");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{class:"house"},{default:(0,s.w5)((()=>[(0,s._)("div",Z,[(0,s._)("div",H,[(0,s._)("div",$,[(0,s._)("img",{onClick:t[0]||(t[0]=t=>e.$router.back()),class:"text-button back-btn",src:n(),alt:""}),q,C]),(0,s._)("div",D,[(0,s._)("div",U,[(0,s._)("div",W,[Y,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",K,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.incubators,((e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(o.Z),{item:e,key:t},null,8,["item"])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.water_pools,((e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(y.Z),{item:e,key:t},null,8,["item"])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.food_pools,((e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(j.Z),{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])])]),(0,s._)("div",Q,[(0,s._)("div",S,[T,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.chicks,((e,t)=>((0,s.wg)(),(0,s.j4)(u,{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])])]),(0,s._)("div",V,[(0,s._)("div",F,[A,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",B,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.broilers,((e,t)=>((0,s.wg)(),(0,s.j4)(c,{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])])])])])])])),_:1}),(0,s.Wm)(k)],64)}}});var z=l(9885),E=l(6663);const G=P,J=G;b()(P,"components",{QPage:z.Z,QScrollArea:E.Z})},5613:(e,t,l)=>{e.exports=l.p+"img/back.98236efa.png"}}]);