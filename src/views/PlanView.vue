<script setup>
import Nav from '@/components/Nav.vue';
import CardTwo from '@/components/CardTwo.vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const previousRoute = () => {
    router.push(`/`)     
}
</script>
<template>
 <main class="md:flex md:justify-around md:items-center md:mx-auto md:mt-8 md:rounded-xl md:py-8 md:bg-white md:w-3/4">
    <Nav/>
    <CardTwo/>
    <div class="flex justify-between p-4"> 
    <button class="text-lightGray bg-lightgray border-0 w-20 h-14 rounded-lg -mt-20 md:hidden outline-none" @click="previousRoute">Go Back</button>    
    <button class=" bg-marineblue text-white border-0 w-20 h-14  rounded-lg -mt-20 md:hidden outline-none">Next Step</button>    
    </div>    
 </main>    
</template>