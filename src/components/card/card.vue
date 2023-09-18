<template>
  <div class="card">
    <img :src="image" />
    <h2>{{ title }}</h2>
    <p><b>Valor:</b>{{ price }}</p>
  </div>
</template>

<script lang="ts">
import './card.css'

export default {
  props: {
    price: Number,
    title: String,
    image: String
  }
}
</script>

<style></style>