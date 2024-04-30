<script setup>
import Nav from '../components/Nav.vue'
import CardOne from '@/views/CardOne.vue';
import CardTwo from '@/views/CardTwo.vue';
import CardThree from '@/views/CardThree.vue';
import CardFour from '@/views/CardFour.vue';
import CardFive from '@/views/CardFive.vue';

const {nextPage} =  defineProps(['nextPage'])
import { ref } from 'vue';
let step = ref(1)
</script>
<template>
  <main class="md:flex md:justify-around md:items-center md:mx-auto md:my-16 md:rounded-xl md:py-8 md:bg-white lg:w-3/4">
    <Nav :step="step"/>
    <div>      
    <CardOne v-if="step === 1"/>        
    <CardTwo v-if="step === 2"/>
    <CardThree v-if="step === 3"/>
    <CardFour v-if="step === 4"/>
    <CardFive v-if="step === 5"/>
    <div class="flex justify-between">      
    <button class="hover:scale-110 
    hover:transition-all hover:duration-500
  text-lightgray border-0 
    p-3 rounded-lg md:block"
    v-if="step >1  && step < 5" @click="step--">
    Go Back</button>
    <button class="hover:scale-110 
    hover:transition-all hover:duration-500
  text-lightgray border-0 
    p-3 rounded-lg md:block invisible"
    v-if="step >0  && step < 5" @click="step--">
    Go Back</button>
    <button class="hover:scale-110 hover:transition-all
     hover:duration-500 bg-marineblue 
   text-white border-0 p-3 rounded-lg  
     md:block float-right" v-if="step <= 3" @click="step++">
     Next Step</button>            

     <button class="hover:scale-110 hover:transition-all
     hover:duration-500 bg-purplishblue text-white border-0 p-3 rounded-lg  
     md:block" v-if="step === 4" @click="step++">
     Confirm</button>                 

    </div>          
    </div>
  </main>
</template>
