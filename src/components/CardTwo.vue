<template>
<div class="card mx-2 py-6 px-2 bg-white rounded-xl relative -top-28 -mt-2 md:mx-0 md:-top-16 md:-mt-0 space-y-8">     
<div>
<h1 class="text-3xl text-marineblue font-bold">Select your plan</h1>
<p class="text-lg text-coolgray">You have the option of monthly or yearly billing.</p>
</div>
<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">    
    <div class="flex md:w-40 md:flex-col items-center md:items-start border-2 space-x-6 md:space-x-0 p-4 rounded-xl md:space-y-10">                 
    <div>
        <img src="../images/icon-arcade.svg" alt="arcade" class="w-14">
    </div>
    <div>
        <h2 class="text-marineblue font-bold text-xl">Arcade</h2>
        <small class="text-lightgray font-bold text-lg">$9/mo</small>
    </div>
    </div>
    <div class="flex md:w-40 md:flex-col items-center md:items-start border-2 space-x-6 p-4 md:space-x-0 rounded-xl md:space-y-10"> 
        <div>
        <img src="../images/icon-advanced.svg" alt="arcade" class="w-14">
    </div>
    <div>
        <h2 class="text-marineblue font-bold text-xl">Advanced</h2>
        <small class="text-lightgray font-bold text-lg">$12/mo</small>
    </div>
    </div>
    <div class="flex md:w-40 md:flex-col items-center md:items-start border-2 space-x-6 p-4 md:space-x-0 rounded-xl md:space-y-10"> 
        <div>
        <img src="../images/icon-pro.svg" alt="arcade" class="w-14">
    </div>
    <div>
        <h2 class="text-marineblue font-bold text-xl">Pro</h2>
        <small class="text-lightgray font-bold text-lg">$15/mo</small>
    </div>
    </div>    
</div>
<div class="flex justify-between relative top-32">
    <button class="hover:scale-110 hover:transition-all hover:duration-500  text-lightgray border-0 p-3 rounded-lg md:block">Go Back</button>
    <button class="hover:scale-110 hover:transition-all hover:duration-500 bg-marineblue text-white border-0 p-3 rounded-lg  md:block">Next Step</button>            
    </div>          
</div>
</template>