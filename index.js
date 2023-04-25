//console.log("hello world");


//1.Importando el modulo de Node
//http
import http from 'http';
import path from 'path';


//biblioteca path
//import http from 'path';


//recreando built-in variables
global["__dirname"]= path.dirname(new URL (import.meta.url).pathname);
global["__filename"]= path.join (__dirname, path.basename(new URL (import.meta.url).pathname));


//2.Crear el servidor
//con toda su logica
const server = http.createServer( (req, res)=> {
    res.setHeader('Content-Type', 'text/html');

res.write("<html>");
res.write("<head>");
res.write("<title> My App </title>");
res.write("</head>");
res.write("<body>");
res.write("<h1> Hello from my server... </h1>");
res.write("</body>");
res.write("</html>");

//creando un logger de peticiones
console.log( `Contestandp recursos : ${req.method} ${req.url}`);


    //toda la logica del server
    //1.Respondiendo al cliente
    //res.write(`
   // _dirname: ${__dirname}
   // _filename: ${__filename}
   // `);


    //2. Cerrar la conexion
    console.log(`Cerramos la conexion...`);
    res.end();
});


//3.Arrancamos el servidor
//server.listen(<puerto>, <ip>, <callback>);
/*
Siempre se recomienda el puerto 3000
Siempre se recomienda la mascara 0.0.0.0
El callback siempre es una funcion
*/
server.listen(3000, "0.0.0.0", () => {
    console.log("Servidor escuchado en http://localhost:3000");
});