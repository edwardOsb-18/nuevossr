<template>
  <h1>index</h1>
  <LazyCardView  v-if="ver"  :titulo="title" @uno="edh"></LazyCardView>
  <button @click="verse"> ver</button>
  <component :is='com'></component>
</template>

<script setup>
const title=ref("edward santamria")
const ver=ref(false)

const Uno=defineAsyncComponent(()=>{return import("../components/UnoView.vue")})
const Dos=defineAsyncComponent(()=>{return import("../components/DosView.vue")})
const com=ref(Uno)

const edh=()=>{
com.value=Dos

 }


 const verse=()=>{
  if(ver.value===false){
    ver.value=true
  }
  else if(ver.value===true)
  ver.value=false
 }
</script>

<style>

</style>