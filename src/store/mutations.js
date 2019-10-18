export default {
    getServicios: (state, { servicios }) => {
        state.servicios = servicios
    },
    getProductos: (state, { productos }) => {
        state.productos = productos
    },
    getPersonal: (state, { personal }) => {
        state.personal = personal
    }
}