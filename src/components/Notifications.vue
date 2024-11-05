<template>
<div class="notifications">
    <div
        @click="$store.commit('showNotification', false)"
        class="notifications-top"
     >
        <div class="notifications-title _titles">Уведомления</div>
        <div style="transform: rotate(180deg); font-size: 16px;" class="notifications-close icon-arrows"></div>
    </div>
    <div class="notifications-body">
        <my-notice
            :notice="notice"
            v-for="notice in infoNotice"
            :key="notice.name"
        />
    </div>
    <div class="notifications-setting">
        <div @click="$store.dispatch('clearNotice')" class="notifications-clear">
            <span style="font-size: 16px;" class="icon-check-one"></span>
            Отметить прочитанными
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
    },
    computed: {
    infoNotice() {
        return this.$store.getters.infoNotice
    },
  },
}
</script>

<style lang="scss" scoped>
.notifications {
    max-width: 330px;
    width: 100%;
    background-color: rgb(225, 225, 233);
    padding: 35px 30px 23px 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
}
.notifications-top {
    display: flex;
    align-items: center;
    column-gap: 25px;
    margin-bottom: 36px;
    cursor: pointer;
}
.notifications-title {
}
.notifications-close {
}
.notifications-body {
    display: flex;
    flex-direction: column;
    row-gap: 28px;
    flex: 1 1 100%;
}
.notifications-setting {
}
.notifications-clear {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: rgba(124, 128, 146, 0.5);
    font-size: 14px;
    font-weight: 700;
    line-height: calc(18 / 14 * 100%);
}
@media(max-width: 998px) {
    .notifications {
        max-width: 100%;
        height: 100%;
        position: fixed;
    }
}
</style>