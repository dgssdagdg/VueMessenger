<template>
<div
    class="main-chat-popup _pop-up"
    @click="closePopUp"
>
    <form @submit.prevent="createFileMessage(infoFullActiveChat)" @click.stop class="chat-files-form _pop-up-body">
        <div class="_pop-up-top">
            <img @click.stop="closePopUp" src="@/assets/img/setings-icons/arrow-left.png" alt="closeChat" class="chat-files-form-close">
            <div class="chat-files-form-top-title">Отправить файл</div>
        </div>
        <div class="chat-files-form-body">
            <div
                v-for="file in fileArray"
                :key="file.name"
                class="chat-files-form-file"
            >
                <div class="chat-files-form-file-block">
                    <img
                        v-if="infoShowPopUp == 'photo'"
                        :src="file.imgSrc"
                        :alt="file.name"
                        class="main-chat-text-file-img"
                    >
                    <div class="chat-files-form-texts">
                        <div class="chat-files-form-name">{{ file.name }}</div>
                        <div class="chat-files-form-weight">{{ file.size }}</div>
                    </div>
                </div>
                <img @click="deleteFile(file)" class="chat-files-form-file-delete" src="@/assets/img/chat-icons/close.png" alt="delete file">
            </div>
        </div>
        <div class="chat-files-form-addfile">
            <span>
                <input v-if="infoShowPopUp == 'photo'" @change="onFileChange" type="file" accept="image/*, video/*">
                <input v-if="infoShowPopUp == 'file'" @change="onFileChange" type="file">
                Добавить файл
            </span>
        </div>
        
        <div class="chat-files-form-end">
            <my-input placeholder="Добавить подпись..." v-model="signature" class="chat-files-form-input"/>
            <my-button type="submit" class="chat-files-form-btn">Отправить</my-button>
        </div>
    </form>
</div>
</template>

<script>
import uploadImageMixin from '@/mixins/uploadImageMixin';
export default {
    data() {
        return {
            signature: '',
            fileArray: [],
            imageSrc: '',
        }
    },
    mixins: [uploadImageMixin],
    methods: {
        async onFileChange(event) {
            const file = event.target.files[0]; // Получаем первый загруженный файл
            if (file) {
                // Устанавливаем информацию о файле
                await this.uploadImage(file);
                const fileInfo = {
                    name: file.name,
                    size: file.size,
                };
                fileInfo.imgSrc = this.imageSrc
                this.fileArray.push(fileInfo)
                event.target.value=''
            }
        },

        deleteFile(file) {
            this.fileArray = [...this.fileArray.filter(item => item.url != file.url)]
        },
        closePopUp() {
            this.$store.commit('showPopUp', '')
            this.fileArray = []
            this.signature = ''
        },
        createFileMessage(user) {
            const report = {
                title: this.signature,
                date: new Date().toTimeString().slice(0, 5),
                position: 'rigth',
                files: this.fileArray,
                type: this.infoShowPopUp,
                user: user
            }
            this.$store.dispatch('addNewReport', report)
            this.closePopUp()
        }
    },
    computed: {
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        infoShowPopUp() {
            return this.$store.getters.infoShowPopUp
        },
    },
}
</script>

<style lang="scss" scoped>
.main-chat-popup {
}
.chat-files-form {
}
.chat-files-form-close {
    cursor: pointer;
}
.chat-files-form-top-title {
    color: rgb(25, 24, 22);
    font-size: 22px;
    font-weight: 600;
    line-height: calc(27 / 22 * 100%);
}
.chat-files-form-body {
    margin-bottom: 13px;
    padding: 0 20px;
}
.chat-files-form-file {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
}
.chat-files-form-texts {
}
.chat-files-form-name {
    color: rgb(25, 24, 22);
    font-size: 16px;
    font-weight: 500;
    line-height: calc(19 / 16 * 100%);
}
.chat-files-form-weight {
    color: rgb(25, 24, 22);
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
}
.chat-files-form-file-delete {
    cursor: pointer;
}
.chat-files-form-addfile {
    color: rgb(124, 128, 146);
    font-size: 16px;
    font-weight: 500;
    line-height: calc(19 / 16 * 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    & span {
        position: relative;
        display: flex;
        cursor: pointer;
    }
    & input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
    }
}
.chat-files-form-end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.chat-files-form-input {
    border: none !important;
    height: auto;
}
.chat-files-form-btn {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: calc(22 / 16 * 100%);
    border-radius: 10px;
    background: rgb(0, 132, 255);
    height: 38px;
    padding: 0 12.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease 0s;
    &:hover {
        background: rgb(3, 117, 223);
    }
}
.main-chat-text-file-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 100%;
}
.chat-files-form-file-block {
    display: flex;
    align-items: center;
    column-gap: 10px;
}
</style>