<template>
    <div class="chat-sing-wrapper">
        <div class="chat-sign">
            <div class="chat-sign-info">
                <div class="chat-sign-info-img">
                    <img v-lazy="infoFullActiveChat.imgSrc ? infoFullActiveChat.imgSrc : require('@/assets/img/avatar.jpeg')" alt="#">
                </div>
                <div class="chat-sign-info-block">
                    <div class="chat-sign-info-name">{{ infoFullActiveChat.name }}</div>
                    <div v-if="infoFullActiveChat.type == 'chatUsers'" class="chat-sign-info-status">{{ getMinutesSinceLastSeen }}</div>
                </div>
            </div>
            <div class="chat-sign-control">
                <div class="chat-sign-control-block">
                    <div @click="myAlert" class="chat-sign-control-block-item">
                        <img src="../assets/img/chat-icons/phone.png" alt="#">
                    </div>
                    <div @click="myAlert" class="chat-sign-control-block-item">
                        <img src="../assets/img/chat-icons/video.png" alt="#">
                    </div>
                </div>
                <div class="chat-sign-control-block">
                    <div @click="myAlert" class="chat-sign-control-block-item">
                        <svg width="28.184570" height="26.470551" viewBox="0 0 28.1846 26.4706" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g opacity="0.500000">
                                <path id="Vector" d="M10.5 21C16.29 21 21 16.29 21 10.5C21 4.7 16.29 0 10.5 0C4.7 0 0 4.7 0 10.5C0 16.29 4.7 21 10.5 21ZM10.5 17.13C6.83 17.13 3.86 14.16 3.86 10.5C3.86 6.83 6.83 3.86 10.5 3.86C14.16 3.86 17.13 6.83 17.13 10.5C17.13 14.16 14.16 17.13 10.5 17.13ZM17 20.5L21.5 25C25.5 29 31 24 26.5 20L21.5 16L17 20.5Z" fill="#191816" fill-opacity="1.000000" fill-rule="evenodd"/>
                            </g>
                        </svg>

                    </div>
                    <div @click="$store.commit('SetShowChatSetting', true)" class="chat-sign-control-block-item">
                        <svg width="6.000000" height="26.000000" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g opacity="0.500000">
                                <circle id="Ellipse 1" r="3.000000" transform="matrix(6.12323e-17 -1 1 6.12323e-17 3 23)" fill="#191816" fill-opacity="1.000000"/>
                            </g>
                            <g opacity="0.500000">
                                <circle id="Ellipse 2" r="3.000000" transform="matrix(6.12323e-17 -1 1 6.12323e-17 3 13)" fill="#191816" fill-opacity="1.000000"/>
                            </g>
                            <g opacity="0.500000">
                                <circle id="Ellipse 3" r="3.000000" transform="matrix(6.12323e-17 -1 1 6.12323e-17 3 3)" fill="#191816" fill-opacity="1.000000"/>
                            </g>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
        <div 
            v-if="!$store.state.messeng.showNotification"
            @click="$store.commit('showNotification', true)"
            class="notice-btn-icon"
        >
            <div class="notice-btn-icon-img chat-sign-control-block-item">
                <img src="../assets/img/chat-icons/notification.png" alt="#">
                <div v-if="infoNotice.length > 0" class="_my-status notice-btn-icon-img-status"></div>
            </div>
        </div>
        <ChatSetting
            v-if="infoShowChatSetting"
        />
        <div @click="clearChat" class="leave-in-chat _violet-button">
            <img src="@/assets/img/setings-icons/arrow.png" alt="#">
        </div>
    </div>

</template>

<script>
import ChatSetting from './ChatSetting.vue';
export default {
    computed: {
        infoShowChatSetting() {
            return this.$store.getters.infoShowChatSetting
        },
        infoNotice() {
            return this.$store.getters.infoNotice
        },
        infoUsers() {
            return this.$store.getters.infoUsers
        },
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        getMinutesSinceLastSeen() {
            const filterUsers = this.infoUsers.find(item => item.id == this.infoFullActiveChat.id)
            if(filterUsers.lastSeen == null){return 'Пользователь в сети'}
            // Преобразование строки lastSeen в объект Date
            const lastSeenDate = new Date(filterUsers.lastSeen);
            // Получение текущего времени
            const now = new Date();

            // Вычисление разницы в миллисекундах
            const diffInMs = now - lastSeenDate;
            
            // Преобразование миллисекунд в секунды
            const diffInSeconds = Math.floor(diffInMs / 1000);
            
            // Вычисление разницы в днях, часах и минутах
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            const diffInHours = Math.floor(diffInMinutes / 60);
            const diffInDays = Math.floor(diffInHours / 24);

            // Формирование строки результата
            if (diffInDays > 0) {
                return `Пользователь был в сети ${diffInDays} ${diffInDays === 1 ? 'день' : 'дня'} назад.`;
            } else if (diffInHours > 0) {
                return `Пользователь был в сети ${diffInHours} ${diffInHours === 1 ? 'час' : 'часа'} назад.`;
            } else {
                return `Пользователь был в сети ${diffInMinutes} ${diffInMinutes === 1 ? 'минуту' : 'минуты'} назад.`;
            }
        }
    },
    methods: {
        myAlert() {
            alert('Данная функцианал еще в разработке и работает на данный момент только три точки')
        },
        clearChat() {
            this.$store.commit('SetInfoWindow', '')
            this.$store.commit('SetFullActiveChat', '')
        }
    },
    components: {
        ChatSetting
    }
}
</script>

<style lang="scss" scoped>
@mixin item-centring {
  display: flex;
  align-items: center;
}
.leave-in-chat {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    margin-top: auto;
    display: none;
    & img {
        transform: rotate(-180deg);
    }
}
.chat-sing-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 5px 0px 12px 0px rgba(25, 24, 22, 0.15);
    background: rgb(255, 255, 255);
    height: 98px;
    z-index: 2;
    position: relative;
}
.chat-sign {
    padding: 25px 40px;
    display: flex;
    justify-content: space-between;
    flex: 0 1 940px;
    border-right: 1px solid rgba(25, 24, 22, 0.2);
}
.chat-sign-info {
    @include item-centring;
    column-gap: 16px;
}
.chat-sign-info-img img {
    height: 48px;
    width: 48px;
    object-fit: cover;
    border-radius: 100%;
}
.chat-sign-info-block {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.chat-sign-info-name {
}
.chat-sign-info-status {
}
.chat-sign-control {
    @include item-centring;
    column-gap: 40px;
}
.chat-sign-control-block {
    @include item-centring;
    column-gap: 20px;
}
.chat-sign-control-block-item {
    height: 48px;
    width: 48px;
    border-radius: 12px;
    @include item-centring;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: rgb(212, 212, 221);
        & svg g {
            opacity: 1;
        }
    }
    &:active {
        background-color: rgb(239, 240, 245);
        border: 2px solid rgb(153, 192, 240);
        transition: all .0s ease;
    }
}
.notice-btn-icon {
    @include item-centring;
    justify-content: center;
    height: 100%;
    flex: 0 1 130px;
}
.notice-btn-icon-img {
    position: relative;
}
.notice-btn-icon-img-status {
    top: 3px;
    right: 3px;
}
@media(max-width: 1200px) {
    .chat-sign-control {
        column-gap: 20px;
    }
    .chat-sing-wrapper {
        height: auto;
    }
    .chat-sign {
        padding: 25px 20px;
        row-gap: 10px;
        flex-wrap: wrap;
        height: auto;
    }
}
@media(max-width: 998px) {
    .leave-in-chat {
        display: flex;
    }
}
@media(max-width: 767px)  {
    .chat-sing-wrapper {
        flex-wrap: wrap;
    }
    .chat-sign {
        padding: 20px;
        border-bottom: 1px solid rgba(25, 24, 22, 0.2);
    }
    .notice-btn-icon {
        flex: 0 1 100%;
        padding: 5px 0;
    }
    .chat-sign-control {
        width: 100%;
        justify-content: space-between;
    }
}
</style>