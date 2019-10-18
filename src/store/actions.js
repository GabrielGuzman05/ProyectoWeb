import axios from 'axios'
export default {
    getAllServices: (context) => {
        axios.get('/datos/servicios.json').then(response => {
                let servicios = response.data
                context.commit('getServicios', { servicios })
            })
    },
    getAllProducts: (context) => {
        axios.get('/datos/productos.json').then(response => {
                let productos = response.data
                context.commit('getProductos', { productos })
            })
    },
    getAllPersonal: (context) => {
        axios.get('/datos/personal.json').then(response => {
                let personal = response.data
                context.commit('getPersonal', { personal })
            })
    }

}