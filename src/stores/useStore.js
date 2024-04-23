import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const plans = reactive(
    [{
    name: 'Arcade',
      image: '../images/icon-arcade.svg',
      monthly: '$9/mo',
      yearly: '$90/yr'
    },
    {
    name:'Advanced',
      image:'../images/icon-advanced.svg',
      monthly: '$12/mo',
      yearly: '$120/yr'
    },
    {
    name:'Pro',
      image:'../images/icon-advanced.svg',
      monthly: '$15/mo',
      yearly: '$150/yr'   
    }])    
  const addsOn = reactive(

    [{
    name: 'Online service', 
    details: 'Access to multiplayer games',
      monthly: '+$1/mo',
      yearly: '+$10/yr'
    },
    {
    name:'Larger storage',
    details: 'Extra 1TB of cloud save',
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    },
    {
    name:'Customizable profile',      
    details: 'Custom theme on your profile',
      monthly: '+$2/mo',
      yearly: '+$20/yr'   
    }])
    
  return { 
    plans,
    addsOn
   }
})
