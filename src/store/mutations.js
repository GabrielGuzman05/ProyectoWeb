export default {
    //se cargan los datos
    getServicios: (state, { servicios }) => {
        state.servicios = servicios
    },
    getProductos: (state, { productos }) => {
        state.productos = productos
    },
    getPersonal: (state, { personal }) => {
        state.personal = personal
    },
    //se agrega un producto
    addProducto: (state, { nombre, imagen, precio, marca, descripcion }) => {
        state.productos.push({
            name: nombre,
            imagen: imagen,
            precio: precio,
            marca: marca,
            descripcion: descripcion
        });
    },
    //se actualiza un producto
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