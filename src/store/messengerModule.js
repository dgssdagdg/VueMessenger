export default {
    state: {
        showNotification: false,
        showPopUp: '',
        showChatSetting: false,
        showAddUserInChat: false,
        showUserSetting: false,
    },
    getters: {
        infoShowPopUp: s => s.showPopUp,
        infoShowChatSetting: s => s.showChatSetting,
        infoShowAddUserInChat: s => s.showAddUserInChat,
        infoShowUserSetting: s => s.showUserSetting,
    },
    mutations: {
        showNotification(state, type) {
            state.showNotification = type
        },
        showPopUp(state, info) {
            state.showPopUp = info
        },
        SetShowChatSetting(state, info) {
            state.showChatSetting = info
        },
        setShowAddUserInChat(state, info) {
            state.showAddUserInChat = info
        },
        SetShowUserSetting(state, info) {
            state.showUserSetting = info
        },
    },
    actions: {
    },
}