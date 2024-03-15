<script setup>
  import { ref } from 'vue';
  import Navbar from './components/Header.vue';
  import Product from './components/Product.vue';
 
  

  import { produto } from './mock/PRODUCTS.js';

  let itens = ref(produto.onCart)

  function editCart(action, value){
    if (action == 'add'){
      itens.value += value
      return
    }

    return itens.value -= 1
  }

</script>

<template>
  <header>
    <Navbar :ownded="itens" :delet="editCart" />
  </header>
  
  <Product :addCart="editCart"/>
  
</template>

<style scoped>
  
</style>
