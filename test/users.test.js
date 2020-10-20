const supertest = require('supertest');
const app =  require('../app');

describe('Probar las rutas de usuarios', () => {
    test('Deberia de obtener la lista de usuarios', () => {
      return supertest(app).get('/users/')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.NWY3ZGU2YmZlODM0OTgwODA1ODkyMGJm.o77bojBPOurdoD5oPANUt3jf8F2cZiAN96VJpQ296eg')
      .then((response)=> {
        expect(response.statusCode).toEqual(200);
      });
    });
});
