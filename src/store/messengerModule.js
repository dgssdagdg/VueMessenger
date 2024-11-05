export default {
    state: {
        showNotification: false,
        showPopUp: '',
        showChatSetting: false,
        showAddUserInChat: false,
        showUserSetting: false,
        saitMode: false,
        chatSearch: '',
        showChatSearch: false,
        chatSearchIdScroll: undefined,
    },
    getters: {
        infoShowPopUp: s => s.showPopUp,
        infoShowChatSetting: s => s.showChatSetting,
        infoShowAddUserInChat: s => s.showAddUserInChat,
        infoShowUserSetting: s => s.showUserSetting,
        infoSaitMode: s => s.saitMode,
        chatSearchFilter: (state) => (activeChat) => {
            return [...activeChat].filter(i => {
                return i.title != undefined ? i.title.toUpperCase().includes(state.chatSearch.toUpperCase()) : false
            });
        }
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
        SetChatSearch(state, chatSearch) {
            state.chatSearch = chatSearch
        },
        SetShowChatSearch(state, info) {
            state.showChatSearch = info
        },
        SetChatSearchIdScroll(state, info) {
            state.chatSearchIdScroll = info
        },
    },
    actions: {
    },
}