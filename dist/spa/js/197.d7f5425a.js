(globalThis["webpackChunkchicken_bro"]=globalThis["webpackChunkchicken_bro"]||[]).push([[197],{6197:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>N});var s=l(9835),i=l(6970),u=l(499),a=l(5613),n=l.n(a),o=l(4043),c=l(3703);const r=e=>((0,s.dD)("data-v-c8f7898a"),e=e(),(0,s.Cn)(),e),h={class:"table"},m=r((()=>(0,s._)("p",{class:"text-white text-outline-dark text-ub"},[(0,s.Uk)(" Молодец! У тебя все готово для ухода за курами. Теперь тебе нужно купить яйца и поместить их в инкубатор. Из яиц вылупляются цыплята, их тип зависит от типа яиц, которые ты купишь. Подробности ты узнаешь нажав на яйцо, перед покупкой. Но знай, настоящему фермеру нужно знать все о видах куриц, уходом за ними, иначе они могут умереть."),(0,s._)("br"),(0,s._)("br"),(0,s.Uk)(" Всю необходимую информацию, ты можешь получить в книге фермера, которая продается на ярмарке.А можешь и не покупать ее, но тогда ты не будешь знать, какие есть особенности у разных видов кур и их дополнительные потребности.")],-1))),g={class:"text-right"},x={__name:"ChikenHouseTutorial",setup(e){const t=(0,u.iH)(!0);function l(){c.Z.set("chiken_house_tutorial",!0),t.value=!1}return(0,s.wF)((()=>{let e=c.Z.getItem("chiken_house_tutorial");console.log(e),t.value=!e})),(e,i)=>{const u=(0,s.up)("q-btn"),a=(0,s.up)("q-dialog");return(0,s.wg)(),(0,s.j4)(a,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),persistent:""},{default:(0,s.w5)((()=>[(0,s._)("div",h,[m,(0,s._)("div",g,[(0,s.Wm)(u,{onClick:l,class:"text-ub text-h6 text-outline text-negative","no-caps":"",unelevated:"",flat:"",label:"Продолжить игру"})])])])),_:1},8,["modelValue"])}}};var _=l(1639),d=l(2074),p=l(963),v=l(9984),w=l.n(v);const b=(0,_.Z)(x,[["__scopeId","data-v-c8f7898a"]]),k=b;w()(x,"components",{QDialog:d.Z,QBtn:p.Z});var y=l(6928),f=l(8093),j=l(7713);const $={class:"container"},H={class:"house-wrapper"},Z={class:"shop-title flex items-center justify-between"},D=(0,s._)("p",{class:"text-ub text-outline text-h3 text-negative title"},"Ваш курятник",-1),q=(0,s._)("p",null,null,-1),C={class:"items-grid"},W={class:"house-item"},Y=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши инкубаторы, поилки, кормушки",-1),K={class:"house-item-grid"},U={class:"house-item"},Q=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши цыплята",-1),S={class:"house-item-grid"},T={class:"house-item"},I=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши бройлеры",-1),V={class:"house-item-grid"},F={class:"house-item"},A=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши курицы",-1),B={class:"house-item-grid"},O={class:"house-item"},P=(0,s._)("p",{class:"text-ub text-outline text-h6 text-center text-negative title"},"Ваши петухи",-1),z={class:"house-item-grid"},E={components:{Incubator:o.Z,ChikenHouseTutorial:k}},G=Object.assign(E,{__name:"ChickHouse",setup(e){const t=(0,y.t)();return(0,s.wF)((async()=>{await t.getUser()})),(e,t)=>{const l=(0,s.up)("q-scroll-area"),a=(0,s.up)("chick"),c=(0,s.up)("broiler"),r=(0,s.up)("male"),h=(0,s.up)("female"),m=(0,s.up)("q-page");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(m,{class:"house"},{default:(0,s.w5)((()=>[(0,s._)("div",$,[(0,s._)("div",H,[(0,s._)("div",Z,[(0,s._)("img",{onClick:t[0]||(t[0]=t=>e.$router.back()),class:"text-button back-btn",src:n(),alt:""}),D,q]),(0,s._)("div",C,[(0,s._)("div",W,[Y,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",K,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.incubators,((e,t)=>((0,s.wg)(),(0,s.j4)((0,u.SU)(o.Z),{item:e,key:t},null,8,["item"])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.water_pools,((e,t)=>((0,s.wg)(),(0,s.j4)((0,u.SU)(f.Z),{item:e,key:t},null,8,["item"])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.food_pools,((e,t)=>((0,s.wg)(),(0,s.j4)((0,u.SU)(j.Z),{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])]),(0,s._)("div",U,[Q,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.chicks,((e,t)=>((0,s.wg)(),(0,s.j4)(a,{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])]),(0,s._)("div",T,[I,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",V,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.broilers,((e,t)=>((0,s.wg)(),(0,s.j4)(c,{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])]),(0,s._)("div",F,[A,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",B,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.male_crews,((e,t)=>((0,s.wg)(),(0,s.j4)(r,{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])]),(0,s._)("div",O,[P,(0,s.Wm)(l,{style:(0,i.j5)([e.$q.screen.lt.md?"height: 200px":"height: 500px"])},{default:(0,s.w5)((()=>[(0,s._)("div",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$auth.user.female_crews,((e,t)=>((0,s.wg)(),(0,s.j4)(h,{item:e,key:t},null,8,["item"])))),128))])])),_:1},8,["style"])])])])])])),_:1}),(0,s.Wm)(k)],64)}}});var J=l(9885),L=l(6663);const M=G,N=M;w()(G,"components",{QPage:J.Z,QScrollArea:L.Z})},5613:(e,t,l)=>{e.exports=l.p+"img/back.98236efa.png"}}]);