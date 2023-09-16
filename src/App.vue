<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { FoodData } from "./interface/FoodData.ts";
import { Card } from './components/card/card.vue';

const data: FoodData[] = [];

</script>

<template>
  <div class="container">
    <h1>Cardápio</h1>
    <div class="card-grid">
      {{ data.map(foodData =>
        <Card price={ foodData.price } title = { foodData.title } image = { foodData.image } /> ) }}
    </div>
  </div>
  <!--<HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped></style>


