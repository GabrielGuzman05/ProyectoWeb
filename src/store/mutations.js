export default {
    getServicios: (state, { servicios }) => {
        state.servicios = servicios
    },
    getProductos: (state, { productos }) => {
        state.productos = productos
    },
    getPersonal: (state, { personal }) => {
        state.personal = personal
    },
    addProducto: (state, { nombre, imagen, precio, marca, descripcion }) => {
        state.productos.push({
            name: nombre,
            imagen: imagen,
            precio: precio,
            marca: marca,
            descripcion: descripcion
        });
    },
    updateProducto: (state, { index, nombre, imagen, precio, marca, descripcion }) => {
        state.productos[index] = {
            name: nombre,
            imagen: imagen,
            precio: precio,
            marca: marca,
            descripcion: descripcion
        };
    }
}