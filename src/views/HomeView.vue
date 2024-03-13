<script setup>

</script>

<template>
  <main class="md:flex md:justify-around md:items-center md:mx-auto md:mt-8 md:rounded-xl md:py-8 md:bg-white md:w-3/4">
    <div class="bg-img">
      <div class="mobile-img">                
        <img src="../images/bg-sidebar-mobile.svg" alt="mobile-bg" class='w-full md:hidden'>       
      <div class="active-page-number flex justify-center space-x-3 relative -top-36 md:hidden">
      <button class="rounded-full border-2 py-2 px-4 text-2xl text-white font-bold">1</button>
      <button class="rounded-full border-2 py-2 px-4 text-2xl text-white font-bold">2</button>
      <button class="rounded-full border-2 py-2 px-4 text-2xl text-white font-bold">3</button>
      <button class="rounded-full border-2 py-2 px-4 text-2xl text-white font-bold">4</button>
      </div>
      </div>
      <div class="desktop-img">
        <img src="../images/bg-sidebar-desktop.svg" alt="desktop-bg" class="hidden md:block relative">
      <div class="hidden space-y-6 absolute top-28 mt-2 ml-8 md:flex md:flex-col">

      <div class="flex justify-center items-center space-x-2">
        <div>
          <button class="rounded-full border-2  w-10 h-10 text-2xl text-white font-bold">1</button>
        </div>        
        <div>
          <h2 class="text-pastelblue">Step 1</h2>
          <h2 class="text-white font-bold">YOUR INFO</h2>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-2">
        <div>
          <button class="rounded-full border-2  w-10 h-10 text-2xl text-white font-bold">2</button>
        </div>
        <div>
          <h2 class="text-pastelblue">Step 2</h2>
          <h2 class="text-white font-bold">SELECT PLAN</h2>
        </div>
      </div>
      <!-- <div class="flex justify-center items-center space-x-2">
        <button class="rounded-full border-2  w-10 h-10 text-2xl text-white font-bold">1</button>
        <div>
          <h2 class="text-pastelblue">Step 3</h2>
          <h2 class="text-white font-bold">ADDS-ON</h2>
        </div>
      </div> -->
      <!-- <div class="flex justify-center items-center space-x-2">
        <button class="rounded-full border-2  w-10 h-10 text-2xl text-white font-bold">1</button>
        <div>
          <h2 class="text-pastelblue">Step 4</h2>
          <h2 class="text-white font-bold">SUMMARY</h2>
        </div>
      </div> -->
        

      </div>
      </div>      
    </div>
    <div class="card bg-white mx-4 p-4 rounded-xl relative -top-28 -mt-2 md:mx-0 md:-top-4 md:-mt-0 space-y-8">      
      <div>
        <h1 class="text-3xl text-marineblue font-bold">Personal info</h1>
      <p class="text-lg text-coolGray">Please provide your name, email address, and phone number</p>
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
      <button class="float-right bg-marineblue text-white border-0 p-3 rounded-lg hidden md:block">Next Step</button>
    </div>
    <div>
      <button class="float-right mr-4 bg-marineblue text-white border-0 p-3 rounded-lg -mt-20 md:hidden">Next Step</button>
    </div>
  </main>
</template>
