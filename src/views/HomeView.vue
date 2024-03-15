<script setup>
import Nav from '../components/Nav.vue'
import CardOne from '@/components/CardOne.vue';
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const nextPage = () => {
  router.push(`/select-plan`)
}
</script>

<template>
  <main class="md:flex md:justify-around md:items-center md:mx-auto md:mt-8 md:rounded-xl md:py-8 md:bg-white md:w-3/4">
    <Nav/>
    <CardOne/>
    <div>
      <Button  @click="nextPage" :nextPage="nextPage"/>
    </div>
  </main>
</template>
