<template>
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
      <div class="flex justify-center items-center space-x-2">
        <button class="rounded-full border-2  w-10 h-10 text-2xl text-white font-bold">1</button>
        <div>
          <h2 class="text-pastelblue">Step 3</h2>
          <h2 class="text-white font-bold">ADDS-ON</h2>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-2">
        <button class="rounded-full border-2  w-10 h-10 text-2xl text-white font-bold">1</button>
        <div>
          <h2 class="text-pastelblue">Step 4</h2>
          <h2 class="text-white font-bold">SUMMARY</h2>
        </div>
      </div>    
      </div>
      </div>      
    </div>
    </template>