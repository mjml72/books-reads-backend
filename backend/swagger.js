import swaggerAutogen from 'swagger-autogen';

process.loadEnvFile('./.env');

const PORT = process.env.PORT || 3000;

const doc = {
    info: {
        title: 'Book Reads',
        description: 'Documentación de la API para la gestión de lectura, guardar los libros leidos, leyendo, querer leer',
    },
    host: PORT,
    schemes: ['http'],
};


const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js']; 


swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index'); // Inicia el servidor automáticamente
});