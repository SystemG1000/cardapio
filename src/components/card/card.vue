<template>
  <div class="card">
    <img v-bind:src="$props.image" />
    <h2>{{ $props.title }}</h2>
    <p><b>Valor:</b>{{ $props.price }}</p>
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