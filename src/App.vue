<script setup>
  import { watch, ref } from 'vue';
import Navbar from './components/Header.vue';
  import Product from './components/Product.vue';

  import { produto } from './mock/PRODUCTS.js'

  let itens = ref(produto.onCart)

  function editCart(action, value){
    if (action == 'add'){
      itens.value += value
      return
    }

    return itens.value --
  }

</script>

<template>
  <header>
    <Navbar :ownded="itens" />
  </header>
  
  <Product :addCart="editCart"/>
  
</template>

<style scoped>
  
</style>
