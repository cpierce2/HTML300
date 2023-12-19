<template>
  <v-container fluid>
  <!-- creates a row for the container -->
  <v-row>
    <!-- creates a card -->
    <v-card v-for='prodCard in prodCards'
      :key='prodCard.id'
      elevation='0'
      width='20rem'
      class='mx-16 my-6'>
      <!-- loops through the images for the cards -->
      <v-img :src='prodCard.itemImage' height="275px" cover/>
      <!-- displays card item through loop iteration -->
      <v-card-title class='text-center' v-text='prodCard.itemName' />
      <!-- provides actions for the cards with a button to drop down for more info -->
      <v-card-actions>
        <!-- creates "see more" expansion for the card -->
        <v-expansion-panels>
          <v-expansion-panel
            :key='prodCard.id'
            title='Details'
            color='primary'
            elevation='5'
          >
            <v-expansion-panel-text
              v-text='prodCard.itemDescription' 
              class='text-justify mx-5 my-2' 
            />
            <v-expansion-panel-text>
              <v-table>
                <tbody>
                  <tr>
                    <td>{{ prodCard.price }}</td>
                    <td>${{ prodCard.itemPrice }}</td>
                  </tr>
                  <tr>
                    <td>{{ prodCard.weight }}</td>
                    <td>{{ prodCard.itemWeight }} Ounces</td>
                  </tr>
                  <tr>
                    <td>{{ prodCard.karatage }}</td>
                    <td>{{ prodCard.itemKarat }}k</td>
                  </tr>
                </tbody>
              </v-table>
            </v-expansion-panel-text>
              
            <v-expansion-panel-text>
              <v-dialog>
                <template v-slot:activator="{ props }">
                  <v-btn 
                    text='Add to Cart'
                    v-bind='props'
                    color='primary'
                    variant='outlined'
                    @click='dialog = !dialog'
                  />
                </template>

                <template v-slot:default="{ isActive }">
                    <v-fade-transition hide-on-leave>
                      <v-card
                        class="mx-auto text-center px-6"
                        max-width='500'
                        title="Success">

                        <v-divider></v-divider>

                        <div class="py-12 text-center">
                          <v-icon
                            class="mb-6"
                            color="success"
                            icon="mdi-check-circle-outline"
                            size="128" />

                          <div class="text-h4 font-weight-bold">Item Added to Cart</div>
                        </div>
                        <v-divider />
                        <div class="pa-4 text-end">
                          <v-btn
                            class="text-none"
                            color="medium-emphasis"
                            min-width="92"
                            rounded
                            variant="outlined"
                            @click="isActive.value = false"
                          >
                            Close
                          </v-btn>
                        </div>
                      </v-card>
                    </v-fade-transition>
                </template>
              </v-dialog>
            </v-expansion-panel-text>
          </v-expansion-panel>
        <!-- creates the actual action of the button with a chevron character -->
        </v-expansion-panels>
      </v-card-actions>
    </v-card>
  </v-row>
</v-container>
</template>

<script>
  // imports images
  import Img1 from '@/assets/gj1.jpg'
  import Img2 from '@/assets/gj2.jpg'
  import Img3 from '@/assets/gj3.jpg'
  import Img4 from '@/assets/gj4.jpg'
  import Img5 from '@/assets/gj5.jpg'
  import Img6 from '@/assets/gj6.png'
  import Img7 from '@/assets/gj7.jpg'
  import Img8 from '@/assets/gj8.png'
  import Img9 from '@/assets/gj9.png'
  import Img10 from '@/assets/gj10.jpg'
  import Img11 from '@/assets/gj11.jpg'
  import Img12 from '@/assets/gj12.jpeg'
  import { ref } from 'vue'

  // creates data for the page to loop through and export
  export default {
    data: () => ({
      show: false,
      dialog: ref(true),
      // data for the loop iteration
      prodCards: [
        {
          itemImage: Img1,
          itemName: 'Layered Necklace',
          itemPrice: 9634.86,
          itemDescription: 'This Necklace has seven layers and embroidered with a beautiful Hibiscus flower pendant resting to the side.',
          itemWeight: 32,
          itemKarat: 22,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img2,
          itemName: 'Tube & Chain Mix',
          itemPrice: 525.64,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 11.3,
          itemKarat: 18,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img3,
          itemName: 'Indian Heritage Choker',
          itemPrice: 397.44,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 10.3,
          itemKarat: 14,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img4,
          itemName: 'Earring and Neclace Set With Pearls',
          itemPrice: 210.39,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 9.8,
          itemKarat: 18,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img5,
          itemName: 'Christian Dior Bracelet',
          itemPrice: 195.72,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 4.9,
          itemKarat: 18,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img6,
          itemName: 'Earring and Snake Chain Set',
          itemPrice: 156.54,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 9.4,
          itemKarat: 14,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img7,
          itemName: 'Couple Ring Set',
          itemPrice: 799.89,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 4.2,
          itemKarat: 22,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img8,
          itemName: 'Ring with Diamonds',
          itemPrice: 3986.48,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 2.7,
          itemKarat: 14,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img9,
          itemName: 'Bangle',
          itemPrice: 335.12,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 5.1,
          itemKarat: 18,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img10,
          itemName: 'Ethiopian Wedding Ring',
          itemPrice: 266.25,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 3.2,
          itemKarat: 14,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img11,
          itemName: 'Three Sisters Ring Set',
          itemPrice: 647.46,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 6.7,
          itemKarat: 14,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        },
        {
          itemImage: Img12,
          itemName: 'Wedding Ring Set',
          itemPrice: 556.49,
          itemDescription: 'This is filler content for the sake of taking up space',
          itemWeight: 2.6,
          itemKarat: 18,
          price: 'Price:',
          weight: 'Weight:',
          karatage: 'Karatage:',
        }
      ],
    }),
    created () {
      // empty function for future use
    },
    computed: {
      // empty space for future computed
    },
    methods: {
      // empty space for future methods
    },
    components: {
      // empty space for future components
    },
  }
</script>