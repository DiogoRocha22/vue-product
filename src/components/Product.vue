<script setup>

import { ref } from 'vue';
import cart from '../assets/images/icon-cart.svg'
import { produto } from '../mock/PRODUCTS.js'

defineProps({
    addCart: Function,
  })

let discount = ref(50)
let active = ref(1)
let image = produto.img1
let counter = ref(0)

function editCounter(action){
  if(action == 'add'){
    return counter.value++
  }

  if(counter.value > 0){
    return counter.value--
  }
}

</script>

<template>
  <main class=" flex justify-around my-14">
    
    <div class="card w-96">
      
      <img :src="image" alt=" " class="rounded-xl">
      <div class=" flex justify-between mt-6">
        <img @click="active=1, image= produto.img1" class="select-image" :id="active == 1 && 'is-active'" :src="produto.img1" alt="">
        <img @click="active=2, image= produto.img2" class=" select-image" :id="active == 2 && 'is-active'" :src="produto.img2" alt="">
        <img @click="active=3, image= produto.img3" class=" select-image" :id="active == 3 && 'is-active'" :src="produto.img3" alt="">
        <img @click="active=4, image= produto.img4" class=" select-image" :id="active == 4 && 'is-active'" :src="produto.img4" alt="">
      </div>
      
    </div>

    <div class=" flex flex-col justify-center max-w-md">
      <h5 class=" text-orange font-bold">SNEAKER COMPANY</h5>
      <h1 class=" font-bold text-5xl my-5">Fall Limited Edition Snakers</h1>
      <span class=" my-5">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they´ll whitstand everything the weather can offer.
      </span>
      <div class="flex items-center">
        <span class=" text-3xl font-extrabold">${{ (produto.valor * (discount/100)).toFixed(2) }}</span>
        <span class=" bg-light-orange text-orange font-bold mx-4 px-2 my-2">{{ discount }}%</span>
      </div>
      
      <span class="text-1x1 font-bold text-slate-400 relative w-14">${{ produto.valor.toFixed(2) }}
        <div class="w-full bg-slate-400 h-0.5 absolute top-1/2"></div>
      </span>
        
      <div class="flex justify-between mt-5">
        <div class=" bg-slate-200 w-32 py-2 text-3xl rounded-lg text-orange font-extrabold flex justify-between items-center">
          <button class=" px-3 pb-1" @click="editCounter('decrease')">-</button>
          <span class="text-black text-xl">{{ counter }}</span>
          <button class="px-3 pb-1" @click="editCounter('add')">+</button>
        </div>

        <button @click=" addCart('add', counter), counter=0 " class="btn w-64 flex items-center justify-center"><img id="cart" :src="cart" alt=""> Add to cart</button>
      </div>
    </div>

  </main>
</template>

<style scoped>
  .select-image{
    @apply w-1/5 rounded-xl cursor-pointer
  }
    .select-image:hover{
      @apply opacity-80
    }


  #is-active{
    @apply opacity-70 border-orange border-4
  }

  #cart{
    filter:brightness(999);
    @apply mr-4
  }

</style>
