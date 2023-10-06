<script setup lang="ts">
import { useFoodData } from "./hooks/useFoodData";
import Card from "./components/card/Card.vue";
import CreateModal from "./components/card-modal/create-modal.vue";
import { ref } from "vue";
import "./App.css"

const { data } = useFoodData();
const isModalOpen = ref(false);

const handleOpenModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="container">
    <h1>Cardápio</h1>
    <div class="card-grid">
      <Card v-for="food in data" :key="food.id" :image="food.image" :title="food.title" :price="food.price" />
      <CreateModal v-if="isModalOpen"  :closeModal="handleOpenModal"/>
      <button @click="handleOpenModal">Novo</button>
    </div>
  </div>
</template>
