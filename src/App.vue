<script setup lang="ts">
import { useFoodData } from "./hooks/useFoodData";
import Card from "./components/card/Card.vue";
import CreateModal from "./components/card-modal/create-modal.vue";
import { ref } from "vue";

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
      <Card v-for="food in data" :key="food" :image="food" :title="food" :price="food" />
      <CreateModal v-if="isModalOpen" :close-modal="handleOpenModal" />
      <button @click="handleOpenModal">Novo</button>
    </div>
  </div>
</template>

<style scoped></style>