<template>
  <section>
    <Navbar />
    <v-layout wrap ma-6 justify-center>
      <v-flex v-for="(persona, index) in personal" v-bind:key="index" sm3 xs12 px-2 mb-5>
        <v-card class="mx-auto">
          <v-img class="white--text" height="auto" v-bind:src="persona.imagen" />
          <v-card-title>{{ persona.name }} {{ persona.apellido }}</v-card-title>
          <v-card-text>
            <div class="subtitle-1">Rol: {{ persona.rol }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-dialog width="500">
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on">Más datos</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Detalles de {{ persona.name }}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <br>
                  <p>Rol: {{ persona.rol }}</p>
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
    personal() {
      return this.$store.state.personal;
    }
  },
  watch: {
  },
  created() {
    // Se crea un action con el objetivo de obtener al personal
    //(Consumir la API)
    this.$store.dispatch("getAllPersonal");
  },
  methods: {}
};
</script>