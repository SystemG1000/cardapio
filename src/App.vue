<script setup lang="ts">
import { useFoodData } from './hooks/useFoodData';
import Card from './components/card/Card.vue';

const { data } = useFoodData();

</script>

<template>
  <div class="container">
    <h1>Cardápio</h1>
    <div class="card-grid">
      <Card v-for="foodData in data" :key="foodData.id" :price="foodData.price" :title="foodData.title"
        :image="foodData.image" />
    </div>
  </div>
</template>

<style scoped></style>