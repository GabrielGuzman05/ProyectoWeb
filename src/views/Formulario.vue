<template>
  <section>
    <Navbar />
    <v-layout wrap>
      <v-flex md6 sm12 xs12 px-2>
        <v-form id="form" @submit.prevent="enviarFormulario">
          <h2>Agregar Producto</h2>
          <v-text-field v-model="nombre" :error-messages="errorNombre" label="Nombre" />
          <v-text-field
            v-model="precio"
            type="number"
            :error-messages="errorPrecio"
            label="Precio"
            :rules="rules"
          />
          <v-select v-model="marca" :items="marcas" :error-messages="errorMarca" label="Marca"></v-select>
          <v-btn dark type="submit" form="form">Agregar</v-btn>
        </v-form>
        <v-snackbar v-model="snackbar" :multi-line="true">
          Nombre: {{ this.n }}
          <br>
          Precio: {{ this.p }}
          <br>
          Marca: {{ this.m }}
          <v-btn color="pink" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      marcas: ["LB", "EA", "CS"],
      rules: [v => v.length < 8 || "Máximo 7 cifras"],
      nombre: "",
      precio: "",
      marca: "",
      errorNombre: "",
      errorMarca: "",
      errorPrecio: "",
      n:"",
      p:"",
      m:""
    };
  },
  methods: {
    enviarFormulario() {
      let validar = true;
      if (this.nombre === "") {
        this.errorNombre = "El nombre es requerido";
        validar = false;
      } else {
        this.errorNombre = "";
      }
      if (this.precio === "") {
        this.errorPrecio = "El precio es requerido";
        validar = false;
      } else {
        this.errorPrecio = "";
      }
      if (this.marca === "") {
        this.errorMarca = "La marca es requerido";
        validar = false;
      } else {
        this.errorMarca = "";
      }
      if (validar) {
        this.snackbar=true;
        this.n = this.nombre;
        this.p = this.precio;
        this.m = this.marca;
        this.nombre = "";
        this.marca = "";
        this.precio = "";
        this.errorNombre = "";
        this.errorMarca = "";
        this.errorPrecio = "";
      }
    }
  }
};
</script>