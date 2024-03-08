<script setup>

import { ref } from 'vue'

defineProps({
  title: String,
  text: String,
  author: String
})

</script>

<template>
  <div class="card">
    
    <h2>{{ title }}</h2>
    <p id="text">{{ text }}</p>
    
    <div class="card__end">
      <button>Saiba mais</button>
      <p id="author">by {{ author }}</p>
    </div>
    
  </div>
</template>

<style scoped>
  .card{
    background-color: rgb(236, 240, 241);
    width: 350px;
    padding: 1rem 2rem;
    border-radius: 15px;
  }
    .card__end{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
    }
    button{
      padding: 0.4rem 2rem;
      border-radius: 15px;
      background-color: rgb(39, 255, 183);
      border: 0;
      color: black;
      font-weight: bold;
      cursor: pointer;
    }
      button:hover{
        background-color: rgb(4, 216, 145);
      }

  h2{
    padding-bottom: 0.5rem;
  }

  #text{
    color: rgba(49, 45, 45, 0.87);
  }
  #author{
    font-size: 14px;
    margin: 0 1rem ;
    text-align: end;
    color: rgba(70, 69, 69, 0.658);
  }
</style>
