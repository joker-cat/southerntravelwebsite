import{_ as F,o as n,g as st,w as D,b as y,a as e,d as g,r as k,c,F as $,h as C,n as _,t as f,e as x,p as V,f as M,i as ct,j as Z,v as tt,k as et}from"./index-dAmLDw5u.js";import{g as H,S as dt,a as ut,N as pt}from"./navigation-OefU4nWU.js";import{s as m}from"./sweetAlert-nHWjwbvj.js";function ht(s){let{swiper:t,extendParams:l,on:u,emit:a,params:i}=s;t.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,p=i&&i.autoplay?i.autoplay.delay:3e3,T=i&&i.autoplay?i.autoplay.delay:3e3,b,h=new Date().getTime,R,j,B,J,U,E;function K(d){!t||t.destroyed||!t.wrapperEl||d.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",K),L())}const G=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?R=!0:R&&(T=b,R=!1);const d=t.autoplay.paused?b:h+T-new Date().getTime();t.autoplay.timeLeft=d,a("autoplayTimeLeft",d,d/p),o=requestAnimationFrame(()=>{G()})},ot=()=>{let d;return t.virtual&&t.params.virtual.enabled?d=t.slides.filter(v=>v.classList.contains("swiper-slide-active"))[0]:d=t.slides[t.activeIndex],d?parseInt(d.getAttribute("data-swiper-autoplay"),10):void 0},z=d=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),G();let w=typeof d>"u"?t.params.autoplay.delay:d;p=t.params.autoplay.delay,T=t.params.autoplay.delay;const v=ot();!Number.isNaN(v)&&v>0&&typeof d>"u"&&(w=v,p=v,T=v),b=w;const A=t.params.speed,Q=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(A,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,A,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(A,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,A,!0,!0),a("autoplay")),t.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return w>0?(clearTimeout(r),r=setTimeout(()=>{Q()},w)):requestAnimationFrame(()=>{Q()}),w},Y=()=>{t.autoplay.running=!0,z(),a("autoplayStart")},N=()=>{t.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),a("autoplayStop")},I=(d,w)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(r),d||(E=!0);const v=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",K):L()};if(t.autoplay.paused=!0,w){U&&(b=t.params.autoplay.delay),U=!1,v();return}b=(b||t.params.autoplay.delay)-(new Date().getTime()-h),!(t.isEnd&&b<0&&!t.params.loop)&&(b<0&&(b=0),v())},L=()=>{t.isEnd&&b<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(h=new Date().getTime(),E?(E=!1,z(b)):z(),t.autoplay.paused=!1,a("autoplayResume"))},W=()=>{if(t.destroyed||!t.autoplay.running)return;const d=H();d.visibilityState==="hidden"&&(E=!0,I(!0)),d.visibilityState==="visible"&&L()},q=d=>{d.pointerType==="mouse"&&(E=!0,I(!0))},X=d=>{d.pointerType==="mouse"&&t.autoplay.paused&&L()},rt=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",q),t.el.addEventListener("pointerleave",X))},it=()=>{t.el.removeEventListener("pointerenter",q),t.el.removeEventListener("pointerleave",X)},nt=()=>{H().addEventListener("visibilitychange",W)},lt=()=>{H().removeEventListener("visibilitychange",W)};u("init",()=>{t.params.autoplay.enabled&&(rt(),nt(),h=new Date().getTime(),Y())}),u("destroy",()=>{it(),lt(),t.autoplay.running&&N()}),u("beforeTransitionStart",(d,w,v)=>{t.destroyed||!t.autoplay.running||(v||!t.params.autoplay.disableOnInteraction?I(!0,!0):N())}),u("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){N();return}j=!0,B=!1,E=!1,J=setTimeout(()=>{E=!0,B=!0,I(!0)},200)}}),u("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!j)){if(clearTimeout(J),clearTimeout(r),t.params.autoplay.disableOnInteraction){B=!1,j=!1;return}B&&t.params.cssMode&&L(),B=!1,j=!1}}),u("slideChange",()=>{t.destroyed||!t.autoplay.running||(U=!0)}),Object.assign(t.autoplay,{start:Y,stop:N,pause:I,resume:L})}const mt={components:{Swiper:dt,SwiperSlide:ut},setup(){return{modules:[pt,ht]}}},gt=e("div",{class:"banner-bg banner-img3"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),g(" 高雄景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"高雄港旅運中心"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 高雄港是台灣港務與海運核心，近年來亞太地區郵輪旅遊產業日益興盛 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 作為台灣第一大港的高雄，在港市合作、水岸開發的方針下 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[g(" 同時停泊2艘排水量達22.5萬噸豪華郵輪"),e("br"),g("是南台灣最重要的海上門戶 ")]),e("p",{class:"fs-7 text-center"},[g(" 輕軌串連駁二藝術中心、高雄流行音樂中心等建設"),e("br"),g("共築高雄水岸的新天際線。 ")])])],-1),ft=e("div",{class:"banner-bg banner-img2 lazyload"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),g(" 高雄景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"旗津黃金海韻－海珍珠"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 由兩位藝術家耗時6年完成，外純白、內金黃的海貝造型 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 能讓遊客聆聽海聲，更是亞洲最大的貝殼裝置藝術 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[g("由兩位藝術家耗時6年完成"),e("br"),g("外純白、內金黃的海貝造型")]),e("p",{class:"fs-7 text-center"},[g("能讓遊客聆聽海聲"),e("br"),g("更是亞洲最大的貝殼裝置藝術")])])],-1),bt=e("div",{class:"banner-bg banner-img1 lazyload"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),g(" 嘉義景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"國立故宮博物院南部院區"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 博物館建築以中國水墨畫濃墨、非白與渲染三種技法 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 形成時量體展示空間及文物庫房、虛量體公共接待空間與穿透連接空間 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[g("博物館建築以中國水墨畫濃墨、"),e("br"),g("非白與渲染三種技法")]),e("p",{class:"fs-7 text-center"},[g(" 形成時量體展示空間及文物庫房、"),e("br"),g("虛量體公共接待空間與穿透連接空間 ")])])],-1);function vt(s,t,l,u,a,i){const r=k("swiper-slide"),o=k("swiper");return n(),st(o,{navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:u.modules,class:"mySwiper"},{default:D(()=>[y(r,null,{default:D(()=>[gt]),_:1}),y(r,null,{default:D(()=>[ft]),_:1}),y(r,null,{default:D(()=>[bt]),_:1})]),_:1},8,["modules"])}const _t=F(mt,[["render",vt]]),yt="https://two024-south-json-server-vercel.onrender.com",xt={data(){return{products:[],enabledProducts:[],newsLatestProductData:[],attractions:[],currentDate:"",isLoading:!1,arrowIcon:"bi-chevron-right",currentTab:0,arrowRotation:!1}},methods:{handleTabClick(s){this.currentTab=s},checkDate(){var s=new Date,t={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},l=(t.month<10?"0":"")+t.month,u=(t.date<10?"0":"")+t.date,a=t.year+"-"+l+"-"+u;this.currentDate=a},getProducts(){this.axios.get(`${yt}/products?id=-c35c4Q9gWLGb7p4aWAM4&id=KvBuohr&id=xoGgJIk&id=fsfguEU`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&(this.enabledProducts.push(t),this.isLoading=!1)}),this.getNewsProductsData()}).catch(s=>{m.threeLayerCheckType("error","取得產品資料失敗")})},getNewsProductsData(){this.enabledProducts.forEach(s=>{this.newsLatestProductData.push({type:"旅遊方案",id:s.id,category:s.category,startDate:s.startDate,endDate:s.endDate,title:s.title,imageUrl:s.imageUrl})})}},mounted(){this.isLoading=!0,this.getProducts(),this.checkDate()}},at=s=>(V("data-v-b7ddd514"),s=s(),M(),s),wt={class:"latestNews"},kt={class:"container py-10 py-lg-30"},Tt=at(()=>e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-1 mb-lg-2 text-center"},"最新消息",-1)),Et=at(()=>e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Latest News",-1)),Dt={key:0,class:"row"},$t=x('<div class="col-12 col-lg-7" data-v-b7ddd514><div class="tab-content mb-8 mb-lg-0 flex-grow-1" id="nav-tabContent" data-v-b7ddd514><div class="image-tab-pane" data-v-b7ddd514><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-10 first-img z-index-1 rounded-5" alt="Placeholder Image" data-v-b7ddd514><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid second-img opacity-25 z-index-2 rounded-5" alt="Placeholder Image" data-v-b7ddd514></div></div></div>',1),Lt={class:"col-12 col-lg-5"},Ct={class:"list-group",id:"list-tab",role:"tablist"},Ft=x('<div class="d-flex align-items-center placeholder-glow" data-v-b7ddd514><span class="placeholder w-15 mb-3" data-v-b7ddd514></span><span class="placeholder w-15 mb-3 ms-2" data-v-b7ddd514></span></div><div class="d-flex justify-content-between align-items-center mb-3 placeholder-glow" data-v-b7ddd514><span class="list-tab-title placeholder w-40" data-v-b7ddd514></span><span class="placeholder w-5" data-v-b7ddd514></span></div><div class="d-flex flex-column placeholder-glow" data-v-b7ddd514><span class="placeholder w-75 mb-3" data-v-b7ddd514></span><span class="placeholder w-75" data-v-b7ddd514></span></div>',3),Bt=[Ft],It={key:1,class:"row"},At={class:"col-12 col-lg-7"},St={class:"tab-content mb-8 mb-lg-0 flex-grow-1",id:"nav-tabContent"},Pt=["id","aria-labelledby"],jt={class:"image-tab-pane"},zt=["src","alt"],Nt=["src","alt"],Rt={key:1,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",href:"#"},Ut={class:"col-12 col-lg-5"},Ht={class:"list-group",id:"list-tab",role:"tablist"},Vt=["id","data-bs-target","aria-controls","onClick"],Mt={class:"d-flex justify-content-between align-items-center"},Ot={class:"list-tab-title"},Jt={class:"d-flex mb-3"},Kt={class:"badge rounded-pill bg-light2 text-dark2 py-1 px-4 fs-6"},Gt={class:"nav-section-title"},Yt={class:"fs-6 fs-lg-5 mb-2 fw-bold text-primary-700"},Wt={key:0,class:"fs-6 fs-lg-5 text-dark2"},qt={key:1,class:"fs-6 fs-lg-5 text-danger"};function Xt(s,t,l,u,a,i){const r=k("RouterLink");return n(),c("div",wt,[e("div",kt,[Tt,Et,a.isLoading?(n(),c("div",Dt,[$t,e("div",Lt,[e("div",Ct,[(n(),c($,null,C(4,o=>e("a",{key:o,class:"list-group-item list-group-item-action px-6 py-4 p-lg-6 mb-3 active placeholder"},Bt)),64))])])])):(n(),c("div",It,[e("div",At,[e("div",St,[(n(!0),c($,null,C(a.newsLatestProductData,(o,p)=>(n(),c("div",{key:p,class:_(["tab-pane fade",{"show active":p===0}]),id:"list-"+p,role:"tabpanel","aria-labelledby":"list-"+p+"-list"},[e("div",jt,[e("img",{src:o.imageUrl,class:"img-fluid opacity-25 first-img z-index-1",alt:o.title},null,8,zt),e("img",{src:o.imageUrl,class:"img-fluid second-img z-index-2",alt:o.title},null,8,Nt),o.category&&o.title?(n(),st(r,{key:0,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:D(()=>[g(" 查看更多 ")]),_:2},1032,["to"])):(n(),c("a",Rt," 查看更多 "))])],10,Pt))),128))])]),e("div",Ut,[e("div",Ht,[(n(!0),c($,null,C(a.newsLatestProductData,(o,p)=>(n(),c("a",{key:p,class:_({"list-group-item":!0,"list-group-item-action":!0,"px-6":!0,"py-4":!0,"p-lg-6":!0,"mb-2":!0,active:p===0}),id:"list-"+p+"-list","data-bs-toggle":"list","data-bs-target":"#list-"+p,role:"tab","aria-controls":"list-"+p,style:{cursor:"pointer"},onClick:T=>i.handleTabClick(p)},[e("div",Mt,[e("div",Ot,[e("div",Jt,[e("span",{class:_(["badge rounded-pill",{"bg-primary-200 text-primary-500 fw-bold me-1 py-1 px-4 fs-6":o.type==="旅遊方案","bg-secondary-200 text-secondary-600 fw-bold me-1 py-1 px-4 fs-6":o.type==="旅遊景點"}])},f(o.type),3),e("span",Kt,f(o.category),1)]),e("div",Gt,[e("h4",Yt,f(o.title),1),a.currentDate<=o.endDate?(n(),c("p",Wt," 預約時間："+f(o.startDate)+" ~ "+f(o.endDate),1)):(n(),c("p",qt,"預約時間已截止"))])]),e("i",{class:_(["bi bi-chevron-right text-primary-500 fs-4 fw-bold d-none d-lg-block",{"bi-chevron-direction":!0,"bi-chevron-active":a.currentTab===p}])},null,2),e("i",{class:_(["bi bi-chevron-right text-primary-500 fs-4 fw-bold d-lg-none",{"bi-chevron-direction":!0,"bi-chevron-active2":a.currentTab===p}])},null,2)])],10,Vt))),128))])])]))])])}const Qt=F(xt,[["render",Xt],["__scopeId","data-v-b7ddd514"]]),Zt="/southerntravelwebsite/assets/pic-church2-XCbn91jP.jpg",te="/southerntravelwebsite/assets/attraction2-GjsWUJVE.png",ee="/southerntravelwebsite/assets/attraction5-zOyDyXla.png",se="/southerntravelwebsite/assets/attraction1-1-Ezm5MkL6.jpg",ae="/southerntravelwebsite/assets/attraction3-bL_q-TJJ.png",S="https://two024-south-json-server-vercel.onrender.com",oe={data(){return{attractions:[],enabledAttractions:[],isLoading:!1,heartData:[],isFavorite:{},userId:"",token:""}},methods:{getHeartData(){this.axios.get(`${S}/hearts`).then(s=>{s.data.forEach(t=>{t.userId===this.userId&&t.tag==="旅遊景點"&&(this.isFavorite[t.product]=!0)})}).catch(s=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,t,l,u){this.token?this.axios.get(`${S}/hearts`).then(a=>{const i=a.data.find(r=>r.product===s&&r.userId===this.userId&&r.tag==="旅遊景點");i?this.axios.delete(`${S}/hearts/${i.id}`).then(r=>{this.isFavorite[s]=!1,m.threeLayerCheckType("success",`取消收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${S}/hearts`,{product:s,category:t,title:l,userId:this.userId,tag:"旅遊景點",imageUrl:u}).then(r=>{this.isFavorite[s]=!0,m.threeLayerCheckType("success",`已加入收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","收藏資料失敗")})}).catch(a=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")}):m.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getAttractions(){this.axios.get(`${S}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(t=>{t.is_enabled===1&&this.enabledAttractions.push(t)})}).catch(s=>{m.threeLayerCheckType("error","取得景點資料失敗")})},getCookie(s){const t=document.cookie.split(";");for(let l of t){const[u,a]=l.trim().split("=");if(u===s)return a}return null}},mounted(){this.isLoading=!0;const s=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=s*1,this.token=t,setTimeout(()=>{this.isLoading=!1,this.getAttractions(),this.token&&this.getHeartData()},3e3)}},re={class:"southern-tourist-attractions bg-light"},ie={class:"container py-10 py-lg-30"},ne=e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊景點",-1),le=e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1),ce={key:0,class:"col-12 mb-5 mb-lg-0"},de=x('<div class="card-attractions"><div class="heart"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 card-attractions-img" alt="Placeholder Image"><a href="#" class="stretched-link"><div class="mask d-none d-sm-flex flex-column placeholder"><p class="mb-4 placeholder w-25"></p><p class="placeholder w-40 mb-2"></p><p class="placeholder w-50 mb-2"></p><p class="placeholder w-60 mb-2"></p><p class="placeholder w-75 mb-2"></p><p class="placeholder w-85 mb-2"></p></div><div class="mask d-flex d-sm-none flex-column placeholder-glow"><p class="mb-4 placeholder w-50"></p><p class="placeholder"></p></div></a></div>',1),ue=[de],pe={key:1,class:"row"},he={class:"col-12 col-lg-6 mb-5 mb-lg-0"},me={class:"card-attractions"},ge=x('<img src="'+Zt+'" class="img-fluid card-attractions-img" alt="高跟鞋教堂"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%95%99%E5%A0%82" class="stretched-link"><div class="mask d-none d-sm-flex"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6 fs-xl-5"> 高跟鞋教堂高度約17m，寬度約11m，主結構由1,269根鋼架組成，外表共約320餘片玻璃，造型相當亮麗美觀，其設計與裝設不僅是全臺第一，更是全世界唯一。 </p></div><div class="mask d-flex d-sm-none flex-column"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6">打卡熱點</p></div></a>',2),fe={class:"col-12 col-lg-6"},be={class:"row h-100"},ve={class:"col-12 col-sm-6 d-flex flex-column justify-content-between"},_e={class:"image-mask mb-5 mb-lg-6"},ye=x('<img src="'+te+'" alt="Image 2" class="img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%97%97%E6%B4%A5%E9%BB%83%E9%87%91%E6%B5%B7%E9%9F%BB-%E6%B5%B7%E7%8F%8D%E7%8F%A0" class="stretched-link"><div class="mask mask-33 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">黃金海韻海珍珠</p><p class="fs-6">情侶必遊之地</p></div></a>',2),xe={class:"image-mask mb-5 mb-lg-0"},we=x('<img src="'+ee+'" alt="Image 2" class="img-size-attractions-2 image-mask-img"><a href="#/TouristAttractions/%E5%8F%B0%E5%8D%97/%E5%AE%89%E5%B9%B3%E5%8F%A4%E5%A0%A1" class="stretched-link"><div class="mask mask-62 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">安平古堡</p><p class="fs-6">荷蘭時期遺蹟</p></div></a>',2),ke={class:"col-12 col-sm-6 d-flex flex-column justify-content-between"},Te={class:"image-mask mb-5 mb-lg-6 h-100"},Ee=x('<img src="'+se+'" alt="嘉義公園-射日塔" class="img-fluid img-size-attractions-2 image-mask-img h-100"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E5%98%89%E7%BE%A9%E5%85%AC%E5%9C%92-%E5%B0%84%E6%97%A5%E5%A1%94" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">嘉義公園-射日塔</p><p class="fs-6">親子共遊</p></div></a>',2),De={class:"image-mask mb-5 mb-lg-0"},$e=x('<img src="'+ae+'" alt="Image 4" class="img-fluid img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%84%9B%E6%B2%B3%E6%B2%B3%E7%95%94%E7%BE%8E%E6%99%AF" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">愛河河畔美景</p><p class="fs-6">愛之船情侶遊覽</p></div></a>',2);function Le(s,t,l,u,a,i){return n(),c("div",re,[e("div",ie,[ne,le,a.isLoading?(n(),c("div",ce,ue)):(n(),c("div",pe,[e("div",he,[e("div",me,[e("button",{class:"heart border-0",onClick:t[0]||(t[0]=r=>i.toggleFavorite("-L9tH8jxVb2Ka_DYPwng","嘉義","高跟鞋教堂","./img/pic-church2.jpg")),type:"button"},[e("i",{class:_(["bi",{"bi-heart-fill":a.isFavorite["-L9tH8jxVb2Ka_DYPwng"],"bi-heart":!a.isFavorite["-L9tH8jxVb2Ka_DYPwng"]}]),style:{"font-size":"24px"}},null,2)]),ge])]),e("div",fe,[e("div",be,[e("div",ve,[e("div",_e,[e("button",{class:"heart border-0",onClick:t[1]||(t[1]=r=>i.toggleFavorite("WJHUaKt","高雄","旗津黃金海韻-海珍珠","./attractions/pic-4.jpg")),type:"button"},[e("i",{class:_(["bi",{"bi-heart-fill":a.isFavorite.WJHUaKt,"bi-heart":!a.isFavorite.WJHUaKt}]),style:{"font-size":"24px"}},null,2)]),ye]),e("div",xe,[e("button",{class:"heart border-0",onClick:t[2]||(t[2]=r=>i.toggleFavorite("UR6kDTk","台南","安平古堡","./img/attraction5.png")),type:"button"},[e("i",{class:_(["bi",{"bi-heart-fill":a.isFavorite.UR6kDTk,"bi-heart":!a.isFavorite.UR6kDTk}]),style:{"font-size":"24px"}},null,2)]),we])]),e("div",ke,[e("div",Te,[e("button",{class:"heart border-0",onClick:t[3]||(t[3]=r=>i.toggleFavorite("KTpJNvf","嘉義","嘉義公園-射日塔","./img/attraction1-1.jpg")),type:"button"},[e("i",{class:_(["bi",{"bi-heart-fill":a.isFavorite.KTpJNvf,"bi-heart":!a.isFavorite.KTpJNvf}]),style:{"font-size":"24px"}},null,2)]),Ee]),e("div",De,[e("button",{class:"heart border-0",onClick:t[4]||(t[4]=r=>i.toggleFavorite("sj3zTH_","高雄","愛河河畔美景","./attractions/loveriver3.jpg")),type:"button"},[e("i",{class:_(["bi",{"bi-heart-fill":a.isFavorite.sj3zTH_,"bi-heart":!a.isFavorite.sj3zTH_}]),style:{"font-size":"24px"}},null,2)]),$e])])])])]))])])}const Ce=F(oe,[["render",Le]]),Fe={},Be={class:"d-flex justify-content-center"},Ie=x('<div class="ad" data-v-277d4ab4><div class="container py-10 py-lg-30 d-flex flex-lg-row flex-column justify-content-lg-between text-center text-lg-start" data-v-277d4ab4><div class="ad-l-side mb-5 mb-lg-0" data-v-277d4ab4><p class="fs-4 text-center text-lg-start fs-lg-1 fw-bold mb-5 mb-lg-6" data-v-277d4ab4>計算荷包 盡情遊覽</p><p class="fs-4 text-center text-lg-start fs-lg-1 mb-8 fw-bold" data-v-277d4ab4>我們的旅程 為您量身定制！</p><p class="fs-6 text-center text-lg-start fs-lg-4 mb-2" data-v-277d4ab4>Budget Smart, Travel Big</p><p class="fs-6 text-center text-lg-start fs-lg-4" data-v-277d4ab4>Your Custom Journey Awaits.</p></div><div class="ad-r-side d-flex flex-column align-items-lg-end justify-content-lg-center align-items-center" data-v-277d4ab4></div></div></div>',1),Ae=[Ie];function Se(s,t){return n(),c("div",Be,Ae)}const Pe=F(Fe,[["render",Se],["__scopeId","data-v-277d4ab4"]]),P="https://two024-south-json-server-vercel.onrender.com",je={data(){return{products:[],newProductsContent:"",enabledProducts:[],currentDate:"",isLoading:!1,heartData:[],isFavorite:{},userId:"",token:""}},methods:{checkDate(){var s=new Date,t={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},l=(t.month<10?"0":"")+t.month,u=(t.date<10?"0":"")+t.date,a=t.year+"-"+l+"-"+u;this.currentDate=a},getHeartData(){this.axios.get(`${P}/hearts`).then(s=>{s.data.forEach(t=>{t.userId===this.userId&&t.tag==="旅遊方案"&&(this.isFavorite[t.product]=!0)})}).catch(s=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,t,l,u){this.token?this.axios.get(`${P}/hearts`).then(a=>{const i=a.data.find(r=>r.product===s&&r.userId===this.userId&&r.tag==="旅遊方案");i?this.axios.delete(`${P}/hearts/${i.id}`).then(r=>{this.isFavorite[s]=!1,m.threeLayerCheckType("success",`取消收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${P}/hearts`,{product:s,category:t,title:l,userId:this.userId,tag:"旅遊方案",imageUrl:u}).then(r=>{this.isFavorite[s]=!0,m.threeLayerCheckType("success",`已加入收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","收藏資料失敗")})}).catch(a=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")}):m.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getProducts(){this.axios.get(`${P}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&(this.enabledProducts.push(t),this.isLoading=!1)})}).catch(s=>{m.threeLayerCheckType("error","取得產品資料失敗")})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`},getCookie(s){const t=document.cookie.split(";");for(let l of t){const[u,a]=l.trim().split("=");if(u===s)return a}return null}},mounted(){this.getProducts(),this.isLoading=!0;const s=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=s*1,this.token=t,this.token&&this.getHeartData()}},O=s=>(V("data-v-49042e58"),s=s(),M(),s),ze={class:"southern-travel-plan"},Ne={class:"container py-10 py-lg-30"},Re=O(()=>e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊方案",-1)),Ue=O(()=>e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1)),He={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},Ve=x('<div class="card card-att h-100" data-v-49042e58><span class="tag text-white placeholder-glow" data-v-49042e58></span><div class="heart" data-v-49042e58><i class="bi bi-heart heart-click" data-heartStatus="false" data-v-49042e58></i></div><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 first-img z-index-1" alt="Placeholder Image" data-v-49042e58><div class="card-body" data-v-49042e58><span class="placeholder w-25" data-v-49042e58></span><div class="col-12 placeholder-glow" data-v-49042e58><span class="placeholder w-50" data-v-49042e58></span><span class="placeholder w-60" data-v-49042e58></span></div></div><div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow" data-v-49042e58><div class="d-flex justify-content-between" data-v-49042e58><span class="placeholder w-25" data-v-49042e58></span><span class="placeholder w-25" data-v-49042e58></span></div></div></div>',1),Me=[Ve],Oe={class:"card card-att h-100"},Je={class:"tag text-white"},Ke={class:"card-att-img"},Ge=["src","alt"],Ye=["onClick"],We={style:{transform:"rotate(0)"}},qe={class:"card-body"},Xe={class:"fs-5 fs-lg-4 card-title pb-4 fw-bold text-primary-700 stretched-link mb-0"},Qe={class:"col-12"},Ze={key:0,class:"fs-6 text-dark2"},ts={key:1,class:"fs-6 text-danger"},es={key:2,class:"fs-6 text-dark2"},ss={key:3,class:"fs-6 text-danger"},as={class:"card-footer text-end border-0 pt-0 pb-3"},os={class:"d-flex justify-content-between align-items-end"},rs={class:"d-flex align-items-center"},is={class:"fs-6 fs-lg-5"},ns=O(()=>e("i",{class:"bi bi-calendar-week me-2"},null,-1)),ls={class:"fs-5 fs-lg-4 text-primary-500"};function cs(s,t,l,u,a,i){const r=k("router-link");return n(),c("div",ze,[e("div",Ne,[Re,Ue,e("div",He,[a.isLoading?(n(),c($,{key:0},C(3,o=>e("div",{key:o,class:"col"},Me)),64)):(n(!0),c($,{key:1},C(a.enabledProducts,o=>(n(),c("div",{class:"col",key:o.id},[e("div",Oe,[e("span",Je,f(o.category),1),e("div",Ke,[y(r,{to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:D(()=>[e("img",{src:o.imageUrl,class:"card-radius img-fluid h-100",alt:o.title},null,8,Ge)]),_:2},1032,["to"])]),e("button",{class:"heart border-0",onClick:p=>i.toggleFavorite(o.id,o.category,o.title,o.imageUrl),type:"button"},[e("i",{class:_(["bi",{"bi-heart-fill":a.isFavorite[o.id],"bi-heart":!a.isFavorite[o.id]}]),style:{"font-size":"24px"}},null,2)],8,Ye),e("div",We,[e("div",qe,[y(r,{to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:D(()=>[e("h3",Xe,f(o.title),1)]),_:2},1032,["to"]),e("div",Qe,[a.currentDate<=o.endDate?(n(),c("p",Ze," 預約時間："+f(o.startDate)+" ~ "+f(o.endDate),1)):(n(),c("p",ts,"預約時間已截止")),a.currentDate<=o.endDate?(n(),c("p",es," 出遊時間："+f(o.goStartDate)+" ~ "+f(o.goEndDate),1)):(n(),c("p",ss,"已出遊完成"))])]),e("div",as,[e("div",os,[e("div",rs,[e("span",is,[ns,g(f(o.tag_1),1)])]),e("p",ls,f(i.thousand(o.price)),1)])])])])]))),128))])])])}const ds=F(je,[["render",cs],["__scopeId","data-v-49042e58"]]),us="https://two024-south-json-server-vercel.onrender.com",ps={components:{BannerSwiper:_t,LatestNews:Qt,TouristAttractions:Ce,AdBlock:Pe,TouristPackage:ds},data(){return{searchText:"",searchResults:[],showResults:!1,searchData:[]}},methods:{search(){if(this.axios.get(`${us}/search`).then(l=>{this.searchData=l.data}).catch(l=>{alert(`${l.message}`)}),this.searchText===""){this.showResults=!1;return}const s=new RegExp(this.searchText,"i"),t=this.searchData.filter(l=>s.test(l.title));this.searchResults=t.slice(0,3),this.showResults=!0}},mounted(){const s=new Image;ct(()=>import("./pic-5-2-lLkGikIj.js"),__vite__mapDeps([])).then(t=>{s.src=t.default})}},hs=s=>(V("data-v-5812e1f3"),s=s(),M(),s),ms={class:"search-bar bg-primary-400 border-left-bottom"},gs={class:"container text-center pt-10 pb-10 py-md-20"},fs=hs(()=>e("p",{class:"fs-3 text-white mb-10 fw-bold text-center"},"開始你的南部輕旅遊！",-1)),bs={class:"mx-auto",style:{"max-width":"856px"}},vs={class:"input-group position-relative flex-column"},_s={class:"input-wrapper"},ys={class:"list-unstyled bg-white rounded-5"},xs=["href"],ws={key:1};function ks(s,t,l,u,a,i){const r=k("banner-swiper"),o=k("LatestNews"),p=k("TouristAttractions"),T=k("AdBlock"),b=k("TouristPackage");return n(),c($,null,[y(r),e("div",ms,[e("div",gs,[fs,e("div",bs,[e("div",vs,[e("div",_s,[Z(e("input",{type:"search",onInput:t[0]||(t[0]=(...h)=>i.search&&i.search(...h)),"onUpdate:modelValue":t[1]||(t[1]=h=>a.searchText=h),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-none d-md-block",placeholder:"輸入遊玩景點，推薦：漫遊蓮潭風光"},null,544),[[tt,a.searchText,void 0,{trim:!0}]]),Z(e("input",{type:"search","onUpdate:modelValue":t[2]||(t[2]=h=>a.searchText=h),onInput:t[3]||(t[3]=(...h)=>i.search&&i.search(...h)),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-md-none",placeholder:"輸入遊玩南部縣市"},null,544),[[tt,a.searchText,void 0,{trim:!0}]]),e("button",{class:"btn-cerulean-blue position-absolute search-btn-cerulean-blue-position h-70 border-0",type:"button",onClick:t[4]||(t[4]=(...h)=>i.search&&i.search(...h))}," 搜尋 ")])]),e("ul",ys,[a.showResults&&a.searchResults.length>0?(n(!0),c($,{key:0},C(a.searchResults,h=>(n(),c("li",{key:h+123},[e("a",{href:h.link},f(h.title),9,xs)]))),128)):et("",!0),a.showResults&&a.searchResults.length===0?(n(),c("li",ws,"無資料，關鍵字：嘉義、台南、高雄")):et("",!0)])])])]),y(o),y(p),y(T),y(b)],64)}const $s=F(ps,[["render",ks],["__scopeId","data-v-5812e1f3"]]);export{$s as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
