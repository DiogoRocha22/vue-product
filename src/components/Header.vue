<script setup>
    import logo from '../assets/images/logo.svg'
    import cart from '../assets/images/icon-cart.svg'
    import avatar from '../assets/images/image-avatar.png'
import CartView from './CartView.vue';
import { ref, watch } from 'vue';
import { walk } from 'vue/compiler-sfc';

    const props =  defineProps({
        ownded: Number,
        delet: Function
    })

    let setDisplay = ref(false)
    
    let cartDisplay = ref('invisible')
    
    watch(setDisplay, () => {
        if(setDisplay.value == true){
            cartDisplay.value = 'flex'
        }else{
            cartDisplay.value = 'invisible'
        }
    })

</script>

<template>
    <div class="border-b flex items-center justify-between relative">
        <div class="flex items-center">
            <img :src="logo" alt="">
    
            <nav class=" ml-16">
                <ul class=" flex gap-9 ">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>

        <div class="flex gap-10 items-center">
            <div class="relative px-1 flex justify-center">
                <img @click="setDisplay = !setDisplay" class=" w-8 h-8" :src="cart" alt="">
                <div v-if="ownded && typeof ownded == 'number'" class=" absolute bottom-7 right-0 bg-orange rounded-xl px-2 text-white text-xs">{{ props.ownded }}</div>
                <CartView class="absolute top-14" :class="cartDisplay" :empty="props.ownded" :delet="props.delet"/>
            </div>
            <img id="avatar" class=" w-14" :src="avatar" alt="">
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
    #avatar:hover{
        @apply border-orange rounded-full border-4
    }
</style>