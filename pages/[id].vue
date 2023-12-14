<template>
    <h1>{{ id }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, accusamus!</p>
    <h2>sub</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, et?</p>
    <button @click="cambio">cambiar titulo</button>
  </template>
  
  <script setup>
 
 const rout=useRoute()
 const id=ref()
 id.value=rout.params.id

const cambio=()=>{
  id.value="edward"
}
  </script>
  
  <style>
  
  </style>