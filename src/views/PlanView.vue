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
 <main class="md:flex md:justify-around md:items-center md:mx-auto md:mt-8 md:rounded-xl md:py-8 md:bg-white md:w-3/4 relative">
    <Nav/>
    <CardTwo/>
 </main>    
</template>