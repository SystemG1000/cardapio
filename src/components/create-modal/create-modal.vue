<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <h2>Cadastrar um novo item no cardápio</h2>
      <form class="input-container">
        <label for="title">Título</label>
        <input v-model="title" type="text" id="title"/>
        <label for="price">Price</label>
        <input v-model="price" type="number"/>
        <label for="image">Image</label>
        <input v-model="image" type="text" />
      </form>
      <button @click="submit" class="btn-secondary">
        {{ isLoading ? 'Enviando...' : 'Enviar' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css";

interface ModalProps {
  closeModal(): void;
}

/* interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}    */

export default {
  setup(props: ModalProps) {
    const title = ref('');
    const price = ref(0);
    const image = ref('');
    
    const { mutate, isLoading, isSuccess } = useFoodDataMutate();
    
    const submit = () => {
      const foodData: FoodData = {
        title: title.value,
        price: price.value,
        image: image.value,
      };
      mutate(foodData);
    };

    onMounted(() => {
      if (!isSuccess) {
       props.closeModal();
      }
    });

    return {
      title,
      price,
      image,
      isLoading,
      submit,
    };
  }
}
</script>

<style scoped>
/* Adicione seus estilos aqui se necessário */
</style>
