webpackJsonp([1],{"+Gxq":function(t,e,s){"use strict";function a(t){s("4veK")}var o=s("fnDg"),r=o.a,n=s("VU/8"),i=a,l=n(r,null,!1,i,null,null);e.a=l.exports},"+REE":function(t,e){t.exports={lang:"БГ","Client ID":"Клиентски номер",Name:"Име",Email:"Имейл адрес",Phone:"Телефон","Contract Id":"Договор номер","Portfolio Id":"Клиентска сметка",Password:"Парола",Logout:"Изход",ROI:"Възвращаемост в лева",Portfolio:"Клиентка сметка",Cryptocurrency:"Криптовалута",Ticker:"Код",Share:"Дял","Value (BGN)":"Стойност в лева","Number of Coins":"Брой койни","Price (BGN)":"Цена в лева","Total Deposits":"Общо депозити","Total Withdrawals":"Общо тегления","Total Commissions":"Общо комисионни","Net Profit":"Печалба",loginPageTitle:"Вход в системата",loginFormSubmit:"Вход",BGN:"Лева",roiTable30days:"За последните 30 дена",roiTableYear:"От началото на годината",roiTableContract:"От началото на договора",Type:"Тип",Date:"Дата","Currency 1 Amount":"Брой койни валута 1",Currency:"Валута","Currency 2 Amount":"Брой койни валута 2","Value in BGN":"Стойност в лева","There are no any transactions":"Не са налични транзакции","Change Password":"Промени паролата",priceUpdateInfo:"* Цените са взети от {source} на {updateTime} UTC.",noData:"Няма данни.",overview:"Моментно състояние",transactions:"Транзакции","Set Password":"Създай парола","Please, repeat the password":"Повторете паролата","Repeated password is not the same":"Паролите не съвпадат","Repeat Password":"Повторете паролата","Please, enter the password":"Моля, въведете паролата","Repeat New Password":"Повторете новата парола","Please, enter the new password":"Моля, въведете новата парола","Please, enter old password":"Моля, въведете старата парола","Old password":"Стара парола","New Password":"Нова парола","Password was changed successfully":"Паролата беше променена успешно",deposit:"депозит",withdrawal:"теглене",change:"обмен",commission:"комисионна","blockchain fee":"блокчейн такса"}},"23ZH":function(t,e){t.exports={lang:"EN","Client ID":"Client ID",Name:"Name",Email:"Email",Phone:"Phone","Contract Id":"Contract Id","Portfolio Id":"Portfolio Id",Password:"Password",Logout:"Logout",ROI:"Return on Investment (BGN)",Portfolio:"Portfolio",Cryptocurrency:"Cryptocurrency",Ticker:"Ticker",Share:"Share","Value (BGN)":"Value (BGN)","Number of Coins":"Number of coins","Price (BGN)":"Price (BGN)","Total Deposits":"Total Deposits","Total Withdrawals":"Total Withdrawals","Total Commissions":"Total Commissions","Net Profit":"Net Profit",loginPageTitle:"Login",loginFormSubmit:"Login",BGN:"BGN",roiTable30days:"Last 30 days",roiTableYear:"From the begining of the year",roiTableContract:"From the begining of the contract",Type:"Type",Date:"Date","Currency 1 Amount":"Currency 1 Amount",Currency:"Currency","Currency 2 Amount":"Currency 2 Amount","Value in BGN":"Value in BGN","There are no any transactions":"There are no any transactions","Change Password":"Change Password",priceUpdateInfo:"* The prices are taken from {source} on {updateTime} UTC.",noData:"No data.",overview:"Overview",transactions:"Transactions","Set Password":"Set Password","Please, repeat the password":"Please, repeat the password","Repeated password is not the same":"Repeated password is not the same","Repeat Password":"Repeat Password","Please, enter the password":"Please, enter the password","Repeat New Password":"Repeat New Password","Please, enter the new password":"Please, enter the new password","Please, enter old password":"Please, enter old password","Old password":"Old password","New Password":"New Password","Password was changed successfully":"Password was changed successfully",deposit:"deposit",withdrawal:"withdrawal",change:"change",commission:"commission","blockchain fee":"blockchain fee"}},"4veK":function(t,e){},"HUt/":function(t,e,s){"use strict";function a(t){s("n9mN")}var o=s("qRo1"),r=o.a,n=s("VU/8"),i=a,l=n(r,null,!1,i,null,null);e.a=l.exports},JCpY:function(t,e,s){"use strict";function a(t){s("xBwK")}var o=s("rKsW"),r=o.a,n=s("VU/8"),i=a,l=n(r,null,!1,i,null,null);e.a=l.exports},JDVb:function(t,e,s){"use strict";function a(t){s("Y9O/")}var o=s("9NuQ"),r=o.a,n=s("VU/8"),i=a,l=n(r,null,!1,i,null,null);e.a=l.exports},"Y9O/":function(t,e){},cxtk:function(t,e,s){"use strict";function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=!1;t<0&&(s=!0,t*=-1);var a=Math.pow(10,e);return t=parseFloat((t*a).toFixed(11)),t=(Math.round(t)/a).toFixed(e),s&&(t=(-1*t).toFixed(e)),o(+t,e)}function o(t,e){return t.toLocaleString("bg-BG",{minimumFractionDigits:e})}function r(t){return t.split(".").join(",")}function n(t,e,s){return void 0===s||0==+s?Math[t](e):(e=+e,s=+s,null===e||isNaN(e)||"number"!=typeof s||s%1!=0?NaN:e<0?-n(t,-e,s):(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-s:-s))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+s:s))))}function i(t,e){return n("round",t,e)}function l(t){return t.getUTCFullYear()+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())}function c(t){return l(t)+", "+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())}function u(t){return t<10?"0"+t:t}function d(t){return{id:t.transactionId,type:t.type,date:Gt.formatDate(new Date(t.date)),c1Amount:t.currency1Amount?kt.formatStrNum(t.currency1Amount):null,c1:t.currency1,c2Amount:t.currency2Amount?kt.formatStrNum(t.currency2Amount):null,c2:t.currency2,valueBGN:t.bgnAmount?kt.formatStrNum(t.bgnAmount):null}}function m(t){var e=t.totals,s={id:t.id,assets:t.assets.filter(function(t){return t.pieces>0}).map(function(t){return t.valueBGNstr=kt.roundTo(t.valueBGN,2),t.valueBGN=kt.round(t.valueBGN,0),t.priceBGNstr=kt.roundTo(t.priceBGN,2),t.shareStr=kt.roundTo(100*t.share,2),t.piecesStr=kt.formatStrNum(t.pieces),t}),stats:{roi:{},totalValueBGN:kt.roundTo(+e.totalValueBGN,2),totalDepositsBGN:kt.roundTo(+e.totalDepositsBGN,2),totalWithdrawalsBGN:kt.roundTo(+e.totalWithdrawalsBGN,2),totalCommissionsBGN:kt.roundTo(+e.totalCommissionsBGN,2),netProfitBGN:kt.roundTo(+e.totalValueBGN+ +e.totalWithdrawalsBGN-+e.totalDepositsBGN,2)},updateTime:t.updateTime?Gt.formatDateTime(new Date(t.updateTime)):null};for(var a in t.ROI){var o=t.ROI[a];if(o){s.stats.roi[a]={};for(var r in o)s.stats.roi[a][r]=kt.roundTo(o[r],2)}}return s}function f(t){var e=t;return e.name=t.firstName+" "+t.lastName,"client"===t.role&&(e.portfolios=t.portfolios?t.portfolios.map(function(t){return t.id}):[]),e}Object.defineProperty(e,"__esModule",{value:!0});var v=s("//Fk"),p=s.n(v),_=s("/5sW"),h=(s("hTx+"),s("ESwS")),g=s.n(h),w=s("e6fC"),P=s("mbGJ"),b=s.n(P),C=s("mtWM"),$=s.n(C),T={data:function(){return{i18n:{lang:this.$t("lang")},isDev:!0,buildTimestamp:1516200733800}},methods:{logout:function(){this.$store.dispatch("logout")}},computed:{user:function(){return this.$store.getters.getLoggedUser}},watch:{"$i18n.locale":function(){this.i18n.lang=this.$t("lang")}}},D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{class:{debug:t.isDev}},[s("header",[s("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"light",id:"top-bar"}},[s("b-navbar-brand",{attrs:{to:"/"}},[s("img",{attrs:{src:"/static/images/logo-horizontal-h53.png",alt:""}})]),t._v(" "),s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{text:t.i18n.lang,right:""}},[s("b-dropdown-item",{on:{click:function(e){t.$i18n.locale="en"}}},[t._v("English")]),t._v(" "),s("b-dropdown-item",{on:{click:function(e){t.$i18n.locale="bg"}}},[t._v("Български")])],1),t._v(" "),t.user?[s("b-nav-item-dropdown",{attrs:{text:t.user.name,right:""}},[s("b-dropdown-item",{attrs:{to:"/change"}},[t._v(t._s(t.$t("Change Password")))])],1),t._v(" "),s("b-nav-item",{on:{click:t.logout}},[t._v(t._s(t.$t("Logout")))])]:t._e()],2)],1)],1)],1),t._v(" "),s("router-view"),t._v(" "),t._m(0),t._v(" "),t.isDev?s("div",{attrs:{id:"dev-toolbox"}},[s("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseDevToolbox",modifiers:{collapseDevToolbox:!0}}],attrs:{variant:"outline-danger"}},[t._v("* Dev Toolbox")]),t._v(" "),s("b-collapse",{staticClass:"mt-2",attrs:{id:"collapseDevToolbox"}},[s("b-card",[s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          "+t._s(t.buildTimestamp)+"\n        ")])])],1)],1):t._e()],1)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"text-center"},[s("img",{attrs:{src:"/static/images/logo-horizontal-h53.png",alt:"Blockchain.bg"}})])}],y={render:D,staticRenderFns:N},x=y,S=s("VU/8"),k=S(T,x,!1,null,null,null),G=k.exports,B=s("/ocq"),U={props:["coins"]},A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table table-bordered"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$t("Cryptocurrency")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Ticker")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Share")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Value (BGN)")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Number of coins")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Price (BGN)")))])])]),t._v(" "),s("tbody",t._l(t.coins,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.ticker))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.shareStr)+"%")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.valueBGNstr))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.piecesStr))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.priceBGNstr))])])}))])},R=[],I={render:A,staticRenderFns:R},q=I,E=s("VU/8"),O=E(U,q,!1,null,null,null),V=O.exports,F={props:["client"]},L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table table-bordered"},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.$t("Name"))+":")]),t._v(" "),s("td",[t._v(t._s(t.client.name))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.$t("Client ID"))+":")]),t._v(" "),s("td",[t._v(t._s(t.client.clientId))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.$t("Email"))+":")]),t._v(" "),s("td",[t._v(t._s(t.client.email))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.$t("Phone"))+":")]),t._v(" "),s("td",[t._v(t._s(t.client.phone))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.$t("Contract Id"))+":")]),t._v(" "),s("td",[t._v(t._s(t.client.contractId))])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.$t("Portfolio Id"))+":")]),t._v(" "),s("td",[t._v(t._s(t.client.portfolios[0]))])])])])},j=[],M={render:L,staticRenderFns:j},W=M,H=s("VU/8"),Y=H(F,W,!1,null,null,null),K=Y.exports,J={props:["data"]},z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-bordered"},[s("tr",[s("th",[t._v(t._s(t.$t("Total Deposits"))+":")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.data.totalDepositsBGN))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("Total Withdrawals"))+":")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.data.totalWithdrawalsBGN))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("Total Commissions"))+":")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.data.totalCommissionsBGN))])]),t._v(" "),s("tr",[s("th",[t._v(t._s(t.$t("Net Profit"))+":")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.data.netProfitBGN))])])])])},Z=[],Q={render:z,staticRenderFns:Z},X=Q,tt=s("VU/8"),et=tt(J,X,!1,null,null,null),st=et.exports,at={created:function(){this.loadTransaction(this.portfolioId)},props:["portfolioId"],data:function(){return{loading:!1,error:null,currentPage:1,itemsPerPage:20}},computed:{transactions:function(){return this.$store.getters.getSPTransactions},total:function(){return this.$store.getters.getSPTransactionsTotal}},methods:{loadTransaction:function(t){var e=this,s={portfolioId:t,page:this.currentPage,itemsPerPage:this.itemsPerPage};this.error=null,this.loading=!0,this.$store.dispatch("loadPortfolioTransactions",s).catch(function(t){e.error=t}).finally(function(){e.loading=!1})}},watch:{portfolioId:function(t){t&&(this.currentPage=1,this.loadTransaction(t))},currentPage:function(){this.loadTransaction(this.portfolioId)}}},ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.error?s("div",{staticClass:"alert alert-danger text-center"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t.total?s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Type")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Date")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Currency 1 Amount")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Currency"))+" 1")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Currency 2 Amount")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Currency"))+" 2")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Value in BGN")))])])]),t._v(" "),s("tbody",t._l(t.transactions[t.currentPage],function(e){return s("tr",[s("td",[t._v(t._s(e.id))]),t._v(" "),s("td",[t._v(t._s(t.$t(e.type)))]),t._v(" "),s("td",[t._v(t._s(e.date))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.c1Amount))]),t._v(" "),s("td",[t._v(t._s(e.c1))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.c2Amount))]),t._v(" "),s("td",[t._v(t._s(e.c2))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.valueBGN))])])}))]):t._e(),t._v(" "),t.total?t._e():s("div",[t._v(t._s(t.$t("There are no any transactions"))+".")]),t._v(" "),t.total>t.itemsPerPage?s("b-pagination",{attrs:{size:"md","total-rows":t.total,"per-page":t.itemsPerPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e(),t._v(" "),s("loading",{attrs:{loading:t.loading}})],1)},rt=[],nt={render:ot,staticRenderFns:rt},it=nt,lt=s("VU/8"),ct=lt(at,it,!1,null,null,null),ut=ct.exports,dt={props:["assets"],data:function(){return{columns:[{type:"string",label:"Coin"},{type:"number",label:"Value in BGN"},{type:"string",role:"tooltip",p:{html:!0}}],options:{width:800,height:500,is3D:!0,legend:"labeled",pieSliceText:"none",tooltip:{isHtml:!0}}}},computed:{rows:function(){return this.assets.map(function(t){return[t.name,t.valueBGN,'<div class="assets-tooltip">'+t.valueBGN+" BGN</div>"]})}}},mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vue-chart",{attrs:{"chart-type":"PieChart",columns:t.columns,rows:t.rows,options:t.options}})],1)},ft=[],vt={render:mt,staticRenderFns:ft},pt=vt,_t=s("VU/8"),ht=_t(dt,pt,!1,null,null,null),gt=ht.exports,wt={components:{ClientTable:K,TotalsTable:st,TransactionsTable:ut,AssetsTable:V,PieChart:gt},created:function(){var t=this;this.loading=!0,this.$store.dispatch("loadPortfolioDetails",this.user.portfolios[0]).then(function(){t.hasPortfolio=!0}).catch(function(){t.hasPortfolio=!1}).finally(function(){t.loading=!1})},data:function(){return{loading:!1,tabIndex:null,hasPortfolio:null,i18n:{overview:this.$t("overview"),transactions:this.$t("transactions")}}},computed:{user:function(){return this.$store.getters.getLoggedUser},portfolioStats:function(){return this.$store.getters.getSPStats},portfolioAssets:function(){return this.$store.getters.getSPAssets},updateTime:function(){return this.$store.getters.getUpdateTime}},watch:{"$i18n.locale":function(){this.i18n={overview:this.$t("overview"),transactions:this.$t("transactions")}}}},Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-md-12"},[t.user?s("client-table",{attrs:{client:t.user}}):t._e()],1),t._v(" "),t.hasPortfolio?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card portfolio-card"},[s("div",{staticClass:"card-header"},[s("h2",[t._v(t._s(t.$t("Portfolio"))+" #"+t._s(t.user.portfolios[0])+": "+t._s(t.portfolioStats?t.portfolioStats.totalValueBGN:null)+" "+t._s(t.$t("BGN")))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("b-tabs",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{staticClass:"pt-5",attrs:{title:t.i18n.overview,active:""}},[t.portfolioAssets&&t.portfolioAssets.length?s("div",{staticClass:"mb-5"},[s("pie-chart",{attrs:{assets:t.portfolioAssets}}),t._v(" "),s("assets-table",{attrs:{coins:t.portfolioAssets}}),t._v(" "),s("i18n",{attrs:{path:"priceUpdateInfo",tag:"p"}},[s("a",{attrs:{place:"source",href:"https://coinmarketcap.com/"}},[t._v("https://coinmarketcap.com")]),t._v(" "),s("span",{attrs:{place:"updateTime"}},[t._v(t._s(t.updateTime))])])],1):t._e(),t._v(" "),s("h3",[t._v(t._s(t.$t("ROI")))]),t._v(" "),t.portfolioStats?s("totals-table",{attrs:{data:t.portfolioStats}}):t._e(),t._v(" "),t.portfolioStats?t._e():s("div",{staticClass:"alert text-center"},[t._v(t._s(t.$t("noData")))])],1),t._v(" "),s("b-tab",{staticClass:"pt-5",attrs:{title:t.i18n.transactions}},[1===t.tabIndex?s("transactions-table",{attrs:{portfolioId:t.user.portfolios[0]}}):t._e()],1)],1)],1)])]):t._e(),t._v(" "),s("loading",{attrs:{loading:t.loading}})],1)])},bt=[],Ct={render:Pt,staticRenderFns:bt},$t=Ct,Tt=s("VU/8"),Dt=Tt(wt,$t,!1,null,null,null),Nt=Dt.exports,yt=s("+cKO"),xt=s("Dd8w"),St=s.n(xt),kt={roundTo:a,round:i,format:o,formatStrNum:r},Gt={formatDate:l,formatDateTime:c},Bt="https://staging-blockchain-bg.herokuapp.com/v1",Ut={updateUser:function(t,e){return $.a.patch(Bt+"/user/"+t,e,{headers:{"Content-Type":"application/json"}})},login:function(t,e,s){var a={email:t,password:e};return $.a.post(Bt+"/session",a,{headers:{"Content-Type":"application/json"}}).then(function(t){return t.data.role===s?{user:f(t.data),csrfToken:t.csrfToken}:p.a.reject(new Error("Do not have permission."))}).catch(function(t){var e=t.message||t.response.data.error;return p.a.reject(e)})},logout:function(){return $.a.delete(Bt+"/session")},setNewPass:function(t,e,s){var a={token:t,userId:e,password:s};return $.a.patch(Bt+"/credentials/reset",a,{headers:{"Content-Type":"application/json"}})},changePass:function(t,e){var s={oldPassword:t,newPassword:e};return $.a.patch(Bt+"/credentials/change",s,{headers:{"Content-Type":"application/json"}})}},At=St()({},Ut),Rt={props:{csrfToken:{}},validations:{formData:{oldPassword:{required:yt.required},newPassword:{required:yt.required},repNewPassword:{required:yt.required,sameAsNewPass:Object(yt.sameAs)("newPassword")}}},data:function(){return{formData:{oldPassword:null,newPassword:null,repNewPassword:null},loading:!1,errorOnChange:null}},methods:{submitHandler:function(){var t=this;this.$v.formData.$invalid||(this.loading=!0,At.changePass(this.formData.oldPassword,this.formData.newPassword).then(function(e){t.$emit("changeSuccess")}).catch(function(){t.errorOnChange="OOPSS! Something goes wrong. Try again."}).finally(function(){t.loading=!1}))}}},It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){e.preventDefault(),t.submitHandler(e)}}},[t.errorOnChange?s("div",{staticClass:"alert alert-danger text-center"},[t._v("\n    "+t._s(t.errorOnChange)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("Old password"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.oldPassword,expression:"formData.oldPassword"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.oldPassword.required&&t.$v.formData.oldPassword.$dirty}],attrs:{type:"password"},domProps:{value:t.formData.oldPassword},on:{blur:function(e){t.$v.formData.oldPassword.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"oldPassword",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.$t("Please, enter old password"))+".\n      ")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("New Password"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.newPassword,expression:"formData.newPassword"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.newPassword.required&&t.$v.formData.newPassword.$dirty}],attrs:{type:"password"},domProps:{value:t.formData.newPassword},on:{blur:function(e){t.$v.formData.newPassword.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"newPassword",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.$t("Please, enter the new password")))])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("Repeat New Password"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.repNewPassword,expression:"formData.repNewPassword"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.repNewPassword.required&&t.$v.formData.repNewPassword.$dirty||!t.$v.formData.repNewPassword.sameAsNewPass}],attrs:{type:"password"},domProps:{value:t.formData.repNewPassword},on:{blur:function(e){t.$v.formData.repNewPassword.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"repNewPassword",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.$v.formData.repNewPassword.sameAsNewPass?t.$t("Repeated password is not the same"):t.$t("Please, repeat the password"))+"\n      ")])])]),t._v(" "),s("button",{staticClass:"btn btn-lg btn-block btn-success",attrs:{type:"submit",disabled:t.$v.formData.$invalid}},[t._v(t._s(t.$t("Change Password")))]),t._v(" "),s("loading",{attrs:{loading:t.loading}})],1)},qt=[],Et={render:It,staticRenderFns:qt},Ot=Et,Vt=s("VU/8"),Ft=Vt(Rt,Ot,!1,null,null,null),Lt=Ft.exports,jt={components:{changePasswordForm:Lt},data:function(){return{changeMode:!0}},methods:{toggleMode:function(){this.changeMode=!this.changeMode}},computed:{csrfToken:function(){return this.$store.getters.getToken}}},Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 mx-auto pt-3"},[t.changeMode?s("div",[s("h1",{staticClass:"text-center pb-3"},[t._v(t._s(t.$t("Change Password")))]),t._v(" "),s("change-password-form",{attrs:{csrfToken:t.csrfToken},on:{changeSuccess:t.toggleMode}})],1):s("div",{staticClass:"text-center"},[s("h2",[t._v(t._s(t.$t("Password was changed successfully")))]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:t.toggleMode}},[t._v("Back")])])])])])},Wt=[],Ht={render:Mt,staticRenderFns:Wt},Yt=Ht,Kt=s("VU/8"),Jt=Kt(jt,Yt,!1,null,null,null),zt=Jt.exports,Zt={validations:{formData:{password:{required:yt.required},email:{required:yt.required,email:yt.email}}},data:function(){return{formData:{password:null,email:null},loading:!1,errorOnLogin:null}},methods:{submitHandler:function(){var t=this;this.$v.formData.$invalid||(this.loading=!0,this.$store.dispatch("login",this.formData).then(function(){t.$emit("loginSuccess")}).catch(function(e){t.errorOnLogin=e}).finally(function(){t.loading=!1}))}}},Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){e.preventDefault(),t.submitHandler(e)}}},[t.errorOnLogin?s("div",{staticClass:"alert alert-danger text-center"},[t._v("\n    "+t._s(t.errorOnLogin)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("Email"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.email.required&&t.$v.formData.email.$dirty||!t.$v.formData.email.email}],attrs:{type:"text"},domProps:{value:t.formData.email},on:{blur:function(e){t.$v.formData.email.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.$v.formData.email.required?"Please, enter valid email":"Please, enter email")+"\n      ")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("Password"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.password.required&&t.$v.formData.password.$dirty}],attrs:{type:"password"},domProps:{value:t.formData.password},on:{blur:function(e){t.$v.formData.password.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n        Please, enter password.\n      ")])])]),t._v(" "),s("button",{staticClass:"btn btn-lg btn-block btn-success",attrs:{type:"submit",disabled:t.$v.formData.$invalid}},[t._v(t._s(t.$t("loginFormSubmit")))]),t._v(" "),s("loading",{attrs:{loading:t.loading}})],1)},Xt=[],te={render:Qt,staticRenderFns:Xt},ee=te,se=s("VU/8"),ae=se(Zt,ee,!1,null,null,null),oe=ae.exports,re={components:{loginForm:oe},methods:{onLoginSuccess:function(){this.$router.push("/")}}},ne=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 mx-auto pt-3"},[s("h1",{staticClass:"text-center pb-3"},[t._v(t._s(t.$t("loginPageTitle")))]),t._v(" "),s("login-form",{on:{loginSuccess:t.onLoginSuccess}})],1)])])},ie=[],le={render:ne,staticRenderFns:ie},ce=le,ue=s("VU/8"),de=ue(re,ce,!1,null,null,null),me=de.exports,fe={props:["id","token"],validations:{formData:{password:{required:yt.required},repPassword:{required:yt.required,sameAsPass:Object(yt.sameAs)("password")}}},data:function(){return{formData:{password:null,repPassword:null},loading:!1,errorOnAction:null}},methods:{submitHandler:function(){var t=this;this.$v.formData.$invalid||(this.loading=!0,At.setNewPass(this.token,this.id,this.formData.password).then(function(e){t.$emit("actionSuccess")}).catch(function(e){t.errorOnAction=e.response.error}).finally(function(){t.loading=!1}))}}},ve=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){e.preventDefault(),t.submitHandler(e)}}},[t.errorOnAction?s("div",{staticClass:"alert alert-danger text-center"},[t._v("\n    "+t._s(t.errorOnAction)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("Password"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.password.required&&t.$v.formData.password.$dirty}],attrs:{type:"password"},domProps:{value:t.formData.password},on:{blur:function(e){t.$v.formData.password.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.$t("Please, enter the password"))+"\n      ")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label col-form-label-sm"},[t._v(t._s(t.$t("Repeat Password"))+":")]),t._v(" "),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.repPassword,expression:"formData.repPassword"}],staticClass:"form-control form-control-sm",class:[{"is-invalid":!t.$v.formData.repPassword.required&&t.$v.formData.repPassword.$dirty||!t.$v.formData.repPassword.sameAsPass}],attrs:{type:"password"},domProps:{value:t.formData.repPassword},on:{blur:function(e){t.$v.formData.repPassword.$touch()},input:function(e){e.target.composing||t.$set(t.formData,"repPassword",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.$v.formData.repPassword.sameAsPass?t.$t("Repeated password is not the same"):t.$t("Please, repeat the password"))+"\n      ")])])]),t._v(" "),s("button",{staticClass:"btn btn-lg btn-block btn-success",attrs:{type:"submit",disabled:t.$v.formData.$invalid}},[t._v(t._s(t.$t("Set Password")))]),t._v(" "),s("loading",{attrs:{loading:t.loading}})],1)},pe=[],_e={render:ve,staticRenderFns:pe},he=_e,ge=s("VU/8"),we=ge(fe,he,!1,null,null,null),Pe=we.exports,be={components:{ResetPasswordForm:Pe},props:["id","token"],data:function(){return{isActionSuccessful:!1}},computed:{title:function(){return(this.id&&this.token?"Set":"Reset")+" Password"}}},Ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 mx-auto pt-3"},[t.isActionSuccessful?s("div",{staticClass:"text-center"},[s("h2",[t._v(t._s(t.title)+" was successful")]),t._v(" "),s("b-button",{attrs:{size:"lg",variant:"success",to:"/login"}},[t._v("Log in")])],1):s("div",[s("h1",{staticClass:"text-center pb-3"},[t._v(t._s(t.title))]),t._v(" "),s("reset-password-form",{attrs:{id:t.id,token:t.token},on:{actionSuccess:function(e){t.isActionSuccessful=!0}}})],1)])])])},$e=[],Te={render:Ce,staticRenderFns:$e},De=Te,Ne=s("VU/8"),ye=Ne(be,De,!1,null,null,null),xe=ye.exports,Se=s("NYxO"),ke=s("woOf"),Ge=s.n(ke),Be={getPortfolioDetails:function(t){return $.a.get(Bt+"/portfolio/"+t).then(function(t){return m(t.data)}).catch(function(t){return p.a.reject(t.response.data.error)})},getPortfolioTransactions:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return $.a.get(Bt+"/portfolio/"+t+"/tx?offset="+e+"&limit="+s).then(function(t){return{transactions:t.data.map(d),total:t.count}}).catch(function(t){return p.a.reject(t.response.data.error)})}},Ue=St()({},Be),Ae={id:null,stats:null,assets:null,transactions:null,transactionsTotal:null},Re={selectedPortfolio:St()({},Ae),updateTime:null},Ie={getUpdateTime:function(t){return t.updateTime},getSPStats:function(t){return t.selectedPortfolio.stats},getSPAssets:function(t){return t.selectedPortfolio.assets},getSPTransactions:function(t){return t.selectedPortfolio.transactions},getSPTransactionsTotal:function(t){return t.selectedPortfolio.transactionsTotal}},qe={selectPortfolio:function(t,e){if(t.selectedPortfolio.id!==e){var s=e||Ae.id;t.selectedPortfolio=Ge()({},Ae,{id:s})}},setSPDetails:function(t,e){var s=t.selectedPortfolio;s.id===e.id?(s.stats=e.stats,s.assets=e.assets,t.updateTime=e.updateTime):console.error("Selected portfolio is different.")},setSPTransactions:function(t,e){var s=t.selectedPortfolio;s.id===e.id?(s.transactions=s.transactions||[],s.transactions[e.page]=e.transactions,s.transactionsTotal=e.total):console.error("Selected portfolio is different.")}},Ee={loadPortfolioDetails:function(t,e){var s=t.commit,a=Re.selectedPortfolio;return a.id===e&&a.assets&&a.stats?p.a.resolve():(s("selectPortfolio",e),Ue.getPortfolioDetails(e).then(function(t){return s("setSPDetails",t),t}).catch(function(t){return p.a.reject(t)}))},loadPortfolioTransactions:function(t,e){var s=t.commit,a=t.state,o=e.portfolioId,r=e.page,n=e.itemsPerPage,i=a.selectedPortfolio;if(i.id===o&&i.transactions&&i.transactions[r])return p.a.resolve();r=r||1;var l=n||20,c=l*(r-1);return s("selectPortfolio",o),Ue.getPortfolioTransactions(o,c,l).then(function(t){var e={id:o,page:r,transactions:t.transactions,total:t.total};return s("setSPTransactions",e),e}).catch(function(t){return p.a.reject(t)})}},Oe={state:Re,mutations:qe,actions:Ee,getters:Ie},Ve=s("mvHQ"),Fe=s.n(Ve),Le={csrfToken:null,loggedUser:null},je={getLoggedUser:function(t){return t.loggedUser},getToken:function(t){return t.csrfToken}},Me={login:function(t,e){t.csrfToken=e.csrfToken,t.loggedUser=e.user},logout:function(t){t.csrfToken=null,t.loggedUser=null}},We={loadUsersCash:function(t){var e=t.commit,s=JSON.parse(sessionStorage.getItem("auth"));s&&"client"===s.user.role&&e("login",s)},login:function(t,e){var s=t.commit;return At.login(e.email,e.password,"client").then(function(t){sessionStorage.setItem("auth",Fe()(t)),s("login",t)}).catch(function(t){return p.a.reject(t)})},logout:function(t,e){return(0,t.commit)("logout"),Je.push("/login"),sessionStorage.clear(),At.logout()}},He={state:Le,mutations:Me,actions:We,getters:je};_.a.use(Se.a);var Ye=new Se.a.Store({modules:{portfolio:Oe,users:He}}),Ke=function(t){return{requireGuest:function(e,s,a){a(!t.state.users.csrfToken||{path:"/",query:{redirect:e.fullPath}})},requireUser:function(e,s,a){a(!!t.state.users.csrfToken||{path:"/login",query:{redirect:e.fullPath}})}}}(Ye);_.a.use(B.a);var Je=new B.a({routes:[{path:"/",name:"Home",component:Nt,beforeEnter:Ke.requireUser},{path:"/login",name:"Login",component:me,beforeEnter:Ke.requireGuest},{path:"/change",name:"Change",component:zt,beforeEnter:Ke.requireUser},{path:"/reset/:id/:token",name:"Reset",component:xe,props:!0,beforeEnter:Ke.requireGuest},{path:"/setup/:id/:token",name:"Setup",component:xe,props:!0,beforeEnter:Ke.requireGuest},{path:"*",redirect:"/"}],mode:"history"}),ze={props:{loading:{}}},Ze=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:"/static/images/loading.gif"}})]):t._e()},Qe=[],Xe={render:Ze,staticRenderFns:Qe},ts=Xe,es=s("VU/8"),ss=es(ze,ts,!1,null,null,null),as=ss.exports,os=s("TXmL"),rs=s("23ZH"),ns=s.n(rs),is=s("+REE"),ls=s.n(is),cs={en:ns.a,bg:ls.a};s("pdy4");_.a.config.productionTip=!1,Ye.dispatch("loadUsersCash"),$.a.interceptors.request.use(function(t){t.headers=t.headers||{};var e=Ye.state.users.csrfToken;return e&&(t.headers["X-CSRF-Token"]=e),t.withCredentials=!0,t}),$.a.interceptors.response.use(function(t){return t.data},function(t){return 401===t.response.status&&Ye.dispatch("logout"),p.a.reject(t)}),_.a.use(os.a),_.a.use(w.a),_.a.use(g.a),_.a.use(b.a),_.a.component("loading",as),new _.a({el:"#app",router:Je,store:Ye,i18n:new os.a({locale:"bg",messages:cs,fallbackLocale:"en"}),render:function(t){return t(G)}})},dW2o:function(t,e){},"hTx+":function(t,e){},n9mN:function(t,e){},pdy4:function(t,e){},r15W:function(t,e,s){"use strict";function a(t){s("dW2o")}var o=s("E9Zr"),r=o.a,n=s("VU/8"),i=a,l=n(r,null,!1,i,null,null);e.a=l.exports},xBwK:function(t,e){}},["cxtk"]);
//# sourceMappingURL=app.4f0a60c2a7eca499edcc.js.map