<template>
  <h1>about</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias odio pariatur, tempora animi fugiat repudiandae culpa commodi. Officia, laboriosam.</p>
</template>

<script setup>

onMounted(async ()=>{

const peti=await fetch("http://localhost:3000/api/crear/654973cc59d67256ffb05c17",{

  method:"PUT",
  headers: {
    'Content-Type': 'application/json', // Tipo de contenido que estás enviando
    // Otros encabezados según sea necesario
  },
  body: JSON.stringify({nombre:"Edward",apellido:"ddcollens"})
})
const data=await peti.json()
console.log(data)


})
</script>

<style>

</style>