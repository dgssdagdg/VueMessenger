<template>
<div class="main-chat-form">
    <div class="main-chat-form-file">
        <span @click.stop="showChatMenu = true" style="cursor: pointer;">
            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                    Created with Pixso.
            </desc>
            <defs>
                <pattern id="pattern_18_1660" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                    <use xlink:href="#image18_166_0" transform="matrix(0.001953,0,0,0.001953,0,0)"/>
                </pattern>
                <image id="image18_166_0" width="512.000000" height="512.000000" xlink:href="data:image/png;base64,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"/>
            </defs>
            <g opacity="0.200000">
                <rect id="paper-clip" width="24.000000" height="24.000000" fill="url(#pattern_18_1660)" fill-opacity="1.000000"/>
            </g>
            </svg>
        </span>
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
            placeholder="Введите сообщение..."
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
                    imgSrc: require('@/assets/img/chat-icons/multimedia.png'),
                    title: 'Фото или видео',
                    action: 'photo'
                },
                {
                    imgSrc: require('@/assets/img/chat-icons/file.png'),
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
            const report = {
                title: this.sendText,
                date: new Date().toTimeString().slice(0, 5),
                position: 'rigth',
                user: user
            }
            if(this.infoReplyMessage) {
                report.replyMessage = {
                    name: this.infoReplyMessageUser.name,
                    text: this.infoReplyMessage.title,
                    id: this.infoReplyMessage.id
                }
            }
            await this.$store.dispatch('addNewReport', report)
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