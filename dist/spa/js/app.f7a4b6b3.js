(()=>{var e={6618:(e,t,o)=>{"use strict";o(8964),o(702);var a=o(1957),n=o(1947),s=o(499),r=o(9835);function i(e,t,o,a,n,s){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i)}const l=(0,r.aZ)({name:"App"});var c=o(1639);const u=(0,c.Z)(l,[["render",i]]),d=u;var p=o(3340),m=o(3746);const g=(0,p.h)((()=>{const e=(0,m.WB)();return e}));var v=o(8339);const h=[{path:"/",component:()=>Promise.all([o.e(736),o.e(177)]).then(o.bind(o,2177)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(690)]).then(o.bind(o,2690))},{path:"/login",component:()=>Promise.all([o.e(736),o.e(462)]).then(o.bind(o,2462))},{path:"/register",component:()=>Promise.all([o.e(736),o.e(356)]).then(o.bind(o,6356))}]},{path:"/game",component:()=>Promise.all([o.e(736),o.e(948)]).then(o.bind(o,2948)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(740)]).then(o.bind(o,7740))},{path:"/shop",component:()=>Promise.all([o.e(736),o.e(947)]).then(o.bind(o,4947))},{path:"/chick_house",component:()=>Promise.all([o.e(736),o.e(406)]).then(o.bind(o,406))},{path:"/friends",component:()=>Promise.all([o.e(736),o.e(533)]).then(o.bind(o,3533))}]},{path:"/:catchAll(.*)*",component:()=>o.e(862).then(o.bind(o,1862))}],_=h,b=(0,p.BC)((function(){const e=v.PO,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:_,history:e("/")});return t}));async function f(e,t){const o=e(d);o.use(n.Z,t);const a="function"===typeof g?await g({}):g;o.use(a);const r=(0,s.Xl)("function"===typeof b?await b({store:a}):b);return a.use((({store:e})=>{e.router=r})),{app:o,store:a,router:r}}var w=o(4006),y=o(4328),x=o(6950);const k={config:{},plugins:{Cookies:w.Z,Notify:y.Z,Loading:x.Z}},Z="/";async function C({app:e,router:t,store:o},a){let n=!1;const s=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},r=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t)},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<a.length;c++)try{await a[c]({app:e,router:t,store:o,ssrContext:null,redirect:r,urlPath:i,publicPath:Z})}catch(l){return l&&l.url?void r(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}f(a.ri,k).then((e=>Promise.all([Promise.resolve().then(o.bind(o,1569)),Promise.resolve().then(o.bind(o,6927)),Promise.resolve().then(o.bind(o,8027))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,o)}))))},1569:(e,t,o)=>{"use strict";o.r(t),o.d(t,{api:()=>i,default:()=>l});var a=o(3340),n=o(9981),s=o.n(n),r=o(4006);const i=s().create({baseURL:"https://astraz.ru"}),l=(0,a.xr)((({app:e,ssrContext:t})=>{const o=r.Z;let a=o.get("auth_token");console.log("before",i.defaults.headers.common),a?(console.log("Token exists axios"),i.defaults.headers.common["Authorization"]="Token "+a):(i.defaults.headers.common["Authorization"]=null,o.remove("auth_token")),console.log("after",i.defaults.headers.common)}))},8027:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var a=o(3340);const n={"pin-code":o(2321).Z,"top-bar":o(7256).Z,"chick-house":o(5660).Z,"shop-btn":o(6519).Z,"build-btn":o(8616).Z,"friends-btn":o(4189).Z,incubator:o(4043).Z,"power-line":o(7240).Z,"incubator-egg":o(4583).Z,coin:o(7199).Z,"money-table":o(4377).Z},s=(0,a.xr)((({app:e})=>{for(const t in n)e.component(t,n[t])}))},6927:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var a=o(3340),n=o(4006),s=o(6928),r=o(1345),i=o(4974);const l=(0,a.xr)((async({app:e,ssrContext:t,store:o})=>{const a=(0,s.t)(o),l=(0,r.a)(o),c=(0,i.T)(o),u=n.Z;let d=u.get("auth_token");d&&(console.log("Token exists init"),await a.getUser(),await l.get_settings(),await c.connectWS(a.user.id)),e.config.globalProperties.$auth=a.$state,e.config.globalProperties.$shop=l.$state.shop}))},7270:(e,t,o)=>{"use strict";o.d(t,{d:()=>n});var a=o(4328);function n(e,t){a.Z.create({message:t,timeout:3e3,html:!0,color:e,position:"bottom"})}},6928:(e,t,o)=>{"use strict";o.d(t,{t:()=>p});var a=o(499),n=o(3746),s=o(1569),r=o(4006),i=o(4328),l=o(8346),c=o(1345),u=o(4974),d=o(8339);const p=(0,n.Q_)("auth",(()=>{let e=(0,a.iH)({});const t=(0,a.iH)(!1),o=((0,d.tv)(),(0,c.a)()),n=(0,u.T)();async function p(){await s.api.post("/auth/token/logout/"),s.api.defaults.headers.common.Authorization=null,r.Z.remove("auth_token"),this.router.go("/")}function m(e){let t=this;s.api.post("/auth/token/login/",e).then((async function(e){console.log(e),r.Z.set("auth_token",e.data.auth_token),s.api.defaults.headers.common.Authorization="Token "+e.data.auth_token,i.Z.create({message:"Успешная авторизация",color:"positive",position:l.Z.lt.sm?"bottom":"bottom-right"}),await t.getUser(),await n.connectWS(t.user.id),t.router.push("/game")})).catch((function(e){console.log(e),i.Z.create({message:e.response.data.non_field_errors,html:!0,color:"red",position:l.Z.lt.sm?"bottom":"bottom-right"})}))}async function g(){let e;console.log("get user"),console.log(s.api.defaults.headers.common.Authorization);try{e=await s.api.get("/api/user/me/"),this.loggedIn=!0,this.user=e.data,await o.get_settings(),console.log("get user done")}catch(t){return s.api.defaults.headers.common.Authorization=null,r.Z.remove("auth_token"),this.loggedIn=!1,void(this.user={})}}return{user:e,loginUser:m,getUser:g,loggedIn:t,logoutUser:p}}))},1345:(e,t,o)=>{"use strict";o.d(t,{a:()=>s});var a=o(3746),n=o(1569);const s=(0,a.Q_)("data_state",{state:()=>({shop:[],build_modal_visible:!1,buy_modal_visible:!1,amounts:[]}),actions:{async get_history(){const e=await n.api.get("/api/user/get_history");this.amounts=e.data},async get_settings(){const e=await n.api.get("/api/data/shop");this.shop=e.data,await this.get_history()},toggle_build_modal(){this.build_modal_visible=!this.build_modal_visible},toggle_buy_modal(){this.buy_modal_visible=!this.buy_modal_visible}}})},4974:(e,t,o)=>{"use strict";o.d(t,{T:()=>i});var a=o(3746),n=o(4328),s=o(8346),r=o(1345);const i=(0,a.Q_)("ws",(()=>{let e=null;const t=(0,r.a)();async function o(o){return e=new WebSocket("wss://astraz.ru/ws/user/online"),e.onopen=()=>{console.log("connected as",o),e.send(JSON.stringify({user_id:o,message:"user online"})),e.onmessage=async e=>{console.log("message",JSON.parse(e.data));let o=JSON.parse(e.data);n.Z.create({message:o.message,color:o.event,html:!0,position:s.Z.lt.sm?"bottom":"bottom-right"}),await t.get_history()}},Promise.resolve("Success")}return{connectWS:o}}))},2321:(e,t,o)=>{"use strict";o.d(t,{Z:()=>_});o(8964),o(2809);var a=o(9835),n=o(6970),s=o(499),r=o(7270);const i={key:0,class:"text-center text-weight-medium text-ub text-negative text-outline"},l={key:1,class:"text-center q-mt-xl text-weight-medium text-ub text-negative text-outline text-h6"},c={class:"text-center q-mb-md"},u={class:"number-grid"},d={class:"number"},p={__name:"PinCode",props:{showDigits:Boolean},emits:["pincode_ready"],setup(e,{emit:t}){const o=e;let p=(0,s.iH)([11,11,11,11]),m=(0,s.iH)([11,11,11,11]),g=(0,s.iH)(0),v=(0,s.iH)("init");const h=(0,s.iH)([1,2,3,4,5,6,7,8,9,0]);function _(){0!==g.value&&("init"===v.value?p.value[g.value-1]=11:m.value[g.value-1]=11,g.value-=1)}function b(e){if(console.log(),g.value<=3&&("init"===v.value?p.value[g.value]=e:m.value[g.value]=e,g.value+=1),4===g.value)if(o.showDigits)if("init"===v.value)v.value="repeat",g.value=0;else{const e=p.value.join(),o=m.value.join();console.log(e),console.log(o),console.log(e===o),e===o?t("pincode_ready",p.value.join().replaceAll(",","")):(v.value="init",g.value=0,p.value=[11,11,11,11],m.value=[11,11,11,11],(0,r.d)("negative","Пинкоды не совпадают"))}else t("pincode_ready",p.value.join().replaceAll(",",""))}return(t,o)=>{const r=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.showDigits?((0,a.wg)(),(0,a.iD)("p",i,(0,n.zw)("init"===(0,s.SU)(v)?"Придумайте пинкод":"Повторите пинкод"),1)):((0,a.wg)(),(0,a.iD)("p",l,"Введите пинкод")),(0,a._)("div",c,[e.showDigits?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)("init"===(0,s.SU)(v)?(0,s.SU)(p):(0,s.SU)(m),((e,t)=>((0,a.wg)(),(0,a.j4)(r,{size:"15px",round:"",outline:"",flat:"",disable:"",key:"init"===(0,s.SU)(v)?t:t+30,class:"text-ub text-negative text-outline",label:11===e?"⚬":e},null,8,["label"])))),128)):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)((0,s.SU)(p),(e=>((0,a.wg)(),(0,a.j4)(r,{size:"20px",class:"text-ub text-negative text-outline",flat:"",round:"",outline:"",disable:"",key:e,label:11===e?"":"*"},null,8,["label"])))),128))]),(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.value,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"number",key:e},[(0,a.Wm)(r,{onClick:t=>b(e),size:"18px",round:"",unelevated:"",color:"negative",class:"text-ub",label:e},null,8,["onClick","label"])])))),128)),(0,a._)("div",d,[(0,a.Wm)(r,{onClick:_,size:"18px",round:"",unelevated:"",color:"negative",class:"text-ub",icon:"chevron_left"})])])],64)}}};var m=o(7065),g=o(9984),v=o.n(g);const h=p,_=h;v()(p,"components",{QBtn:m.Z})},8616:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});o(702);var a=o(9835),n=o(499),s=o(7194),r=o.n(s),i=o(1345);const l={__name:"Build",setup(e){const t=(0,i.a)();return(e,o)=>((0,a.wg)(),(0,a.iD)("img",{draggable:"false",onClick:o[0]||(o[0]=(...e)=>(0,n.SU)(t).toggle_build_modal&&(0,n.SU)(t).toggle_build_modal(...e)),class:"btn",src:r(),alt:""}))}};var c=o(1639);const u=(0,c.Z)(l,[["__scopeId","data-v-fd1778d2"]]),d=u},5660:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(9835);const n={key:0,class:"chick-house"},s=["src"],r={__name:"ChickHouse",props:["image"],setup(e){return(e,t)=>e.$auth.user.chick_house?((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("img",{draggable:"false",onClick:t[0]||(t[0]=t=>e.$router.push("/chick_house")),class:"cursor-pointer",src:e.$auth.user.chick_house.image},null,8,s)])):(0,a.kq)("",!0)}},i=r,l=i},7199:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var a=o(9835),n=o(6970),s=o(1569),r=o(7270),i=o(499),l=o(6928);const c=e=>((0,a.dD)("data-v-6866280d"),e=e(),(0,a.Cn)(),e),u={class:"front jump"},d=c((()=>(0,a._)("div",{class:"star"},null,-1))),p={class:"shapes"},m={__name:"Coin",props:["amount","type","id"],setup(e){const t=e,o=(0,l.t)(),c=(0,i.iH)(!1);async function m(){c.value=!c.value;const e=await s.api.post("/api/data/mine",{type:t.type,id:t.id});e.data.status?(0,r.d)("positive",e.data.message):(0,r.d)("negative",e.data.message),await o.getUser(),c.value=!c.value}return(t,o)=>((0,a.wg)(),(0,a.iD)("div",{onClick:m,class:"coin"},[(0,a._)("div",u,[d,(0,a._)("div",p,[(0,a._)("span",null,(0,n.zw)(e.amount),1)])])]))}};var g=o(1639);const v=(0,g.Z)(m,[["__scopeId","data-v-6866280d"]]),h=v},4189:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var a=o(9835),n=o(6940),s=o.n(n),r=o(1345);const i={__name:"Friends",setup(e){(0,r.a)();return(e,t)=>((0,a.wg)(),(0,a.iD)("img",{draggable:"false",onClick:t[0]||(t[0]=t=>e.$router.push("/friends")),class:"btn",src:s(),alt:""}))}};var l=o(1639);const c=(0,l.Z)(i,[["__scopeId","data-v-0169b0c2"]]),u=c},4043:(e,t,o)=>{"use strict";o.d(t,{Z:()=>x});var a=o(9835),n=o(499),s=o(6970),r=o(4583),i=o(1569),l=o(7270),c=o(6928);const u={class:"text-normal q-mb-sm text-body1"},d={class:"eggs-grid"},p={__name:"Incubator",props:["item"],setup(e){const t=e,o=(0,c.t)(),p=(0,n.iH)(!1),m=(0,n.iH)(!1),g=(0,a.Fl)((()=>t.item.power_cell_remain>20?"green":t.item.power_cell_remain>16?"yellow":t.item.power_cell_remain>10?"orange":"red"));async function v(e){m.value=!m.value;const t=await i.api.post("/api/data/charge",{id:e});t.data.status&&(0,l.d)("positive",t.data.message),await o.getUser(),m.value=!m.value}return(t,o)=>{const i=(0,a.up)("q-linear-progress"),l=(0,a.up)("q-img"),c=(0,a.up)("q-btn"),h=(0,a.up)("q-card-section"),_=(0,a.up)("q-card"),b=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:"incubator is_active cursor-pointer",onClick:o[0]||(o[0]=e=>p.value=!0)},[(0,a.Wm)(i,{class:"q-mb-sm",size:"xs",value:e.item.power_cell_remain/24,color:(0,n.SU)(g)},null,8,["value","color"]),(0,a.Wm)(l,{src:e.item.incubator.image},null,8,["src"])]),(0,a.Wm)(b,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{style:{width:"700px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a._)("p",u,"Уровень заряда "+(0,s.zw)(e.item.power_cell_remain)+" из 24",1),(0,a.Wm)(i,{class:"q-mb-sm",size:"sm",value:e.item.power_cell_remain/24,color:(0,n.SU)(g)},null,8,["value","color"]),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item.eggs,((e,t)=>((0,a.wg)(),(0,a.j4)((0,n.SU)(r.Z),{item:e,key:t},null,8,["item"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item.incubator.can_have_eggs-e.item.eggs.length,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"empty_place",key:e})))),128))]),e.item.power_cell_remain<24?((0,a.wg)(),(0,a.j4)(c,{key:0,flat:"",loading:m.value,color:"negative",onClick:o[1]||(o[1]=t=>v(e.item.id)),class:"no-margin text-ub text-negative text-center cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Зарядить за "+(0,s.zw)(0===e.item.power_cell_remain?e.item.incubator.power_cell_volume*e.item.incubator.power_cell_cost:(e.item.incubator.power_cell_volume-e.item.power_cell_remain)*e.item.incubator.power_cell_cost),1)])),_:1},8,["loading"])):(0,a.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var m=o(8289),g=o(335),v=o(3706),h=o(4458),_=o(3190),b=o(7065),f=o(9984),w=o.n(f);const y=p,x=y;w()(p,"components",{QLinearProgress:m.Z,QImg:g.Z,QDialog:v.Z,QCard:h.Z,QCardSection:_.Z,QBtn:b.Z})},4583:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var a=o(9835),n=o(499),s=o(6970),r=o(7199);const i={class:"egg"},l=["src"],c={class:"text-center text-ub text-h6 text-negative"},u={class:"text-center text-normal"},d={class:"text-center text-normal"},p={__name:"IncubatorEgg",props:["item"],setup(e){const t=(0,n.iH)(!1);return(o,p)=>{const m=(0,a.up)("q-card-section"),g=(0,a.up)("q-card"),v=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a._)("img",{onClick:p[0]||(p[0]=e=>t.value=!0),class:"cursor-pointer",draggable:"false",src:e.item.egg.image_top,alt:""},null,8,l),e.item.minined>0?((0,a.wg)(),(0,a.j4)((0,n.SU)(r.Z),{key:0,type:"egg",id:e.item.id,amount:parseFloat(e.item.minined).toFixed(2)},null,8,["id","amount"])):(0,a.kq)("",!0)]),(0,a.Wm)(v,{modelValue:t.value,"onUpdate:modelValue":p[1]||(p[1]=e=>t.value=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{style:{width:"500px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a._)("p",c,(0,s.zw)(e.item.egg.name),1),(0,a._)("p",u,"Вылупится "+(0,s.zw)(new Date(e.item.time_to_go).toLocaleDateString()),1),(0,a._)("p",d,"Токенов "+(0,s.zw)(e.item.minined),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var m=o(3706),g=o(4458),v=o(3190),h=o(9984),_=o.n(h);const b=p,f=b;_()(p,"components",{QDialog:m.Z,QCard:g.Z,QCardSection:v.Z})},7240:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var a=o(9835);const n={__name:"PowerLine",props:["cells_left","size"],setup(e){return(t,o)=>{const n=(0,a.up)("q-linear-progress");return(0,a.wg)(),(0,a.j4)(n,{size:e.size,value:e.cells_left/24,color:[e.cells_left<20?"red":"green"]},null,8,["size","value","color"])}}};var s=o(8289),r=o(9984),i=o.n(r);const l=n,c=l;i()(n,"components",{QLinearProgress:s.Z})},6519:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var a=o(9835),n=o(5893),s=o.n(n);const r={__name:"Shop",props:["image"],setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("img",{onClick:t[0]||(t[0]=t=>e.$router.push("/shop")),draggable:"false",class:"btn",src:s(),alt:""}))}};var i=o(1639);const l=(0,i.Z)(r,[["__scopeId","data-v-6ebca337"]]),c=l},4377:(e,t,o)=>{"use strict";o.d(t,{Z:()=>_});var a=o(9835),n=o(499),s=o(6970),r=o(1345);const i={class:"money-table"},l={class:"money-table-inner"},c={__name:"Table",setup(e){const t=(0,r.a)();return(e,o)=>{const r=(0,a.up)("q-item"),c=(0,a.up)("q-list"),u=(0,a.up)("q-scroll-area");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",l,[(0,a.Wm)(u,{style:{height:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(t).amounts,(e=>((0,a.wg)(),(0,a.j4)(r,{key:e.id},{default:(0,a.w5)((()=>[(0,a._)("p",{class:(0,s.C_)([[e.is_income?"text-positive":"text-negative"],"no-margin text-ub text-caption"])}," Пользователь "+(0,s.zw)(e.user.fio)+" "+(0,s.zw)(e.is_income?"пополнил баланс на":"вывел на RUPAY")+" "+(0,s.zw)(e.amount)+" CBT",3)])),_:2},1024)))),128))])),_:1})])),_:1})])])}}};var u=o(1639),d=o(8144),p=o(3246),m=o(490),g=o(9984),v=o.n(g);const h=(0,u.Z)(c,[["__scopeId","data-v-204c8380"]]),_=h;v()(c,"components",{QScrollArea:d.Z,QList:p.Z,QItem:m.Z})},7256:(e,t,o)=>{"use strict";o.d(t,{Z:()=>b});var a=o(9835),n=o(6970),s=o(499),r=o(5054),i=o(1345);const l=(0,a._)("div",{class:"q-pt-md"},null,-1),c={class:"topbar"},u={class:"no-margin text-negative text-ub text-center"},d={class:"no-margin text-positive text-ub text-center"},p={class:"buttons q-gutter-md text-center"},m={__name:"TopBar",setup(e){(0,i.a)();let t=(0,s.iH)(!1);function o(e){console.log("dd"),(0,r.Z)(e).then((()=>{t.value=!0})).catch((e=>{console.log(e)}))}return(e,r)=>{const i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("div",c,[(0,a._)("p",u,"Баланс токенов: "+(0,n.zw)(e.$auth.user.balance),1),(0,a._)("p",d,"Ваш реферальный код: "+(0,n.zw)(e.$auth.user.own_reffer_code),1)]),(0,a._)("div",p,[(0,a.Wm)(i,{"no-caps":"",unelevated:"",color:"positive",class:"text-ub",onClick:r[0]||(r[0]=t=>o(e.$auth.user.own_reffer_code)),rounded:"",label:(0,s.SU)(t)?"Скопировано":"Скопировать реф. код"},null,8,["label"]),(0,a.Wm)(i,{"no-caps":"",unelevated:"",color:"negative",class:"text-ub",rounded:"",label:"Вывести токены"})])],64)}}};var g=o(7065),v=o(9984),h=o.n(v);const _=m,b=_;h()(m,"components",{QBtn:g.Z})},7194:(e,t,o)=>{e.exports=o.p+"img/build.bf83aca5.webp"},6940:(e,t,o)=>{e.exports=o.p+"img/friends.4ca127b7.png"},5893:(e,t,o)=>{e.exports=o.p+"img/shop.23764722.webp"}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(t,a,n,s)=>{if(!a){var r=1/0;for(u=0;u<e.length;u++){for(var[a,n,s]=e[u],i=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,n,s]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{177:"3b9888c7",356:"372bc726",406:"323a6915",462:"aae9cc1c",533:"eca4ae34",690:"f39cbcbc",740:"a131212a",862:"0fa78759",947:"096e9511",948:"38f3e759"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"dff88b5b",177:"6d2364b5",356:"8256ca9a",406:"83d31b97",462:"6772a2ff",533:"63770d95",690:"89910f8d",736:"ddd1a28b",740:"0213d281",947:"3f3950d3"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="chicken-bro:";o.l=(a,n,s,r)=>{if(e[a])e[a].push(n);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=a),e[a]=[n];var p=(t,o)=>{i.onerror=i.onload=null,clearTimeout(m);var n=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/"})(),(()=>{var e=(e,t,o,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=s=>{if(n.onerror=n.onload=null,"load"===s.type)o();else{var r=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,n.parentNode.removeChild(n),a(l)}};return n.onerror=n.onload=s,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var n=o[a],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){n=r[a],s=n.getAttribute("data-href");if(s===e||s===t)return n}},a=a=>new Promise(((n,s)=>{var r=o.miniCssF(a),i=o.p+r;if(t(r,i))return n();e(a,i,n,s)})),n={143:0};o.f.miniCss=(e,t)=>{var o={177:1,356:1,406:1,462:1,533:1,690:1,740:1,947:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=a(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var s=new Promise(((o,a)=>n=e[t]=[o,a]));a.push(n[2]=s);var r=o.p+o.u(t),i=new Error,l=a=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,n[1](i)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var n,s,[r,i,l]=a,c=0;if(r.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var u=l(o)}for(t&&t(a);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},a=globalThis["webpackChunkchicken_bro"]=globalThis["webpackChunkchicken_bro"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(6618)));a=o.O(a)})();