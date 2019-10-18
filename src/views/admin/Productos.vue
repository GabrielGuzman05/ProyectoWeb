<template>
  <section>
    <Navbar />
    <v-simple-table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) in productos" :key="index">
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="nombreActualizar" type="text" class="form-control" />
            </span>
            <span v-else>{{producto.name}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="marcaActualizar" type="text" class="form-control" />
            </span>
            <span v-else>{{producto.marca}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="precioActualizar" type="number" class="form-control" min="1" />
            </span>
            <span v-else>${{producto.precio}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <v-btn v-on:click.native="guardarActualizacion(index)"><v-icon>far fa-save</v-icon></v-btn>
            </span>
            <span v-else>
              <v-btn v-on:click.native="editItem(index)"><v-icon>fas fa-edit</v-icon></v-btn>
              <v-btn v-on:click.native="delItem(index)"><v-icon>far fa-minus-square</v-icon></v-btn>
            </span>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </section>
</template>
<script>
import Navbar from "../../components/Navbar2.vue";
export default {
  components: { Navbar },
  data: () => ({
    formActualizar: false,
    // La posición de tu lista donde te gustaría actualizar
    idActualizar: -1,
    // Input nombre dentro del formulario de actualizar
    nombreActualizar: "",
    // Input marca dentro del formulario de actualizar
    marcaActualizar: "",
    // Input precio dentro del formulario de actualizar
    precioActualizar: ""
  }),
  computed: {
    // Getters
    productos() {
      return this.$store.state.productos;
    }
  },
  watch: {},
  created() {
    // Se crea un action con el objetivo de obtener los productos
    //(Consumir la API)
    this.$store.dispatch("getAllProducts");
  },
  methods: {
    editItem(index) {
      this.idActualizar = index;
      this.nombreActualizar = this.productos[index].name;
      this.marcaActualizar = this.productos[index].marca;
      this.precioActualizar = this.productos[index].precio;
      // Mostramos el formulario
      this.formActualizar = true;
    },
    guardarActualizacion: function(index) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizar = false;
      // Actualizamos los datos
      this.productos[index].nombre = this.nombreActualizar;
      this.productos[index].marca = this.marcaActualizar;
      this.productos[index].precio = this.precioActualizar;
    },
    delItem(index) {
      this.productos.splice(index, 1);
    }
  }
};
</script>