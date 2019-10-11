<template>
  <section>
    <Navbar />
    <v-row>
      <v-col>
        <v-layout wrap mt-8 justify-center>
          <v-flex sm10>
            <v-carousel>
              <!--
                Toma las rutas de todas las imagenes y las agrega al carrusel.
              !-->
              <v-carousel-item
                v-for="(item,i) in carousel_img"
                :key="i"
                :src="item"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
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
      carousel_img: [
        "imgs/carousel-1.jpg",
        "imgs/carousel-2.jpg",
        "imgs/carousel-3.jpg",
        "imgs/carousel-4.webp",
        "imgs/carousel-5.jpg"
      ]
    };
  }
};
</script>