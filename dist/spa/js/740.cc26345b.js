"use strict";(globalThis["webpackChunkchicken_bro"]=globalThis["webpackChunkchicken_bro"]||[]).push([[740],{7740:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var s=a(9835),l=a(1345),i=a(499),o=a(6970),u=a(6928),n=a(1569),c=a(7270);const d={class:"table"},r={class:"row q-col-gutter-md"},x={class:"col-12 col-sm-7"},p={class:"text-ub text-negative text-body1 text-outline text-center"},m=(0,s._)("p",{class:"text-ub text-white text-body1 q-mb-xs text-outline-dark"},"Может вмещать в себе одновременно до",-1),b={class:"text-ub text-white q-mb-xs text-outline-dark"},_={class:"text-ub text-white q-mb-xs text-outline-dark"},w={class:"text-ub text-white q-mb-xs text-outline-dark"},g={class:"text-ub text-white q-mb-xs text-outline-dark"},h={class:"text-ub text-white q-mb-xs text-outline-dark"},v={key:0},k=["onClick"],y={key:1,class:"text-ub text-negative text-h6 text-outline"},f={key:1},q=["onClick"],C={class:"col-12 col-sm-5"},U={__name:"Build",setup(e){const t=(0,l.a)(),a=(0,u.t)(),U=(0,i.iH)(0),Z=(0,i.iH)(!1);async function z(e){Z.value=!Z.value;const t=await n.api.post("/api/data/buy",{item:"chick_house",id:e});t.data.status&&(0,c.d)("positive",t.data.message),await a.getUser(),Z.value=!Z.value,t.data.success}return(e,a)=>{const l=(0,s.up)("q-btn"),u=(0,s.up)("q-img"),n=(0,s.up)("q-carousel-slide"),c=(0,s.up)("q-carousel"),Z=(0,s.up)("q-dialog"),D=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(Z,{modelValue:(0,i.SU)(t).build_modal_visible,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,i.SU)(t).build_modal_visible=e)},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s._)("p",{onClick:a[0]||(a[0]=t=>e.$refs.carousel.next()),class:"title text-ub text-outline text-negative no-margin text-center text-h6"},"Что будем строить?"),(0,s.wy)((0,s.Wm)(l,{icon:"close",flat:"",color:"negative",round:"",class:"close-btn"},null,512),[[D]]),(0,s.Wm)(c,{modelValue:U.value,"onUpdate:modelValue":a[1]||(a[1]=e=>U.value=e),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"",class:"slider",ref:"carousel",infinite:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(t).shop.chick_houses,((t,a)=>((0,s.wg)(),(0,s.j4)(n,{name:a,key:a},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s._)("div",x,[(0,s._)("p",p,(0,o.zw)(t.name),1),m,(0,s._)("p",b,(0,o.zw)(t.max_incubators)+" инкубаторов",1),(0,s._)("p",_,(0,o.zw)(t.max_chicks)+" циплят",1),(0,s._)("p",w,(0,o.zw)(t.max_broiler)+" бройлеров",1),(0,s._)("p",g,(0,o.zw)(t.max_chickens)+" куриц",1),(0,s._)("p",h,(0,o.zw)(t.max_cocks)+" петухов",1),e.$auth.user.chick_house?((0,s.wg)(),(0,s.iD)("div",v,[e.$auth.user.chick_house.id!==t.id?((0,s.wg)(),(0,s.iD)("p",{key:0,onClick:e=>z(t.id),class:"text-ub text-negative text-h6 text-outline text-button"},"Построить за "+(0,o.zw)(t.price),9,k)):((0,s.wg)(),(0,s.iD)("p",y,"Построен"))])):((0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("p",{onClick:e=>z(t.id),class:"text-ub text-negative text-h6 text-outline text-button"},"Построить за "+(0,o.zw)(t.price),9,q)]))]),(0,s._)("div",C,[(0,s.Wm)(u,{src:t.shop_image},null,8,["src"])])])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"])}}};var Z=a(3706),z=a(8556),D=a(960),Q=a(1694),V=a(335),W=a(2146),S=a(9984),j=a.n(S);const B=U,H=B;j()(U,"components",{QDialog:Z.Z,QBtn:z.Z,QCarousel:D.Z,QCarouselSlide:Q.Z,QImg:V.Z}),j()(U,"directives",{ClosePopup:W.Z});const P=e=>((0,s.dD)("data-v-2748d55f"),e=e(),(0,s.Cn)(),e),I={class:"table"},$={class:"flex items-center justify-between"},M=P((()=>(0,s._)("p",{class:"no-margin text-white text-ub"},"Ваш баланс токенов ChikenBro в сети RUPAY",-1))),T={key:0,class:"no-margin text-negative text-ub"},Y={__name:"Buy",setup(e){const t=(0,l.a)(),a=((0,u.t)(),(0,i.iH)(0),(0,i.iH)(!1),(0,i.iH)(null));async function c(){const e=await n.api.get("/api/user/get_balance");console.log(e.data),a.value=e.data.balance}return(e,l)=>{const u=(0,s.up)("q-skeleton"),n=(0,s.up)("q-dialog");return(0,s.wg)(),(0,s.j4)(n,{modelValue:(0,i.SU)(t).buy_modal_visible,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,i.SU)(t).buy_modal_visible=e),onBeforeShow:c},{default:(0,s.w5)((()=>[(0,s._)("div",I,[(0,s._)("div",$,[M,a.value?((0,s.wg)(),(0,s.iD)("p",T,(0,o.zw)(a.value),1)):((0,s.wg)(),(0,s.j4)(u,{key:1,width:"100px"}))])])])),_:1},8,["modelValue"])}}};var A=a(1639),K=a(7133);const O=(0,A.Z)(Y,[["__scopeId","data-v-2748d55f"]]),R=O;j()(Y,"components",{QDialog:Z.Z,QSkeleton:K.ZP});const E={components:{BuildModal:H,BuyModal:R}},F=Object.assign(E,{__name:"Index",setup(e){(0,l.a)();return(e,t)=>{const a=(0,s.up)("top-bar"),l=(0,s.up)("chick-house"),i=(0,s.up)("shop-btn"),o=(0,s.up)("build-btn"),u=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(u,{class:"game"},{default:(0,s.w5)((()=>[(0,s.Wm)(a),(0,s.Wm)(l),(0,s.Wm)(i),(0,s.Wm)(o),(0,s.Wm)(H),(0,s.Wm)(R)])),_:1})}}});var G=a(9885);const J=F,L=J;j()(F,"components",{QPage:G.Z})}}]);