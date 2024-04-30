<template>
<div class="card bg-white mx-4 p-4 rounded-xl  
relative -top-28 -mt-2 md:mx-0  md:-top-4
 md:-mt-0 space-y-8" >      
 <slot name="header"></slot>
 <slot name="content"></slot>  
 </div>    
</template>
<style scoped>
.card{
    animation: slide 0.8s ease-in;
}
@keyframes slide {
    0%{
      transform: translateX(15px);
      opacity: 0;
    }    
    100%{
        opacity: 1;
    }
}
</style>