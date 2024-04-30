<script setup>
import {ref} from 'vue'
import { useStore } from '@/stores/useStore';
import CardContainer from '../components/Card.vue'
const useAddsOn = useStore()
const open = ref(false)
</script>
<template>  
<card-container>
<template #header>  
    <div>
<h1 class="text-3xl text-marineblue
 font-bold">Pick add-ons</h1>
<p class="text-lg 
text-coolgray">Adds-on help enhance
 your gaming experience.</p>
</div>
</template>
<template #content>
<div class="flex flex-col space-y-4 card">
    <div class="flex justify-between items-center border-2 rounded-lg p-4" v-for="(adds, index)
     in useAddsOn.addsOn" :key="index">            
       <input type="checkbox">
        <div>
        <h2 class="text-lg text-marineblue font-bold">{{ adds.name }}</h2>
        <h3 class="text-coolgray text-sm">{{ adds.details }}</h3>
        </div>
        <small class="text-lg text-purplishblue font-bold">{{ adds.monthly }}</small>        
    </div>
</div>
</template>
</card-container>
</template>
<style scoped>
@media screen and (min-width: 1024px){
  .card{
  width: 550px;
} 
}
</style>