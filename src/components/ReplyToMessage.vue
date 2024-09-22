<template>
<div class="reply-message">
    <div class="reply-message-report">
        <div class="reply-message-name">{{ infoReplyMessageUser.name }}</div>
        <div class="reply-message-type">{{ infoReplyMessage.title }}</div>
    </div>
    <div @click="clearInfo" class="reply-message-delete">
        <svg width="20.000000" height="20.000244" viewBox="0 0 20 20.0002" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<rect id="Прямоугольник 4" x="18.419922" width="2.135201" height="26.049458" transform="rotate(45 18.419922 0.000000)" fill="#99C0F0" fill-opacity="1.000000"/>
	<rect id="Прямоугольник 4" x="0.070312" y="1.580505" width="2.135201" height="26.049458" transform="rotate(-45 0.070312 1.580505)" fill="#99C0F0" fill-opacity="1.000000"/>
        </svg>
    </div>
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
    border-radius: 10px 0px 0px 10px;
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