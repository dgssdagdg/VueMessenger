export default {
    methods: {
        getMinutesSinceLastSeen(infoUsers) {
            const filterUsers = infoUsers.find(item => item.id == this.infoFullActiveChat.id)
            if(filterUsers.lastSeen == null){return 'Пользователь в сети'}
            // Преобразование строки lastSeen в объект Date
            const lastSeenDate = new Date(filterUsers.lastSeen);
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
                return `Пользователь был в сети ${diffInDays} ${diffInDays === 1 ? 'день' : 'дня'} назад.`;
            } else if (diffInHours > 0) {
                return `Пользователь был в сети ${diffInHours} ${diffInHours === 1 ? 'час' : 'часа'} назад.`;
            } else {
                return `Пользователь был в сети ${diffInMinutes} ${diffInMinutes === 1 ? 'минуту' : 'минуты'} назад.`;
            }
        }
    }
}