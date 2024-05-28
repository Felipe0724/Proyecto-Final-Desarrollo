
let express = require('express')
let app = express()
var sql = require('mssql');

const PUERTO = process.env.port || 3001

const config = {
    user: 'TiendaLicoresUsuario',
    password: '1234',
    server: 'localhost/SQLEXPRESS',
    database: 'TiendaLicoresUsuarioBD'
}




app.get('/', (peticion, respuesta) =>{ 
    respuesta.send('respuesta con un recurso');
});

app.get('/api', (respuesta) =>{ 
    respuesta.json('Hola Mundo');
});

app.get('/Productos/1', async (peticion, respuesta, next) => {
    let pool = await sql.connect(config);

    respuesta.send('Ya hay conexion... creo')
});

app.get('/api/usuarios/Crear', (peticion, respuesta) => {})
app.get('/api/usuarios/login', (peticion, respuesta) => {})



app.get("*", (peticion, respuesta) => {
    respuesta.sendFile(path.resolve(__dirname, '../paginaweb/', 'index.html'))
})
app.listen(PUERTO, () => {
    console.log("servidor escuchando en el puerto " + PUERTO);
} )