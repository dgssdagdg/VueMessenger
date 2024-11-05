<template>
    <div
        :class="{'main-chat-item-left': myInfo.uid != chatReport.auth}"
        class="main-chat-item"
    >
        <div class="main-chat-text">

            <div
                v-if="chatReport.replyMessage"
                class="reply-message-report"
                @click="$emit('goMessage', chatReport.replyMessage.id)"
            >
                <div class="reply-message-name">{{ chatReport.replyMessage.name }}</div>
                <div class="reply-message-type">{{ chatReport.replyMessage.text }}</div>
            </div>

            <div v-if="chatReport.files" class="main-chat-text-files">
                <div
                    v-for="file in chatReport.files"
                    :key="file.name"
                    class="main-chat-text-file"
                >
                    <img
                        v-if="chatReport.type == 'photo'"
                        v-lazy="file.imgSrc"
                        alt="file.name"
                        class="main-chat-text-file-img"
                    >
                    <div class="main-chat-text-file-block">
                        <div class="main-chat-text-file-texts">
                            <div class="main-chat-text-file-name">{{ file.name }}</div>
                            <div class="main-chat-text-file-size">{{ file.size }}</div>
                        </div>
                        <button @click="downloadImage(file)" type="button" class="main-chat-text-file-download">Скачать</button>
                    </div>
                </div>
            </div>

            <audio v-if="chatReport.type == 'audio'" controls :src="chatReport.audioUrl"></audio>

            {{ chatReport.title }}

            <div style="font-size: 8px; opacity: .7;" v-if="myInfo.uid == chatReport.auth" class="main-chat-status icon-check"></div>
        </div>
        <div class="main-chat-date _secondary">{{ chatReport.date }}</div>
    </div>
</template>

<script>
import { storage } from '@/firebase';
import {ref, getDownloadURL } from "firebase/storage";
export default {
    data() {
        return {
        }
    },
    props: {
        chatReport: {
            type: Object,
            required: true
        }
    },
    computed: {
        infoActiveChat() {
            return this.$store.getters.infoActiveChat
        },
        myInfo() {
            return this.$store.getters.myInfo
        }
    },
    methods: {
        async downloadImage(file) {
            try {
                getDownloadURL(ref(storage, `images/${file.name}`)) .then((url) => {
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        const blob = xhr.response;
                        const link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.target = '_blank';
                        link.download = file.name;
                        link.click();
                    };
                    xhr.open('GET', url);
                    xhr.send();
                }) .catch((error) => {
                    // Handle any errors
                });
            } catch (error) {
                console.error('Ошибка при загрузке изображения:', error);
            }
        },

    },
    name: 'my-chat-report'
}
</script>

<style lang="scss" scoped>
.main-chat-item {
    display: inline-flex;
    flex-direction: column;
    row-gap: 4px;
    align-items: flex-end;
    width: 100%;
}
.main-chat-item-left {
    align-items: flex-start;
    & .main-chat-text {
        border-radius: 0px 30px 30px 15px;
        padding: 12px 12px 12px 12px;
        background: rgb(255, 255, 255);
    }
}
.main-chat-text {
    border-radius: 20px 15px 0px 20px;
    background: rgb(229, 243, 254, 0.8);
    padding: 12px 24px 12px 12px;
    position: relative;
    max-width: 70%;
}
.main-chat-status {
    position: absolute;
    bottom: 6px;
    right: 4px;
    z-index: 1;
}
.main-chat-date {
}
.main-chat-text-files {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-bottom: 20px;
}
.main-chat-text-file {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
.main-chat-text-file-texts {
    display: flex;
    flex-direction: column;
    row-gap: 3px;
}
.main-chat-text-file-name {
    color: rgb(25, 24, 22);
    font-size: 16px;
    font-weight: 600;
    line-height: calc(19 / 16 * 100%);
}
.main-chat-text-file-size {
    color: rgb(25, 24, 22);
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
}
.main-chat-text-file-download {
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
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
}
.main-chat-text-file-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 50px;
    width: 100%;
}

.reply-message-report {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    border-radius: 10px;
    background: rgb(188 226 255 / 80%);
    padding: 6px;
    cursor: pointer;
    transition: all .3s ease 0s;
    &:hover {
        background: rgba(155, 212, 255, 0.8);
    }
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
.highlight {
    animation: highlightAnimation 2s forwards; /* Анимация выделения */
}
@keyframes highlightAnimation {
  0% {
    background-color: rgba(0, 0, 0, 0.3); /* Начальный цвет выделения */
  }
  100% {
    background-color: transparent; /* Цвет затухания */
  }
}
@media(max-width: 767px) {
    .main-chat-text-file-block {
        flex-wrap: wrap;
        row-gap: 10px;
    }
    .main-chat-text {
        max-width: 80%;
        & audio {
            width: 250px;
        }
    }
}
</style>