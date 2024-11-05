<template>
  <div
    :class="{'messenger-left-show' : infoWindow, '_black-mode' : infoSaitMode}"
    class="messenger"
  >
    <MessengerLeft
    />
    <MessengerChat
    />
    <Notifications
        v-if="$store.state.messeng.showNotification"
    />
  </div>
</template>

<script>
import MessengerLeft from '@/components/MessengerLeft.vue';
import MessengerChat from '@/components/MessengerChat.vue'
import Notifications from '@/components/Notifications.vue';
export default {
  components: {
    MessengerLeft, MessengerChat, Notifications
  },
  data() {
    return {
      saveUsers:[
        {name: 'Anton', date: '20:15', imgSrc: require('@/assets/img/avatar.jpeg')},
        {name: 'Oleg', date: '12:15', imgSrc: require('@/assets/img/avatar.jpeg')},
        {name: 'Gleb', date: '14:15', imgSrc: require('@/assets/img/avatar.jpeg')},
        {name: 'Sten', date: '22:15', imgSrc: require('@/assets/img/avatar.jpeg')},
      ],
      chatReports: [
        {title: 'Привет!', date: '17:01', position: 'rigth'},
        {title: 'Нравится твоя идея, но мне кажется, что можно лучше', date: '17:01', position: 'rigth'},
        {title: 'Позже покажу, как', date: '17:01', position: 'rigth'},
        {title: 'ОК. Давай вместе сделаем что-то крутое', date: '17:01', position: 'left'},
        {title: 'Когда будет следующее занятие?', date: '17:01', position: 'rigth'},
      ],
      noticeArray: [
        {
          imgSrc: require('@/assets/img/avatar.jpeg'),
          name: '@Julia-teacher',
          text: 'добавил(а) Вас в группу «Обучение анимации»',
          date: '5 мин. назад'
        },
        {
          imgSrc: require('@/assets/img/avatar.jpeg'),
          name: '@Julia-teacher',
          text: 'исключил(а) Вас из общего чата «Обсуждение домашек»',
          date: '10 мин. назад'
        },
        {
          imgSrc: require('@/assets/img/avatar.jpeg'),
          name: '@Julia-teacher',
          text: 'упомянул(а) Вас в личном чате',
          date: '5 мин. назад'
        }
      ],
      showNotification: false
    }
  },
  computed: {
    infoSaitMode() {
        return this.$store.getters.infoSaitMode
    },
    infoWindow() {
      return this.$store.getters.infoWindow
    },
  }
}
</script>

<style lang="scss">
//iconMoon--------------------------------------
@font-face {
  font-family: 'icomoon';
  src:  url('@/assets/fonts/icomoon.eot?f4pu2b');
  src:  url('@/assets/fonts/icomoon.eot?f4pu2b#iefix') format('embedded-opentype'),
    url('@/assets/fonts/icomoon.ttf?f4pu2b') format('truetype'),
    url('@/assets/fonts/icomoon.woff?f4pu2b') format('woff'),
    url('@/assets/fonts/icomoon.svg?f4pu2b#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-size: 24px;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-multimedia-file:before {
  content: "\e900";
}
.icon-group-icon:before {
  content: "\e904";
}
.icon-select:before {
  content: "\e903";
}
.icon-megaphone:before {
  content: "\e92a";
}
.icon-send-forward:before {
  content: "\e905";
}
.icon-setting:before {
  content: "\e906";
}
.icon-delete:before {
  content: "\e916";
  color: red;
}
.icon-editing:before {
  content: "\e917";
}
.icon-arrow:before {
  content: "\e918";
}
.icon-paper-clip:before {
  content: "\e919";
}
.icon-phone:before {
  content: "\e91a";
}
.icon-check:before {
  content: "\e91b";
}
.icon-copy:before {
  content: "\e91c";
}
.icon-file:before {
  content: "\e91d";
}
.icon-user:before {
  content: "\e91e";
}
.icon-notification:before {
  content: "\e91f";
}
.icon-video:before {
  content: "\e920";
}
.icon-close:before {
  content: "\e921";
}
.icon-group:before {
  content: "\e922";
}
.icon-night-mode:before {
  content: "\e923";
}
.icon-check-one:before {
  content: "\e924";
}
.icon-dots:before {
  content: "\e925";
}
.icon-lupa:before {
  content: "\e926";
}
.icon-arrows:before {
  content: "\e927";
}
.icon-bookmark:before {
  content: "\e928";
}
.icon-mic:before {
  content: "\e929";
}

//Глобалтные стили шрифтов---------------------
::-webkit-file-upload-button {
  cursor: pointer;
}
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
.messenger {
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  width: 100%;
  max-width: 1440px;
  overflow: hidden;
  background: rgb(245, 245, 247);
}
._my-status {
  position: absolute;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 100px;
  background: rgb(141, 70, 246);
  width: 12px;
  height: 12px;
}
@media(max-width: 998px) {
  .messenger {
    flex-wrap: wrap;
  }
}
@media(max-width: 767px) {
  .messenger-left-show .messenger-left {
    display: none;
  }
}
._black-mode {
  & .messenger-left-settings, & .messenger-left-chats, & .chat-sing-wrapper, & .main-chat,
  & .main-chat-form, & ._pop-up-white, & .chat-setting, & ._pop-up-body, & .notifications, & .main-chat-item-left .main-chat-text {
    background: rgb(33,33,33);
  }
  & .main-chat {
    background: #0c0c0c
  }
  & .messenger-left-top-title, & .messenger-left-users-user-name, & .main-chat-text, & .chat-sign-info-name,
  & ._titles, & ._chats-title, & .user-setting-info-title, & .main-chat-text-file-name, & .main-chat-text-file-size,
  & .dropdown-menu-item, & .notifications-clear, & .add-user-group-user-block ._btns-tabs-names_in_msgs,
  & .reply-message-name, & .reply-message-type, & .main-chat-form-voice-time {
    color: white !important;
  }
  & .messenger-left-users-user-last_message {
    color: rgb(170,170,170);
  }
  & .messenger-left-users-user-date {
    color: #686c72;
  }
  & .main-chat-text {
    background: rgb(118,106,200);
  }
  & .messenger-chat {
    border-left: 1px solid rgb(80,80,80);
  }
  & .chat-sign {
    border-right: 1px solid rgb(80,80,80);
  }
  & .input {
    background: rgb(44,44,44);
    border: none;
    color: white;
    &::placeholder {
      color: white;
    }
  }
  & .messenger-left-settings-item, & .reply-message, & .messenger-left-users-input-items,
  & .chat-sign-control-block-item & .messenger-left-users-input-items, & .dropdown-menu, & .main-chat-form-voice-block {
    background: rgb(44,44,44);
  }
  & .image-container {
    & img {
      filter: invert(1);
    }
  }
  & [class^="icon-"],
  & [class*=" icon-"] {
    color: white;
    opacity: 1 !important;
  }
  & .reply-message-delete {
    color: #766ac87d !important;
  }
  & .reply-message-report {
    background: rgb(118 106 200 / 49%);
  }
}
</style>