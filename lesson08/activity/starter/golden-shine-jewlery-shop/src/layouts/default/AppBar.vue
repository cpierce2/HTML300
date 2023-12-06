<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <div class="d-flex justify-space-around">
        <v-menu transition="scale-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
            <v-app-bar-nav-icon />
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :href='item.link'
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> 
      </div>

      <v-toolbar-title>Golden Shine Jewlery Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';

  export default {
    data: () => ({
      items: [
        { title: 'Home', link: '' },
        { title: 'Products', link: '@/views/Products.vue' },
        { title: 'Order', link: './views/Order.vue' },
        { title: 'About', link: '@/About' },
        { title: 'Contact', link: '@/views/Contact.vue' },
      ],
    }),
  }
</script>
