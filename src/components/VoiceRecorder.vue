<template>
    <div class="main-chat-form-voice">
        <span style="cursor: pointer;" @click="startRecording" :disabled="isRecording">
            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                    Created with Pixso.
            </desc>
            <defs>
                <pattern id="pattern_18_1460" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                    <use xlink:href="#image18_146_0" transform="matrix(0.001953,0,0,0.001953,0,0)"/>
                </pattern>
                <image id="image18_146_0" width="512.000000" height="512.000000" xlink:href="data:image/png;base64,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"/>
            </defs>
            <g opacity="0.200000">
                <rect id="mic" width="24.000000" height="24.000000" fill="url(#pattern_18_1460)" fill-opacity="1.000000"/>
            </g>
        </svg>
        </span>
        <div v-if="isRecording" class="main-chat-form-voice-block">
            <img @click="stopRecording" :disabled="!isRecording" src="@/assets/img/chat-icons/delete.png" alt="delete">
            <div class="main-chat-form-voice-time">{{ formattedTimer }}</div>
            <button @click="submitUploadAudio">
                <svg width="22.055176" height="22.944763" viewBox="0 0 22.0552 22.9448" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>
                            Created with Pixso.
                    </desc>
                    <defs/>
                    <path id="send" d="M7.43 2.79L20.3 9.03C21.69 9.68 23.37 11.04 20.41 12.57C17.44 14.11 8.18 19.56 3.92 22.1C2.37 23.02 -0.48 24.04 1.11 20.08L3.99 13.22L13.17 11.08L3.88 9.68L0.59 3.06C-0.13 1.67 -0.91 -1.14 2.91 0.49L7.43 2.79Z" fill="#8D46F6" fill-opacity="1.000000" fill-rule="evenodd"/>
                </svg>

            </button>
        </div>
    </div>
  <div>
  </div>
</template>

<script>
import { storage } from '@/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
    data() {
        return {
        isRecording: false,
        mediaRecorder: null,
        audioChunks: [],
        audioUrl: null,
        timer: 0,
        timerInterval: null, // Добавляем переменную для хранения интервала
        };
    },
    computed: {
        formattedTimer() {
            // Форматируем таймер в mm:ss
            const minutes = String(Math.floor(this.timer / 60)).padStart(2, '0');
            const seconds = String(this.timer % 60).padStart(2, '0');
            return `${minutes}:${seconds}`;
        },
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
    },
    methods: {
        async startRecording() {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.start();
            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };
            this.isRecording = true;
            this.timer = 0; // Сброс таймера
            this.startTimer(); // Запускаем таймер
        },
        submitUploadAudio() {
            this.stopRecording()
            this.mediaRecorder.onstop = async () => {
                // В этом месте вы можете безопасно вызвать uploadAudio
                await this.uploadAudio(this.infoFullActiveChat);
            };
        },
        stopRecording() {
            this.timer = 0;
            this.mediaRecorder.stop();
            this.isRecording = false;
            clearInterval(this.timerInterval); // Останавливаем таймер
            this.audioChunks = [];
        },
        async uploadAudio(user) {
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
            const storageRef = ref(storage, `voiceMessages/${Date.now()}.wav`);

            await uploadBytes(storageRef, audioBlob)
            const fileURL = await getDownloadURL(storageRef);
            const report = {
                date: new Date().toTimeString().slice(0, 5),
                position: 'rigth',
                audioUrl: fileURL,
                type: 'audio',
                user: user
            }
            await this.$store.dispatch('addNewReport', report)
        },
        startTimer() {
            this.timerInterval = setInterval(() => {
                this.timer += 1; // Увеличиваем таймер каждую секунду
            }, 1000);
        },
    }
}
</script>

<style lang="scss" scoped>
.main-chat-form-voice {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-chat-form-voice-block {
    position: absolute;
    height: 40px;
    z-index: 2;
    display: flex;
    align-items: center;
    column-gap: 20px;
    background-color: #fff;
    top: -69px;
    padding: 8px;
    border-radius: 10px;
    & button {
        background-color: transparent;
    }
    & img {
        cursor: pointer;
    }
}
.main-chat-form-voice-time {
}
</style>