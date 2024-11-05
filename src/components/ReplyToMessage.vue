<template>
<div class="reply-message">
    <div class="reply-message-report">
        <div class="reply-message-name">{{ infoReplyMessageUser.name }}</div>
        <div class="reply-message-type">{{ infoReplyMessage.title }}</div>
    </div>
    <div style="color: #99C0F0; font-size: 20px;" @click="clearInfo" class="reply-message-delete icon-close"></div>
</div>
</template>

<script>
export default {
    computed: {
        infoReplyMessage() {
            return this.$store.getters.infoReplyMessage
        },
        infoReplyMessageUser() {
            return this.$store.getters.infoReplyMessageUser
        }
    },
    methods: {
        clearInfo() {
            this.$store.commit('SetreplyMessage', '')
            this.$store.commit('SetReplyMessageUser', '')
        }
    }
}
</script>

<style lang="scss"scoped>
.reply-message {
    position: absolute;
    top: -90%;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    padding: 10px 17px 10px 6px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    z-index: 1;
}
.reply-message-report {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    border-radius: 10px;
    background: rgba(229, 243, 254, .8);
    padding: 6px;
}
.reply-message-name {
    color: rgb(77, 117, 163);
    font-size: 12px;
    font-weight: 500;
    line-height: calc(15 / 12 * 100%);
}
.reply-message-type {
    color: rgb(25, 24, 22);
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
}
.reply-message-delete {
    cursor: pointer;
}
</style>