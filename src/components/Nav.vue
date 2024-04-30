<script setup>
const {step} = defineProps(['step'])
</script>
<template>
<div class="bg-img">
      <div class="mobile-img">                        
        <img src="../images/bg-sidebar-mobile.svg" alt="mobile-bg" class='w-full md:hidden'>       
      <div class="active-page-number flex justify-center space-x-3 relative -top-36 md:hidden">
      <h4 class="rounded-full border-2 py-2 px-4 text-2xl   font-bold" :class="[step === 1 ? 'active' : 'inactive']">1</h4>
      <h4 class="rounded-full border-2 py-2 px-4 text-2xl  font-bold" :class="[step === 2 ? 'active' : 'inactive']">2</h4>
      <h4 class="rounded-full border-2 py-2 px-4 text-2xl  font-bold" :class="[step === 3 ? 'active' : 'inactive']">3</h4>
      <h4 class="rounded-full border-2 py-2 px-4 text-2xl  font-bold" :class="[step === 4 ? 'active' : 'inactive']">4</h4>
      </div>
      </div>
      <div class="desktop-img relative">        
        <img src="../images/bg-sidebar-desktop.svg" alt="desktop-bg" class="hidden md:block">
      <div class="hidden space-y-6 absolute top-12 mt-2 ml-8 md:flex md:flex-col">
      <div class="flex items-center space-x-6">
        <div >
          <h4 class="rounded-full text-center border-2  w-10 h-10 text-2xl  font-bold" :class="[step === 1 ? 'active' : 'inactive']">1</h4>
        </div>        
        <div>
          <h2 class="text-pastelblue">Step 1</h2>
          <h2 class="text-white font-bold">YOUR INFO</h2>            
        </div>
      </div>
      <div class="flex  items-center space-x-6">
        <div>
          <h4 class="border-2 text-center rounded-full  w-10 h-10 text-2xl  font-bold" :class="[step === 2 ? 'active' : 'inactive']">2</h4>
        </div>
        <div>
          <h2 class="text-pastelblue">Step 2</h2>
          <h2 class="text-white font-bold">SELECT PLAN</h2>
        </div>
      </div>
      <div class="flex  items-center space-x-6">
        <h4 class="rounded-full text-center border-2  w-10 h-10 text-2xl font-bold" :class="[step === 3 ? 'active' : 'inactive']">3</h4>
        <div>
          <h2 class="text-pastelblue">Step 3</h2>
          <h2 class="text-white font-bold">ADDS-ON</h2>
        </div>
      </div>
      <div class="flex  items-center space-x-6">
        <h4 class="rounded-full text-center border-2  w-10 h-10 text-2xl font-bold" :class="[step === 4 ? 'active' : 'inactive']">4</h4>
        <div>
          <h2 class="text-pastelblue">Step 4</h2>
          <h2 class="text-white font-bold">SUMMARY</h2>
        </div>
      </div>    
      </div>

    </div>      
    </div>
    </template>
<style scoped>
  .active{
    background-color: hsl(206, 94%, 87%);
    transition: 0.5s ease-in;
    color: black;
  }  
  .inactive{
    color:white;
  }
</style>