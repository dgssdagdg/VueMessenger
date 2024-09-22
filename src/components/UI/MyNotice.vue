<template>
<div class="notifications-item">
    <div class="notifications-avatar">
        <img v-lazy="notice.imgSrc ? notice.imgSrc : require('@/assets/img/avatar.jpeg')" :alt="notice.name">
        <!-- <div class="notifications-status _my-status"></div> -->
         {{ getMinutesSinceLastSeen(infoUsers) }}
    </div>
    <div class="notifications-block">
        <div class="notifications-box">
            <span class="notifications-name">{{ notice.name }}</span>
            <span class="notifications-text">{{ notice.text }}</span>
        </div>
        <div class="notifications-date">{{ notice.date }}</div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        infoFullActiveChat() {
            return this.$store.getters.infoFullActiveChat
        },
        infoUsers() {
            return this.$store.getters.infoUsers
        },
    },
    methods: {
        getMinutesSinceLastSeen(infoUsers) {
            const lastSeenDate = new Date(infoUsers.date);
            // Получение текущего времени
            const now = new Date();

            // Вычисление разницы в миллисекундах
            const diffInMs = now - lastSeenDate;
            
            // Преобразование миллисекунд в секунды
            const diffInSeconds = Math.floor(diffInMs / 1000);
            
            // Вычисление разницы в днях, часах и минутах
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            const diffInHours = Math.floor(diffInMinutes / 60);
            const diffInDays = Math.floor(diffInHours / 24);

            // Формирование строки результата
            if (diffInDays > 0) {
                return `${diffInDays} ${diffInDays === 1 ? 'день' : 'дня'} назад.`;
            } else if (diffInHours > 0) {
                return `${diffInHours} ${diffInHours === 1 ? 'час' : 'часа'} назад.`;
            } else {
                return `${diffInMinutes} ${diffInMinutes === 1 ? 'минуту' : 'минуты'} назад.`;
            }
        }
    },
    props: {
        notice: {
            type: Object,
            required: true
        }
    },
    name: 'my-notice'
}
</script>

<style lang="scss" scoped>
.notifications-item {
    display: flex;
    column-gap: 16px;
}
.notifications-avatar {
    position: relative;
    min-width: 48px;
    max-width: 48px;
    height: 48px;
    & img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.notifications-status {
    bottom: 5px;
    right: 0px;
}
.notifications-block {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}
.notifications-box {
    display: inline;
}
.notifications-name {
    color: rgb(25, 24, 22);
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    margin-right: 3px;
}
.notifications-text {
    color: rgb(25, 24, 22);
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
}
.notifications-date {
    color: rgba(25, 24, 22, 0.5);
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
}
</style>