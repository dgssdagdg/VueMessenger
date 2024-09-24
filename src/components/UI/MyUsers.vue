<template>
    <div
        @click="openChatWindow(user)"
        class="messenger-left-users-user"
        :class="{'active-user': infoFullActiveChat.id == user.id}"
    >
        <div class="messenger-left-users-user-img">
            <img
                v-lazy="user.imgSrc ? user.imgSrc : require('@/assets/img/avatar.jpeg')"
                alt="Avatar-icon"
            >
            <div v-if="user.type == 'chatUsers' && changeStatus" class="_my-status messenger-left-users-user-status"></div>
        </div>
        <div class="messenger-left-users-user-info">
            <div class="messenger-left-users-user-top">
            <div class="messenger-left-users-user-name _btns-tabs-names_in_msgs">{{user.name}}</div>
            <div class="messenger-left-users-user-date _secondary">{{ user.date }}</div>
            </div>
            <div class="messenger-left-users-user-last_message _main">
                {{userLastReport}}
            </div>
        </div>
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
        }
    },
    computed: {
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        infoActiveChat() {
            return this.$store.getters.infoActiveChat
        },
        infoUsers() {
            return this.$store.getters.infoUsers
        },
        changeStatus() {
            const filterUsers = this.infoUsers.find(item => item.id == this.user.id)
            if(filterUsers) {
                return filterUsers.isOnline ? true : false
            }
        },
        userLastReport() {
            let userLastReport = this.user.body[this.user.body.length - 1]
            if(userLastReport) {
                return userLastReport.type == 'photo' ? 'Фотография' : userLastReport.type == 'file' ? 'Файл' : userLastReport.type == 'voice' ? 'Голосовое сообщение' : userLastReport.title.split(' ').slice(0, 3).join(' ')
            }
            
            return 'Сообщение'
        }
    },
    name: 'my-users'
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
}
.messenger-left-users-user-img {
    height: 48px;
    max-width: 48px;
    width: 100%;
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
.messenger-left-users-user-info {
    width: 100%;
}
.messenger-left-users-user-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}
.messenger-left-users-user-name {
    color: rgb(25, 24, 22);
    font-size: 16px;
    font-weight: 700;
    line-height: calc(22 / 16 * 100%);
}
.active-user {
    background: rgb(48, 50, 62);
    & .messenger-left-users-user-name,
    & .messenger-left-users-user-last_message {
        color: rgb(255, 255, 255);
    }
}
</style>