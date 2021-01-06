<template>
  <div class="container">
    <template>
      <borrowing-supervision></borrowing-supervision>
    </template>
  </div>
</template>

<script>
  import BorrowingSupervision from "./Supervision/BorrowingSupervision";
  export default {
    name: "Index.vue",
    components: {
      BorrowingSupervision
    },
    data() {
      return {

      };
    },
    methods: {

    },
  }
</script>

<style scoped>
</style>