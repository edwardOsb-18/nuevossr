// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules:{
    "/":{prerender:true},
    "/about":{ssr:true},
    "/contacto":{ssr:false},
    "/nuevo":{prerender:true},
    "/[id]":{ssr:false}
  }
  
})
