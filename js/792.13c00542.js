"use strict";(self["webpackChunkvue_mesenger"]=self["webpackChunkvue_mesenger"]||[]).push([[792],{792:function(r,e,s){s.r(e),s.d(e,{default:function(){return w}});s(4114);var t=s(6768),a=s(5130),o=s(4232);const l={class:"entry"},i=(0,t.Lk)("h1",{class:"entry-form-title"},"Авторизация",-1),n={class:"entry-form-body"},u={class:"entry-form-input"},d=(0,t.Lk)("div",{class:"entry-form-input-type"},"Email",-1),m={key:0,class:"entry-form-input-error"},p={class:"entry-form-input"},c=(0,t.Lk)("div",{class:"entry-form-input-type"},"Пароль",-1),h={key:0,class:"entry-form-input-error"},v=(0,t.Lk)("button",{type:"submit",class:"entry-form-btn"},"Войти",-1);function y(r,e,s,y,f,E){const k=(0,t.g2)("my-input");return(0,t.uX)(),(0,t.CE)("div",l,[(0,t.Lk)("form",{onSubmit:e[3]||(e[3]=(0,a.D$)(((...r)=>E.login&&E.login(...r)),["prevent"])),class:"entry-form"},[i,(0,t.Lk)("div",n,[(0,t.Lk)("div",u,[d,(0,t.bF)(k,{modelValue:f.email,"onUpdate:modelValue":e[0]||(e[0]=r=>f.email=r),placeholder:"Электронная почта"},null,8,["modelValue"]),null!=f.emailError&&""!=f.emailError?((0,t.uX)(),(0,t.CE)("div",m,(0,o.v_)(f.emailError),1)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",p,[c,(0,t.bF)(k,{modelValue:f.password,"onUpdate:modelValue":e[1]||(e[1]=r=>f.password=r),placeholder:"Пароль"},null,8,["modelValue"]),null!=f.passwordError&&""!=f.emailError?((0,t.uX)(),(0,t.CE)("div",h,(0,o.v_)(f.passwordError),1)):(0,t.Q3)("",!0)])]),v,(0,t.Lk)("div",{onClick:e[2]||(e[2]=e=>r.$router.push("/register")),class:"entry-form-input-link"},"Регестрация")],32)])}var f={data(){return{email:"",password:"",emailError:"",passwordError:""}},methods:{validateEmail(r){const e=/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;return e.test(String(r).toLowerCase())},validatePassword(r){return r.length>=6},async login(){if(this.emailError=null,this.passwordError=null,!this.validateEmail(this.email))return void(this.emailError="Введите действительный адрес электронной почты.");if(!this.validatePassword(this.password))return void(this.passwordError="Пароль должен содержать не менее 6 символов.");const r={email:this.email,password:this.password};try{await this.$store.dispatch("login",r),this.$router.push("/")}catch(e){}}}},E=s(1241);const k=(0,E.A)(f,[["render",y]]);var w=k}}]);
//# sourceMappingURL=792.13c00542.js.map