<template lang="pug">
  button(
    type="button",
    @click.prevent="handleClick"
    :disabled="disabled"
  ) {{title}}
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Отправить'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>