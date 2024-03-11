<script setup>

import { ref } from 'vue';
import { produto } from '../mock/PRODUCTS.js'

const oProduto = ref(produto)

console.log(produto.valor)



console.log(produto.valor)
</script>

<template>
  <div class="card w-96  bg-slate-200 ">
    <img :src="oProduto.img" alt="">
    
    <button class=" btn">Saiba mais</button>
  </div>
</template>

<style scoped>

</style>
