<template>
  <section>
    <Navbar />
    <v-layout wrap ma-6 justify="center">
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
    </v-layout>
  </section>
</template>
<script>
import Navbar from "../../components/Navbar2.vue";
export default {
  components: { Navbar },
  data: () => ({
    //el estado del dialogo que tiene el formulario de nuevo producto
    dialog: false,
    //datos del formulario para nuevo producto
    nombre: "",
    marca: "",
    descripcion: "",
    precio: "",
    //si es que se esta verificando un producto
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
    //Se muestra el formulario de edición
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
      // Actualizamos los datos del producto en la posición de index
      this.$store.commit("updateProducto", {
        index: index,
        nombre: this.nombreActualizar,
        imagen: this.productos[index].imagen,
        precio: this.precioActualizar,
        marca: this.marcaActualizar,
        descripcion: this.productos[index].descripcion
      });
    },
    //eliminamos el producto en la posición de index
    delItem(index) {
      this.productos.splice(index, 1);
    },
    addItem() {
      this.$store.commit("addProducto", {
        nombre: this.nombre,
        imagen: "/imgs/productos/00.jpg",
        precio: this.precio,
        marca: this.marca,
        descripcion: this.descripcion
      });
      this.nombre = "";
      this.precio = "";
      this.marca = "";
      this.descripcion = "";
      this.dialog = false;
    }
  }
};
</script>