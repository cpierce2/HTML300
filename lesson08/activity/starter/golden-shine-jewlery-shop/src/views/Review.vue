<template>
  <v-container dark prominent class='v-col-10'>
    <v-row>
      <v-card v-for='prodCard in prodCards' 
        :key='prodCard.id'
        width='20rem' 
        style='margin: 2rem 2rem;'
        >
        <v-img :src='prodCard.itemImage' height="200px" cover/>

        <v-card-title v-text='prodCard.itemName' />
        <v-card-subtitle v-text='prodCard.itemPrice' />

        <v-card-actions>
          <v-btn
            :key='prodCard.id'
            color="orange-lighten-2"
            variant="text"
            >
              See More...
          </v-btn>

          <v-spacer />

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          />
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider />
            <v-card-text v-text='prodCard.itemDescription' />
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  import Img1 from '../assets/gj1.jpg'
  import Img2 from '../assets/gj2.jpg'
  import Img3 from '../assets/gj3.jpg'
  import Img4 from '../assets/gj4.jpg'
  import Img5 from '../assets/gj5.jpg'
  import Img6 from '../assets/gj6.png'
  import Img7 from '../assets/gj7.jpg'
  import Img8 from '../assets/gj8.png'
  import Img9 from '../assets/gj9.png'
  import Img10 from '../assets/gj10.jpg'
  import Img11 from '../assets/gj11.jpg'
  import Img12 from '../assets/gj12.jpeg'

  export default {
    data: () => ({
      show: false,
      prodCards: [
        {
          id: 1,
          itemImage: Img1,
          itemName: 'Hello',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 2,
          itemImage: Img2,
          itemName: 'How',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 3,
          itemImage: Img3,
          itemName: 'Are',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 4,
          itemImage: Img4,
          itemName: 'You',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 5,
          itemImage: Img5,
          itemName: 'Please',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 6,
          itemImage: Img6,
          itemName: 'Help',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 7,
          itemImage: Img7,
          itemName: 'with',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 8,
          itemImage: Img8,
          itemName: 'These',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 9,
          itemImage: Img9,
          itemName: 'Stupid',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 10,
          itemImage: Img10,
          itemName: 'Images',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 11,
          itemImage: Img11,
          itemName: 'Right',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        },
        {
          id: 12,
          itemImage: Img12,
          itemName: 'Now',
          itemPrice: '$1234.56',
          itemDescription: 'This is filler content for the sake of taking up space'
        }
      ]
    }),
  }
</script>