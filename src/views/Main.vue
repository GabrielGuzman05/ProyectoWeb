<template>
  <section>
    <Navbar />
    <v-row>
      <v-col>
        <v-layout wrap mt-8 justify-center>
          <v-flex sm10>
            <v-carousel>
              <v-carousel-item v-for="(color, i) in colors" :key="color">
                <v-sheet :color="color" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">Slide {{ i + 1 }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-col>
      <v-col>
        <v-layout wrap mt-4 justify-center>
          <v-flex sm10>
            <v-card class="mx-auto">
              <v-card-text>
                Peluquería Olga Ibarra es un salon de belleza
                que presta una gran cantidad de servicios, ven y conócenos.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>