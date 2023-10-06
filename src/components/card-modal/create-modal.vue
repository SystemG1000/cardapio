<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <h2>Cadastrar um novo item no cardápio</h2>
      <form class="input-container">
        <label>Título</label>
        <input
          type="text"
          v-model="title"
          placeholder="Título do item"
          id="title"
        />
        <label>Preço</label>
        <input
          type="number"
          v-model="price"
          placeholder="Preço do item"
          id="title"
        />
        <label>Imagem</label>
        <input
          type="text"
          v-model="image"
          placeholder="URL do item"
          id="title"
        />
      </form>
      <button @click="submit" class="btn-secondary">
        {{ isLoading ? "Enviando..." : "Enviar" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData.vue";
import "./create-modal.css";

interface ModalProps {
  closeModal(): void;
}


const title = ref("");
const price = ref(0);
const image = ref("");
const { mutate, isSuccess, isLoading } = useFoodDataMutate();

const submit = () => {
  const foodData: FoodData = {
    title: title.value,
    price: price.value,
    image: image.value,
  };
  console.log(foodData);
  console.log(mutate(foodData))
  mutate(foodData);
};

const props = defineProps<ModalProps>();  
watch(isSuccess, (newValue, oldValue) => {
    console.log(oldValue);
    if (newValue) {
      props.closeModal();
    }
});

</script>
