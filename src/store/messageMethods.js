import { doc, deleteDoc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "@/firebase";
export default {
    state: {
        replyMessage: ''
    },
    getters: {
        infoReplyMessage: s => s.replyMessage,
    },
    mutations: {
        SetreplyMessage(state, info) {
            state.replyMessage = info
        },
    },
    actions: {
        async deleteMessage({commit, getters, dispatch}, report) {
            try {
                const chat = getters.infoFullActiveChat
                const userId = auth.lastNotifiedUid;
                if(chat.type == 'chat' || chat.type == 'chatUsers'){
                    const docRef = doc(db, "users", userId, "mychats", chat.id);
                    const docSnap = await getDoc(docRef);
                    const groupList = docSnap.data().body; 
                    await updateDoc(docRef, {
                        body: groupList.filter(item => groupList.indexOf(item) != report.id)
                    });
                }
                if(chat.type == 'groups' || chat.type == 'canals'){
                    const deleteID = getters.infoNotFilterActiveChat
                    const docRef = doc(db, "users", userId, `my${chat.type}`, chat.id);
                    await updateDoc(docRef, {
                        body: arrayUnion(deleteID.indexOf(report))
                    });
                }
            } catch (error) {
                console.log(error);
            } finally {
                dispatch('fetchActiveChat', getters.infoFullActiveChat)
            }
        },
        async deleteChatParticipants({commit, getters, dispatch}, userInfo) {
            try {
                let user = userInfo
                const myUserInfo = getters.myInfo
                const chat = getters.infoFullActiveChat

                // Происходит проверка удаляеться другой пользователь или я 
                if(!user.id) {
                    user.id = user.uid
                }

                const chatRef = doc(db, chat.type, chat.id);
                const userRef = doc(db, 'users', user.id, `my${chat.type}`, chat.id);
                const filter = chat.usersChat.filter(item => item.uid != user.id)
                await deleteDoc(userRef);

                if(chat.usersChat.length <= 1) {
                    await deleteDoc(chatRef);
                    commit('SetFullActiveChat', '')
                } else {
                    await updateDoc(chatRef, {
                        usersChat: filter
                    });
                }
                
                const myUserRef = await getDoc(doc(db, 'users', auth.currentUser.uid))
                const info = myUserRef.data()
                const message = {
                    imgSrc: info.imgSrc,
                    name: info.name,
                    text: `удалил(а) Вас из группу «${chat.name}»`,
                    date: new Date().toISOString(),
                }

                //Отправка уведомления о добавки в чат
                if(myUserInfo.uid != user.uid) {
                    await updateDoc(doc(db, 'users', user.id), {
                        notice: arrayUnion(message)
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },
        async addNewUserInChat({commit, getters, dispatch}, user) {
            try {
                //проверка есть ли uid у user
                if(!user.id){user.id = user.uid}
                
                const chat = getters.infoFullActiveChat
                const myUserInfo = getters.myInfo
                const userRef = doc(db, 'users', user.id, `my${chat.type}`, chat.id);
                const add = {uid: user.id, admin: false}
                const message = {
                    imgSrc: myUserInfo.imgSrc,
                    name: myUserInfo.name,
                    text: `добавил(а) Вас в группу «${chat.name}»`,
                    date: new Date().toISOString(),
                }
                
                await setDoc(userRef, {
                    body: []
                });
                await updateDoc(doc(db, chat.type, chat.id), {
                    usersChat: arrayUnion(add)
                });
                //Отправка уведомления о добавки в чат
                if(myUserInfo.uid != user.uid) {
                    await updateDoc(doc(db, 'users', user.id), {
                        notice: arrayUnion(message)
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },
        async clearNotice({commit, getters, dispatch}) {
            try {
                await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                    notice: []
                });
            } catch (error) {
                console.log(error);
            }
        },
        async changeMyInfoImgSrc({commit}, imgSrc) {
            try {
                await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                    imgSrc: imgSrc
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
}