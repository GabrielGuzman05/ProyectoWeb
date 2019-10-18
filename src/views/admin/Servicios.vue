<template>
  <section>
    <Navbar />
    <v-simple-table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(servicio, index) in servicios" :key="index">
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="nombreActualizar" type="text" class="form-control" />
            </span>
            <span v-else>{{servicio.name}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="descripcionActualizar" type="text" class="form-control" />
            </span>
            <span v-else>{{servicio.descripcion}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="precioActualizar" type="number" class="form-control" min="1" />
            </span>
            <span v-else>${{servicio.precio}}</span>
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
    // Input descripcion dentro del formulario de actualizar
    descripcionActualizar: "",
    // Input precio dentro del formulario de actualizar
    precioActualizar: ""
  }),
  computed: {
    // Getters
    servicios() {
      return this.$store.state.servicios;
    }
  },
  watch: {},
  created() {
    // Se crea un action con el objetivo de obtener los Servicios
    //(Consumir la API)
    this.$store.dispatch("getAllServices");
  },
  methods: {
    editItem(index) {
      this.idActualizar = index;
      this.nombreActualizar = this.servicios[index].name;
      this.descripcionActualizar = this.servicios[index].descripcion;
      this.precioActualizar = this.servicios[index].precio;
      // Mostramos el formulario
      this.formActualizar = true;
    },
    guardarActualizacion: function(index) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizar = false;
      // Actualizamos los datos
      this.servicios[index].nombre = this.nombreActualizar;
      this.servicios[index].descripcion = this.descripcionActualizar;
      this.servicios[index].precio = this.precioActualizar;
    },
    delItem(index) {
      this.servicios.splice(index, 1);
    }
  }
};
</script>