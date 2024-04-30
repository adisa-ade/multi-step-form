<script setup>
import { useStore } from '@/stores/useStore';
import CardContainer from '../components/Card.vue'
const store = useStore()
import {ref} from 'vue'
const open = ref(false)
</script>
<template>  
<card-container>
<template #header>
<div>
<h1 class="text-3xl text-marineblue font-bold">Select your plan</h1>
<p class="text-lg text-coolgray">You have the
   option of monthly or yearly billing.</p>
</div>
</template>
<template #content>
<div class="flex flex-col space-y-4
 md:flex-row md:space-y-0 md:space-x-4">     
    <div class="flex md:w-40 md:flex-col
     items-center md:items-start border-2
      space-x-6 md:space-x-0 p-4
       rounded-xl md:space-y-10
        cursor-pointer" v-for="(plan, index)
         in store.plans" :key="index" @click="">                 
    <div>      
      <img :src="plan.image" alt=""  class="w-18">                
      <img :src="plan.image" alt="">      
      <img src="../images/icon-pro.svg" alt=""  class="w-18"/>                
    </div>
    <div>
        <h2 class="text-marineblue 
        font-bold text-xl">{{ plan.name}}</h2>
        <small class="text-lightgray 
        font-bold text-lg">{{ !open ? plan.monthly:
         plan.yearly }}</small>
    </div>
    </div>
</div>
<div class="flex items-center bg-alabaster rounded-md
  mx-2 justify-evenly mt-4">
    <h4 class="text-lg font-bold text-lightgray"
     :class="[{active : !open}]" >Monthly</h4>    
    <v-switch 
      v-model="open"      
      color="hsl(213, 96%, 18%)"            
      hide-details
    />    
  <h4 class="yearly text-lg
   font-bold text-lightgray" :class="[{active : open}]">Yearly</h4>
</div>
</template>

  </card-container>
</template>
<style scoped>
.active{
  color: hsl(213, 96%, 18%);
  transition: 0.8s ease-in;
}
.inactive{
  color: hsl(229, 24%, 87%);
  transition: 0.8s ease-in;
}
.borderclr{
  border-color:'hsl(243, 100%, 62%)' ;
}
</style>