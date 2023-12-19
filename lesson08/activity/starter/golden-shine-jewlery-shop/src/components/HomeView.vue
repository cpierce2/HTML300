<!-- Main content -->
<template>
  <!-- creates the card that holds the tabs and pages -->
  <v-card>
    <v-card>
      <v-toolbar>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn 
            icon='mdi-account'
            v-bind='props' />
          </template>
            
          <v-list>
            <v-list-item>
              <v-card
                class="mx-auto"
                elevation="1"
                max-width="500">

                <v-card-title class="py-5 font-weight-black">Golden Shine Log In</v-card-title>

                <v-card-text>
                  This login section is intentionally not operational.
                </v-card-text>

                <v-card-text>
                  <div class="text-subtitle-2 font-weight-black mb-1">Enter Username</div>

                  <v-text-field
                    label="Username@email.com"
                    single-line
                    variant="outlined"
                  />

                  <v-btn
                    :disabled="loading"
                    :loading="loading"
                    block
                    class="text-none mb-4"
                    color="indigo-darken-3"
                    size="x-large"
                    variant="flat"
                    @click="loading = !loading">
                    Log In
                  </v-btn>

                  <v-btn
                    block
                    class="text-none"
                    color="grey-lighten-3"
                    size="x-large"
                    variant="flat">
                    Cancel
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer />

        <v-card-text>
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search Golden Shine Jewlery Shop"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick" 
          />
        </v-card-text>
        <!-- creates space horizontally-->
        <v-spacer />

        <v-dialog>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon='mdi-cart-variant' />
          </template>

          <template v-slot:default="{ isActive }">
            <v-card>
              <v-card-text>
                <cart />
              </v-card-text>

              <v-divider />
              <v-card-actions>
                <v-spacer />
                <v-btn icon='mdi-close' @click='isActive.value = false' />
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

        <v-btn icon='mdi-share' variant='text' @click='snackbar = true' />
      
        <v-snackbar
          v-model="snackbar"
          location="center">
          This is left intentionally blank to demonstrate the share function.
          <template v-slot:actions>
            <v-btn icon='mdi-close' @click="onClick" />
          </template>
        </v-snackbar>

        <template v-slot:extension>
          <v-row>
            <v-col>
              <v-tabs
                v-model="tab"
                align-tabs='center'>
                <v-tab v-for='page in pages'>{{ page.tab }}</v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </template>
      </v-toolbar>

      <v-window v-model="tab">
        <v-window-item v-for="item in items"
          :key="item"
          :value="item" >
        </v-window-item>
      </v-window>
    </v-card>
    <!-- gives text -->
    <v-card-text>
      <!-- creates window to show tab content -->
      <v-window v-model='tab'>
        <!-- tabs to the landing (or home) page -->
        <v-window-item>
          <landing />
        </v-window-item>
        <!-- tabs to the shop page -->
        <v-window-item>
          <shop />
        </v-window-item>
        <!-- tabs to the personalize page -->
        <v-window-item>
          <personalize />
        </v-window-item>
        <!-- tabs to the contact page -->
        <v-window-item>
          <contact />
        </v-window-item>
        <!-- tabs to the discover page -->
        <v-window-item>
          <discover />
        </v-window-item>
        <!-- tabs to the reviews page -->
        <v-window-item>
          <reviews/>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<!-- script sources -->
<script>
  // vue imports //
  import discover from '@/views/Discover.vue'
  import shop from '@/views/Shop.vue';
  import personalize from '@/views/Personalize.vue'
  import contact from '@/views/Contact.vue';
  import reviews from '@/views/Review.vue';
  import landing from '@/views/Landing.vue'
  import cart from '@/views/cart.vue';
  import shoppingCart from '@/views/ShoppingCart.vue'

  export default {
    data: () => ({
      dialog: false,
      snackbar: false,
      loading: false,
      tab: null,
      gold: null,
      // pages object
      pages: [
        {tab: 'Home', href: '@/views/Landing.vue'},
        {tab: 'Shop', href: '@/views/Products.vue'},
        {tab: 'Personalize', href: '@/views/Personalize.vue'},
        {tab: 'Contact', href: '@/views/Contact.vue'},
        {tab: 'Discover', href: '@/views/Discover.vue'},
        {tab: 'Reviews', href: '@/views/Review.vue'},
      ],
      display: {
        mobileBreakpoint: 'sm',
        thresholds: {
          xs: 0,
          sm: 340,
          md: 540,
          lg: 800,
          xl: 1280,
        }
      }
    }),
    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    methods: {
      onClick () {
        this.snackbar = false
      },
    },
    // components
    components: {
      landing,
      shop,
      personalize,
      contact,
      discover,
      reviews,
      cart,
      shoppingCart
    },
  }


/*













    <v-layout ref="app" class="rounded rounded-md">
    <v-app-bar color="grey-lighten-2" name="app-bar">
      <child v-slot="{ print }">
        <v-btn class="mx-auto" @click="print('app-bar')">Get data</v-btn>
      </child>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>

    <v-footer
      app
      name="footer"
    >
      <v-btn
        class="mx-auto"
        variant="text"
        @click="print('footer')"
      >
        Get data
      </v-btn>
    </v-footer>
  </v-layout>

















*/







</script>
