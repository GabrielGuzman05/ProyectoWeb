<template>
  <section>
    <Navbar />
    <v-layout wrap ma-6 justify-center>
      <v-flex v-for="(serv, index) in servicios" v-bind:key="index" sm3 xs12 px-2 mb-5>
        <v-card class="mx-auto">
          <v-img class="white--text" height="auto" v-bind:src="serv.imagen" />
          <v-card-title>{{ serv.name }}</v-card-title>
          <v-card-text>
            <div class="subtitle-1">Precio: ${{ precioFormat(serv.precio) }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-dialog width="500">
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on">Más datos</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Detalles de {{ serv.name }}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <br>
                  <p>Precio: ${{ precioFormat(serv.precio) }}</p>
                  <p>Descripción: {{ serv.descripcion }}</p>
                </v-card-text>
                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data: () => ({

  }),
  computed: {
    // Getters
    servicios() {
      return this.$store.state.servicios;
    }
  },
  watch: {
  },
  created() {
    // Se crea un action con el objetivo de obtener los servicios
    //(Consumir la API)
    this.$store.dispatch("getAllServices");
  },
  methods: {
    // Método para cambiar el formato del precio mostrado en la vista
    //(precio de la respuesta obtenida de la API)
    precioFormat(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  }
};
</script>