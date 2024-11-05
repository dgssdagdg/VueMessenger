<template>
<div class="chat-setting">
    <div class="chat-setting-content">
        <div class="chat-setting-top-title _titles">Настройки чата</div>
        <div class="chat-setting-info">
            <img v-lazy="infoFullActiveChat.imgSrc ? infoFullActiveChat.imgSrc : require('@/assets/img/avatar.jpeg')" alt="Avatar Img" class="chat-setting-info-img">
            <div class="chat-setting-info-name _chats-title">{{ infoFullActiveChat.name }}</div>
            <div class="chat-setting-info-type _btns-tabs-names_in_msgs">
                {{ infoFullActiveChat.type == 'groups' ? 'Группа' : infoFullActiveChat.type == 'canals' ? 'Канал' : infoFullActiveChat.type == 'chatUsers' ? 'Пользователь' : 'Личный чат'}}
            </div>
        </div>
        <div
            v-if="infoFullActiveChat.type == 'groups' || infoFullActiveChat.type == 'canals'"
            class="chat-setting-body"
        >
            <div class="chat-setting-title _titles">Участники</div>
            <div class="chat-setting-items">
                <div
                    class="chat-setting-item"
                    v-for="user in fetchChatsParticipants"
                    :key="user.id"
                >
                    <div class="chat-setting-item-block">
                        <img v-lazy="user.imgSrc ? user.imgSrc : require('@/assets/img/avatar.jpeg')" alt="Avatar Img" class="chat-setting-item-img">
                        <div class="chat-setting-item-name _btns-tabs-names_in_msgs">{{ user.name }}</div>
                    </div>
                    <my-button
                        v-if="this.fetchMeAcaunt[0].admin === true"
                        @click="deleteParticipants(user)"
                    >Удалить</my-button>
                </div>
                <div class="_btns-tabs-names_in_msgs" v-if="fetchChatsParticipants.length <= 0">Вы единственный пользователь</div>
            </div>
            <my-button
                v-if="this.fetchMeAcaunt[0].admin === true"
                @click="$store.commit('setShowAddUserInChat', true)"
            >Добавить пользователя</my-button>
            <my-button
                @click="$store.dispatch('deleteChatParticipants', fetchMeAcaunt[0])"
                style="background-color: red; margin-top: 10px"
            >Выйти из чата</my-button>
        </div>
        <div @click="closeChatSetting" class="create-chat-close icon-arrow"></div>
    </div>
</div>
</template>

<script>
import { auth } from '@/firebase';
export default {
    computed: {
        infoShowChatSetting() {
            return this.$store.getters.infoShowChatSetting
        },
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        infoUsers() {
            return this.$store.getters.infoUsers
        },
        fetchChatsParticipants() {
            if(this.infoFullActiveChat.type == 'groups' || this.infoFullActiveChat.type == 'canals') {
                return this.infoUsers.filter(post => {
                    return this.infoFullActiveChat.usersChat.some((ilement) => post.id === ilement.uid);
                })
            }
        },
        fetchMeAcaunt() {
            return this.infoFullActiveChat.usersChat.filter(item => item.uid === auth.lastNotifiedUid)
        }
    },
    methods: {
        closeChatSetting() {
            this.$store.commit('SetShowChatSetting', false)
        },
        deleteParticipants(user) {
            this.$store.dispatch('deleteChatParticipants', user)
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin item-centring {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.chat-setting {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: 360px;
    height: 652px;
    background-color: white;
    padding: 32px 40px 12px 31px;
    z-index: 3;
    border-top: 1px solid rgba(25, 24, 22, 0.2);
    display: flex;
    flex-direction: column
}
.chat-setting-content {
    @include item-centring;
    flex-grow: 1;
}
.chat-setting-top-title {
    margin-bottom: 35px;
}
.chat-setting-info {
    @include item-centring;
    margin-bottom: 22px;
}
.chat-setting-info-img {
    margin-bottom: 17px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 100%;
}
.chat-setting-info-name {
}
.chat-setting-info-type {
}
.chat-setting-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.chat-setting-title {
    margin-bottom: 22px;
}
.chat-setting-items {
    @include item-centring;
    row-gap: 14px;
    margin-bottom: 15px;
    height: 100px;
    flex-grow: 1;
    overflow-y: auto;
}
.chat-setting-item {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.chat-setting-item-block {
    display: flex;
    align-items: center;
    column-gap: 6px;
}
.chat-setting-item-img {
}
.chat-setting-item-name {
}
.chat-setting-item-delete {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: calc(22 / 16 * 100%);
    border-radius: 10px;
    background: rgb(0, 132, 255);
    height: 38px;
    padding: 0 12.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease 0s;
    &:hover {
        background: rgb(3, 117, 223);
    }
}
.chat-setting-add-user {
    width: 100%;
    border-radius: 10px;
    background: rgb(0, 132, 255);
    height: 38px;
    padding: 0 12.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;
    &:hover {
        background: rgb(3, 117, 223);
    }
}
.create-chat-close {
    position: absolute;
    top: 34px;
    left: 42px;
    z-index: 1;
    cursor: pointer;
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
    .chat-setting {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
    }
}
</style>