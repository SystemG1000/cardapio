<script setup lang="ts">
import { ref } from 'vue';
import CreateModal from './components/create-modal/create-modal.vue';
import { useFoodData } from './hooks/useFoodData';
import Card from './components/card/Card.vue';
import "./App.css";

const { data } = useFoodData();
const isModalOpen = ref(false)

const handleOpenModal = () => {
  isModalOpen.value = !isModalOpen.value
  console.log(isModalOpen.value)
}

</script>

<template>
  <div class="container">
    <h1>Cardápio</h1>
    <div class="card-grid">
      <Card v-for="foodData in data" :key="foodData.id" :price="foodData.price" :title="foodData.title"
        :image="foodData.image" />
      <CreateModal v-if="isModalOpen" :closeModal="handleOpenModal" />
      <button @click="handleOpenModal">Novo</button>
    </div>
  </div>
</template>

<style scoped></style>