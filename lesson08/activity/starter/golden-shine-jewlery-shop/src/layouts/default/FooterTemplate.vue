<template>
  <v-footer
    class="bg-black text-center d-flex flex-column"
    fixed
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon.logo"
        variant="text"
        :href='icon.page'
      ></v-btn>
    </div>

    <div class="pt-0 footer-disclaimer">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Golden Shine Jewlery Shop LLC.</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {logo: 'mdi-facebook', page: 'https://www.facebook.com'},
        {logo: 'mdi-twitter', page: 'https://twitter.com/'},
        {logo: 'mdi-linkedin', page: 'https://www.linkedin.com/'},
        {logo: 'mdi-instagram', page: 'https://www.instagram.com/'}
      ],
    }),
  }
</script>