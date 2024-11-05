<template>
<div v-if="show" class="create-chat _pop-up-white">
    <form @submit.prevent="createGroup(status.action)" class="create-chat-form">
        <div class="create-chat-form-content">
            <div class="create-chat-title _titles">{{ status.title }}</div>
            <div class="create-chat-avatar">
                <img :src="imageSrc" alt="Avatar">
                <input @change="onFileChange" type="file" accept="image/*">
            </div>
            <div class="create-chat-inputs">
                <my-input placeholder="Название" v-model="chatName"/>
                <my-input placeholder="Описание (необязательно)" v-model="chatDescription"/>
            </div>
        </div>
        <button type="submit" class="create-chat-btn _violet-button">
            <img src="@/assets/img/setings-icons/arrow.png" alt="#">
        </button>
    </form>
    <div @click="closeForm" class="create-chat-close icon-arrow"></div>
</div>
</template>

<script>
import uploadImageMixin from '@/mixins/uploadImageMixin';
export default {
    data() {
        return {
            chatName: '',
            chatDescription: '',
            imageSrc: require('@/assets/img/setings-icons/avatar.png')
        }
    },
    mixins: [uploadImageMixin],
    methods: {
        async onFileChange(event) {
            const file = event.target.files[0]; // Получаем первый загруженный файл
            if (file) {
                await this.uploadImage(file);
                event.target.value=''
            }
        },
        cleaning() {
            this.chatName = '';
            this.chatDescription = ''
            this.imageSrc = require('@/assets/img/setings-icons/avatar.png')
        },
        createGroup(action) {
            const chat = {
                name: this.chatName,
                imgSrc: this.imageSrc,
                description: this.chatDescription,
                type: action
            }
            this.$store.dispatch('createChat', chat)
            this.$emit('update:show', false);
            this.cleaning()
        },
        closeForm() {
            this.$emit('update:show', false)
            this.cleaning()
        },


    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        status: {
            type: Object,
            required: true
        }
  },
}
</script>

<style lang="scss" scoped>
.create-chat {

}
.create-chat-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}
.create-chat-title {
    margin-bottom: 33px;
}
.create-chat-avatar {
    margin-bottom: 28px;
    width: 120px;
    height: 120px;
    position: relative;
    & img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    & input {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        opacity: 0;
    }
}
.create-chat-form-content {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.create-chat-inputs {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
}
.create-chat-btn {
}
.create-chat-close {
    position: absolute;
    top: 34px;
    left: 42px;
    z-index: 1;
    cursor: pointer;
}
@media(max-width: 767px) {
    .create-chat-close {
        top: 33px;
        left: 10px;
    }
}
</style>