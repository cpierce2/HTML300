<template>
<v-container fluid class='landing-cont'>
  <div class='landing-vid'>
    <video width='100%' height='100%' autoplay loop preload="auto" :src='vids.vid'></video>
  </div>

  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto my-8 px-4 banner banner-bg"
    elevation="0"
    height="250"
    rounded
    max-width="auto"
    width="100%"
  >
    <div>
      <h2 class="text-h4 font-weight-black text-purple">Welcome </h2>

      <div class="text-h5 font-weight-medium mb-2">
        You are officially a part of the Golden Shine Jewlery Community!
      </div>

      <p class="text-body-2 mb-4">
        Let us bring you and your loved ones tremendous joy with nothing but the finest Gold jewelry around.
      </p>
    </div>
  </v-sheet>

  <v-row>
    <v-col>
      <v-container class='landing-col'>
        <v-card-item>OUR BEGINNING</v-card-item>
        <v-card-title class='info-title'>An Ethical Approach</v-card-title>
        <v-card-text>
          When we couldn’t find a standard that met ours, we created a new one. We started by 
          creating a rigorous protocol for diamond sourcing that goes beyond current industry 
          practices: Beyond Conflict FreeTM Diamonds which are selected for their ethical and 
          environmentally responsible origins.
          <br><br>
          We were one of the first jewelers to offer blockchain-enabled diamonds at scale, to 
          provide traceability of a diamond’s origin and ownership. Choosing a Brilliant Earth 
          diamond offers unparalleled transparency of your diamond’s provenance.
          <br><br>
          We strive to use 100% recycled precious metals to minimize our footprint and help 
          diminish the negative impacts of metal mining. Precious metals can be recycled 
          repeatedly without degrading their integrity, which means we don’t compromise quality 
          or beauty to make sustainable jewelry.         
        </v-card-text>
      </v-container>
    </v-col>
    <v-col>
      <v-img :src='images.img5' class='landing-images' />
    </v-col>
  </v-row>

  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 banner"
    elevation="0"
    height="250"
    rounded
    max-width="auto"
    width="100%"
  >
    <div>
      <h2 class="text-h4 font-weight-black text-purple">Proposing in 2024?</h2>

      <div class="text-h5 font-weight-medium mb-2 text-black">
        Take a look at our fine engagment rings on our product page.
      </div>

      <p class="text-body-2 mb-4 text-black">
        With a large selection of engagement rings that are sure to WOW her, we are sure you will find the perfect ring for the perfect proposal.
      </p>

          <!--  -->
    <v-dialog>
      <template v-slot:activator="{ props }">
        <v-btn 
          v-bind="props" 
          variant="text" 
          color="primary">
          See Proposal Rings
        </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card width='60vw' class='mx-auto text-center' title='Proposal Jewelry'>
          <v-card-text>
            This area is left blank intentionally
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn icon='mdi-close' @click='isActive.value = false' />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    </div>
  </v-sheet>

  <v-row>
    <v-col>
      <v-img :src='images.img4' class='landing-images' />
    </v-col>
    <v-col>
      <v-container class='landing-col'>
        <v-card-item>OUR CRAFTSMANSHIP</v-card-item>
        <v-card-title class='info-title'>Design Sets Us Apart</v-card-title>
        <v-card-text>
          Our number one goal is to make incomparably beautiful jewelry, just for you. At our 
          San Francisco design studio, our team designs every piece to delight you, from the 
          first time you see it and every day after. We carefully consider the entire piece—the 
          artfully tapered prongs; the hidden accents under the center gem; the precisely curved 
          interior of each band. We obsess over comfort, quality, and durability to ensure that 
          this is jewelry you will cherish for a lifetime.
        </v-card-text>
      </v-container>
    </v-col>
  </v-row>

  <v-card
    class="mx-auto text-center landing-col"
    elevation="0"
    max-width="900">
    <v-img 
      :src='images.img6'
      height='auto'
      cover>
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
    </v-img>
    <v-card-title class="wrap text-h4 font-weight-black text-purple">
      'Tis the Season
    </v-card-title>
    <v-card-subtitle 
      class="wrap text-h5 font-weight-medium text-black" 
      style='line-height: 1.5;'>
      Find the right gift for that special someone on Santa's Nice List.
    </v-card-subtitle>
    <!--  -->
    <v-dialog>
      <template v-slot:activator="{ props }">
        <v-btn 
          v-bind="props" 
          variant="text" 
          color="primary">
          See Seasonal Jelwery
        </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card width='60vw' class='mx-auto text-center' title='Seasonal Jewelry'>
          <v-card-text>
            This area is left blank intentionally
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn icon='mdi-close' @click='isActive.value = false' />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-card>

  <v-carousel 
    interval='200ms' 
    cycle 
    hide-delimiters 
    show-arrows='hover'
    class='my-6'>
    <v-carousel-item v-for='item in carouselItems' :key='item' :src='item.img'>
    </v-carousel-item>
  </v-carousel>
</v-container>
</template>

<script>
  // imports
  import vid from '@/assets/made_to_shine.mp4'
  import img1 from '@/assets/Ankle_Bracelet.jpg'
  import img2 from '@/assets/midas-hp-slider3.jpg'
  import img3 from '@/assets/mens2.png'
  import img4 from '@/assets/hero-hd.jpg'
  import img5 from '@/assets/proposal2.jpeg'
  import img6 from '@/assets/christmas_jewelry.jpg'
  import img7 from '@/assets/luxury-black-silk.jpg'

  export default {
    data: () => ({
      vids: {
        vid
      },
      images: {
        img4, img5, img6, img7
      },
      carouselItems: [
        {img: img1},
        {img: img2},
        {img: img3}
      ],
    }),
    components: {
      // pre-made for additional components if needed
    }
  }
</script>