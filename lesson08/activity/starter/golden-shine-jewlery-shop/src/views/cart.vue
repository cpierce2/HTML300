<template>
  <!-- displays shopping cart vue file -->
  <ShoppingCart /> 
</template>

<script>
  // imports
  import ShoppingCart from './ShoppingCart.vue'

  // exports data
  export default {
    data: () => ({
      cart: null,
    }),

    computed: {
      // for possible future use
    },

    methods: {
      // for possible future use
    },
    // components for cart.vue
    components: {
      ShoppingCart,
    }
  }
</script>