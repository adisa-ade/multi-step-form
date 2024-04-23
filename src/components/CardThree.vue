<script setup>
import {ref} from 'vue'
import { useStore } from '@/stores/useStore';
const useAddsOn = useStore()
const open = ref(false)
import { useRouter } from 'vue-router';
const router = useRouter()
const previousPage = () => {
  router.push(`/select-plan`)
}
const nextPage = () => {
  router.push(``)
}
</script>
<template>  
<div class="mx-2 py-8 px-4 rounded-xl relative
  -top-28 -mt-2 md:mx-0
   md:-top-8 md:-mt-0 space-y-4 md:w-3/6 bg-white">         
<div>
<h1 class="text-3xl text-marineblue
 font-bold">Pick add-ons</h1>
<p class="text-lg 
text-coolgray">Adds-on help enhance
 your gaming experience.</p>
</div>
<div class="flex flex-col space-y-4">
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
<div class="flex justify-between relative top-32 md:top-14">
    <button class="hover:scale-110 hover:transition-all 
    hover:duration-500  text-lightgray
     border-0 p-3 
     rounded-lg md:block" @click="previousPage">Go Back</button>
    <button class="hover:scale-110 hover:transition-all
     hover:duration-500 bg-marineblue 
     text-white border-0
      p-3 rounded-lg  md:block" @click="nextPage">Next Step</button>            
    </div>          
</div>
</template>
<style scoped>
input[type=checkbox]:checked{
  background-color: red;
}
</style>