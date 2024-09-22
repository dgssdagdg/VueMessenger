<template>
    <input
        :class="{'input-not-empty': modelValue.length > 0}"
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >
</template>

<script>
export default {
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
    name: 'my-input',
}
</script>

<style lang="scss" scoped>
.input {
    border: 1px solid rgb(212, 212, 221);
    border-radius: 12px;
    background: rgb(255, 255, 255);
    height: 48px;
    width: 100%;
    padding: 0 16px;
    &::placeholder {
        color: rgb(124, 128, 146);
    }
    color: rgb(25, 24, 22);
    font-size: 16px;
    font-weight: 400;
    line-height: calc(22 / 16 * 100%);
    &:focus {
        border: 1px solid rgb(124, 128, 146);
        transition: all .3s ease;
    }
}
.input-not-empty {
    color: rgb(25, 24, 22);
    border: 1px solid rgb(141, 70, 246) !important;
    transition: all .3s ease;
}
</style>