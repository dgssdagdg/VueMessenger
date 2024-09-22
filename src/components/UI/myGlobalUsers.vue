<template>
    <div
        @click="openChatWindow(user)"
        class="messenger-left-users-user"
    >
        <div class="messenger-left-users-user-img">
            <img v-lazy="user.imgSrc ? user.imgSrc : require('@/assets/img/avatar.jpeg')" alt="Avatar-icon">
            <div v-if="user.isOnline" class="_my-status messenger-left-users-user-status"></div>
        </div>
        <div class="messenger-left-users-user-name">{{user.name}}</div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        openChatWindow(user) {
            this.$store.commit('SetInfoWindow', user)
            this.$store.dispatch('fetchActiveChat', user)
            this.$store.commit('SetSearchQuery', '')
        }
    },
    name: 'my-global-users'
}
</script>

<style lang="scss" scoped>
.messenger-left-users-user {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 15px 8px 8px;
    border-radius: 10px;
    column-gap: 12px;
    cursor: pointer;
    transition: all .3s ease 0s;
    &:hover {
        background-color: rgb(48, 50, 62);
        & .messenger-left-users-user-name {
            color: #fff;
        }
    }
}
.messenger-left-users-user-img {
    height: 48px;
    max-width: 48px;
    & img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    position: relative;
}
.messenger-left-users-user-status {
    bottom: 0;
    right: 0;
}
.messenger-left-users-user-name {
    color: rgb(25, 24, 22);
    font-size: 16px;
    font-weight: 700;
    line-height: calc(22 / 16 * 100%);
    transition: all .3s ease 0s;
}
</style>