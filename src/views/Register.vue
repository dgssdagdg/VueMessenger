<template>
    <div class="entry">
        <form @submit.prevent="register" class="entry-form">
            <h1 class="entry-form-title">Регестрация</h1>
            <div class="entry-form-body">
                <div class="entry-form-input">
                    <div class="entry-form-input-type">Имя</div>
                    <my-input v-model="name" placeholder="Имя"/>
                </div>
                <div class="entry-form-input">
                    <div class="entry-form-input-type">Email</div>
                    <my-input v-model="email" placeholder="Электронная почта"/>
                    <div v-if="emailError != null && emailError != ''" class="entry-form-input-error">{{ emailError }}</div>
                </div>
                <div class="entry-form-input">
                    <div class="entry-form-input-type">Пароль</div>
                    <my-input v-model="password" placeholder="Пароль"/>
                    <div v-if="passwordError != null && emailError != ''" class="entry-form-input-error">{{ passwordError }}</div>
                </div>
            </div>
            <button type="submit" class="entry-form-btn">Войти</button>
            <div @click="$router.push('/login')" class="entry-form-input-link">Авторизация</div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
        }
    },
    methods: {
        validateEmail(email) {
            const re = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
            return re.test(String(email).toLowerCase());
        },
            validatePassword(password) {
            return password.length >= 6;
        },
        async register() {
            this.emailError = null;
            this.passwordError = null;
            
            if (!this.validateEmail(this.email)) {
                this.emailError = "Введите действительный адрес электронной почты.";
                return;
            }
            if (!this.validatePassword(this.password)) {
                this.passwordError = "Пароль должен содержать не менее 6 символов.";
                return;
            }

            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            try {
                await this.$store.dispatch('register', formData);
                this.$router.push('/');
            } catch(e) {}
        },
    },
}
</script>

<style lang="scss" scoped>
</style>