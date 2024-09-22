import { setDoc, doc, collection, getDoc, arrayUnion, updateDoc} from "firebase/firestore";
import { auth, db } from "@/firebase";
export default {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async createChat({ commit, getters }, { name, imgSrc, description, type, id }) {
            try {
                const basePath = `users/${auth.lastNotifiedUid}/mychats`;
                const updates = [];
        
                // Обработка создания чата для разных типов
                const newChatData = {
                    name,
                    imgSrc: imgSrc,
                    description,
                    type,
                    body: []
                };
                if (type === "chatUsers") {
                    const newChatDataForUser = {
                        name: getters.myInfo.name,
                        imgSrc: getters.myInfo.imgSrc,
                        description,
                        type,
                        body: []
                    };
                    const newDocRef = doc(db, basePath, id);
                    updates.push(setDoc(newDocRef, newChatData));
                    
                    const newDocRefTwo = doc(collection(db, "users", id, "mychats"), auth.lastNotifiedUid);
                    updates.push(setDoc(newDocRefTwo, newChatDataForUser));
                } else if (type === "chat") {
                    const newDocRef = doc(collection(db, basePath));
                    updates.push(setDoc(newDocRef, newChatData));
                } else if (type === "groups" || type === "canals") {
                    const uid = name;
                    const newDocRefChat = doc(collection(db, "users", auth.lastNotifiedUid, type === "groups" ? "mygroups" : "mycanals"), uid);
                    updates.push(setDoc(newDocRefChat, { body: [] }));
                    
                    const newDocRefGroupCanal = doc(collection(db, type === "groups" ? "groups" : "canals"), uid);
                    const groupCanalData = {
                        name,
                        imgSrc: imgSrc,
                        description,
                        type,
                        usersChat: [{
                            uid: auth.currentUser.uid,
                            admin: true,
                        }],
                        body: []
                    };
                    updates.push(setDoc(newDocRefGroupCanal, groupCanalData));
                }
        
                // Выполнение всех запросов параллельно
                await Promise.all(updates);
            } catch (error) {
                console.error(error);
            }
        },
        async addNewReport({commit, dispatch}, {title, date, position, user, type, files, audioUrl, replyMessage}) {
            try {
                // Создание нового сообщения
                let newMessage = {
                    date,
                    position,
                    auth: auth.lastNotifiedUid
                };
        
                if (type === 'file' || type === 'photo') {
                    newMessage.title = title;
                    newMessage.files = files;
                    newMessage.type = type;
                } else if (type === 'audio') {
                    newMessage.audioUrl = audioUrl;
                    newMessage.type = type;
                } else {
                    newMessage.title = title;
                }
        
                if (replyMessage) {
                    newMessage.replyMessage = replyMessage;
                }
        
                // Определение ссылок на документы
                const chatDocRef = doc(db, "users", auth.lastNotifiedUid, "mychats", user.id);
                const chatDocRefTwo = doc(db, "users", user.id, "mychats", auth.lastNotifiedUid);
                
                // Получение документа чата
                const chatDoc = await getDoc(chatDocRef);
        
                // Подготовка операций обновления
                const updates = [];
                
                if (user.type === 'chatUsers' || user.email) {
                    if (!chatDoc.exists()) {
                        const newChat = {
                            name: user.name,
                            imgSrc: user.imgSrc,
                            description: '',
                            type: 'chatUsers',
                            id: user.id
                        };
                        updates.push(dispatch('createChat', newChat));
                    }
        
                    updates.push(
                        updateDoc(chatDocRef, { body: arrayUnion(newMessage) }),
                        updateDoc(chatDocRefTwo, { body: arrayUnion(newMessage) })
                    );
                } else if (user.type === 'chat') {
                    updates.push(updateDoc(chatDocRef, { body: arrayUnion(newMessage) }));
                } else if (user.type === 'groups' || user.type === 'canals') {
                    const chatDocRefGroup = doc(db, user.type, user.id);
                    updates.push(updateDoc(chatDocRefGroup, { body: arrayUnion(newMessage) }));
                }
        
                // Выполнение всех запросов параллельно
                await Promise.all(updates);
        
            } catch (error) {
                console.error(error);
            }
        }
    },
}