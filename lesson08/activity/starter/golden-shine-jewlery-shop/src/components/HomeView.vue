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
      <v-window>
        <v-window-item>
          <Home />
        </v-window-item>

        <!--<v-window-item>
          <Products />
        </v-window-item>

        <v-window-item>
          <Order />
        </v-window-item>

        <v-window-item>
          <Contact />
        </v-window-item>

        <v-window-item>
          <About />
        </v-window-item>

        <v-window-item>
          <Review />
        </v-window-item>-->
      </v-window>
    </v-card-text>
  </v-card>
</template>

<!-- script sources -->
<script>
  // imports //
  import About from '@/views/About.vue';
  import Contact from '@/views/Contact.vue';
  import Home from '@/views/Home.vue';
  import Order from '@/views/Order.vue';
  import Products from '@/views/Products.vue';
  import Review from '@/views/Review.vue';
  

  export default {
      data: () => ({
        tab: null,
        pages: [
          {tab: 'Home'},
          {tab: 'Products'},
          {tab: 'Order'},
          {tab: 'Contact'},
          {tab: 'About'},
          {tab: 'Reviews'}
        ]
      }),
      components: {
        Home,
        Products,
        Order,
        Contact,
        About,
        Review
      },
    }
</script>
