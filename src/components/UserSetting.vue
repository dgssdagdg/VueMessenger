<template>
    <div class="_pop-up-white user-setting">
        <div class="user-setting-content">
            <div @click="$store.commit('SetShowUserSetting', false)" class="user-setting-top">
                <div style="font-size: 16px;" class="user-setting-close icon-arrows"></div>
                <div class="user-setting-title _titles"> Настройки акаунта</div>
            </div>
            <div class="user-setting-body">
                <div class="user-setting-body-content">
                    <div class="user-setting-avatar">
                        <img v-lazy="myInfo.imgSrc ? myInfo.imgSrc : require('@/assets/img/setings-icons/avatar.png')" alt="Avatar">
                        <input @change="onFileChange" type="file" accept="image/*">
                    </div>
                    <div class="user-setting-info">
                        <div class="user-setting-info-type _btns-tabs-names_in_msgs">Имя</div>
                        <div class="user-setting-info-title _btns-tabs-names_in_msgs">{{ myInfo.name }}</div>
                    </div>
                    <div class="user-setting-info">
                        <div class="user-setting-info-type _btns-tabs-names_in_msgs">Email</div>
                        <div class="user-setting-info-title _btns-tabs-names_in_msgs">{{ myInfo.email }}</div>
                    </div>
                </div>
                <button @click="$store.dispatch('logout')" style="background-color: red;" type="submit" class="_violet-button">
                    <img src="@/assets/img/setings-icons/arrow.png" alt="#">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import uploadImageMixin from '@/mixins/uploadImageMixin';
export default {
data() {
    return {
        imageSrc: require('@/assets/img/setings-icons/avatar.png')
    }
},
computed: {
    myInfo() {
        return this.$store.getters.myInfo
    }
},
mixins: [uploadImageMixin],
methods: {
    async onFileChange(event) {
        const file = event.target.files[0]; // Получаем первый загруженный файл
        if (file) {
            await this.uploadImage(file);
            this.$store.dispatch('changeMyInfoImgSrc', this.imageSrc)
            event.target.value=''
        }
    },
}
}
</script>

<style lang="scss" scoped>
.user-setting {
}
.user-setting-content {
}
.user-setting-top {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 20px;
    & img {
        transform: rotate(-180deg);
    }
}
.user-setting-close {
}
.user-setting-title {
}
.user-setting-content{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.user-setting-body {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    
}
.user-setting-body-content {
    flex-grow: 1;
}
.user-setting-avatar {
}
.user-setting-info {
    text-align: center;
}
.user-setting-info-type {
}
.user-setting-info-title {
    color: #000;
}
.user-setting-avatar {
    margin-bottom: 28px;
    width: 120px;
    height: 120px;
    position: relative;
    & img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    & input {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        opacity: 0;
    }
}
</style>