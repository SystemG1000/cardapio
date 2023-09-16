<template>
  <div class="card">
    <img :src="image" />
    <h2>{{ title }}</h2>
    <p><b>Valor:</b>{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    title: String,
    image: String
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0;
}

.card img {
  border-radius: 8px 8px 0 0;
  width: 250px;
  height: 200px;
}
</style>
