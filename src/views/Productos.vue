<template>
  <section>
    <Navbar />
    <v-layout wrap ma-6 justify-center>
      <v-flex v-for="(pais, index) in paises" v-bind:key="index" sm3 xs12 px-2 mb-5>
        <v-card class="mx-auto">
          <v-img class="white--text" height="auto" v-bind:src="pais.flag" />
          <v-card-title>{{ pais.name }}</v-card-title>
          <v-card-text>
            <div class="subtitle-1">Capital: {{ pais.capital }}</div>
            <div class="subtitle-1">Precio: ${{ pais.population }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-dialog width="500">
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on">Más datos</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Detalles</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <br>
                  <p>Capital: {{ pais.capital }}</p>
                  <p>Precio: ${{ pais.population }}</p>
                  <p>Area: {{ pais.area }}</p>
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
    paises() {
      return this.$store.state.paises;
    }
  },
  watch: {
    // Watch creado con el objetivo de que cada país tengo un like asociado
    paises: function() {
      this.paises.forEach(element => {
        pais => {
          //this.$store.commit("defaultLikes");
        };
      });
    }
  },
  created() {
    // Se crea un action con el objetivo de obtener los países
    //(Consumir la API)
    this.$store.dispatch("getAllCountries");
  },
  methods: {}
};
</script>