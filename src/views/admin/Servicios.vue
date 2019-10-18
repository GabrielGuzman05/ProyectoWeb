<template>
  <section>
    <Navbar />
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">
              <v-icon>far fa-plus-square</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Nuevo Producto</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-col cols="12">
                  <v-text-field label="Nombre*" v-model="nombre" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Marca*" v-model="marca" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Descripción*" v-model="descripcion" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Precio*" type="number" v-model="precio" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input label="Imagen*"></v-file-input>
                </v-col>
              </v-container>
              <small>*indica un campo requerido</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
              <v-btn color="blue darken-1" text @click="addItem()">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
    <v-container>
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
                <v-btn v-on:click.native="guardarActualizacion(index)">
                  <v-icon color="green">far fa-save</v-icon>
                </v-btn>
              </span>
              <span v-else>
                <v-btn v-on:click.native="editItem(index)">
                  <v-icon color="blue">fas fa-edit</v-icon>
                </v-btn>
                <v-btn v-on:click.native="delItem(index)">
                  <v-icon color="red">far fa-minus-square</v-icon>
                </v-btn>
              </span>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
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