(function(){"use strict";var e={1394:function(e,t,s){s.d(t,{I:function(){return h},db:function(){return l},j:function(){return d}});var n=s(6400),a=s(5942),o=s(4155),i=s(7617),r=s(7844);const c={apiKey:"AIzaSyD8k6XEiyqWX31dU5PzZXpuDPtyd7YBVic",authDomain:"vue-messenger-4b5b0.firebaseapp.com",projectId:"vue-messenger-4b5b0",storageBucket:"vue-messenger-4b5b0.appspot.com",messagingSenderId:"908257836357",appId:"1:908257836357:web:bc8c0ff54d3803d051522c",measurementId:"G-GBLMQR18Q2"},u=(0,n.Wp)(c),d=((0,a.P5)(u),(0,o.xI)(u)),l=(0,i.aU)(u),h=(0,r.c7)(u)},1431:function(e,t,s){var n=s(5130),a=s(6768);function o(e,t,s,n,o,i){const r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)((0,a.$y)(i.layout),null,{default:(0,a.k6)((()=>[(0,a.bF)(r)])),_:1})}function i(e,t,s,n,o,i){const r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(r)}var r=s(1394),c={name:"main-layout",async mounted(){r.j.onAuthStateChanged((e=>{e&&(this.$store.dispatch("setUserOnlineStatus",!0),window.addEventListener("beforeunload",(()=>{this.$store.dispatch("setUserOnlineStatus",!1)})))}));try{const e=["fetchUsers","fetchUsersNotice","fetchMyChats","fetchMyGroups","fetchMyCanals","fetchMyInfo"];await Promise.all(e.map((e=>this.$store.dispatch(e))))}catch(e){console.error("Error fetching data:",e)}}},u=s(1241);const d=(0,u.A)(c,[["render",i]]);var l=d;function h(e,t,s,n,o,i){const r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(r)}var m={name:"empty-layout"};const p=(0,u.A)(m,[["render",h]]);var f=p,y={components:{MainLayout:l,EmptyLayout:f},computed:{layout(){return(this.$route.meta.layout||"empty")+"-layout"}}};const g=(0,u.A)(y,[["render",o]]);var A=g,v=s(4232);const C=["value"];function S(e,t,s,n,o,i){return(0,a.uX)(),(0,a.CE)("input",{class:(0,v.C4)([{"input-not-empty":s.modelValue.length>0},"input"]),value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>i.updateInput&&i.updateInput(...e)),type:"text"},null,42,C)}var b={props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}},name:"my-input"};const w=(0,u.A)(b,[["render",S],["__scopeId","data-v-3ababd47"]]);var E=w;const U={class:"messenger-left-users-user-img"},Q={alt:"Avatar-icon"},k={key:0,class:"_my-status messenger-left-users-user-status"},B={class:"messenger-left-users-user-info"},M={class:"messenger-left-users-user-top"},j={class:"messenger-left-users-user-name _btns-tabs-names_in_msgs"},I={class:"messenger-left-users-user-date _secondary"},N={class:"messenger-left-users-user-last_message _main"};function R(e,t,n,o,i,r){const c=(0,a.gN)("lazy");return(0,a.uX)(),(0,a.CE)("div",{onClick:t[0]||(t[0]=e=>r.openChatWindow(n.user)),class:(0,v.C4)(["messenger-left-users-user",{"active-user":r.infoFullActiveChat.id==n.user.id}])},[(0,a.Lk)("div",U,[(0,a.bo)((0,a.Lk)("img",Q,null,512),[[c,n.user.imgSrc?n.user.imgSrc:s(9096)]]),"chatUsers"==n.user.type&&r.changeStatus?((0,a.uX)(),(0,a.CE)("div",k)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",B,[(0,a.Lk)("div",M,[(0,a.Lk)("div",j,(0,v.v_)(n.user.name),1),(0,a.Lk)("div",I,(0,v.v_)(n.user.date),1)]),(0,a.Lk)("div",N,(0,v.v_)(r.userLastReport),1)])],2)}var L={props:{user:{type:Object,required:!0}},methods:{openChatWindow(e){this.$store.commit("SetInfoWindow",e),this.$store.dispatch("fetchActiveChat",e)}},computed:{infoFullActiveChat(){return this.$store.getters.infoFullActiveChat},infoActiveChat(){return this.$store.getters.infoActiveChat},infoUsers(){return this.$store.getters.infoUsers},changeStatus(){const e=this.infoUsers.find((e=>e.id==this.user.id));if(e)return!!e.isOnline},userLastReport(){let e=this.user.body[this.user.body.length-1];return e?"photo"==e.type?"Фотография":"file"==e.type?"Файл":"voice"==e.type?"Голосовое сообщение":e.title.split(" ").slice(0,3).join(" "):"Сообщение"}},name:"my-users"};const x=(0,u.A)(L,[["render",R],["__scopeId","data-v-47e534d1"]]);var F=x;const H={key:0,class:"dropdown-menu"},X=["onClick"];function W(e,t,s,n,o,i){return s.show?((0,a.uX)(),(0,a.CE)("div",H,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.chatDropDownItems,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.title,class:"dropdown-menu-item",onClick:t=>i.openForm(e)},[(0,a.Lk)("span",{class:(0,v.C4)(e.imgSrc)},null,2),(0,a.eW)(" "+(0,v.v_)(e.title),1)],8,X)))),128))])):(0,a.Q3)("",!0)}var q={props:{chatDropDownItems:{type:Array,required:!0},show:{type:Boolean,default:!1}},methods:{openForm(e){this.$emit("myaction",e),this.$emit("update:show",!1)}},mounted(){document.addEventListener("click",(e=>{e.target.closest(".dropdown-menu")||!0!==this.show||e.target.parentElementSibling||this.$emit("update:show",!1)}))},name:"my-dropdown"};const V=(0,u.A)(q,[["render",W],["__scopeId","data-v-55c3181d"]]);var O=V;const J={class:"main-chat-text"},D={class:"reply-message-name"},T={class:"reply-message-type"},_={key:1,class:"main-chat-text-files"},P={key:0,alt:"file.name",class:"main-chat-text-file-img"},G={class:"main-chat-text-file-block"},K={class:"main-chat-text-file-texts"},Z={class:"main-chat-text-file-name"},Y={class:"main-chat-text-file-size"},$=["onClick"],z=["src"],ee={key:3,style:{"font-size":"8px",opacity:".7"},class:"main-chat-status icon-check"},te={class:"main-chat-date _secondary"};function se(e,t,s,n,o,i){const r=(0,a.gN)("lazy");return(0,a.uX)(),(0,a.CE)("div",{class:(0,v.C4)([{"main-chat-item-left":i.myInfo.uid!=s.chatReport.auth},"main-chat-item"])},[(0,a.Lk)("div",J,[s.chatReport.replyMessage?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"reply-message-report",onClick:t[0]||(t[0]=t=>e.$emit("goMessage",s.chatReport.replyMessage.id))},[(0,a.Lk)("div",D,(0,v.v_)(s.chatReport.replyMessage.name),1),(0,a.Lk)("div",T,(0,v.v_)(s.chatReport.replyMessage.text),1)])):(0,a.Q3)("",!0),s.chatReport.files?((0,a.uX)(),(0,a.CE)("div",_,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.chatReport.files,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:"main-chat-text-file"},["photo"==s.chatReport.type?(0,a.bo)(((0,a.uX)(),(0,a.CE)("img",P,null,512)),[[r,e.imgSrc]]):(0,a.Q3)("",!0),(0,a.Lk)("div",G,[(0,a.Lk)("div",K,[(0,a.Lk)("div",Z,(0,v.v_)(e.name),1),(0,a.Lk)("div",Y,(0,v.v_)(e.size),1)]),(0,a.Lk)("button",{onClick:t=>i.downloadImage(e),type:"button",class:"main-chat-text-file-download"},"Скачать",8,$)])])))),128))])):(0,a.Q3)("",!0),"audio"==s.chatReport.type?((0,a.uX)(),(0,a.CE)("audio",{key:2,controls:"",src:s.chatReport.audioUrl},null,8,z)):(0,a.Q3)("",!0),(0,a.eW)(" "+(0,v.v_)(s.chatReport.title)+" ",1),i.myInfo.uid==s.chatReport.auth?((0,a.uX)(),(0,a.CE)("div",ee)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",te,(0,v.v_)(s.chatReport.date),1)],2)}s(4603),s(7566),s(8721);var ne=s(7844),ae={data(){return{}},props:{chatReport:{type:Object,required:!0}},computed:{infoActiveChat(){return this.$store.getters.infoActiveChat},myInfo(){return this.$store.getters.myInfo}},methods:{async downloadImage(e){try{(0,ne.qk)((0,ne.KR)(r.I,`images/${e.name}`)).then((t=>{const s=new XMLHttpRequest;s.responseType="blob",s.onload=t=>{const n=s.response,a=document.createElement("a");a.href=window.URL.createObjectURL(n),a.target="_blank",a.download=e.name,a.click()},s.open("GET",t),s.send()})).catch((e=>{}))}catch(t){console.error("Ошибка при загрузке изображения:",t)}}},name:"my-chat-report"};const oe=(0,u.A)(ae,[["render",se],["__scopeId","data-v-7ca93a6a"]]);var ie=oe;const re={class:"notifications-item"},ce={class:"notifications-avatar"},ue=["alt"],de={class:"notifications-block"},le={class:"notifications-box"},he={class:"notifications-name"},me={class:"notifications-text"},pe={class:"notifications-date"};function fe(e,t,n,o,i,r){const c=(0,a.gN)("lazy");return(0,a.uX)(),(0,a.CE)("div",re,[(0,a.Lk)("div",ce,[(0,a.bo)((0,a.Lk)("img",{alt:n.notice.name},null,8,ue),[[c,n.notice.imgSrc?n.notice.imgSrc:s(9096)]]),(0,a.eW)(" "+(0,v.v_)(r.getMinutesSinceLastSeen(r.infoUsers)),1)]),(0,a.Lk)("div",de,[(0,a.Lk)("div",le,[(0,a.Lk)("span",he,(0,v.v_)(n.notice.name),1),(0,a.Lk)("span",me,(0,v.v_)(n.notice.text),1)]),(0,a.Lk)("div",pe,(0,v.v_)(n.notice.date),1)])])}var ye={computed:{infoFullActiveChat(){return this.$store.getters.infoFullActiveChat},infoUsers(){return this.$store.getters.infoUsers}},methods:{getMinutesSinceLastSeen(e){const t=new Date(e.date),s=new Date,n=s-t,a=Math.floor(n/1e3),o=Math.floor(a/60),i=Math.floor(o/60),r=Math.floor(i/24);return r>0?`${r} ${1===r?"день":"дня"} назад.`:i>0?`${i} ${1===i?"час":"часа"} назад.`:`${o} ${1===o?"минуту":"минуты"} назад.`}},props:{notice:{type:Object,required:!0}},name:"my-notice"};const ge=(0,u.A)(ye,[["render",fe],["__scopeId","data-v-0b9cbe5d"]]);var Ae=ge;const ve={class:"messenger-left-users-user-img"},Ce={alt:"Avatar-icon"},Se={key:0,class:"_my-status messenger-left-users-user-status"},be={class:"messenger-left-users-user-name"};function we(e,t,n,o,i,r){const c=(0,a.gN)("lazy");return(0,a.uX)(),(0,a.CE)("div",{onClick:t[0]||(t[0]=e=>r.openChatWindow(n.user)),class:"messenger-left-users-user"},[(0,a.Lk)("div",ve,[(0,a.bo)((0,a.Lk)("img",Ce,null,512),[[c,n.user.imgSrc?n.user.imgSrc:s(9096)]]),n.user.isOnline?((0,a.uX)(),(0,a.CE)("div",Se)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",be,(0,v.v_)(n.user.name),1)])}var Ee={props:{user:{type:Object,required:!0}},methods:{openChatWindow(e){this.$store.commit("SetInfoWindow",e),this.$store.dispatch("fetchActiveChat",e),this.$store.commit("SetSearchQuery","")}},name:"my-global-users"};const Ue=(0,u.A)(Ee,[["render",we],["__scopeId","data-v-fb1e7236"]]);var Qe=Ue;const ke={type:"button",class:"_blue-button _notification-main1"};function Be(e,t,s,n,o,i){return(0,a.uX)(),(0,a.CE)("button",ke,[(0,a.RG)(e.$slots,"default",{},void 0,!0)])}var Me={name:"my-button"};const je=(0,u.A)(Me,[["render",Be],["__scopeId","data-v-38b325b8"]]);var Ie=je,Ne=[E,F,O,ie,Ae,Qe,Ie],Re=s(1387),Le=s(4155);const xe=[{path:"/",name:"about",meta:{layout:"main",requiresAuth:!0},component:()=>s.e(986).then(s.bind(s,2198))},{path:"/login",name:"login",meta:{layout:"empty"},component:()=>s.e(792).then(s.bind(s,792))},{path:"/register",name:"register",meta:{layout:"empty"},component:()=>s.e(965).then(s.bind(s,5965))}],Fe=(0,Re.aE)({history:(0,Re.LA)("/VueMessenger/"),routes:xe});Fe.beforeEach(((e,t,s)=>{const n=e.matched.some((e=>e.meta.requiresAuth));(0,Le.hg)(r.j,(e=>{n&&!e?s({name:"login"}):s()}))}));var He=Fe,Xe=s(782),We={state:{showNotification:!1,showPopUp:"",showChatSetting:!1,showAddUserInChat:!1,showUserSetting:!1,saitMode:!1},getters:{infoShowPopUp:e=>e.showPopUp,infoShowChatSetting:e=>e.showChatSetting,infoShowAddUserInChat:e=>e.showAddUserInChat,infoShowUserSetting:e=>e.showUserSetting,infoSaitMode:e=>e.saitMode},mutations:{showNotification(e,t){e.showNotification=t},showPopUp(e,t){e.showPopUp=t},SetShowChatSetting(e,t){e.showChatSetting=t},setShowAddUserInChat(e,t){e.showAddUserInChat=t},SetShowUserSetting(e,t){e.showUserSetting=t},SetSaitMode(e,t){e.saitMode=t}},actions:{}},qe=(s(4114),s(7617)),Ve={state:{},getters:{},mutations:{},actions:{async register({commit:e},{email:t,password:s,name:n}){try{const e=await(0,Le.eJ)(r.j,t,s,n),a=e.user;await(0,qe.BN)((0,qe.H9)(r.db,"/users",a.uid),{name:n,email:t,notice:[],imgSrc:"",isOnline:!1,lastSeen:""})}catch(a){console.log(a)}},async login({dispatch:e,commit:t},{email:s,password:n}){try{await(0,Le.x9)(r.j,s,n)}catch(a){console.log(a.message)}},async logout({dispatch:e,commit:t}){try{e("setUserOnlineStatus",!1),await(0,Le.CI)(r.j),He.push("/login")}catch(s){console.log(s.message)}},async setUserOnlineStatus({dispatch:e,commit:t},s){const n=(0,qe.H9)(r.db,`users/${r.j.currentUser.uid}`);await(0,qe.mZ)(n,{isOnline:s,lastSeen:s?null:(new Date).toISOString()})}}},Oe={state:{users:[],notice:[],myChats:[],groups:[],canals:[],notFilterCanals:[],infoWindow:"",activeChat:[],fullActiveChat:"",searchQuery:"",replyMessageUser:"",notFilterActiveChat:[],myInfo:""},getters:{infoUsers:e=>e.users,infoNotice:e=>e.notice,infoMyChats:e=>e.myChats,infoWindow:e=>e.infoWindow,infoActiveChat:e=>e.activeChat,infoFullActiveChat:e=>e.fullActiveChat,infoSearchQuery:e=>e.searchQuery,infoGroups:e=>e.groups,infoCanals:e=>e.canals,infoNotFilterCanals:e=>e.notFilterCanals,infoReplyMessageUser:e=>e.replyMessageUser,infoNotFilterActiveChat:e=>e.notFilterActiveChat,myInfo:e=>e.myInfo,sortedAndSearchedPosts(e){return[...e.notFilterCanals,...e.users].filter((t=>t.name.toLowerCase().includes(e.searchQuery.toLowerCase())))}},mutations:{SetMyInfo(e,t){e.myInfo=t},SetUsers(e,t){e.users=t},SetNotice(e,t){e.notice=t},SetMyChats(e,t){e.myChats=t},SetInfoWindow(e,t){e.infoWindow=t},SetActiveChat(e,t){e.activeChat=t},SetFullActiveChat(e,t){e.fullActiveChat=t},SetSearchQuery(e,t){e.searchQuery=t},SetGroups(e,t){e.groups=t},SetCanals(e,t){e.canals=t},SetNotFilterCanals(e,t){e.notFilterCanals=t},SetReplyMessageUser(e,t){e.replyMessageUser=t},SetNotFilterActiveChat(e,t){e.notFilterActiveChat=t}},actions:{async fetchUsers({commit:e}){try{const t=(0,qe.rJ)(r.db,"users");(0,qe.aQ)(t,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()})));let n=[];r.j.currentUser&&(n=s.filter((e=>e.id!==r.j.currentUser.uid))),e("SetUsers",n)}),(e=>{console.error("Ошибка при получении пользователей:",e)}))}catch(t){console.error("Ошибка в fetchUsers:",t)}},async fetchUsersNotice({commit:e}){try{const t=(0,qe.H9)(r.db,"users",r.j.lastNotifiedUid);(0,qe.aQ)(t,(t=>{if(t.exists()){const s=t.data().notice;e("SetNotice",s)}else console.log("Документ не существует!")}),(e=>{console.error("Ошибка при получении уведомлений: ",e)}))}catch(t){console.error("Ошибка в fetchUsersNotice: ",t)}},async fetchMyChats({commit:e}){try{const t=(0,qe.rJ)(r.db,"users",r.j.lastNotifiedUid,"mychats");(0,qe.aQ)(t,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()})));e("SetMyChats",s)}),(e=>{console.error("Ошибка при получении чатов: ",e)}))}catch(t){console.error("Ошибка в fetchMyChats: ",t)}},async fetchMyGroups({commit:e}){try{const t=(0,qe.rJ)(r.db,"users",r.j.lastNotifiedUid,"mygroups"),s=(0,qe.rJ)(r.db,"groups");(0,qe.aQ)(t,(t=>{const n=t.docs.map((e=>({id:e.id,...e.data()})));(0,qe.aQ)(s,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()}))),a=s.filter((e=>n.some((t=>e.id===t.id))));e("SetGroups",a)}),(e=>{console.error("Ошибка при получении всех групп: ",e)}))}),(e=>{console.error("Ошибка при получении групп пользователя: ",e)}))}catch(t){console.error("Ошибка в fetchMyGroups: ",t)}},async fetchMyCanals({commit:e}){try{const t=(0,qe.rJ)(r.db,"users",r.j.lastNotifiedUid,"mycanals"),s=(0,qe.rJ)(r.db,"canals");(0,qe.aQ)(t,(t=>{const n=t.docs.map((e=>({id:e.id,...e.data()})));(0,qe.aQ)(s,(t=>{const s=t.docs.map((e=>({id:e.id,...e.data()}))),a=s.filter((e=>n.some((t=>e.id===t.id))));e("SetNotFilterCanals",s),e("SetCanals",a)}),(e=>{console.error("Ошибка при получении всех каналов:",e)}))}),(e=>{console.error("Ошибка при получении каналов пользователя:",e)}))}catch(t){console.error("Ошибка в fetchMyCanals:",t)}},async fetchActiveChat({commit:e,getters:t},s){try{if("groups"===s.type||"canals"===s.type){const n=(0,qe.rJ)(r.db,s.type);(0,qe.aQ)(n,(async n=>{const a=n.docs.map((e=>({id:e.id,...e.data()})));if(!a.find((e=>e.id===s.id)))return e("SetActiveChat",[]),e("SetNotFilterActiveChat",[]),e("SetFullActiveChat",t.infoWindow),void e("SetShowChatSetting",!1);const o=a.find((e=>e.id===s.id)),i=o.body.map(((e,t)=>({...e,id:t}))),c=await(0,qe.x7)((0,qe.H9)(r.db,"users",r.j.lastNotifiedUid,`my${s.type}`,s.id));let u=[];if(c.exists()){u=c.data().body;const t=i.filter((e=>!u.includes(e.id)));return e("SetActiveChat",t),e("SetNotFilterActiveChat",i),void e("SetFullActiveChat",o)}return e("SetActiveChat",[]),e("SetNotFilterActiveChat",[]),e("SetFullActiveChat",t.infoWindow),void e("SetShowChatSetting",!1)}))}else{const n=(0,qe.rJ)(r.db,"users",r.j.lastNotifiedUid,"mychats");(0,qe.aQ)(n,(async n=>{const a=n.docs.map((e=>({id:e.id,...e.data()})));if(!a.find((e=>e.id===s.id)))return e("SetActiveChat",[]),void e("SetFullActiveChat",t.infoWindow);const o=a.find((e=>e.id===s.id)),i=o.body.map(((e,t)=>({...e,id:t})));e("SetActiveChat",i),e("SetFullActiveChat",o)}))}}catch(n){console.error("Ошибка при получении активного чата:",n)}finally{e("SetShowChatSetting",!1)}},async fetchReplyMessageUser({commit:e},t){const s=(0,qe.rJ)(r.db,"users");(0,qe.aQ)(s,(s=>{const n=s.docs.map((e=>({id:e.id,...e.data()}))),a=n.find((e=>e.id===t.auth));e("SetReplyMessageUser",a)}),(e=>{console.error("Ошибка при получении пользователей:",e)}))},async fetchMyInfo({commit:e}){try{const t=(0,qe.H9)(r.db,"users",r.j.currentUser.uid);(0,qe.aQ)(t,(t=>{const s=t.data();r.j.currentUser&&(s.uid=r.j.currentUser.uid),e("SetMyInfo",s)}),(e=>{console.error("Ошибка при получении пользователей:",e)}))}catch(t){console.log(t)}}}},Je={state:{},getters:{},mutations:{},actions:{async createChat({commit:e,getters:t},{name:s,imgSrc:n,description:a,type:o,id:i}){try{const e=`users/${r.j.lastNotifiedUid}/mychats`,c=[],u={name:s,imgSrc:n,description:a,type:o,body:[]};if("chatUsers"===o){const s={name:t.myInfo.name,imgSrc:t.myInfo.imgSrc,description:a,type:o,body:[]},n=(0,qe.H9)(r.db,e,i);c.push((0,qe.BN)(n,u));const d=(0,qe.H9)((0,qe.rJ)(r.db,"users",i,"mychats"),r.j.lastNotifiedUid);c.push((0,qe.BN)(d,s))}else if("chat"===o){const t=(0,qe.H9)((0,qe.rJ)(r.db,e));c.push((0,qe.BN)(t,u))}else if("groups"===o||"canals"===o){const e=s,t=(0,qe.H9)((0,qe.rJ)(r.db,"users",r.j.lastNotifiedUid,"groups"===o?"mygroups":"mycanals"),e);c.push((0,qe.BN)(t,{body:[]}));const i=(0,qe.H9)((0,qe.rJ)(r.db,"groups"===o?"groups":"canals"),e),u={name:s,imgSrc:n,description:a,type:o,usersChat:[{uid:r.j.currentUser.uid,admin:!0}],body:[]};c.push((0,qe.BN)(i,u))}await Promise.all(c)}catch(c){console.error(c)}},async addNewReport({commit:e,dispatch:t},{title:s,date:n,user:a,type:o,files:i,audioUrl:c,replyMessage:u}){try{let e={date:n,auth:r.j.lastNotifiedUid};"file"===o||"photo"===o?(e.title=s,e.files=i,e.type=o):"audio"===o?(e.audioUrl=c,e.type=o):e.title=s,u&&(e.replyMessage=u);const d=(0,qe.H9)(r.db,"users",r.j.lastNotifiedUid,"mychats",a.id),l=(0,qe.H9)(r.db,"users",a.id,"mychats",r.j.lastNotifiedUid),h=await(0,qe.x7)(d),m=[];if("chatUsers"===a.type||a.email){if(!h.exists()){const e={name:a.name,imgSrc:a.imgSrc,description:"",type:"chatUsers",id:a.id};m.push(t("createChat",e))}m.push((0,qe.mZ)(d,{body:(0,qe.hq)(e)}),(0,qe.mZ)(l,{body:(0,qe.hq)(e)}))}else if("chat"===a.type)m.push((0,qe.mZ)(d,{body:(0,qe.hq)(e)}));else if("groups"===a.type||"canals"===a.type){const t=(0,qe.H9)(r.db,a.type,a.id);m.push((0,qe.mZ)(t,{body:(0,qe.hq)(e)}))}await Promise.all(m)}catch(d){console.error(d)}}}},De={state:{replyMessage:""},getters:{infoReplyMessage:e=>e.replyMessage},mutations:{SetreplyMessage(e,t){e.replyMessage=t}},actions:{async deleteMessage({commit:e,getters:t,dispatch:s},n){try{const e=t.infoFullActiveChat,s=r.j.lastNotifiedUid;if("chat"==e.type||"chatUsers"==e.type){const t=(0,qe.H9)(r.db,"users",s,"mychats",e.id),a=await(0,qe.x7)(t),o=a.data().body;await(0,qe.mZ)(t,{body:o.filter((e=>o.indexOf(e)!=n.id))})}if("groups"==e.type||"canals"==e.type){const a=t.infoNotFilterActiveChat,o=(0,qe.H9)(r.db,"users",s,`my${e.type}`,e.id);await(0,qe.mZ)(o,{body:(0,qe.hq)(a.indexOf(n))})}}catch(a){console.log(a)}finally{s("fetchActiveChat",t.infoFullActiveChat)}},async deleteChatParticipants({commit:e,getters:t,dispatch:s},n){try{let s=n;const a=t.myInfo,o=t.infoFullActiveChat;s.id||(s.id=s.uid);const i=(0,qe.H9)(r.db,o.type,o.id),c=(0,qe.H9)(r.db,"users",s.id,`my${o.type}`,o.id),u=o.usersChat.filter((e=>e.uid!=s.id));await(0,qe.kd)(c),o.usersChat.length<=1?(await(0,qe.kd)(i),e("SetFullActiveChat","")):await(0,qe.mZ)(i,{usersChat:u});const d=await(0,qe.x7)((0,qe.H9)(r.db,"users",r.j.currentUser.uid)),l=d.data(),h={imgSrc:l.imgSrc,name:l.name,text:`удалил(а) Вас из группу «${o.name}»`,date:(new Date).toISOString()};a.uid!=s.uid&&await(0,qe.mZ)((0,qe.H9)(r.db,"users",s.id),{notice:(0,qe.hq)(h)})}catch(a){console.log(a)}},async addNewUserInChat({commit:e,getters:t,dispatch:s},n){try{n.id||(n.id=n.uid);const e=t.infoFullActiveChat,s=t.myInfo,a=(0,qe.H9)(r.db,"users",n.id,`my${e.type}`,e.id),o={uid:n.id,admin:!1},i={imgSrc:s.imgSrc,name:s.name,text:`добавил(а) Вас в группу «${e.name}»`,date:(new Date).toISOString()};await(0,qe.BN)(a,{body:[]}),await(0,qe.mZ)((0,qe.H9)(r.db,e.type,e.id),{usersChat:(0,qe.hq)(o)}),s.uid!=n.uid&&await(0,qe.mZ)((0,qe.H9)(r.db,"users",n.id),{notice:(0,qe.hq)(i)})}catch(a){console.log(a)}},async clearNotice({commit:e,getters:t,dispatch:s}){try{await(0,qe.mZ)((0,qe.H9)(r.db,"users",r.j.currentUser.uid),{notice:[]})}catch(n){console.log(n)}},async changeMyInfoImgSrc({commit:e},t){try{await(0,qe.mZ)((0,qe.H9)(r.db,"users",r.j.currentUser.uid),{imgSrc:t})}catch(s){console.log(s)}}}},Te=(0,Xe.y$)({state:{},getters:{},mutations:{},actions:{},modules:{messeng:We,auth:Ve,fetchInfo:Oe,createChat:Je,messageMethods:De}}),_e=s(5847);const Pe=(0,n.Ef)(A);Ne.forEach((e=>{Pe.component(e.name,e)})),Pe.use(_e.A,{preLoad:1.5,error:s(6408),loading:s(4690),attempt:1}),Pe.use(Te).use(He).mount("#app")},6408:function(e,t,s){e.exports=s.p+"img/error.0184cd29.gif"},4690:function(e,t,s){e.exports=s.p+"img/loading.74e8c603.gif"},9096:function(e){e.exports="data:image/jpeg;base64,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"}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,a,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],o=e[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(r=!1,o<i&&(i=o));if(r){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{792:"c180416c",965:"f3d9ea25",986:"b733a305"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+".686aebfc.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-mesenger:";s.l=function(n,a,o,i){if(e[n])e[n].push(a);else{var r,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+o){r=l;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",t+o),r.src=n),e[n]=[a];var h=function(t,s){r.onerror=r.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(s)})),t)return t(s)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/VueMessenger/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",s.nc&&(i.nonce=s.nc);var r=function(s){if(i.onerror=i.onload=null,"load"===s.type)a();else{var n=s&&s.type,r=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+r+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=r,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=r,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var a=s[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var i=s.miniCssF(n),r=s.p+i;if(t(i,r))return a();e(n,r,null,a,o)}))},a={524:0};s.f.miniCss=function(e,t){var s={986:1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};s.f.j=function(t,n){var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(s,n){a=e[t]=[s,n]}));n.push(a[2]=o);var i=s.p+s.u(t),r=new Error,c=function(n){if(s.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,a[1](r)}};s.l(i,c,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],r=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(c)var d=c(s)}for(t&&t(n);u<i.length;u++)o=i[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},n=self["webpackChunkvue_mesenger"]=self["webpackChunkvue_mesenger"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(1431)}));n=s.O(n)})();
//# sourceMappingURL=app.bca94bdc.js.map