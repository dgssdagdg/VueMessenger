<template>
<button type="button" class="_blue-button _notification-main1">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
._blue-button {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: calc(22 / 16 * 100%);
  border-radius: 10px;
  background: rgb(0, 132, 255);
  height: 38px;
  padding: 0 12.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease 0s;
  &:hover {
      background: rgb(3, 117, 223);
  }
}
</style>