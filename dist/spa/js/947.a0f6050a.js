(globalThis["webpackChunkchicken_bro"]=globalThis["webpackChunkchicken_bro"]||[]).push([[947],{4947:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>oe});t(702);var l=t(9835),n=t(6970),s=t(499),o=t(5613),i=t.n(o),r=t(1569),c=t(7270),u=t(6928),p=t(1345);const g={class:"container shop-wrapper"},_={class:"shop-title flex items-center justify-between"},v=(0,l._)("p",{class:"text-ub text-outline text-h3 text-negative title"},"Сельская ярмарка",-1),m=(0,l._)("p",null,null,-1),d={class:"shop-inner"},x={class:"row items-end"},b={class:"col-3"},w={class:"arrows"},k={class:"arrows-wrapper"},h={class:"col-9"},f={class:"larek",id:"test"},y={class:"larek-grid"},C={key:0,class:"bg-white q-pa-sm"},z={class:"no-margin text-normal"},F={class:"no-margin text-normal"},q={class:"no-margin text-normal"},U={class:"no-margin text-normal"},D={class:"text-normal"},H=(0,l.Uk)("Купить"),T=["innerHTML"],$={key:1,class:"bg-white q-pa-sm"},j={class:"no-margin text-normal"},L={class:"no-margin text-normal"},M={class:"no-margin text-normal"},S={class:"no-margin text-normal"},P={class:"text-normal"},Q=(0,l.Uk)("Купить"),W=["innerHTML"],Z={key:2,class:"bg-white q-pa-sm"},B={class:"no-margin text-normal"},K={class:"no-margin text-normal"},Y={class:"no-margin text-normal"},A={class:"text-normal"},E=(0,l.Uk)("Купить"),G={key:3,class:"bg-white q-pa-sm"},I={class:"no-margin text-normal"},J={class:"no-margin text-normal"},N={class:"no-margin text-normal"},O={class:"text-normal"},R=(0,l.Uk)("Купить"),V=["src"],X={__name:"Shop",setup(e){const a=(0,u.t)(),t=(0,p.a)(),o=(0,s.iH)(!1),X=(0,s.iH)("eggs"),ee=(0,s.iH)("");(0,l.wF)((async()=>{await a.getUser()}));const ae=(0,l.Fl)((()=>(ee.value="Покупка невозможна",0!==a.user.chick_house.length||(ee.value+="<br>Купите курятник",!1)))),te=(0,l.Fl)((()=>{if(ee.value="Покупка невозможна",a.user.chick_house&&a.user.incubators.length>0){let e=0,t=0;for(let l of a.user.incubators)t+=l.incubator.can_have_eggs,e+=l.eggs.length;return console.log("eggs_total_can_in",t),console.log("eggs_in",e),t>e||(ee.value+="<br>Не хватает места в инкубаторах<br>Докупите инкубатор или<br> подождите пока созревают яйца",!1)}return a.user.chick_house||(ee.value+="<br>Купите курятник"),0===a.user.incubators.length&&(ee.value+="<br>Купите инкубатор"),!1}));async function le(e,t){o.value=!o.value;const l=await r.api.post("/api/data/buy",{item:e,id:t});l.data.status?(0,c.d)("positive",l.data.message):(0,c.d)("negative",l.data.message),await a.getUser(),o.value=!o.value}return(e,a)=>{const r=(0,l.up)("q-btn"),c=(0,l.up)("q-popup-proxy"),u=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(u,{class:"shop"},{default:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l._)("div",_,[(0,l._)("img",{onClick:a[0]||(a[0]=a=>e.$router.back()),class:"text-button back-btn",src:i(),alt:""}),v,m]),(0,l._)("div",d,[(0,l._)("div",x,[(0,l._)("div",b,[(0,l._)("div",w,[(0,l._)("div",k,[(0,l._)("p",{class:(0,n.C_)(["text-ub no-margin text-negative cursor-pointer text-body1",["eggs"===X.value?"text-outline":""]]),onClick:a[1]||(a[1]=e=>X.value="eggs")},"Яйцо",2),(0,l._)("p",{class:(0,n.C_)(["text-ub no-margin text-negative cursor-pointer text-body1",["incubators"===X.value?"text-outline":""]]),onClick:a[2]||(a[2]=e=>X.value="incubators")},"Инкубаторы",2),(0,l._)("p",{class:(0,n.C_)(["text-ub no-margin text-negative cursor-pointer text-body1",["food_pools"===X.value?"text-outline":""]]),onClick:a[3]||(a[3]=e=>X.value="food_pools")},"Кормушки",2),(0,l._)("p",{class:(0,n.C_)(["text-ub no-margin text-negative cursor-pointer text-body1",["water_pools"===X.value?"text-outline":""]]),onClick:a[4]||(a[4]=e=>X.value="water_pools")},"Поилки",2)])])]),(0,l._)("div",h,[(0,l._)("div",f,[(0,l._)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(t).shop[X.value],((a,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"larek-grid__item",key:t},[(0,l.Wm)(c,{class:"popup"},{default:(0,l.w5)((()=>["eggs"===X.value?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("p",z,(0,n.zw)(a.name),1),(0,l._)("p",F,"Остаток на складе: "+(0,n.zw)(a.in_store)+" шт.",1),(0,l._)("p",q,"Период инкубации :"+(0,n.zw)(a.incubation_period)+" день",1),(0,l._)("p",U,"За время инкубации принесет : "+(0,n.zw)(parseFloat(48*a.incubation_mining*a.incubation_period).toFixed(5)),1),(0,l._)("p",D,"Стоимость: "+(0,n.zw)(a.price),1),(0,s.SU)(te)?((0,l.wg)(),(0,l.j4)(r,{key:0,flat:"",loading:o.value,color:"negative",onClick:e=>le(X.value,a.id),disable:parseFloat(a.price)>parseFloat(e.$auth.user.balance),class:"no-margin text-ub text-negative text-center cursor-pointer"},{default:(0,l.w5)((()=>[H])),_:2},1032,["loading","onClick","disable"])):((0,l.wg)(),(0,l.iD)("p",{key:1,class:"no-margin text-ub text-negative text-center cursor-pointer text-caption",innerHTML:ee.value},null,8,T))])):(0,l.kq)("",!0),"incubators"===X.value?((0,l.wg)(),(0,l.iD)("div",$,[(0,l._)("p",j,(0,n.zw)(a.name),1),(0,l._)("p",L,"Вмещает: "+(0,n.zw)(a.can_have_eggs)+" яиц",1),(0,l._)("p",M,"Единиц заряда: "+(0,n.zw)(a.power_cell_volume),1),(0,l._)("p",S,"Стоимость единицы заряда: "+(0,n.zw)(a.power_cell_cost),1),(0,l._)("p",P,"Стоимость: "+(0,n.zw)(a.price),1),(0,s.SU)(ae)?((0,l.wg)(),(0,l.j4)(r,{key:0,flat:"",loading:o.value,color:"negative",onClick:e=>le(X.value,a.id),disable:parseFloat(a.price)>parseFloat(e.$auth.user.balance),class:"no-margin text-ub text-negative text-center cursor-pointer"},{default:(0,l.w5)((()=>[Q])),_:2},1032,["loading","onClick","disable"])):((0,l.wg)(),(0,l.iD)("p",{key:1,class:"no-margin text-ub text-negative text-center cursor-pointer text-caption",innerHTML:ee.value},null,8,W))])):(0,l.kq)("",!0),"food_pools"===X.value?((0,l.wg)(),(0,l.iD)("div",Z,[(0,l._)("p",B,(0,n.zw)(a.name),1),(0,l._)("p",K,"Объем "+(0,n.zw)(a.capacity)+" кг",1),(0,l._)("p",Y,"Стоимость единицы наполнения "+(0,n.zw)(a.fill_price)+"/кг",1),(0,l._)("p",A,"Стоимость: "+(0,n.zw)(a.price),1),(0,l.Wm)(r,{flat:"",loading:o.value,color:"negative",onClick:e=>le(X.value,a.id),disable:parseFloat(a.price)>parseFloat(e.$auth.user.balance),class:"no-margin text-ub text-negative text-center cursor-pointer"},{default:(0,l.w5)((()=>[E])),_:2},1032,["loading","onClick","disable"])])):(0,l.kq)("",!0),"water_pools"===X.value?((0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("p",I,(0,n.zw)(a.name),1),(0,l._)("p",J,"Объем "+(0,n.zw)(a.capacity)+" л",1),(0,l._)("p",N,"Стоимость единицы наполнения "+(0,n.zw)(a.fill_price)+"/л",1),(0,l._)("p",O,"Стоимость: "+(0,n.zw)(a.price),1),(0,l.Wm)(r,{flat:"",loading:o.value,color:"negative",onClick:e=>le(X.value,a.id),disable:parseFloat(a.price)>parseFloat(e.$auth.user.balance),class:"no-margin text-ub text-negative text-center cursor-pointer"},{default:(0,l.w5)((()=>[R])),_:2},1032,["loading","onClick","disable"])])):(0,l.kq)("",!0)])),_:2},1024),(0,l._)("img",{class:(0,n.C_)({"goods-item":"food_pools"===X.value||"water_pools"===X.value}),draggable:"false",src:a.image,alt:""},null,10,V)])))),128))])])])])])])])),_:1})}}};var ee=t(9885),ae=t(9133),te=t(963),le=t(9984),ne=t.n(le);const se=X,oe=se;ne()(X,"components",{QPage:ee.Z,QPopupProxy:ae.Z,QBtn:te.Z})},5613:(e,a,t)=>{e.exports=t.p+"img/back.98236efa.png"}}]);