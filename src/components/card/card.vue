<template>
  <div class="card">
    <img :src="image" />
    <h2>{{ title }}</h2>
    <p><b>{{ price }}</b></p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    image: String,
    title: String,
    price: Number,
  },
};
</script>

<style></style>