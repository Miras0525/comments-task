<template>
  <div id="app">
    <comment-list/>
  </div>
</template>

<script>
import CommentList from './components/CommentList.vue'

export default {
  name: 'Home',
  components: {
    CommentList
  }
}
</script>
