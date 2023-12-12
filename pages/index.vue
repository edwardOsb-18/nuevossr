<template>
  <h1>index</h1>
  <CardView :titulo="title" @uno="edh"></CardView>
</template>

<script setup>
const title=ref("edward santamria")

const edh=()=>{
title.value="osb"

 }
</script>

<style>

</style>