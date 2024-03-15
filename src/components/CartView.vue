<script setup>
    import { produto } from '../mock/PRODUCTS';
    import iconDelete from '../assets/images/icon-delete.svg'

    defineProps({
        empty: Number,
        delet: Function
    })

</script>

<template>
    <aside class="bg-white w-85 h-52 flex flex-col px-5 pt-1 shadow-slate-400 shadow-2xl rounded-lg">
        <header class=" border-gray-200 border-b-2 py-2 w-full">
            <span class=" font-bold">Cart</span>
        </header>
        
        <main v-if="!empty" class="flex h-full justify-center items-center">
            <span class=" text-center font-bold text-slate-500">Your cart is empty.</span>
            
        </main>
        <main v-else class="">
            <div class="flex items-center justify-between mt-4">
                <img class=" w-16 rounded-lg" :src="produto.img1" alt="">
                <div class="flex flex-col ">
                    <span>{{ produto.name }}</span>
                    <span>${{ produto.newValor.toFixed(2) }} x {{ empty }} = <span class=" font-bold">${{  (produto.newValor * empty).toFixed(2) }}</span> </span>
                </div>
                <img @click="delet('delete')" class=" cursor-pointer" :src="iconDelete" alt="">
            </div>

            <button class="btn mt-4 w-full">Checkout</button>
        </main>

        
    </aside>
</template>

<style scoped>

</style>