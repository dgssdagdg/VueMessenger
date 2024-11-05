<template>
    <div
      class="messenger-left"
    >
      <div class="messenger-left-settings">
        <div @click="myAlert" class="messenger-left-settings-item icon-bookmark"></div>
        <div @click="myAlert" class="messenger-left-settings-item icon-group-icon"></div>
        <div
          @click="$store.commit('SetSaitMode', infoSaitMode === false)" class="messenger-left-settings-item icon-night-mode"
        ></div>
        <div
          @click="$store.commit('SetShowUserSetting', true)" class="messenger-left-settings-item icon-setting"
        ></div>
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
              <div style="font-size: 15px; opacity: 0.5;" class="icon-lupa"></div>
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
          imgSrc: 'icon-user',
          title: 'Создать личный чат',
          action: 'chat'
        },
        {
          imgSrc: 'icon-group',
          title: 'Создать группу',
          action: 'groups'
        },
        {
          imgSrc: 'icon-megaphone',
          title: 'Создать канал',
          action: 'canals'
        }
      ],
    }
  },
  computed: {
    infoSaitMode() {
        return this.$store.getters.infoSaitMode
    },
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
      alert('Данный функцианал еще в разработке и работает на данный момент только настройки и темный режим')
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
    & .icon-lupa {
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