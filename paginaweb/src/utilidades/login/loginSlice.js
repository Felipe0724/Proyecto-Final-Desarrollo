import { createSlice } from '@reduxjs/toolkit'


export const loginSlide =  createSlice({
    name: "login",
    initialState: {
        nombreUsuario: "Invitado", 
        contraseña: ""
    },

    reducers: {
        guardarUsuario: (usuario, peticion) =>
        {
            console.log(usuario, peticion);
            usuario.nombreUsuario = peticion.payload
            console.log(usuario)
        },

        borrarUsuario: (usuario) =>
        {
            usuario = {nombreUsuario: "Invitado", contraseña: ""}
        },
    },
})


export const {guardarUsuario, borrarUsuario} = loginSlide.actions

export default loginSlide.reducer