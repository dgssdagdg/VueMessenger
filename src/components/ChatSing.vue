<template>
    <div class="chat-sing-wrapper">
        <div class="chat-sign">
            <div class="chat-sign-info">
                <div @dblclick="click" class="chat-sign-info-img">
                    <img v-lazy="infoFullActiveChat.imgSrc ? infoFullActiveChat.imgSrc : require('@/assets/img/avatar.jpeg')" alt="#">
                </div>
                <div class="chat-sign-info-block">
                    <div style="color: black;" class="chat-sign-info-name _btns-tabs-names_in_msgs">{{ infoFullActiveChat.name }}</div>
                    <div v-if="infoFullActiveChat.type == 'chatUsers'" class="chat-sign-info-status _main">{{ getMinutesSinceLastSeen }}</div>
                </div>
            </div>
            <div class="chat-sign-control">
                <div class="chat-sign-control-block">
                    <div @click="myAlert" class="chat-sign-control-block-item icon-phone"></div>
                    <div @click="myAlert" class="chat-sign-control-block-item icon-video"></div>
                </div>
                <div class="chat-sign-control-block">
                    <div
                        style="opacity: 0.5; font-size: 28px;"
                        @click="SetShowChatSearch(false === showChatSearch), SetChatSearch('');"
                        class="chat-sign-control-block-item icon-lupa"
                    ></div>
                    <div
                        style="opacity: 0.5; font-size: 28px;"
                        @click="$store.commit('SetShowChatSetting', true)"
                        class="chat-sign-control-block-item icon-dots"
                    ></div>
                </div>
            </div>
        </div>
        <div 
            v-if="!$store.state.messeng.showNotification"
            @click="$store.commit('showNotification', true)"
            class="notice-btn-icon"
        >
            <div class="notice-btn-icon-img chat-sign-control-block-item">
                <span style="font-size: 30px;" class="icon-notification"></span>
                <div v-if="infoNotice.length > 0" class="_my-status notice-btn-icon-img-status"></div>
            </div>
        </div>
        <ChatSetting
            v-if="infoShowChatSetting"
        />
        <div @click="clearChat" class="leave-in-chat _violet-button">
            <img src="@/assets/img/setings-icons/arrow.png" alt="#">
        </div>
        <CallComponent v-if="false"/>

        <div v-if="showChatSearch" class="chat-sign-search">
            <my-input
                :model-value="chatSearch" 
                @update:model-value="SetChatSearch"
                placeholder="Поиск"
                :class="{'input-not-empty': chatSearch != ''}"
            />
            <div class="chat-sign-search-body">
                <div
                :key="report.id"
                v-for="report in chatSearchFilter(activeChat)"
                class="chat-sign-search-item _btns-tabs-names_in_msgs"
                @click="chatSearchItemClick(report.id)"
                ><span>{{ report.title }}</span></div>
            </div>
        </div>
    </div>

</template>

<script>
import ChatSetting from './ChatSetting.vue';
import CallComponent from './CallComponent.vue';
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState({
            showChatSearch: s => s.messeng.showChatSearch,
            activeChat: s => s.fetchInfo.activeChat,
            chatSearch: s => s.messeng.chatSearch,
            infoShowChatSetting: s => s.messeng.showChatSetting,
            infoNotice: s => s.fetchInfo.notice,
            infoUsers: s => s.fetchInfo.users,
            infoFullActiveChat: s => s.fetchInfo.fullActiveChat,
        }),
        ...mapGetters({
            chatSearchFilter: 'chatSearchFilter'
        }),
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
        },
    },
    methods: {
        ...mapMutations({
            SetChatSearchIdScroll: 'SetChatSearchIdScroll',
            SetChatSearch: 'SetChatSearch',
            SetShowChatSearch: 'SetShowChatSearch'
        }),
        myAlert() {
            alert('Данная функцианал еще в разработке и работает на данный момент только три точки и лупа')
        },
        clearChat() {
            this.$store.commit('SetInfoWindow', '')
            this.$store.commit('SetFullActiveChat', '')
        },
        chatSearchItemClick(id) {
            this.SetChatSearch('');
            this.SetShowChatSearch(false);
            this.SetChatSearchIdScroll(id)
        }
    },
    components: {
        ChatSetting, CallComponent
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
    z-index: 3;
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

//.chat-sign-search---------------------------------------------

.chat-sign-search {
    position: absolute;
    top: 100%;
    right: 0;
    max-width: 370px;
    width: 100%;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding: 20px;
    flex-wrap: wrap;
    z-index: 2;
}
.chat-sign-search-body {
    margin-top: 30px;
    height: 200px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    overflow-y: auto;
}
.chat-sign-search-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    color: white;
    background: rgb(48, 50, 62);
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease 0s;
    & span {
        overflow: hidden;
        display: inline;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    &:hover {
        background: rgb(0, 0, 0); 
    }
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
    .notice-btn-icon {
        height: auto;
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
    .chat-sign-search {
        max-width: 100%;
        border-top: 1px solid rgba(25, 24, 22, 0.2);
    }
    .chat-sign-search-body {
        height: 100px;
    }
}
</style>