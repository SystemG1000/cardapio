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
    price: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>