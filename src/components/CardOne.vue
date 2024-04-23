<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()

let fname = ref('')
let email = ref('')
let phonenumber = ref ('')
let isValidInput = ref(null)
let errorMessage = ref('')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
const nextPage = () => {
  if (fname.value === ''){
    errorMessage.value = 'Name field cannot be empty'
    isValidInput.value = 1
  }
  else if(email.value === '' || !validateEmail(email.value)){
    errorMessage.value = 'Invalid Email Address'
    isValidInput.value = 2
  }
  else if (phonenumber.value === ''){
    errorMessage.value = 'Phone Number field cannot be empty'
    isValidInput.value = 3
  }
  else{
    router.push(`/select-plan`) 
  } 
  return errorMessage, isValidInput
}
</script>
<template>
<div class="card bg-white mx-4 p-4 rounded-xl  -top-28 -mt-2 md:mx-0 md:-top-4 md:-mt-0 space-y-8">      
<div>
<h1 class="text-3xl text-marineblue font-bold">Personal info</h1>
<p class="text-lg text-coolgray">Please provide your name, email address, and phone number</p>
</div>      
<div class="card-inputs space-y-4">
  <div class="flex flex-col">
    <label for="name" class="text-marineblue">Name</label>
  <input type="text" placeholder="e.g. Stephen King" 
  class="border rounded-lg p-3 outline-none" v-model="fname">
  <small class="text-red-400 transition-all duration-500 " v-if="isValidInput === 1">{{ errorMessage }}</small>
  </div>
  <div class="flex flex-col">
    <label for="name" class="text-marineblue">Email Address</label>
    <input type="text" placeholder="e.g. stephenking@lorem.com"
     class="border rounded-lg p-3 outline-none" v-model="email">
     <small class="text-red-400" v-if="isValidInput === 2">{{ errorMessage }}</small>
  </div>
  <div class="flex flex-col">
    <label for="phone_number" class="text-marineblue">Phone Number</label>
  <input type="text" placeholder="e.g. +1 234 567 890" 
  class="border rounded-lg p-3 outline-none"  v-model="phonenumber">
  <small class="text-red-400" v-if="isValidInput === 3">{{ errorMessage }}</small>
  </div>
</div>
<div class="relative top-14 float-right">
  <button class="hover:scale-110 hover:transition-all hover:duration-500 bg-marineblue text-white border-0 p-3 rounded-lg  md:block" @click="nextPage()">Next Page</button>            
    </div>  
</div>
</template>