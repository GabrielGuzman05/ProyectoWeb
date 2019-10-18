<template>
  <section>
    <Navbar />
    <v-layout wrap mt-8 justify-center>
      <v-flex sm10>
        <v-carousel height="auto" continuous cycle>
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
    <v-layout wrap mt-4 justify-center>
      <v-flex sm10>
        <v-card class="mx-auto">
          <v-card-text>
            Peluquería Olga Ibarra fue fundada hace más de 30 años y es un referente de la moda 
            y tendencias en el sector de la Peluquería. 
            Nuestra orientación familiar y profesional, han sido pilares fundamentales para el 
            logro de nuestro desarrollo.
          </v-card-text>
        </v-card>
        <br>
      </v-flex>
    </v-layout>
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
        "imgs/carousel-4.jpg",
        "imgs/carousel-5.jpg"
      ]
    };
  }
};
</script>