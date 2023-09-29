<script setup lang="ts">
import { useFoodData } from "./hooks/useFoodData";
import Card from "./components/card/Card.vue";

const { data } = useFoodData();
</script>

<template>
  <div class="container">
    <h1>Cardápio</h1>
    <div class="card-grid">
      <Card v-for="food in data" :key="food" :image="food" :title="food" :price="food" />
    </div>
  </div>
</template>

<style scoped></style>