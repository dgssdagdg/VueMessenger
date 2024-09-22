import { auth, db } from "@/firebase";
import {collection, getDocs, doc, getDoc, onSnapshot  } from "firebase/firestore";
export default {
    state: {
        users: [],
        notice: [],
        myChats: [],
        groups: [],
        canals: [],
        notFilterCanals: [],
        infoWindow: '',
        activeChat: [],
        fullActiveChat: '',
        searchQuery: '',
        replyMessageUser: '',
        notFilterActiveChat: [],
        myInfo: ''
    },
    getters: {
        infoUsers: s => s.users,
        infoNotice: s => s.notice,
        infoMyChats: s => s.myChats,
        infoWindow: s => s.infoWindow,
        infoActiveChat: s => s.activeChat,
        infoFullActiveChat: s => s.fullActiveChat,
        infoSearchQuery: s => s.searchQuery,
        infoGroups: s => s.groups,
        infoCanals: s => s.canals,
        infoNotFilterCanals: s => s.notFilterCanals,
        infoReplyMessageUser: s => s.replyMessageUser,
        infoNotFilterActiveChat: s => s.notFilterActiveChat,
        myInfo: s => s.myInfo,
        sortedAndSearchedPosts(state) {
            return [...state.notFilterCanals, ...state.users].filter(post => post.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
    },
    mutations: {
        SetMyInfo(state, info) {
            state.myInfo = info
        },
        SetUsers(state, info) {
            state.users = info
        },
        SetNotice(state, info) {
            state.notice = info
        },
        SetMyChats(state, info) {
            state.myChats = info
        },
        SetInfoWindow(state, info) {
            state.infoWindow = info
        },
        SetActiveChat(state, info) {
            state.activeChat = info
        },
        SetFullActiveChat(state, info) {
            state.fullActiveChat = info
        },
        SetSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        SetGroups(state, info) {
            state.groups = info
        },
        SetCanals(state, info) {
            state.canals = info
        },
        SetNotFilterCanals(state, info) {
            state.notFilterCanals = info
        },
        SetReplyMessageUser(state, info) {
            state.replyMessageUser = info
        },
        SetNotFilterActiveChat(state, info) {
            state.notFilterActiveChat = info
        },
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                // Получаем ссылку на коллекцию пользователей
                const usersCollection = collection(db, 'users');
        
                // Устанавливаем слушатель на изменения в коллекции пользователей
                onSnapshot(usersCollection, (snapshot) => {
                    // Преобразуем полученные документы в массив объектов пользователей
                    const userList = snapshot.docs.map(doc => ({
                        id: doc.id,  // ID документа
                        ...doc.data()  // Остальные данные пользователя
                    }));
        
                    // Фильтруем пользователей, исключая текущего пользователя
                    let filteredUserList = []
                    if(auth.currentUser){
                        filteredUserList = userList.filter(user => user.id !== auth.currentUser.uid);
                    }
                    // Сохраняем отфильтрованный список пользователей в состояние
                    commit('SetUsers', filteredUserList);
                }, (error) => {
                    // Обработка ошибок при получении данных
                    console.error('Ошибка при получении пользователей:', error);
                });
            } catch (error) {
                // Обработка ошибок на уровне кода
                console.error('Ошибка в fetchUsers:', error);
            }

        },
        async fetchUsersNotice({ commit }) {
            try {
                // Получаем ссылку на документ текущего пользователя
                const docRef = doc(db, "users", auth.lastNotifiedUid);
        
                // Устанавливаем слушатель на изменения в документе
                onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        // Если документ существует, получаем данные уведомлений
                        const noticeData = docSnap.data().notice;
                        commit('SetNotice', noticeData);
                    } else {
                        console.log("Документ не существует!");
                    }
                }, (error) => {
                    // Обработка ошибок при получении данных
                    console.error("Ошибка при получении уведомлений: ", error);
                });
            } catch (error) {
                // Обработка ошибок на уровне кода
                console.error("Ошибка в fetchUsersNotice: ", error);
            }
        },
        async fetchMyChats({ commit }) {
            try {
                // Получаем ссылку на коллекцию "mychats" текущего пользователя
                const chatsCollectionRef = collection(db, "users", auth.lastNotifiedUid, "mychats");
        
                // Устанавливаем слушатель на изменения в коллекции чатов
                onSnapshot(chatsCollectionRef, (snapshot) => {
                    // Преобразуем полученные документы в массив объектов чатов
                    const chatsList = snapshot.docs.map(doc => ({
                        id: doc.id,  // ID документа
                        ...doc.data() // Остальные данные чата
                    }));
        
                    // Обновляем состояние Vuex с новым списком чатов
                    commit('SetMyChats', chatsList);
                }, (error) => {
                    // Обработка ошибок при получении данных
                    console.error("Ошибка при получении чатов: ", error);
                });
            } catch (error) {
                // Обработка ошибок на уровне кода
                console.error("Ошибка в fetchMyChats: ", error);
            }
        },
        async fetchMyGroups({ commit }) {
            try {
                // Получаем ссылки на коллекции групп пользователя и всех групп
                const myGroupsRef = collection(db, "users", auth.lastNotifiedUid, "mygroups");
                const groupsRef = collection(db, "groups");
        
                // Устанавливаем слушатель на коллекцию групп пользователя
                onSnapshot(myGroupsRef, (myGroupsSnapshot) => {
                    // Преобразуем полученные документы в массив объектов групп пользователя
                    const myGroupsList = myGroupsSnapshot.docs.map(doc => ({
                        id: doc.id,          // ID группы
                        ...doc.data()       // Остальные данные группы
                    }));
        
                    // Устанавливаем слушатель на коллекцию всех групп
                    onSnapshot(groupsRef, (groupsSnapshot) => {
                        // Преобразуем полученные документы в массив объектов всех групп
                        const allGroupsList = groupsSnapshot.docs.map(doc => ({
                            id: doc.id,          // ID группы
                            ...doc.data()       // Остальные данные группы
                        }));
        
                        // Фильтруем группы, чтобы получить только те, которые есть у пользователя
                        const groupArray = allGroupsList.filter(group =>
                            myGroupsList.some(myGroup => group.id === myGroup.id)
                        );
        
                        // Обновляем состояние Vuex с новыми группами
                        commit('SetGroups', groupArray);
                    }, (error) => {
                        // Обработка ошибок при получении всех групп
                        console.error("Ошибка при получении всех групп: ", error);
                    });
                }, (error) => {
                    // Обработка ошибок при получении групп пользователя
                    console.error("Ошибка при получении групп пользователя: ", error);
                });
            } catch (error) {
                // Обработка ошибок на уровне кода
                console.error("Ошибка в fetchMyGroups: ", error);
            }
        },
        async fetchMyCanals({ commit }) {
            try {
                // Создаем ссылки на коллекции
                const myCanalsRef = collection(db, "users", auth.lastNotifiedUid, "mycanals");
                const canalsRef = collection(db, "canals");
        
                // Слушатель для коллекции mycanals
                onSnapshot(myCanalsRef, (myCanalsSnapshot) => {
                    // Получаем список пользовательских каналов
                    const myCanalsList = myCanalsSnapshot.docs.map(doc => ({
                        id: doc.id, 
                        ...doc.data()
                    }));
        
                    // Слушатель для коллекции canals
                    onSnapshot(canalsRef, (canalsSnapshot) => {
                        // Получаем список всех каналов
                        const allCanalsList = canalsSnapshot.docs.map(doc => ({
                            id: doc.id, 
                            ...doc.data()
                        }));
        
                        // Фильтруем каналы, оставляя только те, которые есть у пользователя
                        const groupArray = allCanalsList.filter(canal => 
                            myCanalsList.some(myCanal => canal.id === myCanal.id)
                        );
        
                        // Обновляем состояние Vuex с отфильтрованными каналами
                        commit('SetNotFilterCanals', allCanalsList);
                        commit('SetCanals', groupArray);
                    }, (error) => {
                        // Обработка ошибок при получении всех каналов
                        console.error("Ошибка при получении всех каналов:", error);
                    });
                }, (error) => {
                    // Обработка ошибок при получении пользовательских каналов
                    console.error("Ошибка при получении каналов пользователя:", error);
                });
            } catch (error) {
                // Обработка ошибок на уровне кода
                console.error("Ошибка в fetchMyCanals:", error);
            }
        },
        async fetchActiveChat({commit, getters}, user) {
            try {
                if (user.type === 'groups' || user.type === 'canals') {
                    // Создаем ссылку на коллекцию групп или каналов
                    const docRef = collection(db, user.type);
        
                    // Устанавливаем слушатель для актуальных чатов
                    onSnapshot(docRef, async (snapshot) => {
                        const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
                        // Проверяем наличие нужного чата
                        if (!userList.find(chat => chat.id === user.id)) {
                            commit('SetActiveChat', []);
                            commit('SetNotFilterActiveChat', []);
                            commit('SetFullActiveChat', getters.infoWindow);
                            commit('SetShowChatSetting', false)
                            return;
                        }
        
                        // Находим нужный нам чат
                        const chats = userList.find(chat => chat.id === user.id);
                        const addIdToObjects = chats.body.map((obj, index) => ({ ...obj, id: index }));
        
                        // Получаем удаленные сообщения для фильтрации
                        const docSnapDeleteReports = await getDoc(doc(db, 'users', auth.lastNotifiedUid, `my${user.type}`, user.id));
                        let body = [];
                        
                        if(docSnapDeleteReports.exists()) {
                            body = docSnapDeleteReports.data().body
                            // Фильтруем массив, удаляя сообщения, которые были удалены
                            const addIdToObjectsFilter = addIdToObjects.filter(item => !body.includes(item.id));
            
                            // Обновляем состояние Vuex с отфильтрованными и оригинальными сообщениями
                            commit('SetActiveChat', addIdToObjectsFilter);
                            commit('SetNotFilterActiveChat', addIdToObjects);
                            commit('SetFullActiveChat', chats);
                            return
                        } else {
                            commit('SetActiveChat', []);
                            commit('SetNotFilterActiveChat', []);
                            commit('SetFullActiveChat', getters.infoWindow);
                            commit('SetShowChatSetting', false)
                            return
                        }
        

                    });
                } else {
                    // Для обычных чатов
                    const docRef = collection(db, 'users', auth.lastNotifiedUid, 'mychats');
        
                    // Устанавливаем слушатель на коллекцию mychats
                    onSnapshot(docRef, async (snapshot) => {
                        const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
                        // Проверяем наличие нужного чата
                        if (!userList.find(chat => chat.id === user.id)) {
                            commit('SetActiveChat', []);
                            commit('SetFullActiveChat', getters.infoWindow);
                            return;
                        }
        
                        // Находим нужный нам чат
                        const chats = userList.find(chat => chat.id === user.id);
                        const addIdToObjects = chats.body.map((obj, index) => ({ ...obj, id: index }));
        
                        // Обновляем состояние Vuex с сообщениями чата
                        commit('SetActiveChat', addIdToObjects);
                        commit('SetFullActiveChat', chats);
                    });
                }
            } catch (error) {
                console.error("Ошибка при получении активного чата:", error);
            } finally {
                commit('SetShowChatSetting', false)
            }
        },
        async fetchReplyMessageUser({commit}, user) {
            const usersRef = collection(db, "users");
            // Устанавливаем слушатель на коллекцию пользователей
            onSnapshot(usersRef, (snapshot) => {
                // Получаем список пользователей
                const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
                // Находим конкретного пользователя по его ID (user.auth)
                const chat = userList.find(chat => chat.id === user.auth);
    
                // Обновляем состояние Vuex с данными о пользователе
                commit('SetReplyMessageUser', chat);
            }, (error) => {
                // Обработка ошибок при получении пользователей
                console.error("Ошибка при получении пользователей:", error);
            });
        },
        async fetchMyInfo({commit}) {
            try {
                const usersRef = doc(db, "users", auth.currentUser.uid);
                onSnapshot(usersRef, (snapshot) => {
                    const userList = snapshot.data()
                    if(auth.currentUser){
                        userList.uid = auth.currentUser.uid
                    }
                    commit('SetMyInfo', userList);
                }, (error) => {
                    console.error("Ошибка при получении пользователей:", error);
                });
            } catch (error) {
                console.log(error);
            }
        }
    },
}