import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const plans = reactive(
    [{
    name: 'arcade',
      image: '../images/icon-arcade.svg',
      monthly: '$9/mo',
      yearly: '$90/yr'
    },
    {
    name:'advanced',
      image:'../images/icon-advanced.svg',
      monthly: '$12/mo',
      yearly: '$120/yr'
    },
    {
    name:'pro',
      image:'../images/icon-advanced.svg',
      monthly: '$15/mo',
      yearly: '$150/yr'   
    }])    
  
  return { plans }
})
