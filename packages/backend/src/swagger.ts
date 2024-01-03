import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Crawler API',
      version: '1.0.0',
      description: 'API para consultar dados de produtos em sites de farmácias',
    },
  },
  apis: ['./src/routes/*.ts']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
