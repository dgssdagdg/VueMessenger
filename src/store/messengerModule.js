export default {
    state: {
        showNotification: false,
        showPopUp: '',
        showChatSetting: false,
        showAddUserInChat: false,
        showUserSetting: false,
        saitMode: false,
    },
    getters: {
        infoShowPopUp: s => s.showPopUp,
        infoShowChatSetting: s => s.showChatSetting,
        infoShowAddUserInChat: s => s.showAddUserInChat,
        infoShowUserSetting: s => s.showUserSetting,
        infoSaitMode: s => s.saitMode,
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
        SetSaitMode(state, info) {
            state.saitMode = info
        },
    },
    actions: {
    },
}