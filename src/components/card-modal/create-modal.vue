<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <h2>Cadastrar um novo item no cardápio</h2>
      <form class="input-container">
        <!-- <label for="title">Título</label> -->
        <input :label="titleProps.label" :value="titleProps.value" :updateValue="titleProps.updateValue" type="text"
          id="title">
        <!--  <label for="price">Price</label> -->
        <input :label="titleProps.label" :value="titleProps.value" :updateValue="titleProps.updateValue" type="number" />
        <!-- <label for="image">Image</label> -->
        <input :label="titleProps.label" :value="titleProps.value" :updateValue="titleProps.updateValue" type="text" />
      </form>
      <button @click="submit" class="btn-secondary">
        {{ isLoading ? 'Enviando...' : 'Enviar' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';
import "./create-modal.css";

interface ModalProps {
  closeModal(): void;
}

interface InputProps {
  label: string;
  value: string | number,
  updateValue(value: any): void
}

export default {
  name: 'CreateModal',
  setup(props: ModalProps) {
    const title = ref('');
    const price = ref(0);
    const image = ref('');

    const titleProps: InputProps = {
      label: 'Title',
      value: title.value,
      updateValue: (value: any) => {
        title.value = value;
      }
    };

    const priceProps: InputProps = {
      label: 'Price',
      value: price.value,
      updateValue: (value: any) => {
        price.value = value;
      }
    };

    const imageProps: InputProps = {
      label: 'Image',
      value: image.value,
      updateValue: (value: any) => {
        image.value = value;
      }
    };

    const { mutate, isLoading, isSuccess } = useFoodDataMutate();

    const submit = () => {
      const foodData: FoodData = {
        title: title.value,
        price: price.value,
        image: image.value
      };
      mutate(foodData);
    };
    onMounted(() => {
      if (isSuccess.value) {
        props.closeModal();
      }
    });

    return {
      titleProps,
      priceProps,
      imageProps,
      submit,
      isLoading
    }
  }
}
</script>