<script setup>
    import logo from '../assets/images/logo.svg'
    import cart from '../assets/images/icon-cart.svg'
    import avatar from '../assets/images/image-avatar.png'

    import { ref } from 'vue';

    const itens = ref(0)

</script>

<template>
    <div class="border-b flex items-center justify-between">
        <div class="flex items-center">
            <img :src="logo" alt="">
    
            <nav class=" ml-16">
                <ul class=" flex gap-9 ">
                    <li>Coleção</li>
                    <li>Masculino</li>
                    <li>Feminino</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>

        <div class="flex gap-10 items-center">
            <div class="relative px-1">
                <img class=" w-8 h-8" :src="cart" alt="">
                <div v-if="itens && typeof itens == 'number'" class=" absolute bottom-7 right-0 bg-orange rounded-xl px-2 text-white text-xs">{{ itens }}</div>
            </div>
            <img class=" w-14" :src="avatar" alt="">
        </div>

    </div>
</template>

<style scoped>
    li{
        @apply list-none relative py-10 text-slate-500 cursor-pointer
    }
        li:hover{
            @apply text-black duration-500
        }
        li::after{
            @apply absolute w-0 h-6 bg-orange rounded-sm bottom-0 left-0  duration-700;    
            
            content: "  ";
        }
            li::after:hover{
                @apply w-full 
            }

    img{
        @apply cursor-pointer
    }
</style>