<template>
    <router-view/>
</template>

<script>
export default {
    name: 'empty-layout',
}
</script>

<style lang="scss">
.entry {
    width: 100%;
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0 20px;
}
.entry-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 482px;
    width: 100%;
}
.entry-form-title {
    color: rgb(25, 24, 22);
    font-size: 45px;
    font-weight: 900;
    line-height: calc(39 / 32 * 100%);
    margin-bottom: 44px;
}
.entry-form-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 16px;
    margin-bottom: 32px;
}
.entry-form-input {
    & input {
        width: 100%;
    }
}
.entry-form-input-type {
    color: rgb(25, 24, 22);
    font-size: 16px;
    font-weight: 500;
    line-height: calc(19 / 16 * 100%);
    margin-bottom: 8px;
}
.entry-form-btn {
    width: 100%;
    height: 48px;
    border-radius: 12px;
    background: rgb(141, 70, 246);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 700;
    line-height: calc(22 / 16 * 100%);
    transition: all .3s ease;
    margin-bottom: 10px;
    &:hover {
        background-color: rgb(126, 64, 218);
    }
}
.entry-form-input-error {
    color: red;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(19 / 16 * 100%);
    margin-top: 8px;
}
.entry-form-input-link {
    color: rgb(126, 64, 218);
    display: inline-flex;
    justify-content: right;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(19 / 16 * 100%);
    transition: all .3s ease;
    cursor: pointer;
    &:hover {
        color:#6f38c2;
    }
}
</style>