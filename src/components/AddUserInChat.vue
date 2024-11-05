<template>
    <div @click="closePopUp" v-if="infoShowAddUserInChat" class="add-user-group _pop-up">
        <div @click.stop class="add-user-group-body _pop-up-body">
            <div class="_pop-up-top">
                <span @click.stop="closePopUp" class="chat-files-form-close icon-arrow"></span>
                <div class="_titles">Пользвотали</div>
            </div>
            <div class="add-user-group-block">
                <my-input
                    :class="{'input-not-empty': searchQuery != ''}"
                    v-model="searchQuery"
                    style="padding-left: 15px;"
                    placeholder="Поиск..."
                />
                <div class="add-user-group-users">
                    <div
                        class="add-user-group-user"
                        v-for="user in sortedSearchNotParticipantsUsers"
                        :key="user.id"
                    >
                        <div class="add-user-group-user-block">
                            <img :src="user.imgSrc ? user.imgSrc : require('@/assets/img/avatar.jpeg')" alt="Avatar Img">
                            <div style="color: #000;" class="_btns-tabs-names_in_msgs">{{ user.name }}</div>
                        </div>
                        <my-button @click="$store.dispatch('addNewUserInChat', user)">Добавить</my-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ''
        }
    },
    computed: {
        infoUsers() {
            return this.$store.getters.infoUsers
        },
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        infoShowAddUserInChat() {
            return this.$store.getters.infoShowAddUserInChat
        },
        sortedNotParticipantsUsers() {
            return this.infoUsers.filter(post => {
                let bol = true
                this.infoFullActiveChat.usersChat.forEach((ilement) => {
                    return post.id === ilement.uid ? bol = false : true
                });
                return bol
            })
        },
        sortedSearchNotParticipantsUsers() {
            return this.sortedNotParticipantsUsers.filter(post => post.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
    },
    methods: {
        closePopUp() {
            this.$store.commit('setShowAddUserInChat', false)
            this.searchQuery = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.add-user-group-block{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}
.add-user-group-users {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    flex: 0 1 220px;
    overflow-y: auto;
}
.add-user-group-user {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.add-user-group-user-block {
    display: flex;
    align-items: center;
    column-gap: 6px;
    & img {
        height: 48px;
        width: 48px;
        object-fit: cover;
        border-radius: 100%;
    }
}
::-webkit-scrollbar {
    width: 5px; /* Ширина скролл-бара */
    height: 5px; /* Высота (для горизонтального скролла) */
}

/* Фон скролл-бара */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет фона трека */
    border-radius: 10px; /* Закругление углов */
}

/* Ползунок скролл-бара */
::-webkit-scrollbar-thumb {
    background: #888; /* Цвет ползунка */
    border-radius: 10px; /* Закругление углов */
}

/* Эффект при наведении на ползунок */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Более темный цвет при наведении */
}

/* Для Firefox */
.scrollable-element {
    scrollbar-width: thin; /* Тонкий скролл */
    scrollbar-color: #888 #f1f1f1; /* Цвет ползунка и фона */
}
</style>