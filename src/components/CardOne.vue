<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const nextPage = () => {
  router.push(`/select-plan`)
}
</script>
<template>
<div class="card bg-white mx-4 p-4 rounded-xl relative -top-28 -mt-2 md:mx-0 md:-top-4 md:-mt-0 space-y-8">      
<div>
<h1 class="text-3xl text-marineblue font-bold">Personal info</h1>
<p class="text-lg text-coolgray">Please provide your name, email address, and phone number</p>
</div>      
<div class="card-inputs space-y-4">
  <div class="flex flex-col">
    <label for="name" class="text-marineblue">Name</label>
  <input type="text" id="email" placeholder="e.g. Stephen King" class="border rounded-lg p-3 outline-none">
  </div>
  <div class="flex flex-col">
    <label for="name" class="text-marineblue">Email Address</label>
  <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" class="border rounded-lg p-3 outline-none">
  </div>
  <div class="flex flex-col">
    <label for="phone_number" class="text-marineblue">Phone Number</label>
  <input type="text" id="phone_number" placeholder="e.g. +1 234 567 890" class="border rounded-lg p-3    outline-none">
  </div>
</div>
<div class="relative top-14 float-right">
  <button class="hover:scale-110 hover:transition-all hover:duration-500 bg-marineblue text-white border-0 p-3 rounded-lg  md:block" @click="nextPage">Next Step</button>            
    </div>
</div>

</template>