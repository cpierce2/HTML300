<!-- Main content -->
<template>
  <!-- Insert Tab views or windows here-->
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab v-for='page in pages'>{{ page.tab }}</v-tab>
      <!-- <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>-->
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <landing />
        </v-window-item>

        <v-window-item>
          <products />
        </v-window-item>

        <v-window-item>
          Three
        </v-window-item>

        <v-window-item>
          <contact />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<!-- script sources -->
<script>
  // imports //
  import about from '@/views/About.vue'
  import products from '@/views/Products.vue';
  import contact from '@/views/Contact.vue';
  import landing from '@/views/landing.vue'

  export default {
      data: () => ({
        tab: null,
        pages: [
          {tab: 'Home', href: '@/views/Landing.vue'},
          {tab: 'Products', href: '@/views/Products.vue'},
          {tab: 'Order', href: '@/views/Order.vue'},
          {tab: 'Contact', href: '@/views/Contact.vue'},
          {tab: 'About', href: '@/views/About.vue'},
          {tab: 'Reviews', href: '@/views/Review.vue'},
        ]
      }),
      components: {
        products,
        contact,
        landing,
        about,
        contact,
        reviews
      }
    }
</script>
