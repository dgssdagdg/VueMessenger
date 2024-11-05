(function(){"use strict";var e={1394:function(e,t,s){s.d(t,{I:function(){return h},db:function(){return l},j:function(){return u}});var a=s(6400),n=s(5942),o=s(4155),r=s(7617),i=s(7844);const c={apiKey:"AIzaSyD8k6XEiyqWX31dU5PzZXpuDPtyd7YBVic",authDomain:"vue-messenger-4b5b0.firebaseapp.com",projectId:"vue-messenger-4b5b0",storageBucket:"vue-messenger-4b5b0.appspot.com",messagingSenderId:"908257836357",appId:"1:908257836357:web:bc8c0ff54d3803d051522c",measurementId:"G-GBLMQR18Q2"},d=(0,a.Wp)(c),u=((0,n.P5)(d),(0,o.xI)(d)),l=(0,r.aU)(d),h=(0,i.c7)(d)},1431:function(e,t,s){var a=s(5130),n=s(6768);function o(e,t,s,a,o,r){const i=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)((0,n.$y)(r.layout),null,{default:(0,n.k6)((()=>[(0,n.bF)(i)])),_:1})}function r(e,t,s,a,o,r){const i=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(i)}var i=s(1394),c={name:"main-layout",async mounted(){i.j.onAuthStateChanged((e=>{e&&(this.$store.dispatch("setUserOnlineStatus",!0),window.addEventListener("beforeunload",(()=>{this.$store.dispatch("setUserOnlineStatus",!1)})))}));try{const e=["fetchUsers","fetchUsersNotice","fetchMyChats","fetchMyGroups","fetchMyCanals","fetchMyInfo"];await Promise.all(e.map((e=>this.$store.dispatch(e))))}catch(e){console.error("Error fetching data:",e)}}},d=s(1241);const u=(0,d.A)(c,[["render",r]]);var l=u;function h(e,t,s,a,o,r){const i=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(i)}var m={name:"empty-layout"};const p=(0,d.A)(m,[["render",h]]);var f=p,y={components:{MainLayout:l,EmptyLayout:f},computed:{layout(){return(this.$route.meta.layout||"empty")+"-layout"}}};const g=(0,d.A)(y,[["render",o]]);var A=g,v=s(4232);const S=["value"];function C(e,t,s,a,o,r){return(0,n.uX)(),(0,n.CE)("input",{class:(0,v.C4)([{"input-not-empty":s.modelValue.length>0},"input"]),value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>r.updateInput&&r.updateInput(...e)),type:"text"},null,42,S)}var b={props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}},name:"my-input"};const w=(0,d.A)(b,[["render",C],["__scopeId","data-v-3ababd47"]]);var E=w;const U={class:"messenger-left-users-user-img"},Q={alt:"Avatar-icon"},k={key:0,class:"_my-status messenger-left-users-user-status"},B={class:"messenger-left-users-user-info"},M={class:"messenger-left-users-user-top"},I={class:"messenger-left-users-user-name _btns-tabs-names_in_msgs"},j={class:"messenger-left-users-user-date _secondary"},N={class:"messenger-left-users-user-last_message _main"};function R(e,t,a,o,r,i){const c=(0,n.gN)("lazy");return(0,n.uX)(),(0,n.CE)("div",{onClick:t[0]||(t[0]=e=>i.openChatWindow(a.user)),class:(0,v.C4)(["messenger-left-users-user",{"active-user":i.infoFullActiveChat.id==a.user.id}])},[(0,n.Lk)("div",U,[(0,n.bo)((0,n.Lk)("img",Q,null,512),[[c,a.user.imgSrc?a.user.imgSrc:s(9096)]]),"chatUsers"==a.user.type&&i.changeStatus?((0,n.uX)(),(0,n.CE)("div",k)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",B,[(0,n.Lk)("div",M,[(0,n.Lk)("div",I,(0,v.v_)(a.user.name),1),(0,n.Lk)("div",j,(0,v.v_)(a.user.date),1)]),(0,n.Lk)("div",N,(0,v.v_)(i.userLastReport),1)])],2)}var F={props:{user:{type:Object,required:!0}},methods:{openChatWindow(e){this.$store.commit("SetInfoWindow",e),this.$store.dispatch("fetchActiveChat",e)}},computed:{infoFullActiveChat(){return this.$store.getters.infoFullActiveChat},infoActiveChat(){return this.$store.getters.infoActiveChat},infoUsers(){return this.$store.getters.infoUsers},changeStatus(){const e=this.infoUsers.find((e=>e.id==this.user.id));if(e)return!!e.isOnline},userLastReport(){let e=this.user.body[this.user.body.length-1];return e?"photo"==e.type?"Фотография":"file"==e.type?"Файл":"voice"==e.type?"Голосовое сообщение":e.title.split(" ").slice(0,3).join(" "):"Сообщение"}},name:"my-users"};const L=(0,d.A)(F,[["render",R],["__scopeId","data-v-47e534d1"]]);var x=L;const H={key:0,class:"dropdown-menu"},X=["onClick"];function W(e,t,s,a,o,r){return s.show?((0,n.uX)(),(0,n.CE)("div",H,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.chatDropDownItems,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.title,class:"dropdown-menu-item",onClick:t=>r.openForm(e)},[(0,n.Lk)("span",{class:(0,v.C4)(e.imgSrc)},null,2),(0,n.eW)(" "+(0,v.v_)(e.title),1)],8,X)))),128))])):(0,n.Q3)("",!0)}var q={props:{chatDropDownItems:{type:Array,required:!0},show:{type:Boolean,default:!1}},methods:{openForm(e){this.$emit("myaction",e),this.$emit("update:show",!1)}},mounted(){document.addEventListener("click",(e=>{e.target.closest(".dropdown-menu")||!0!==this.show||e.target.parentElementSibling||this.$emit("update:show",!1)}))},name:"my-dropdown"};const V=(0,d.A)(q,[["render",W],["__scopeId","data-v-55c3181d"]]);var O=V;const J={class:"main-chat-text"},D={class:"reply-message-name"},T={class:"reply-message-type"},_={key:1,class:"main-chat-text-files"},P={key:0,alt:"file.name",class:"main-chat-text-file-img"},G={class:"main-chat-text-file-block"},K={class:"main-chat-text-file-texts"},Z={class:"main-chat-text-file-name"},Y={class:"main-chat-text-file-size"},$=["onClick"],z=["src"],ee={key:3,style:{"font-size":"8px",opacity:".7"},class:"main-chat-status icon-check"},te={class:"main-chat-date _secondary"};function se(e,t,s,a,o,r){const i=(0,n.gN)("lazy");return(0,n.uX)(),(0,n.CE)("div",{class:(0,v.C4)([{"main-chat-item-left":r.myInfo.uid!=s.chatReport.auth},"main-chat-item"])},[(0,n.Lk)("div",J,[s.chatReport.replyMessage?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"reply-message-report",onClick:t[0]||(t[0]=t=>e.$emit("goMessage",s.chatReport.replyMessage.id))},[(0,n.Lk)("div",D,(0,v.v_)(s.chatReport.replyMessage.name),1),(0,n.Lk)("div",T,(0,v.v_)(s.chatReport.replyMessage.text),1)])):(0,n.Q3)("",!0),s.chatReport.files?((0,n.uX)(),(0,n.CE)("div",_,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.chatReport.files,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.name,class:"main-chat-text-file"},["photo"==s.chatReport.type?(0,n.bo)(((0,n.uX)(),(0,n.CE)("img",P,null,512)),[[i,e.imgSrc]]):(0,n.Q3)("",!0),(0,n.Lk)("div",G,[(0,n.Lk)("div",K,[(0,n.Lk)("div",Z,(0,v.v_)(e.name),1),(0,n.Lk)("div",Y,(0,v.v_)(e.size),1)]),(0,n.Lk)("button",{onClick:t=>r.downloadImage(e),type:"button",class:"main-chat-text-file-download"},"Скачать",8,$)])])))),128))])):(0,n.Q3)("",!0),"audio"==s.chatReport.type?((0,n.uX)(),(0,n.CE)("audio",{key:2,controls:"",src:s.chatReport.audioUrl},null,8,z)):(0,n.Q3)("",!0),(0,n.eW)(" "+(0,v.v_)(s.chatReport.title)+" ",1),r.myInfo.uid==s.chatReport.auth?((0,n.uX)(),(0,n.CE)("div",ee)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",te,(0,v.v_)(s.chatReport.date),1)],2)}s(4603),s(7566),s(8721);var ae=s(7844),ne={data(){return{}},props:{chatReport:{type:Object,required:!0}},computed:{infoActiveChat(){return this.$store.getters.infoActiveChat},myInfo(){return this.$store.getters.myInfo}},methods:{async downloadImage(e){try{(0,ae.qk)((0,ae.KR)(i.I,`images/${e.name}`)).then((t=>{const s=new XMLHttpRequest;s.responseType="blob",s.onload=t=>{const a=s.response,n=document.createElement("a");n.href=window.URL.createObjectURL(a),n.target="_blank",n.download=e.name,n.click()},s.open("GET",t),s.send()})).catch((e=>{}))}catch(t){console.error("Ошибка при загрузке изображения:",t)}}},name:"my-chat-report"};const oe=(0,d.A)(ne,[["render",se],["__scopeId","data-v-7ca93a6a"]]);var re=oe;const ie={class:"notifications-item"},ce={class:"notifications-avatar"},de=["alt"],ue={class:"notifications-block"},le={class:"notifications-box"},he={class:"notifications-name"},me={class:"notifications-text"},pe={class:"notifications-date"};function fe(e,t,a,o,r,i){const c=(0,n.gN)("lazy");return(0,n.uX)(),(0,n.CE)("div",ie,[(0,n.Lk)("div",ce,[(0,n.bo)((0,n.Lk)("img",{alt:a.notice.name},null,8,de),[[c,a.notice.imgSrc?a.notice.imgSrc:s(9096)]]),(0,n.eW)(" "+(0,v.v_)(i.getMinutesSinceLastSeen(i.infoUsers)),1)]),(0,n.Lk)("div",ue,[(0,n.Lk)("div",le,[(0,n.Lk)("span",he,(0,v.v_)(a.notice.name),1),(0,n.Lk)("span",me,(0,v.v_)(a.notice.text),1)]),(0,n.Lk)("div",pe,(0,v.v_)(a.notice.date),1)])])}var ye={computed:{infoFullActiveChat(){return this.$store.getters.infoFullActiveChat},infoUsers(){return this.$store.getters.infoUsers}},methods:{getMinutesSinceLastSeen(e){const t=new Date(e.date),s=new Date,a=s-t,n=Math.floor(a/1e3),o=Math.floor(n/60),r=Math.floor(o/60),i=Math.floor(r/24);return i>0?`${i} ${1===i?"день":"дня"} назад.`:r>0?`${r} ${1===r?"час":"часа"} назад.`:`${o} ${1===o?"минуту":"минуты"} назад.`}},props:{notice:{type:Object,required:!0}},name:"my-notice"};const ge=(0,d.A)(ye,[["render",fe],["__scopeId","data-v-0b9cbe5d"]]);var Ae=ge;const ve={class:"messenger-left-users-user-img"},Se={alt:"Avatar-icon"},Ce={key:0,class:"_my-status messenger-left-users-user-status"},be={class:"messenger-left-users-user-name"};function we(e,t,a,o,r,i){const c=(0,n.gN)("lazy");return(0,n.uX)(),(0,n.CE)("div",{onClick:t[0]||(t[0]=e=>i.openChatWindow(a.user)),class:"messenger-left-users-user"},[(0,n.Lk)("div",ve,[(0,n.bo)((0,n.Lk)("img",Se,null,512),[[c,a.user.imgSrc?a.user.imgSrc:s(9096)]]),a.user.isOnline?((0,n.uX)(),(0,n.CE)("div",Ce)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",be,(0,v.v_)(a.user.name),1)])}var Ee={props:{user:{type:Object,required:!0}},methods:{openChatWindow(e){this.$store.commit("SetInfoWindow",e),this.$store.dispatch("fetchActiveChat",e),this.$store.commit("SetSearchQuery","")}},name:"my-global-users"};const Ue=(0,d.A)(Ee,[["render",we],["__scopeId","data-v-fb1e7236"]]);var Qe=Ue;const ke={type:"button",class:"_blue-button _notification-main1"};function Be(e,t,s,a,o,r){return(0,n.uX)(),(0,n.CE)("button",ke,[(0,n.RG)(e.$slots,"default",{},void 0,!0)])}var Me={name:"my-button"};const Ie=(0,d.A)(Me,[["render",Be],["__scopeId","data-v-38b325b8"]]);var je=Ie,Ne=[E,x,O,re,Ae,Qe,je],Re=s(1387),Fe=s(4155);const Le=[{path:"/",name:"about",meta:{layout:"main",requiresAuth:!0},component:()=>s.e(80).then(s.bind(s,1880))},{path:"/login",name:"login",meta:{layout:"empty"},component:()=>s.e(792).then(s.bind(s,792))},{path:"/register",name:"register",meta:{layout:"empty"},component:()=>s.e(965).then(s.bind(s,5965))}],xe=(0,Re.aE)({history:(0,Re.LA)("/VueMessenger/"),routes:Le});xe.beforeEach(((e,t,s)=>{const a=e.matched.some((e=>e.meta.requiresAuth));(0,Fe.hg)(i.j,(e=>{a&&!e?s({name:"login"}):s()}))}));var He=xe,Xe=s(782),We={state:{showNotification:!1,showPopUp:"",showChatSetting:!1,showAddUserInChat:!1,showUserSetting:!1,saitMode:!1,chatSearch:"",showChatSearch:!1,chatSearchIdScroll:void 0},getters:{infoShowPopUp:e=>e.showPopUp,infoShowChatSetting:e=>e.showChatSetting,infoShowAddUserInChat:e=>e.showAddUserInChat,infoShowUserSetting:e=>e.showUserSetting,infoSaitMode:e=>e.saitMode,chatSearchFilter:e=>t=>[...t].filter((t=>void 0!=t.title&&t.title.toUpperCase().includes(e.chatSearch.toUpperCase())))},mutations:{showNotification(e,t){e.showNotification=t},showPopUp(e,t){e.showPopUp=t},SetShowChatSetting(e,t){e.showChatSetting=t},setShowAddUserInChat(e,t){e.showAddUserInChat=t},SetShowUserSetting(e,t){e.showUserSetting=t},SetSaitMode(e,t){e.saitMode=t},SetChatSearch(e,t){e.chatSearch=t},SetShowChatSearch(e,t){e.showChatSearch=t},SetChatSearchIdScroll(e,t){e.chatSearchIdScroll=t}},actions:{}},qe=(s(4114),s(7617)),Ve={state:{},getters:{},mutations:{},actions:{async register({commit:e},{email:t,password:s,name:a}){try{const e=await(0,Fe.eJ)(i.j,t,s,a),n=e.user;await(0,qe.BN)((0,qe.H9)(i.db,"/users",n.uid),{name:a,email:t,notice:[],imgSrc:"",isOnline:!1,lastSeen:""})}catch(n){console.log(n)}},async login({dispatch:e,commit:t},{email:s,password:a}){try{await(0,Fe.x9)(i.j,s,a)}catch(n){console.log(n.message)}},async logout({dispatch:e,commit:t}){try{e("setUserOnlineStatus",!1),await(0,Fe.CI)(i.j),He.push("/login")}catch(s){console.log(s.message)}},async setUserOnlineStatus({dispatch:e,commit:t},s){const a=(0,qe.H9)(i.db,`users/${i.j.currentUser.uid}`);await(0,qe.mZ)(a,{isOnline:s,lastSeen:s?null:(new Date).toISOString()})}}},Oe={state:{users:[],notice:[],myChats:[],groups:[],canals:[],notFilterCanals:[],infoWindow:"",activeChat:[],fullActiveChat:"",searchQuery:"",replyMessageUser:"",notFilterActiveChat:[],myInfo:""},getters:{infoUsers:e=>e.users,infoNotice:e=>e.notice,infoMyChats:e=>e.myChats,infoWindow:e=>e.infoWindow,infoActiveChat:e=>e.activeChat,infoFullActiveChat:e=>e.fullActiveChat,infoSearchQuery:e=>e.searchQuery,infoGroups:e=>e.groups,infoCanals:e=>e.canals,infoNotFilterCanals:e=>e.notFilterCanals,infoReplyMessageUser:e=>e.replyMessageUser,infoNotFilterActiveChat:e=>e.notFilterActiveChat,myInfo:e=>e.myInfo,sortedAndSearchedPosts(e){return[...e.notFilterCanals,...e.users].filter((t=>t.name.toLowerCase().includes(e.searchQuery.toLowerCase())))}},mutations:{SetMyInfo(e,t){e.myInfo=t},SetUsers(e,t){e.users=t},SetNotice(e,t){e.notice=t},SetMyChats(e,t){e.myChats=t},SetInfoWindow(e,t){e.infoWindow=t},SetActiveChat(e,t){e.activeChat=t},SetFullActiveChat(e,t){e.fullActiveChat=t},SetSearchQuery(e,t){e.searchQuery=t},SetGroups(e,t){e.groups=t},SetCanals(e,t){e.canals=t},SetNotFilterCanals(e,t){e.notFilterCanals=t},SetReplyMessageUser(e,t){e.replyMessageUser=t},SetNotFilterActiveChat(e,t){e.notFilterActiveChat=t}},actions:{async fetchUsers({commit:e}){try{const t=(0,qe.rJ)(i.db,"users");(0,qe.aQ)(t,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()})));let a=[];i.j.currentUser&&(a=s.filter((e=>e.id!==i.j.currentUser.uid))),e("SetUsers",a)}),(e=>{console.error("Ошибка при получении пользователей:",e)}))}catch(t){console.error("Ошибка в fetchUsers:",t)}},async fetchUsersNotice({commit:e}){try{const t=(0,qe.H9)(i.db,"users",i.j.lastNotifiedUid);(0,qe.aQ)(t,(t=>{if(t.exists()){const s=t.data().notice;e("SetNotice",s)}else console.log("Документ не существует!")}),(e=>{console.error("Ошибка при получении уведомлений: ",e)}))}catch(t){console.error("Ошибка в fetchUsersNotice: ",t)}},async fetchMyChats({commit:e}){try{const t=(0,qe.rJ)(i.db,"users",i.j.lastNotifiedUid,"mychats");(0,qe.aQ)(t,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()})));e("SetMyChats",s)}),(e=>{console.error("Ошибка при получении чатов: ",e)}))}catch(t){console.error("Ошибка в fetchMyChats: ",t)}},async fetchMyGroups({commit:e}){try{const t=(0,qe.rJ)(i.db,"users",i.j.lastNotifiedUid,"mygroups"),s=(0,qe.rJ)(i.db,"groups");(0,qe.aQ)(t,(t=>{const a=t.docs.map((e=>({id:e.id,...e.data()})));(0,qe.aQ)(s,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()}))),n=s.filter((e=>a.some((t=>e.id===t.id))));e("SetGroups",n)}),(e=>{console.error("Ошибка при получении всех групп: ",e)}))}),(e=>{console.error("Ошибка при получении групп пользователя: ",e)}))}catch(t){console.error("Ошибка в fetchMyGroups: ",t)}},async fetchMyCanals({commit:e}){try{const t=(0,qe.rJ)(i.db,"users",i.j.lastNotifiedUid,"mycanals"),s=(0,qe.rJ)(i.db,"canals");(0,qe.aQ)(t,(t=>{const a=t.docs.map((e=>({id:e.id,...e.data()})));(0,qe.aQ)(s,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()}))),n=s.filter((e=>a.some((t=>e.id===t.id))));e("SetNotFilterCanals",s),e("SetCanals",n)}),(e=>{console.error("Ошибка при получении всех каналов:",e)}))}),(e=>{console.error("Ошибка при получении каналов пользователя:",e)}))}catch(t){console.error("Ошибка в fetchMyCanals:",t)}},async fetchActiveChat({commit:e,getters:t},s){try{if("groups"===s.type||"canals"===s.type){const a=(0,qe.rJ)(i.db,s.type);(0,qe.aQ)(a,(async a=>{const n=a.docs.map((e=>({id:e.id,...e.data()})));if(!n.find((e=>e.id===s.id)))return e("SetActiveChat",[]),e("SetNotFilterActiveChat",[]),e("SetFullActiveChat",t.infoWindow),void e("SetShowChatSetting",!1);const o=n.find((e=>e.id===s.id)),r=o.body.map(((e,t)=>({...e,id:t}))),c=await(0,qe.x7)((0,qe.H9)(i.db,"users",i.j.lastNotifiedUid,`my${s.type}`,s.id));let d=[];if(c.exists()){d=c.data().body;const t=r.filter((e=>!d.includes(e.id)));return e("SetActiveChat",t),e("SetNotFilterActiveChat",r),void e("SetFullActiveChat",o)}return e("SetActiveChat",[]),e("SetNotFilterActiveChat",[]),e("SetFullActiveChat",t.infoWindow),void e("SetShowChatSetting",!1)}))}else{const a=(0,qe.rJ)(i.db,"users",i.j.lastNotifiedUid,"mychats");(0,qe.aQ)(a,(async a=>{const n=a.docs.map((e=>({id:e.id,...e.data()})));if(!n.find((e=>e.id===s.id)))return e("SetActiveChat",[]),void e("SetFullActiveChat",t.infoWindow);const o=n.find((e=>e.id===s.id)),r=o.body.map(((e,t)=>({...e,id:t})));e("SetActiveChat",r),e("SetFullActiveChat",o)}))}}catch(a){console.error("Ошибка при получении активного чата:",a)}finally{e("SetShowChatSetting",!1)}},async fetchReplyMessageUser({commit:e},t){const s=(0,qe.rJ)(i.db,"users");(0,qe.aQ)(s,(s=>{const a=s.docs.map((e=>({id:e.id,...e.data()}))),n=a.find((e=>e.id===t.auth));e("SetReplyMessageUser",n)}),(e=>{console.error("Ошибка при получении пользователей:",e)}))},async fetchMyInfo({commit:e}){try{const t=(0,qe.H9)(i.db,"users",i.j.currentUser.uid);(0,qe.aQ)(t,(t=>{const s=t.data();i.j.currentUser&&(s.uid=i.j.currentUser.uid),e("SetMyInfo",s)}),(e=>{console.error("Ошибка при получении пользователей:",e)}))}catch(t){console.log(t)}}}},Je={state:{},getters:{},mutations:{},actions:{async createChat({commit:e,getters:t},{name:s,imgSrc:a,description:n,type:o,id:r}){try{const e=`users/${i.j.lastNotifiedUid}/mychats`,c=[],d={name:s,imgSrc:a,description:n,type:o,body:[]};if("chatUsers"===o){const s={name:t.myInfo.name,imgSrc:t.myInfo.imgSrc,description:n,type:o,body:[]},a=(0,qe.H9)(i.db,e,r);c.push((0,qe.BN)(a,d));const u=(0,qe.H9)((0,qe.rJ)(i.db,"users",r,"mychats"),i.j.lastNotifiedUid);c.push((0,qe.BN)(u,s))}else if("chat"===o){const t=(0,qe.H9)((0,qe.rJ)(i.db,e));c.push((0,qe.BN)(t,d))}else if("groups"===o||"canals"===o){const e=s,t=(0,qe.H9)((0,qe.rJ)(i.db,"users",i.j.lastNotifiedUid,"groups"===o?"mygroups":"mycanals"),e);c.push((0,qe.BN)(t,{body:[]}));const r=(0,qe.H9)((0,qe.rJ)(i.db,"groups"===o?"groups":"canals"),e),d={name:s,imgSrc:a,description:n,type:o,usersChat:[{uid:i.j.currentUser.uid,admin:!0}],body:[]};c.push((0,qe.BN)(r,d))}await Promise.all(c)}catch(c){console.error(c)}},async addNewReport({commit:e,dispatch:t},{title:s,date:a,user:n,type:o,files:r,audioUrl:c,replyMessage:d}){try{let e={date:a,auth:i.j.lastNotifiedUid};"file"===o||"photo"===o?(e.title=s,e.files=r,e.type=o):"audio"===o?(e.audioUrl=c,e.type=o):e.title=s,d&&(e.replyMessage=d);const u=(0,qe.H9)(i.db,"users",i.j.lastNotifiedUid,"mychats",n.id),l=(0,qe.H9)(i.db,"users",n.id,"mychats",i.j.lastNotifiedUid),h=await(0,qe.x7)(u),m=[];if("chatUsers"===n.type||n.email){if(!h.exists()){const e={name:n.name,imgSrc:n.imgSrc,description:"",type:"chatUsers",id:n.id};m.push(t("createChat",e))}m.push((0,qe.mZ)(u,{body:(0,qe.hq)(e)}),(0,qe.mZ)(l,{body:(0,qe.hq)(e)}))}else if("chat"===n.type)m.push((0,qe.mZ)(u,{body:(0,qe.hq)(e)}));else if("groups"===n.type||"canals"===n.type){const t=(0,qe.H9)(i.db,n.type,n.id);m.push((0,qe.mZ)(t,{body:(0,qe.hq)(e)}))}await Promise.all(m)}catch(u){console.error(u)}}}},De={state:{replyMessage:""},getters:{infoReplyMessage:e=>e.replyMessage},mutations:{SetreplyMessage(e,t){e.replyMessage=t}},actions:{async deleteMessage({commit:e,getters:t,dispatch:s},a){try{const e=t.infoFullActiveChat,s=i.j.lastNotifiedUid;if("chat"==e.type||"chatUsers"==e.type){const t=(0,qe.H9)(i.db,"users",s,"mychats",e.id),n=await(0,qe.x7)(t),o=n.data().body;await(0,qe.mZ)(t,{body:o.filter((e=>o.indexOf(e)!=a.id))})}if("groups"==e.type||"canals"==e.type){const n=t.infoNotFilterActiveChat,o=(0,qe.H9)(i.db,"users",s,`my${e.type}`,e.id);await(0,qe.mZ)(o,{body:(0,qe.hq)(n.indexOf(a))})}}catch(n){console.log(n)}finally{s("fetchActiveChat",t.infoFullActiveChat)}},async deleteChatParticipants({commit:e,getters:t,dispatch:s},a){try{let s=a;const n=t.myInfo,o=t.infoFullActiveChat;s.id||(s.id=s.uid);const r=(0,qe.H9)(i.db,o.type,o.id),c=(0,qe.H9)(i.db,"users",s.id,`my${o.type}`,o.id),d=o.usersChat.filter((e=>e.uid!=s.id));await(0,qe.kd)(c),o.usersChat.length<=1?(await(0,qe.kd)(r),e("SetFullActiveChat","")):await(0,qe.mZ)(r,{usersChat:d});const u=await(0,qe.x7)((0,qe.H9)(i.db,"users",i.j.currentUser.uid)),l=u.data(),h={imgSrc:l.imgSrc,name:l.name,text:`удалил(а) Вас из группу «${o.name}»`,date:(new Date).toISOString()};n.uid!=s.uid&&await(0,qe.mZ)((0,qe.H9)(i.db,"users",s.id),{notice:(0,qe.hq)(h)})}catch(n){console.log(n)}},async addNewUserInChat({commit:e,getters:t,dispatch:s},a){try{a.id||(a.id=a.uid);const e=t.infoFullActiveChat,s=t.myInfo,n=(0,qe.H9)(i.db,"users",a.id,`my${e.type}`,e.id),o={uid:a.id,admin:!1},r={imgSrc:s.imgSrc,name:s.name,text:`добавил(а) Вас в группу «${e.name}»`,date:(new Date).toISOString()};await(0,qe.BN)(n,{body:[]}),await(0,qe.mZ)((0,qe.H9)(i.db,e.type,e.id),{usersChat:(0,qe.hq)(o)}),s.uid!=a.uid&&await(0,qe.mZ)((0,qe.H9)(i.db,"users",a.id),{notice:(0,qe.hq)(r)})}catch(n){console.log(n)}},async clearNotice({commit:e,getters:t,dispatch:s}){try{await(0,qe.mZ)((0,qe.H9)(i.db,"users",i.j.currentUser.uid),{notice:[]})}catch(a){console.log(a)}},async changeMyInfoImgSrc({commit:e},t){try{await(0,qe.mZ)((0,qe.H9)(i.db,"users",i.j.currentUser.uid),{imgSrc:t})}catch(s){console.log(s)}}}},Te=(0,Xe.y$)({state:{},getters:{},mutations:{},actions:{},modules:{messeng:We,auth:Ve,fetchInfo:Oe,createChat:Je,messageMethods:De}}),_e=s(5847);const Pe=(0,a.Ef)(A);Ne.forEach((e=>{Pe.component(e.name,e)})),Pe.use(_e.A,{preLoad:1.5,error:s(6408),loading:s(4690),attempt:1}),Pe.use(Te).use(He).mount("#app")},6408:function(e,t,s){e.exports=s.p+"img/error.0184cd29.gif"},4690:function(e,t,s){e.exports=s.p+"img/loading.74e8c603.gif"},9096:function(e){e.exports="data:image/jpeg;base64,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"}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,o){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,a){return s.f[a](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{80:"e6b45d2c",792:"c180416c",965:"f3d9ea25"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+".fe671517.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-mesenger:";s.l=function(a,n,o,r){if(e[a])e[a].push(n);else{var i,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+o){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[n];var h=function(t,s){i.onerror=i.onload=null,clearTimeout(m);var n=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(s)})),t)return t(s)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/VueMessenger/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",s.nc&&(r.nonce=s.nc);var i=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var a=s&&s.type,i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode&&r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var n=s[a],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){n=r[a],o=n.getAttribute("data-href");if(o===e||o===t)return n}},a=function(a){return new Promise((function(n,o){var r=s.miniCssF(a),i=s.p+r;if(t(r,i))return n();e(a,i,null,n,o)}))},n={524:0};s.f.miniCss=function(e,t){var s={80:1};n[e]?t.push(n[e]):0!==n[e]&&s[e]&&t.push(n[e]=a(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={524:0};s.f.j=function(t,a){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(s,a){n=e[t]=[s,a]}));a.push(n[2]=o);var r=s.p+s.u(t),i=new Error,c=function(a){if(s.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,n[1](i)}};s.l(r,c,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,r=a[0],i=a[1],c=a[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(c)var u=c(s)}for(t&&t(a);d<r.length;d++)o=r[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},a=self["webpackChunkvue_mesenger"]=self["webpackChunkvue_mesenger"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(1431)}));a=s.O(a)})();
//# sourceMappingURL=app.8f877cde.js.map