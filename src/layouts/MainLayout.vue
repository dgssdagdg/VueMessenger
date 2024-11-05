<template>
    <router-view/>
</template>

<script>
import { auth } from '@/firebase';
export default {
    name: 'main-layout',
    async mounted() {
        // Наблюдение за изменением состояния аутентификации
        auth.onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('setUserOnlineStatus', true)
                window.addEventListener('beforeunload', () => {
                    this.$store.dispatch('setUserOnlineStatus', false) // Устанавливаем статус в "offline" перед уходом
                });
            }
        });


        try {
            // Создание массива функций для загрузки данных
            const fetchActions = [
                'fetchUsers',
                'fetchUsersNotice',
                'fetchMyChats',
                'fetchMyGroups',
                'fetchMyCanals',
                'fetchMyInfo',
            ];

            // Диспетчинг всех действий параллельно
            await Promise.all(fetchActions.map(action => this.$store.dispatch(action)));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
</script>

<style scoped>
</style>