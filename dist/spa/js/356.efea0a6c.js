"use strict";(globalThis["webpackChunkchicken_bro"]=globalThis["webpackChunkchicken_bro"]||[]).push([[356],{6356:(e,l,t)=>{t.r(l),t.d(l,{default:()=>j});var a=t(9835),s=t(499),n=t(6928),o=t(8339),i=t(1569),u=t(7270);const c=e=>((0,a.dD)("data-v-57ff1477"),e=e(),(0,a.Cn)(),e),d={class:"container"},r={class:"row full-height-vh"},m={class:"col-12 col-sm-6 offset-3 flex column items-center justify-start justify-md-center"},v={class:"menu flex column justify-center relative-position"},p={key:0,class:"first-step"},g=c((()=>(0,a._)("p",{class:"text-negative text-ub text-outline text-caption q-mb-xs q-mt-md"},"Адрес кошелька RUPAY",-1))),w=c((()=>(0,a._)("p",{class:"q-mb-xs text-negative text-ub text-outline text-caption"},"Ваш E-mail",-1))),f=c((()=>(0,a._)("p",{class:"q-mb-xs text-negative text-ub text-outline text-caption"},"Реферальный код",-1))),b=c((()=>(0,a._)("p",{class:"text-ub text-positive text-outline text-center text-h5 no-margin"},"Далее",-1))),x=[b],_={__name:"Register",setup(e){(0,n.t)();const l=(0,o.tv)();u.d;let t=(0,s.iH)({wallet:null,password:null,email:null,reffer_code:null});const c=(0,s.iH)(!1),b=(0,s.iH)(!1);let _=(0,s.iH)({email_re:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,is_loading:!1,isPwd:!0});const h=()=>{t.value.email=t.value.email.toLowerCase()};async function q(){b.value=!b.value;const e=await i.api.post("/api/user/check_address",{wallet:t.value.wallet});console.log(e.data.success),e.data.success?_.value.email_re.test(String(t.value.email))?c.value=!0:((0,u.d)("negative","Адрес E-mail некоректный"),c.value=!1):(0,u.d)(e.data.color,e.data.message),b.value=!b.value}async function k(e){b.value=!b.value,t.value.password=e,h(),console.log(t.value.password),i.api.post("/auth/users/",{email:t.value.email,password:t.value.password,wallet:t.value.wallet,reffer_code:t.value.reffer_code}).then((e=>{(0,u.d)("positive","Регистрация прошла успешно"),l.push("/login")})).catch((e=>{e.response&&(0,u.d)("negative",JSON.stringify(e.response.data))})),b.value=!b.value}return(e,l)=>{const n=(0,a.up)("q-spinner"),o=(0,a.up)("q-inner-loading"),i=(0,a.up)("q-input"),u=(0,a.up)("pin-code"),_=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o,{dark:"",showing:b.value,class:"z-max"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{size:"50px",color:"negative"})])),_:1},8,["showing"]),(0,a._)("div",d,[(0,a._)("div",r,[(0,a._)("div",m,[(0,a._)("div",v,[c.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",p,[g,(0,a.Wm)(i,{dense:e.$q.screen.lt.md,clearable:"",outlined:"","bg-color":"white",color:"negative",class:"full-width q-mb-md q-mb-sm-xs",modelValue:(0,s.SU)(t).wallet,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,s.SU)(t).wallet=e)},null,8,["dense","modelValue"]),w,(0,a.Wm)(i,{dense:e.$q.screen.lt.md,clearable:"",outlined:"","bg-color":"white",color:"negative",class:"full-width q-mb-md q-mb-sm-xs",modelValue:(0,s.SU)(t).email,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,s.SU)(t).email=e)},null,8,["dense","modelValue"]),f,(0,a.Wm)(i,{dense:e.$q.screen.lt.md,clearable:"",outlined:"","bg-color":"white",color:"negative",class:"full-width q-mb-md q-mb-sm-xs",modelValue:(0,s.SU)(t).reffer_code,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,s.SU)(t).reffer_code=e)},null,8,["dense","modelValue"]),(0,s.SU)(t).wallet?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:q,class:"btn-link text-button q-mb-sm next-btn"},x)):(0,a.kq)("",!0)])),c.value?((0,a.wg)(),(0,a.j4)(u,{key:1,showDigits:!0,onPincode_ready:k})):(0,a.kq)("",!0)])])])])])),_:1})}}};var h=t(1639),q=t(9885),k=t(854),U=t(3902),y=t(2547),S=t(9984),V=t.n(S);const Z=(0,h.Z)(_,[["__scopeId","data-v-57ff1477"]]),j=Z;V()(_,"components",{QPage:q.Z,QInnerLoading:k.Z,QSpinner:U.Z,QInput:y.Z})}}]);