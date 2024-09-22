import { storage } from '@/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
    data() {
        return {
            imageSrc: require('@/assets/img/setings-icons/avatar.png')
        };
    },
    methods: {
        async uploadImage(file) {
            try {
                const storageRef = ref(storage, `images/${file.name}`);
                
                // Создаем объект метаданных с заголовками кэширования
                const metadata = {
                    cacheControl: 'public, max-age=900', // Кэшировать файл на 15 минут
                    contentType: file.type, // Установка типа контента
                };
                
                // 'file' comes from the Blob or File API
                await uploadBytes(storageRef, file, metadata);
                
                // Получаем URL загруженного файла
                const fileURL = await getDownloadURL(storageRef);
                
                // Сохраняем URL для отображения
                this.imageSrc = fileURL; // Доступ к компонентному значению
            } catch (error) {
                console.log(error);
            }
        }
    }
}