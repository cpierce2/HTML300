<!--  -->
<template>
  
<v-container fluid>
    <v-responsive>
      <AppBar />
      <Products />
      <router-view />
      <footerTemplate />
    </v-responsive>
  </v-container>

</template>

<script setup>
  import AppBar from '@/layouts/default/AppBar.vue'
  import footerTemplate from '@/layouts/default/FooterTemplate.vue'
  import Products from '@/views/Products.vue';
  //
</script>
