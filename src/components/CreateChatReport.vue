<template>
<div class="main-chat-form">
    <div class="main-chat-form-file">
        <div class="icon-paper-clip" @click.stop="showChatMenu = true" style="cursor: pointer; opacity: 0.2;">
        </div>
        <my-dropdown
            class="main-chat-form-dropdown"
            v-model:show="showChatMenu"
            :chatDropDownItems="chatDropDownItems"
            @myaction="openFileAndImgSubmit"
        />
    </div>
    <div class="main-chat-form--input">
        <my-input
            v-model="sendText"
            placeholder="Ведите сообщение..."
            @keyup.enter="createReport(infoWindow)"
        />
    </div>
    <VoiceRecorder/>
    <button @click="createReport(infoWindow)" type="submit" class="main-chat-form-submit">
        <svg width="24.004883" height="24.000000" viewBox="0 0 24.0049 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                    Created with Pixso.
            </desc>
            <defs/>
            <path id="send" d="M7.16 4.81L21.16 0.28C22.66 -0.22 24.85 -0.42 23.66 2.8C22.46 6.02 19.16 16.55 17.66 21.42C17.11 23.18 15.66 25.94 14.16 21.92L11.66 14.87L17.16 6.82L9.16 12.36L2.16 9.84C0.66 9.34 -1.84 7.83 2.16 6.32L7.16 4.81Z" fill="#8D46F6" fill-opacity="1.000000" fill-rule="evenodd"/>
        </svg>

    </button>
    <ReplyToMessage v-if="infoReplyMessage"/>
</div>
</template>

<script>
import VoiceRecorder from './VoiceRecorder.vue';
import ReplyToMessage from './ReplyToMessage.vue';
export default {
    data() {
        return {
            sendText: '',
            showChatMenu: false,
            chatDropDownItems: [
                {
                    imgSrc: 'icon-multimedia-file',
                    title: 'Фото или видео',
                    action: 'photo'
                },
                {
                    imgSrc: 'icon-file',
                    title: 'Файл',
                    action: 'file'
                }
            ],
        }
    },
    props: {
        infoWindow: {
            type: Object
        }
    },
    components: {
        VoiceRecorder, ReplyToMessage
    },
    methods: {
        async createReport(user) {
            //Создание обекта сообщения
            const report = {
                title: this.sendText,
                date: new Date().toTimeString().slice(0, 5),
                user: user
            }
            //Добовлния ответа на сообщения
            if(this.infoReplyMessage) {
                report.replyMessage = {
                    name: this.infoReplyMessageUser.name,
                    text: this.infoReplyMessage.title,
                    id: this.infoReplyMessage.id
                }
            }
            //Проверка не пусто ли поле вода
            if(this.sendText.length == 0) {
                alert('Ведите сообщение...')
                return
            }
            //Отправлния сообщения
            await this.$store.dispatch('addNewReport', report)

            //Очистка
            this.sendText = ''
            this.$store.commit('SetreplyMessage', '')
            this.$store.commit('SetReplyMessageUser', '')
        },
        openFileAndImgSubmit(item) {
            this.$store.commit('showPopUp', item.action)
        },
    },
    computed: {
        infoReplyMessage() {
            return this.$store.getters.infoReplyMessage
        },
        infoReplyMessageUser() {
            return this.$store.getters.infoReplyMessageUser
        }
    }
}
</script>

<style lang="scss" scoped>
.main-chat-form {
    height: 72px;
    width: 100%;
    max-width: 739px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 12px 28px 11px 11px;
    border-radius: 10px 10px 0px 0px;
    background: rgb(255, 255, 255);
    position: relative;
}
.main-chat-form-file {
    position: relative;
}
.main-chat-form--input {
    width: 100%;
}
.main-chat-form-submit {
    background-color: transparent;
}
.main-chat-form-dropdown {
    top: auto;
    right: auto;
    left: -24px;
    bottom: 60px;
}
</style>