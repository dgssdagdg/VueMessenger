<template>
    <div
      :class="{'messenger-left-show' : infoWindow}"
      class="messenger-left"
    >
      <div class="messenger-left-settings">
        <div @click="myAlert" class="messenger-left-settings-item">
          <img src="../assets/img/setings-icons/bookmark.png" alt="bookmark">
        </div>
        <div @click="myAlert" class="messenger-left-settings-item">
          <img src="../assets/img/setings-icons/group-icon.png" alt="group-icon">
        </div>
        <div @click="myAlert" class="messenger-left-settings-item">
          <img src="../assets/img/setings-icons/night-mode.png" alt="night-mode">
        </div>
        <div @click="$store.commit('SetShowUserSetting', true)" class="messenger-left-settings-item">
          <img src="../assets/img/setings-icons/setting.png" alt="setting">
        </div>
      </div>
      <div class="messenger-left-chats">
        <div class="messenger-left-top">
          <div class="messenger-left-top-title _chats-title">Чаты</div>
          <div class="messenger-left-top-menu">
            <div
              @click.stop="showChatMenu = true"
              class="messenger-left-top-menu-btn"
              :class="{'messenger-left-top-menu-btn-active': showChatMenu}"
            >
              <img src="../assets/img/setings-icons/plus.svg" alt="plus">
            </div>
            <my-dropdown
              v-model:show="showChatMenu"
              :chatDropDownItems="chatDropDownItems"
              @myaction="openCreateChat"
            />
          </div>
        </div>
        <div class="messenger-left-body">
          <div v-if="false" class="messenger-left-categories">
            <div class="messenger-left-categories-item">Все</div>
            <div class="messenger-left-categories-item">Приватные</div>
            <div class="messenger-left-categories-item">Общие</div>
            <div class="messenger-left-categories-item">Ещё
              <svg width="10.000000" height="5.000061" viewBox="0 0 10 5.00006" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="↳ Icon Color" d="M5 3.27L8.77 0.17C9.09 -0.1 9.56 -0.05 9.82 0.27C10.09 0.59 10.04 1.06 9.72 1.32L5.47 4.82C5.19 5.05 4.8 5.05 4.52 4.82L0.27 1.32C-0.05 1.06 -0.1 0.59 0.17 0.27C0.43 -0.05 0.9 -0.1 1.22 0.17L5 3.27Z" fill="#7C8092" fill-opacity="1.000000" fill-rule="evenodd"/>
</svg>

            </div>
          </div>
          <div class="messenger-left-users">
            <div class="messenger-left-users-input">
              <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs>
                  <pattern id="pattern_4_750" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                    <use xlink:href="#image4_75_0" transform="matrix(0.001953,0,0,0.001953,0,0)"/>
                  </pattern>
                  <image id="image4_75_0" width="512.000000" height="512.000000" xlink:href="data:image/png;base64,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"/>
                </defs>
                <g opacity="0.500000">
                  <rect id="search" width="16.000000" height="16.000000" fill="url(#pattern_4_750)" fill-opacity="1.000000"/>
                </g>
              </svg>
              <my-input
                :class="{'input-not-empty': infoSearchQuery != ''}"
                :model-value="infoSearchQuery" 
                @update:model-value="SetSearchQuery"
                style="padding-left: 35px;"
                placeholder="Поиск..."
                @focus="showSearchBlock = true"
                class="inputshow"
              />
              <div
                v-if="infoSearchQuery || showSearchBlock"
                class="messenger-left-users-input-items"
              >
                <my-global-users
                  :user="saveUser"
                  v-for="saveUser in sortedAndSearchedPosts"
                  :key="saveUser.id"
                  @click="showSearchBlock = false"
                />
              </div>
            </div>
            <div class="messenger-left-users-block">
              <my-users
                :user="saveUser"
                v-for="saveUser in [...infoMyChats, ...infoGroups, ...infoCanals]"
                :key="saveUser.id"
              />
            </div>
          </div>
        </div>
        <CreateChat
          v-model:status="createChatStatus"
          v-model:show="showCreateChat"
          @create="createGroup"
        />
        <UserSetting
          v-if="infoShowUserSetting"
        />
      </div>
    </div>
</template>

<script>
import CreateChat from '@/components/CreateChat.vue'
import UserSetting from './UserSetting.vue';
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex';
export default {
  data() {
    return {
      showChatMenu: false,
      showCreateChat: false,
      showSearchBlock: false,
      createChatStatus: {},
      chatDropDownItems: [
        {
          imgSrc: require('@/assets/img/setings-icons/user.png'),
          title: 'Создать личный чат',
          action: 'chat'
        },
        {
          imgSrc: require('@/assets/img/setings-icons/group.png'),
          title: 'Создать группу',
          action: 'groups'
        },
        {
          imgSrc: require('@/assets/img/setings-icons/megaphone.png'),
          title: 'Создать канал',
          action: 'canals'
        }
      ],
    }
  },
  computed: {
    infoShowUserSetting() {
        return this.$store.getters.infoShowUserSetting
    },
    infoWindow() {
      return this.$store.getters.infoWindow
    },
    infoUsers() {
        return this.$store.getters.infoUsers
    },
    infoMyChats() {
        return this.$store.getters.infoMyChats
    },
    infoSearchQuery() {
        return this.$store.getters.infoSearchQuery
    },
    infoGroups() {
        return this.$store.getters.infoGroups
    },
    infoCanals() {
        return this.$store.getters.infoCanals
    },
    ...mapGetters({
        sortedAndSearchedPosts: 'sortedAndSearchedPosts'
    })
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if(!e.target.closest('.messenger-left-users-input-items') && this.showSearchBlock === true && !e.target.closest('.inputshow')) {
        this.showSearchBlock = false
        this.$store.commit('SetSearchQuery', '')
      }
    })
  },
  methods: {
    myAlert() {
      alert('Данная функцианал еще в разработке и работает на данный момент только шестеренка')
    },
    ...mapMutations({
      SetSearchQuery: 'SetSearchQuery',
    }),
    openCreateChat(method) {
      this.showCreateChat = true, 
      this.createChatStatus = method
    },
    createGroup(chat) {
      this.$store.dispatch('createChat', chat)
    }
  },
  components: {
    CreateChat, UserSetting
  },
}
</script>

<style lang="scss" scoped>
@mixin item-centring {
  display: flex;
  align-items: center;
  justify-content: center;
}
.messenger-left {
    display: flex;
    flex-direction: column;
    flex: 0 1 370px;
    background-color: #fff;
}
.messenger-left-settings {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    column-gap: 30px;
    padding: 25px 49px 25px 39px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 12px 0px rgba(25, 24, 22, 0.15);
}
.messenger-left-settings-item {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgb(225, 225, 233);
    @include item-centring;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: rgb(212, 212, 221);
    }
    &:active {
        background-color: rgb(239, 240, 245);
        border: 2px solid rgb(153, 192, 240);
        transition: all .0s ease;
    }
}
.messenger-left-chats {
    padding: 32.5px 40px;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.messenger-left-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.messenger-left-top-title {
}
.messenger-left-top-menu {
  position: relative;
}
.messenger-left-top-menu-btn {
    width: 40px;
    height: 40px;
    background: rgb(141, 70, 246);
    border-radius: 100%;
    @include item-centring;
    transition: all .3s ease;
    cursor: pointer;
    &:hover {
        background: rgb(126, 64, 218);
    }
    & img {
      transition: all .3s ease;
    }
}
.messenger-left-top-menu-btn-active {
  background: rgb(141, 70, 246);
  border: 2px solid rgb(153, 192, 240);
  transition: all .3s ease;
  & img {
      transform: rotate(45deg);
  }
}
.messenger-left-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.messenger-left-categories {
    display: flex;
    align-items: center;
    column-gap: 21px;
    margin-bottom: 20px;
}
.messenger-left-categories-item {
    color: rgb(124, 128, 146);
    font-size: 16px;
    font-weight: 700;
    line-height: calc(22 / 17 * 100%);
    letter-spacing: 0%;
    text-align: left;
    display: flex;
    align-items: center;
    column-gap: 9px;
}
.messenger-left-users {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.messenger-left-users-input {
    margin-bottom: 20px;
    position: relative;
    & svg {
        position: absolute;
        top: 16px;
        left: 16px;
    }
}
.messenger-left-users-input-items {
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 374px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid rgb(212, 212, 221);
  border-radius: 12px;
  padding: 10px;
}
.messenger-left-users-block {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    height: 200px;
    flex-grow: 1;
    overflow-y: auto;
}
::-webkit-scrollbar {
    width: 5px; /* Ширина скролл-бара */
    height: 5px; /* Высота (для горизонтального скролла) */
}

/* Фон скролл-бара */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет фона трека */
    border-radius: 10px; /* Закругление углов */
}

/* Ползунок скролл-бара */
::-webkit-scrollbar-thumb {
    background: #888; /* Цвет ползунка */
    border-radius: 10px; /* Закругление углов */
}

/* Эффект при наведении на ползунок */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Более темный цвет при наведении */
}

/* Для Firefox */
.scrollable-element {
    scrollbar-width: thin; /* Тонкий скролл */
    scrollbar-color: #888 #f1f1f1; /* Цвет ползунка и фона */
}
@media(max-width: 998px) {
  .messenger-left {
    flex: 0 1 100%;
  }
  .messenger-left-settings {
    justify-content: space-around;
  }
  .messenger-left-show {
    display: none;
  }
}
@media(max-width: 767px) {
  .messenger-left-settings {
    padding: 25px;
    column-gap: 25px;
  }
  .messenger-left-chats {
    padding: 30px;
  }
}
</style>