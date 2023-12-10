<template>
  <app-bar />
  <home-view />
  <footer-template />
</template>

<script setup>
  import AppBar from '@/layouts/default/AppBar.vue';
  import homeView from '@/components/HomeView.vue'
  import FooterTemplate from '@/layouts/default/FooterTemplate.vue';
</script>