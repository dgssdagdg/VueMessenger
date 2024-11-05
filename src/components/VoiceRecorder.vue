<template>
    <div class="main-chat-form-voice">
        <span class="icon-mic" style="cursor: pointer; opacity: 0.2;" @click="startRecording" :disabled="isRecording"></span>
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
            const devices = await navigator.mediaDevices.enumerateDevices();
            // Ищем микрофоны в списке устройств
            const microphones = devices.filter(device => device.kind === 'audioinput');
            // Проверяем, есть ли хоть один микрофон
            if (!microphones.length > 0) {
                alert("Микрофон неподключен!");
                return
            }
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