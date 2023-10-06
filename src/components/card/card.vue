<template>
  <div class="card">
    <img :src="props.image" />
    <h2>{{ props.title }}</h2>
    <p>
      <b>{{ props.price.toFixed(2) }}</b>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { FoodData } from "../../interface/FoodData.vue";
import "./card.css";    

const props = defineProps<FoodData>();
</script>

<style></style>
