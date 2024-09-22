<template>
    <div v-if="show" class="dropdown-menu">
        <div
            v-for="chatDropDownItem in chatDropDownItems"
            :key="chatDropDownItem.title"
            class="dropdown-menu-item"
            @click="openForm(chatDropDownItem)"
         >
          <img :src="chatDropDownItem.imgSrc" :alt="chatDropDownItem.title">
          {{ chatDropDownItem.title }}
        </div>
    </div>
</template>

<script>

export default {
  props: {
    chatDropDownItems: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openForm(method) {
      this.$emit('myaction', method)
      this.$emit('update:show', false)
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if(!e.target.closest('.dropdown-menu') && this.show === true && !e.target.parentElementSibling) {
        this.$emit('update:show', false)
      }
    })
  },
  name: 'my-dropdown'
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
    position: absolute;
    top: 120%;
    right: -12px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    row-gap: 8px;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 0px rgba(25, 24, 22, 0.15);
    background: rgb(255, 255, 255);
}
.dropdown-menu-item {
  display: flex;
  align-items: center;
  column-gap: 16px;
  text-wrap: nowrap;
  color: rgb(25, 24, 22);
  font-size: 16px;
  font-weight: 600;
  line-height: calc(19 / 16 * 100%);
  padding: 4px 12px;
  border-radius: 5px;
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    background: rgb(212, 212, 221);
  }
}
</style>