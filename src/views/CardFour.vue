<script setup>
import {ref} from 'vue'
import CardContainer from '../components/Card.vue'
</script>
<template>  
<card-container>
  <template #header>  
    <div>
<h1 class="text-3xl text-marineblue
 font-bold">Finishing up</h1>
<p class="text-lg 
text-coolgray">Double-check everything looks OK before confirming.</p>
</div>
</template>
<template #content>
<div class="flex flex-col space-y-4 bg-alabaster rounded-lg card">
    <div class="flex justify-between items-center rounded-lg p-4 border-b-2">            
        <div>
        <h2 class="text-lg text-marineblue font-bold">Arcade (Monthly)</h2>
        <h3 class="text-coolgray text-sm underline cursor-pointer">Change</h3>
        </div>
        <small class="text-sm text-black font-bold">$9/mo</small>                
    </div>
    <div class="flex justify-between items-center rounded-lg p-4">            
    <div>
        <h2 class="text-lg text-coolgray font-bold">Online service</h2>        
        </div>
        <small class="text-sm text-black font-bold">$9/mo</small>            
        </div>
        <div class="flex justify-between items-center rounded-lg p-4">            
    <div>
        <h2 class="text-lg text-coolgray font-bold">Larger storage</h2>        
        </div>
        <small class="text-sm text-black font-bold">$2/mo</small>            
        </div>
        <div class="flex justify-between items-center rounded-lg p-4 bg-white">            
    <div>
        <h2 class="text-lg text-coolgray font-bold">Total (per month)</h2>        
        </div>
        <small class="text-sm text-purplishblue font-bold">$12/mo</small>            
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