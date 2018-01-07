<template lang="pug">
  .admin
    .header
      App-Header
    .tabs
      Tabs
    .content
      router-view
</template>

<script>
export default {
  components: {
    Tabs: require('Tabs'),
    AppHeader: require('Header')
  }
}
</script>