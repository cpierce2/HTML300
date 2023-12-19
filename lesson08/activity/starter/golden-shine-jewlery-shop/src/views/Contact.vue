<template>
  <v-container fluid class='heigth-fill'>
    <v-row justify="center">
      <v-card>
        <v-card-title class='text-center text-h3 pb-5'>
          Golden Shine Jewlery Contact Form
        </v-card-title>
        <v-card-text>
          <p class='mx-12 px-12 pb-5'>Thank you for contacting Golden Shine Jelwery. We are thrilled that you are considering 
            our services as your jelwery provider. Please understand that we are working hard to provide 
            the best customer service and quality products online. Which has also led to an increase 
            in contact requests. We typically respond to contact request within three to four business 
            days. We apologize for inconvenience this may cause.
          </p>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                >
                </v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                >
                </v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                >
                </v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                >
                </v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                >
                </v-select>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Rings', 'Necklaces',  'Ear Rings', 'Pendants', 'Cuffs', 'Coins', 'Gold Bars', 'Bracelet', 'Anklets', 'Brooch', 'Sizing', 'Engraving', 'Gift Items']"
                  label="Interests*"
                  multiple
                  required
                >
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>

          <small>*indicates required field</small>

        </v-card-text>
          
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false">
            Close
          </v-btn>
            
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data: () => ({
      dialog: false,

    }),
  }
</script>