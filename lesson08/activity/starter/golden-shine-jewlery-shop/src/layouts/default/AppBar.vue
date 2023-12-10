<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="@/assets/dark-gold-hand.jpg"
    >

      <div class="d-flex justify-space-around">
        <v-menu transition="scale-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon='mdi-menu'></v-btn>
          </template>

          <v-list>
            <v-list-item v-for="page in pages"
            :key="page"
            :href='page.link'
            >
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-toolbar-title class='text-center'>
        Golden Shine Jewlery Shop
      </v-toolbar-title>

      
      <v-btn href='HomeView' icon='mdi-home' />
      <v-btn icon='mdi-share-variant' />

    </v-toolbar>
  </div> 
</template>

<script>
import Products from '@/views/Products.vue';
import HomeView from '@/components/HomeView.vue';
  export default {
    data: () => ({
      pages: [
        { name: 'Products', link: '@/views/Products.vue' },
        { name: 'Order', link: './views/Order.vue' },
        { name: 'About', link: '@/About' },
        { name: 'Contact', link: '@/views/Contact.vue' },
      ],
    }),
    components: {
      HomeView
    }
  }
</script>
