<template>
    <component :is="layout">
      <router-view/>
    </component>
</template>
<script>
import MainLayout from '@/layouts/MainLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
export default {
  components: {
    MainLayout, EmptyLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
body{
  font-family: 'Inter';
}
*{
    padding: 0;
    margin: 0;
    border: 0;
}
*,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display:block;}
html,body{height: 100%;width: 100%;font-size: 100%;line-height: 1;font-size: 14px;-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}
input,button,textarea{font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding: 0;border: 0;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  min-height: 100%;
  background-color: #333232;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  min-height: 100%;
  background-color: #333232;
}
//Глобалтные стили шрифтов---------------------
._secondary {
    color: rgb(124, 128, 146);
    font-size: 12px;
    font-weight: 500;
    line-height: calc(15 / 12 * 100%);
}
._main {
  color: rgb(124, 128, 146);
  font-size: 16px;
  font-weight: 500;
  line-height: calc(19 / 16 * 100%);
}
._titles {
  color: rgb(25, 24, 22);
  font-size: 22px;
  font-weight: 600;
  line-height: calc(27 / 22 * 100%);
}
._chats-title {
  color: rgb(25, 24, 22);
  font-size: 32px;
  font-weight: 900;
  line-height: calc(39 / 32 * 100%);
}
._btns-tabs-names_in_msgs {
  color: rgb(124, 128, 146);
  font-size: 16px;
  font-weight: 700;
  line-height: calc(22 / 16 * 100%);
}
._notification-main1 {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  line-height: 130%;
}
//buttons-----------------------------
._violet-button {
  margin-left: auto;
  margin-top: 20px;
  width: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgb(141, 70, 246);
  transition: all .3s ease;
  &:hover {
      background: rgb(126, 64, 218);
  }
  &:active {
      transition: all .0s ease;
      border: 2px solid rgb(153, 192, 240);
      background: rgb(141, 70, 246);
  }
}
//
._pop-up-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 32px 40px 12px 31px;
  display: flex;
  flex-direction: column;
}
._pop-up {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
}
._pop-up-top {
  display: flex;
  align-items: center;
  padding: 0 20px 15px;
  border-bottom: 1px solid rgb(162, 162, 162);
  column-gap: 20px;
  margin-bottom: 18px;
  & img {
    cursor: pointer;
  }
}
._pop-up-body {
  width: 100%;
  max-width: 360px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
  padding: 20px 0 12px;
}
</style>
