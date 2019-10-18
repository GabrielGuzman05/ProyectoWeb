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
          <th>Apellido</th>
          <th>Rol</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(persona, index) in personal" :key="index">
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="nombreActualizar" type="text" class="form-control" />
            </span>
            <span v-else>{{persona.name}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="apellidoActualizar" type="text" class="form-control" />
            </span>
            <span v-else>{{persona.apellido}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <input v-model="rolActualizar" type="number" class="form-control" min="1" />
            </span>
            <span v-else>{{persona.rol}}</span>
          </td>
          <td>
            <span v-if="formActualizar && idActualizar == index">
              <v-btn v-on:click.native="guardarActualizacion(index)"><v-icon color="green">far fa-save</v-icon></v-btn>
            </span>
            <span v-else>
              <v-btn v-on:click.native="editItem(index)"><v-icon color="blue">fas fa-edit</v-icon></v-btn>
              <v-btn v-on:click.native="delItem(index)"><v-icon color="red">far fa-minus-square</v-icon></v-btn>
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
    // Input apellido dentro del formulario de actualizar
    apellidoActualizar: "",
    // Input rol dentro del formulario de actualizar
    rolActualizar: ""
  }),
  computed: {
    // Getters
    personal() {
      return this.$store.state.personal;
    }
  },
  watch: {},
  created() {
    // Se crea un action con el objetivo de obtener el personal
    //(Consumir la API)
    this.$store.dispatch("getAllPersonal");
  },
  methods: {
    //Se muestra el formulario de edición
    editItem(index) {
      this.idActualizar = index;
      this.nombreActualizar = this.personal[index].name;
      this.apellidoActualizar = this.personal[index].apellido;
      this.rolActualizar = this.personal[index].rol;
      // Mostramos el formulario
      this.formActualizar = true;
    },
    guardarActualizacion: function(index) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizar = false;
      // Actualizamos los datos
      this.personal[index].nombre = this.nombreActualizar;
      this.personal[index].apellido = this.apellidoActualizar;
      this.personal[index].rol = this.rolActualizar;
    },
    //eliminamos el producto en la posición de index
    delItem(index) {
      this.personal.splice(index, 1);
    }
  }
};
</script>