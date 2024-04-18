import{_ as D,I as V,c as d,a as t,F as g,h as P,n as v,q as k,t as b,j as i,v as l,k as p,J as w,d as m,o as n,p as C,f as T}from"./index-LJJdZHTw.js";import{s as h}from"./sweetAlert-EwkmizO_.js";import{C as x}from"./collapse-XKYR3AZw.js";import"./selector-engine-UqI4zzUM.js";const U="https://two024-south-json-server-vercel.onrender.com",q={data(){return{products:[],tempProduct:{},pages:{},modalProduct:null,modelDel:null,isNew:!1,newProduct:{itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:"",itinerary_first_day_pm_title2:"",itinerary_first_day_pm_content2:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}]},newAllItineraryData:[],minDate:"2024-01-01",maxDate:"2024-12-31",formData:{productName:"",productDescription:""},pageTotal:0,currentPage:1,limitPage:10,parsedLinks:"",isCollapseFirstOpen:!0,isCollapseSecondOpen:!1,isCollapseThirdOpen:!1}},watch:{$route(){this.collapseFirstDay.hide(),this.accordionSecondDay.hide(),this.accordionThirdDay.hide()}},methods:{toggleOpenProduct(){this.toggleCollapse(this.collapseFirstDay,"isCollapseFirstOpen")},toggleOpenSecond(){this.toggleCollapse(this.accordionSecondDay,"isCollapseSecondOpen")},toggleOpenThird(){this.toggleCollapse(this.accordionThirdDay,"isCollapseThirdOpen")},toggleCollapse(c,o){c._element.classList.contains("show")?c.hide():c.show(),this[o]=!this[o]},getProducts(c=1){this.axios.get(`${U}/products?_limit=${this.limitPage}&_page=${c}`).then(o=>{var u=parseInt(o.headers["x-total-count"]);this.pageTotal=Math.ceil(u/this.limitPage),this.currentPage=c,this.products=o.data}).catch(()=>{h.threeLayerCheckType("error","取得產品資料錯誤")})},openModal(c,o){c==="new"?(this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}],imagesUrl:[]},this.isNew=!0,this.modalProduct.show()):c==="edit"?(this.tempProduct={...o},this.tempProduct.itinerary_data.length===0?this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:"",itinerary_first_day_pm_title2:"",itinerary_first_day_pm_content2:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}]}:this.tempProduct.itinerary_data.length===1?this.tempProduct.itinerary_data.push({second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}):this.tempProduct.itinerary_data.length===2&&this.tempProduct.itinerary_data.push({third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}),Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.modalProduct.show()):c==="delete"&&(this.tempProduct={...o},this.modalDel.show())},updateProduct(){if(!this.tempProduct.title||!this.tempProduct.day_num||!this.tempProduct.creationDate||!this.tempProduct.category||!this.tempProduct.unit||!this.tempProduct.tag_1||!this.tempProduct.max_travelers||!this.tempProduct.origin_price||!this.tempProduct.price||!this.tempProduct.description||!this.tempProduct.content||!this.tempProduct.startDate||!this.tempProduct.endDate||!this.tempProduct.goStartDate||!this.tempProduct.goEndDate){h.threeLayerCheckType("warning","請填寫所有必填欄位");return}const c=this.filterProduct(this.tempProduct);this.tempProduct=c,this.isNew?this.axios.post(`${U}/products`,this.tempProduct).then(()=>{h.threeLayerCheckType("success","已建立產品成功"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{h.threeLayerCheckType("error","建立產品失敗")}):this.isNew||this.axios.put(`${U}/products/${this.tempProduct.id}`,this.tempProduct).then(o=>{h.threeLayerCheckType("success","已更新產品成功"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{h.threeLayerCheckType("error","更新產品失敗")})},filterProduct(c){const o={};for(const u in c)u==="itinerary_data"?(o[u]=this.filterItineraryData(c[u]),o[u]=o[u].filter(f=>Object.values(f).some(s=>s!==""))):c[u]!==""&&(o[u]=c[u]);return o},filterItineraryData(c){return c.map(o=>{const u={};for(const f in o)o[f]!==""&&(u[f]=o[f]);return u})},deleteProduct(){this.axios.delete(`${U}/products/${this.tempProduct.id}`,this.tempProduct).then(c=>{this.getProducts(),this.tempProduct={},this.modalDel.hide()}).catch(c=>{h.threeLayerCheckType("error","刪除產品資料失敗")})},upload(){const c=this.$refs.fileInput,o=c.files[0],u=new FormData;u.append("file-to-upload",o),this.axios.post(`${U}/products`,u).then(f=>{h.threeLayerCheckType("warning",`
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `);const y=URL.createObjectURL(c.files[0]);this.tempProduct.imagesUrl.push(y),c.value=null}).catch(f=>{h.threeLayerCheckType("error","上傳產品圖片失敗")})}},mounted(){this.getProducts(),this.modalProduct=new V.Modal(this.$refs.productModal),this.modalDel=new V.Modal(this.$refs.delProductModal),this.collapseFirstDay=new x(this.$refs.collapseFirstDay,{toggle:!0}),this.accordionSecondDay=new x(this.$refs.accordionSecondDay,{toggle:!1}),this.accordionThirdDay=new x(this.$refs.accordionThirdDay,{toggle:!1})}},r=c=>(C("data-v-1b075c4d"),c=c(),T(),c),M={class:"text-end mt-4"},S={class:"table mt-4"},O=r(()=>t("thead",null,[t("tr",null,[t("th",{width:"80"},"上架"),t("th",{width:"80"},"分類"),t("th",{width:"200"},"產品名稱"),t("th",{width:"120"},"標籤"),t("th",{width:"80",class:"text-end"},"原價"),t("th",{width:"80",class:"text-end"},"售價"),t("th",{width:"120"})])],-1)),L={key:0,class:"text-success"},F={key:1},N={class:"text-end"},A={class:"text-end"},j={class:"btn-group"},B=["onClick"],E=["onClick"],I={"aria-label":"Page navigation example",class:"my-10"},R={class:"pagination justify-content-center"},z=["onClick"],J={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},G={class:"modal-dialog modal-xl"},H={class:"modal-content border-0"},K={class:"modal-header bg-dark text-white"},Q={id:"productModalLabel",class:"modal-title"},W=r(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},$={class:"mb-2"},tt={class:"mb-3"},et=r(()=>t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1)),ot=["src"],st={key:0},rt=["src"],it=["onUpdate:modelValue"],lt={class:"col-sm-8"},at={class:"mb-3"},dt=r(()=>t("label",{for:"title",class:"form-label"},[m("標題"),t("span",{class:"required"},"*")],-1)),nt={class:"row"},_t={class:"mb-3 col-md-6"},ct=r(()=>t("label",{for:"day_num",class:"form-label"},[m("旅遊天數"),t("span",{class:"required"},"*")],-1)),mt={class:"mb-3 col-md-6"},pt=r(()=>t("label",{for:"creation_date",class:"form-label"},[m("建立日期"),t("span",{class:"required"},"*")],-1)),yt={class:"row"},ut={class:"mb-3 col-md-6"},ht=r(()=>t("label",{for:"category",class:"form-label"},[m("分類"),t("span",{class:"required"},"*")],-1)),ft={class:"mb-3 col-md-6"},bt=r(()=>t("label",{for:"price",class:"form-label"},[m("單位"),t("span",{class:"required"},"*")],-1)),gt={class:"row"},Pt={class:"mb-3 col-md-6"},vt=r(()=>t("label",{for:"tag_1",class:"form-label"},[m("標籤1"),t("span",{class:"required"},"*")],-1)),Ut={class:"mb-3 col-md-6"},kt=r(()=>t("label",{for:"tag_2",class:"form-label"},"標籤2",-1)),xt={class:"row"},Vt={class:"mb-3 col-md-6"},Dt=r(()=>t("label",{for:"link",class:"form-label"},"連結",-1)),wt={class:"mb-3 col-md-6"},Ct=r(()=>t("label",{for:"max_travelers",class:"form-label"},[m("出遊上限人數"),t("span",{class:"required"},"*")],-1)),Tt={class:"row"},qt={class:"mb-3 col-md-6"},Mt=r(()=>t("label",{for:"origin_price",class:"form-label"},[m("原價"),t("span",{class:"required"},"*")],-1)),St={class:"mb-3 col-md-6"},Ot=r(()=>t("label",{for:"price",class:"form-label"},[m("售價"),t("span",{class:"required"},"*")],-1)),Lt={class:"row"},Ft={class:"col"},Nt={class:"accordion mb-3",id:"accordionFirstdDay"},At={class:"accordion-item"},jt={class:"accordion-header"},Bt={id:"collapseFirstDay",class:"accordion-collapse collapse","data-bs-parent":"#accordionFirstdDay",ref:"collapseFirstDay"},Et={class:"accordion-body"},It={class:"row"},Rt={key:0,class:"mb-3 col-md-6"},zt=r(()=>t("label",{for:"first_day_title",class:"form-label"},[m("行程天數"),t("span",{class:"required"},"*")],-1)),Jt=["onUpdate:modelValue"],Gt={key:1,class:"mb-3 col-md-6"},Ht=r(()=>t("label",{for:"itinerary_first_day_am_title",class:"form-label"},[m("景點名稱-早上"),t("span",{class:"required"},"*")],-1)),Kt=["onUpdate:modelValue"],Qt={key:2,class:"mb-3"},Wt=r(()=>t("label",{for:"itinerary_first_day_am_content",class:"form-label"},[m("景點介紹-早上"),t("span",{class:"required"},"*")],-1)),Xt=["onUpdate:modelValue"],Yt={key:3,class:"col-md-6 mb-3"},Zt=r(()=>t("label",{for:"itinerary_first_day_pm_title",class:"form-label"},[m("景點名稱-下午"),t("span",{class:"required"},"*")],-1)),$t=["onUpdate:modelValue"],te={key:4,class:"mb-3"},ee=r(()=>t("label",{for:"itinerary_first_day_pm_content",class:"form-label"},[m("景點介紹-下午"),t("span",{class:"required"},"*")],-1)),oe=["onUpdate:modelValue"],se={key:5,class:"col-md-6 mb-3"},re=r(()=>t("label",{for:"itinerary_first_day_pm_title2",class:"form-label"},[m("景點名稱-下午2"),t("span",{class:"required"},"*")],-1)),ie=["onUpdate:modelValue"],le={key:6,class:"mb-3"},ae=r(()=>t("label",{for:"itinerary_first_day_pm_content2",class:"form-label"},[m("景點介紹-下午2"),t("span",{class:"required"},"*")],-1)),de=["onUpdate:modelValue"],ne={class:"row"},_e={class:"col"},ce={class:"accordion mb-3",id:"accordionSecondDay"},me={class:"accordion-item"},pe={class:"accordion-header"},ye={class:"accordion-collapse collapse","data-bs-parent":"#accordionSecondDay",ref:"accordionSecondDay"},ue={class:"accordion-body"},he={class:"row"},fe={key:0,class:"mb-3 col-md-6"},be=r(()=>t("label",{for:"second_day_title",class:"form-label"},"行程天數",-1)),ge=["onUpdate:modelValue"],Pe={key:1,class:"mb-3 col-md-6"},ve=r(()=>t("label",{for:"itinerary_second_day_am_title",class:"form-label"},"景點名稱-早上",-1)),Ue=["onUpdate:modelValue"],ke={key:2,class:"mb-3"},xe=r(()=>t("label",{for:"itinerary_second_day_am_content",class:"form-label"},"景點介紹-早上",-1)),Ve=["onUpdate:modelValue"],De={key:3,class:"col-md-6 mb-3"},we=r(()=>t("label",{for:"itinerary_second_day_pm_title",class:"form-label"},"景點名稱-下午",-1)),Ce=["onUpdate:modelValue"],Te={key:4,class:"mb-3"},qe=r(()=>t("label",{for:"itinerary_second_day_pm_content",class:"form-label"},"景點介紹-下午",-1)),Me=["onUpdate:modelValue"],Se={key:5,class:"col-md-6 mb-3"},Oe=r(()=>t("label",{for:"itinerary_second_day_pm_title2",class:"form-label"},"景點名稱-下午2",-1)),Le=["onUpdate:modelValue"],Fe={key:6,class:"mb-3"},Ne=r(()=>t("label",{for:"itinerary_second_day_pm_content2",class:"form-label"},"景點介紹-下午2",-1)),Ae=["onUpdate:modelValue"],je={class:"row"},Be={class:"col"},Ee={class:"accordion mb-3",id:"accordionThirdDay"},Ie={class:"accordion-item"},Re={class:"accordion-header"},ze={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionThirdDay",ref:"accordionThirdDay"},Je={class:"accordion-body"},Ge={class:"row"},He={key:0,class:"mb-3 col-md-6"},Ke=r(()=>t("label",{for:"third_day_title",class:"form-label"},"行程天數",-1)),Qe=["onUpdate:modelValue"],We={key:1,class:"mb-3 col-md-6"},Xe=r(()=>t("label",{for:"itinerary_third_day_am_title",class:"form-label"},"景點名稱-早上",-1)),Ye=["onUpdate:modelValue"],Ze={key:2,class:"mb-3"},$e=r(()=>t("label",{for:"itinerary_third_day_am_content",class:"form-label"},"景點介紹-早上",-1)),to=["onUpdate:modelValue"],eo={key:3,class:"col-md-6 mb-3"},oo=r(()=>t("label",{for:"itinerary_third_day_pm_title",class:"form-label"},"景點名稱-下午",-1)),so=["onUpdate:modelValue"],ro={key:4,class:"mb-3"},io=r(()=>t("label",{for:"itinerary_third_day_pm_content",class:"form-label"},"景點介紹-下午",-1)),lo=["onUpdate:modelValue"],ao={key:5,class:"col-md-6 mb-3"},no=r(()=>t("label",{for:"itinerary_third_day_pm_title2",class:"form-label"},"景點名稱-下午2",-1)),_o=["onUpdate:modelValue"],co={key:6,class:"mb-3"},mo=r(()=>t("label",{for:"itinerary_third_day_pm_content2",class:"form-label"},"景點介紹-下午2",-1)),po=["onUpdate:modelValue"],yo=r(()=>t("hr",null,null,-1)),uo={class:"mb-3"},ho=r(()=>t("label",{for:"description",class:"form-label"},[m("產品描述"),t("span",{class:"required"},"*")],-1)),fo={class:"mb-3"},bo=r(()=>t("label",{for:"content",class:"form-label"},[m("說明內容"),t("span",{class:"required"},"*")],-1)),go={class:"mb-3"},Po=r(()=>t("label",{for:"content",class:"form-label"},"服務內容",-1)),vo={class:"mb-3"},Uo=r(()=>t("label",{for:"content",class:"form-label"},"體驗說明",-1)),ko={class:"mb-3"},xo=r(()=>t("label",{for:"content",class:"form-label"},"其他資訊",-1)),Vo={class:"mb-3"},Do=r(()=>t("label",{for:"content",class:"form-label"},"常見問題",-1)),wo={class:"row"},Co={class:"mb-3 col-md-6"},To=r(()=>t("label",{for:"start_date",class:"form-label"},[m("預約起始日"),t("span",{class:"required"},"*")],-1)),qo=["min","max"],Mo={class:"mb-3 col-md-6"},So=r(()=>t("label",{for:"end_date",class:"form-label"},[m("預約結束日"),t("span",{class:"required"},"*")],-1)),Oo=["min","max"],Lo={class:"row"},Fo={class:"mb-3 col-md-6"},No=r(()=>t("label",{for:"go_start_date",class:"form-label"},[m("出發起始日"),t("span",{class:"required"},"*")],-1)),Ao=["min","max"],jo={class:"mb-3 col-md-6"},Bo=r(()=>t("label",{for:"go_end_date",class:"form-label"},[m("出發結束日"),t("span",{class:"required"},"*")],-1)),Eo=["min","max"],Io={class:"mb-3"},Ro={class:"form-check"},zo=r(()=>t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1)),Jo={class:"modal-footer"},Go=r(()=>t("button",{type:"button",class:"btn btn-outline-secondary px-6 py-2","data-bs-dismiss":"modal"}," 取消 ",-1)),Ho={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ko={class:"modal-dialog"},Qo={class:"modal-content border-0"},Wo=r(()=>t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Xo={class:"modal-body"},Yo={class:"text-danger"},Zo={class:"modal-footer"},$o=r(()=>t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1));function ts(c,o,u,f,s,y){return n(),d(g,null,[t("div",M,[t("button",{type:"button",class:"btn-turquoise",id:"addModalBtn",onClick:o[0]||(o[0]=e=>y.openModal("new",c.product))}," 建立新的產品 ")]),t("table",S,[O,t("tbody",null,[(n(!0),d(g,null,P(s.products,e=>(n(),d("tr",{key:e.id},[t("td",null,[e.is_enabled?(n(),d("span",L,"啟用")):(n(),d("span",F,"未啟用"))]),t("td",null,b(e.category),1),t("td",null,b(e.title),1),t("td",null,b(e.tag_1),1),t("td",N,b(e.origin_price),1),t("td",A,b(e.price),1),t("td",null,[t("div",j,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:_=>y.openModal("edit",e)}," 編輯 ",8,B),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:_=>y.openModal("delete",e)}," 刪除 ",8,E)])])]))),128))])]),t("nav",I,[t("ul",R,[t("li",{class:v(["page-item",{disabled:!s.currentPage||s.currentPage===1}])},[t("button",{class:"page-link page-link-radius-2",onClick:o[1]||(o[1]=k(e=>s.currentPage>1&&y.getProducts(s.currentPage-1),["prevent"]))}," 上一頁 ")],2),(n(!0),d(g,null,P(s.pageTotal,e=>(n(),d("li",{class:"page-item",key:`page-${e}`},[t("button",{class:v(["page-link page-link-0 rounded-0",{active:e===s.currentPage}]),onClick:k(_=>y.getProducts(e),["prevent"])},b(e),11,z)]))),128)),t("li",{class:v(["page-item",{disabled:!s.currentPage||s.currentPage===s.pageTotal}])},[t("button",{class:"page-link page-link-radius",onClick:o[2]||(o[2]=k(e=>s.currentPage<s.pageTotal&&y.getProducts(s.currentPage+1),["prevent"]))}," 下一頁 ")],2)])]),t("div",J,[t("div",G,[t("div",H,[t("div",K,[t("h5",Q,[t("span",null,b(s.isNew?"新增產品":"編輯產品"),1)]),W]),t("div",X,[t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[et,i(t("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>s.tempProduct.imageUrl=e),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[l,s.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,ot)]),Array.isArray(s.tempProduct.imagesUrl)?(n(),d("div",st,[(n(!0),d(g,null,P(s.tempProduct.imagesUrl,(e,_)=>(n(),d("div",{key:_+1213},[t("img",{src:e,alt:"",class:"img-fluid my-2"},null,8,rt),i(t("input",{type:"text",class:"form-control my-2","onUpdate:modelValue":a=>s.tempProduct.imagesUrl[_]=a},null,8,it),[[l,s.tempProduct.imagesUrl[_]]])]))),128)),s.tempProduct.imagesUrl.length===0||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(n(),d("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100 btn-sm-radius",onClick:o[4]||(o[4]=e=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(n(),d("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100 btn-sm-radius",onClick:o[5]||(o[5]=e=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):p("",!0)]),t("div",lt,[t("div",at,[dt,i(t("input",{id:"title",type:"text","onUpdate:modelValue":o[6]||(o[6]=e=>s.tempProduct.title=e),class:"form-control",placeholder:"請輸入標題"},null,512),[[l,s.tempProduct.title]])]),t("div",nt,[t("div",_t,[ct,i(t("input",{id:"day_num",type:"number","onUpdate:modelValue":o[7]||(o[7]=e=>s.tempProduct.day_num=e),class:"form-control",placeholder:"請輸入旅遊天數"},null,512),[[l,s.tempProduct.day_num]])]),t("div",mt,[pt,i(t("input",{id:"creation_date",type:"date","onUpdate:modelValue":o[8]||(o[8]=e=>s.tempProduct.creationDate=e),class:"form-control"},null,512),[[l,s.tempProduct.creationDate]])])]),t("div",yt,[t("div",ut,[ht,i(t("input",{id:"category",type:"text","onUpdate:modelValue":o[9]||(o[9]=e=>s.tempProduct.category=e),class:"form-control",placeholder:"請輸入分類"},null,512),[[l,s.tempProduct.category]])]),t("div",ft,[bt,i(t("input",{id:"unit",type:"text","onUpdate:modelValue":o[10]||(o[10]=e=>s.tempProduct.unit=e),class:"form-control",placeholder:"請輸入單位"},null,512),[[l,s.tempProduct.unit]])])]),t("div",gt,[t("div",Pt,[vt,i(t("input",{id:"tag_1",type:"text","onUpdate:modelValue":o[11]||(o[11]=e=>s.tempProduct.tag_1=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[l,s.tempProduct.tag_1]])]),t("div",Ut,[kt,i(t("input",{id:"tag_2",type:"text","onUpdate:modelValue":o[12]||(o[12]=e=>s.tempProduct.tag_2=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[l,s.tempProduct.tag_2]])])]),t("div",xt,[t("div",Vt,[Dt,i(t("input",{id:"link",type:"text","onUpdate:modelValue":o[13]||(o[13]=e=>s.tempProduct.link=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[l,s.tempProduct.link]])]),t("div",wt,[Ct,i(t("input",{id:"max_travelers",type:"number","onUpdate:modelValue":o[14]||(o[14]=e=>s.tempProduct.max_travelers=e),min:"3",max:"30",class:"form-control",placeholder:"請輸入出遊上限人數"},null,512),[[l,s.tempProduct.max_travelers]])])]),t("div",Tt,[t("div",qt,[Mt,i(t("input",{id:"origin_price",type:"number","onUpdate:modelValue":o[15]||(o[15]=e=>s.tempProduct.origin_price=e),min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[l,s.tempProduct.origin_price]])]),t("div",St,[Ot,i(t("input",{id:"price",type:"number","onUpdate:modelValue":o[16]||(o[16]=e=>s.tempProduct.price=e),min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[l,s.tempProduct.price]])])]),t("div",Lt,[t("div",Ft,[t("div",Nt,[t("div",At,[t("h2",jt,[t("button",{class:v(["accordion-button",{collapsed:!s.isCollapseFirstOpen}]),type:"button","aria-expanded":"false","aria-controls":"collapseFirstDay",onClick:o[17]||(o[17]=(...e)=>y.toggleOpenProduct&&y.toggleOpenProduct(...e))}," 行程資料-第一天 ",2)]),t("div",Bt,[t("div",Et,[t("div",It,[(n(!0),d(g,null,P(s.tempProduct.itinerary_data,(e,_)=>(n(),d("div",{key:_+1213},[_===0?(n(),d("div",Rt,[zt,i(t("input",{id:"first_day_title",type:"text","onUpdate:modelValue":a=>e.first_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第一天"},null,8,Jt),[[l,e.first_day_title]])])):p("",!0),_===0?(n(),d("div",Gt,[Ht,i(t("input",{id:"itinerary_first_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Kt),[[l,e.itinerary_first_day_am_title]])])):p("",!0),_===0?(n(),d("div",Qt,[Wt,i(t("textarea",{id:"itinerary_first_day_am_content",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_am_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Xt),[[l,e.itinerary_first_day_am_content]])])):p("",!0),_===0?(n(),d("div",Yt,[Zt,i(t("input",{id:"itinerary_first_day_pm_title",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,$t),[[l,e.itinerary_first_day_pm_title]])])):p("",!0),_===0?(n(),d("div",te,[ee,i(t("textarea",{id:"itinerary_first_day_pm_content",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,oe),[[l,e.itinerary_first_day_pm_content]])])):p("",!0),_===0?(n(),d("div",se,[re,i(t("input",{id:"itinerary_first_day_pm_title2",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_title2=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,ie),[[l,e.itinerary_first_day_pm_title2]])])):p("",!0),_===0?(n(),d("div",le,[ae,i(t("textarea",{id:"itinerary_first_day_pm_content2",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_content2=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,de),[[l,e.itinerary_first_day_pm_content2]])])):p("",!0)]))),128))])])],512)])])])]),t("div",ne,[t("div",_e,[t("div",ce,[t("div",me,[t("h2",pe,[t("button",{class:v(["accordion-button",{collapsed:!s.isCollapseSecondOpen}]),type:"button","aria-expanded":"false","aria-controls":"collapseTwo",onClick:o[18]||(o[18]=(...e)=>y.toggleOpenSecond&&y.toggleOpenSecond(...e))}," 行程資料-第二天 ",2)]),t("div",ye,[t("div",ue,[t("div",he,[(n(!0),d(g,null,P(s.tempProduct.itinerary_data,(e,_)=>(n(),d("div",{key:_+1213},[_===1?(n(),d("div",fe,[be,i(t("input",{id:"second_day_title",type:"text","onUpdate:modelValue":a=>e.second_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第二天"},null,8,ge),[[l,e.second_day_title]])])):p("",!0),_===1?(n(),d("div",Pe,[ve,i(t("input",{id:"itinerary_second_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_second_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ue),[[l,e.itinerary_second_day_am_title]])])):p("",!0),_===1?(n(),d("div",ke,[xe,i(t("textarea",{id:"itinerary_second_day_am_content","onUpdate:modelValue":a=>e.itinerary_second_day_am_content=a,class:"form-control",placeholder:"請輸入景點內容"},null,8,Ve),[[l,e.itinerary_second_day_am_content]])])):p("",!0),_===1?(n(),d("div",De,[we,i(t("input",{id:"itinerary_second_day_pm_title","onUpdate:modelValue":a=>e.itinerary_second_day_pm_title=a,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ce),[[l,e.itinerary_second_day_pm_title]])])):p("",!0),_===1?(n(),d("div",Te,[qe,i(t("textarea",{"onUpdate:modelValue":a=>e.itinerary_second_day_pm_content=a,id:"itinerary_second_day_pm_content",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Me),[[l,e.itinerary_second_day_pm_content]])])):p("",!0),_===1?(n(),d("div",Se,[Oe,i(t("input",{id:"itinerary_second_day_pm_title2","onUpdate:modelValue":a=>e.itinerary_second_day_pm_title2=a,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Le),[[l,e.itinerary_second_day_pm_title2]])])):p("",!0),_===1?(n(),d("div",Fe,[Ne,i(t("textarea",{"onUpdate:modelValue":a=>e.itinerary_second_day_pm_content2=a,id:"itinerary_second_day_pm_content2",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Ae),[[l,e.itinerary_second_day_pm_content2]])])):p("",!0)]))),128))])])],512)])])])]),t("div",je,[t("div",Be,[t("div",Ee,[t("div",Ie,[t("h2",Re,[t("button",{class:v(["accordion-button",{collapsed:!s.isCollapseThirdOpen}]),type:"button","aria-expanded":"false","aria-controls":"collapseThree",onClick:o[19]||(o[19]=(...e)=>y.toggleOpenThird&&y.toggleOpenThird(...e))}," 行程資料-第三天 ",2)]),t("div",ze,[t("div",Je,[t("div",Ge,[(n(!0),d(g,null,P(s.tempProduct.itinerary_data,(e,_)=>(n(),d("div",{key:_+1213},[_===2?(n(),d("div",He,[Ke,i(t("input",{id:"third_day_title",type:"text","onUpdate:modelValue":a=>e.third_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第三天"},null,8,Qe),[[l,e.third_day_title]])])):p("",!0),_===2?(n(),d("div",We,[Xe,i(t("input",{id:"itinerary_third_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ye),[[l,e.itinerary_third_day_am_title]])])):p("",!0),_===2?(n(),d("div",Ze,[$e,i(t("textarea",{id:"itinerary_third_day_am_content",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_am_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,to),[[l,e.itinerary_third_day_am_content]])])):p("",!0),_===2?(n(),d("div",eo,[oo,i(t("input",{id:"itinerary_third_day_pm_title",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,so),[[l,e.itinerary_third_day_pm_title]])])):p("",!0),_===2?(n(),d("div",ro,[io,i(t("textarea",{id:"itinerary_third_day_pm_content",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,lo),[[l,e.itinerary_third_day_pm_content]])])):p("",!0),_===2?(n(),d("div",ao,[no,i(t("input",{id:"itinerary_third_day_pm_title2",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_title2=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,_o),[[l,e.itinerary_third_day_pm_title2]])])):p("",!0),_===2?(n(),d("div",co,[mo,i(t("textarea",{id:"itinerary_third_day_pm_content2",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_content2=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,po),[[l,e.itinerary_third_day_pm_content2]])])):p("",!0)]))),128))])])],512)])])])]),yo,t("div",uo,[ho,i(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[20]||(o[20]=e=>s.tempProduct.description=e),class:"form-control",placeholder:"請輸入產品描述",required:""},`\r
                `,512),[[l,s.tempProduct.description]])]),t("div",fo,[bo,i(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[21]||(o[21]=e=>s.tempProduct.content=e),class:"form-control",placeholder:"請輸入說明內容",required:""},`\r
                `,512),[[l,s.tempProduct.content]])]),t("div",go,[Po,i(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[22]||(o[22]=e=>s.tempProduct.provideServices=e),class:"form-control",placeholder:"請輸入服務內容"},`\r
                `,512),[[l,s.tempProduct.provideServices]])]),t("div",vo,[Uo,i(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[23]||(o[23]=e=>s.tempProduct.experienceDescription=e),class:"form-control",placeholder:"請輸入體驗說明"},`\r
                `,512),[[l,s.tempProduct.experienceDescription]])]),t("div",ko,[xo,i(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[24]||(o[24]=e=>s.tempProduct.otherInformation=e),class:"form-control",placeholder:"請輸入其他資訊"},`\r
                `,512),[[l,s.tempProduct.otherInformation]])]),t("div",Vo,[Do,i(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[25]||(o[25]=e=>s.tempProduct.commonProblem=e),class:"form-control",placeholder:"請輸入常見問題"},`\r
                `,512),[[l,s.tempProduct.commonProblem]])]),t("div",wo,[t("div",Co,[To,i(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[26]||(o[26]=e=>s.tempProduct.startDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,qo),[[l,s.tempProduct.startDate]])]),t("div",Mo,[So,i(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[27]||(o[27]=e=>s.tempProduct.endDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Oo),[[l,s.tempProduct.endDate]])])]),t("div",Lo,[t("div",Fo,[No,i(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[28]||(o[28]=e=>s.tempProduct.goStartDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Ao),[[l,s.tempProduct.goStartDate]])]),t("div",jo,[Bo,i(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[29]||(o[29]=e=>s.tempProduct.goEndDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Eo),[[l,s.tempProduct.goEndDate]])])]),t("div",Io,[t("div",Ro,[i(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":o[30]||(o[30]=e=>s.tempProduct.is_enabled=e),type:"checkbox","true-value":1,"false-value":0},null,512),[[w,s.tempProduct.is_enabled]]),zo])])])])]),t("div",Jo,[Go,t("button",{type:"button",class:"btn-turquoise",onClick:o[31]||(o[31]=(...e)=>y.updateProduct&&y.updateProduct(...e))},"確認")])])])],512),t("div",Ho,[t("div",Ko,[t("div",Qo,[Wo,t("div",Xo,[m(" 是否刪除 "),t("strong",Yo,b(s.tempProduct.title),1),m(" 商品(刪除後將無法恢復)。 ")]),t("div",Zo,[$o,t("button",{type:"button",class:"btn btn-danger",onClick:o[32]||(o[32]=(...e)=>y.deleteProduct&&y.deleteProduct(...e))},"確認刪除")])])])],512)],64)}const is=D(q,[["render",ts],["__scopeId","data-v-1b075c4d"]]);export{is as default};
