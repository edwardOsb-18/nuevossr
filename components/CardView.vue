<template>
    <h1>card</h1>
    <p>{{prop.titulo  }}</p>

<button @click="cambio">cmbiar</button>

  </template>
  
  <script setup>
  
const prop=defineProps({
    titulo:{
        type:String
    }
})
 const emit=defineEmits(["uno"])
 
 
 const cambio=()=>{
emit("uno")

 }

  </script>
  
  <style>
  
  </style>