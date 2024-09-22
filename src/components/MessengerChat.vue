<template>
<div
    v-if="infoFullActiveChat"
    class="messenger-chat"
    :class="{'messenger-chat-media-show' : infoFullActiveChat}"
>
    <ChatSing/>
    <div
        class="main-chat"
        :style="{
            position: myInfo.uid != fetchMeInChat && infoFullActiveChat.type == 'canals' ? 'relative' : 'initial'
        }"
    >
        <div ref="messagesContainer" class="main-chat-body">
            <my-chat-report
                @contextmenu.prevent="(event) => openContextMenu(event, chatReport)"
                v-for="chatReport in infoActiveChat"
                :chatReport="chatReport"
                :key="chatReport.id"
                :id="chatReport.id"
                :class="{'highlight': highlight === chatReport.id}"
                @goMessage="goToMessage"
            />
            <my-dropdown
              v-model:show="showMenu"
              :chatDropDownItems="chatDropDownItems"
              @myaction="messageMethods"
              :style="{ top: `${y}px`, left: `${x}px`, right: 'auto' }"
            />
        </div>  
        <CreateChatReport
            :infoWindow="infoFullActiveChat"
        />
        <CreateFileMessage
            v-if="infoShowPopUp == 'file' || infoShowPopUp == 'photo'"
        />
        <AddUserInChat/>
        <div
            v-if="infoFullActiveChat.type == 'canals' && myInfo.uid != fetchMeInChat"
            class="enter-in-chat _pop-up"
        >
            <button @click="$store.dispatch('addNewUserInChat', myInfo)" type="button" class="_blue-button enter-in-chat">Присоедениться к группе</button>
        </div>
    </div>
</div>

</template>

<script>
import ChatSing from '@/components/ChatSing.vue';
import CreateChatReport from '@/components/CreateChatReport.vue';
import CreateFileMessage from './CreateFileMessage.vue';
import AddUserInChat from './AddUserInChat.vue';
export default {
    data() {
        return {
            highlight: '',
            showMenu: false,
            report: {},
            x: 0,
            y: 0,
            chatDropDownItems: [
                {
                    imgSrc: require('@/assets/img/chat-icons/answer-back.png'),
                    title: 'Ответить',
                    action: 'answerBack'
                },
                {
                    imgSrc: require('@/assets/img/chat-icons/copy.png'),
                    title: 'Копировать',
                    action: 'copy'
                },
                {
                    imgSrc: require('@/assets/img/chat-icons/delete.png'),
                    title: 'Удалить',
                    action: 'delete'
                }
            ],
        }
    },
    components: {
        ChatSing, CreateChatReport, CreateFileMessage, AddUserInChat
    },
    methods: {
        openContextMenu(event, report) {
            this.showMenu = true;
            this.report = report
            this.x = event.clientX; // Позиция X курсора
            this.y = event.clientY; // Позиция Y курсора
        },
        handleClickOutside(event) {
            // Закрываем меню при клике вне его
            if (this.showMenu) {
                this.showMenu = false;
            }
        },
        beforeDestroy() {
            // Удаляем слушатель при уничтожении компонента
            document.removeEventListener('click', this.handleClickOutside);
        },
        messageMethods(method) {
            if(method.action == 'copy') {
                navigator.clipboard.writeText(this.report.title).then(() => {
                    alert('Текст скопирован в буфер обмена!'); // Уведомляем пользователя
                }).catch(err => {
                    console.error('Не удалось скопировать: ', err); // Обрабатываем ошибку
                });
            }
            if(method.action == 'answerBack') {
                this.$store.commit('SetreplyMessage', this.report)
                this.$store.dispatch('fetchReplyMessageUser', this.report)
                this.showMenu = false; // Закрываем меню после выбора действия
            }
            if(method.action == 'delete') {
                this.$store.dispatch('deleteMessage', this.report)
            }
        },
        goToMessage(id) {
            const message = this.infoActiveChat.find(item => item.id === id);
            if (message) {
                // Прокрутка к сообщению
                this.$nextTick(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        this.highlight = id;
                        setTimeout(() => {
                            this.highlight = '';
                        }, 2000);
                    }
                });
            }
        },
    },
    mounted() {
        // Добавляем слушатель события клика вне меню для закрытия
        document.addEventListener('click', this.handleClickOutside);
    },
    computed: {
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        infoShowPopUp() {
            return this.$store.getters.infoShowPopUp
        },
        myInfo() {
            return this.$store.getters.myInfo
        },
        fetchMeInChat() {
            if(this.infoFullActiveChat.type == 'canals') {
                const arr = this.infoFullActiveChat.usersChat.find(item => item.uid == this.myInfo.uid)
                return arr ? arr.uid : null
            }
            return true
        },
        infoActiveChat() {
            this.$nextTick(() => {
                const container = this.$refs.messagesContainer;
                container.scrollTop = container.scrollHeight;
            });
            return this.$store.getters.infoActiveChat
        },
    },
}
</script>

<style lang="scss" scoped>
.messenger-chat {
    flex: 0 1 1070px;
    border-left: 1px solid rgba(25, 24, 22, 0.2);
}
.main-chat {
    background: rgb(245, 245, 247);
    // flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main-chat-body {
   flex: 1 1 580px;
   max-width: 660px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   row-gap: 8px;
   padding: 96px 20px 20px;
   overflow-y: auto;
}
/* Скрытие полосы прокрутки для WebKit браузеров (Chrome, Safari) */
.main-chat-body::-webkit-scrollbar {
    width: 0; /* Скрыть вертикальный скролл */
    background: transparent; /* Задать прозрачный фон (необязательно) */
}

/* Скрытие полосы прокрутки для других браузеров */
.main-chat-body {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
}
//-----------------------------
@media(max-width: 998px) {
    .messenger-chat-media-show {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-left: none;
    }
    // .main-chat {
    //     height: 100%;
    // }
}
</style>