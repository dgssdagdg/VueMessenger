<template>
  <div class="messenger">
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
}
</script>

<style lang="scss">
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
</style>