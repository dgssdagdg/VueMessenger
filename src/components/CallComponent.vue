<template>
    <div>
        <button @click="startCall">Позвонить</button>
        <button @click="acceptCall">Принять звонок</button>
        <audio id="remoteAudio" autoplay></audio>
    </div>
</template>

<script>
import { db } from '@/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
export default {
    data() {
           return {
               localStream: null,
               remoteStream: null,
               peerConnection: null,
               callId: 'uniqueCallId', // например, ID пользователя
           };
       },
       methods: {
        async startCall() {
            // Создание нового экземпляра RTCPeerConnection
            this.peerConnection = new RTCPeerConnection();

            // Добавление обработчиков
            this.peerConnection.onicecandidate = this.handleIceCandidate;

            // Запрашиваем доступ к аудио
            this.localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.localStream.getTracks().forEach(track => {
                this.peerConnection.addTrack(track, this.localStream);
            });

            // Создаем предложение
            const offer = await this.peerConnection.createOffer();
            await this.peerConnection.setLocalDescription(offer);

            // Отправляем предложение в Firestore
            await setDoc(doc(db, 'calls', this.callId), { offer: offer });
        },
        
        async acceptCall() {
            const callRef = doc(db, 'calls', this.callId);

            // Отслеживание обновлений документа
            onSnapshot(callRef, async (doc) => {
                const callData = doc.data();

                // Обработка предложения
                if (callData?.offer && this.peerConnection.signalingState === 'stable') {
                    await this.peerConnection.setRemoteDescription(new RTCSessionDescription(callData.offer));
            
                    // Создаем ответ и устанавливаем его
                    const answer = await this.peerConnection.createAnswer();
                    await this.peerConnection.setLocalDescription(answer);

                    // Отправляем ответ в Firestore
                    await setDoc(callRef, { answer: answer });
                }

                // Обработка ответа
                if (callData?.answer && this.peerConnection.signalingState !== 'closed') {
                    await this.peerConnection.setRemoteDescription(new RTCSessionDescription(callData.answer));
                }

                // Обработка ICE кандидатов
                if (callData?.iceCandidate) {
                    const candidate = new RTCIceCandidate({
                        candidate: callData.iceCandidate.candidate,
                        sdpMid: callData.iceCandidate.sdpMid,
                        sdpMLineIndex: callData.iceCandidate.sdpMLineIndex
                    });
                    await this.peerConnection.addIceCandidate(candidate);
                }
            });

            // Обработка потока
            this.peerConnection.ontrack = event => {
                const remoteAudio = document.getElementById("remoteAudio");
                remoteAudio.srcObject = event.streams[0];
            };
        }
    }
}
</script>

<style lang="scss" scoped>
</style>