/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id:"JPT",
  nombre:"Jupiter",
  bandera: "galaxia",
  continente: "andromeda",
  subregion:"martes",
  capital: "la luna" ,
  area:2393,
  poblacion: 155559,
  mapa:"googlemaps"
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});



describe('Validadores', () => {
describe('código', () => {
it('debería lanzar un error si el código es nulo', (done) => {
Country.create({ nombre: 'Jupiter', bandera: 'galaxia', continente: 'andromeda', subregion: 'martes', capital: 'la luna', area: 2393, poblacion: 155559, mapa: 'googlemaps' })
.then(() => done(new Error('Debe incluir un código válido')))
.catch(() => done());
});
it('debería lanzar un error si el código está vacío', (done) => {
Country.create({ id: '', nombre: 'Jupiter', bandera: 'galaxia', continente: 'andromeda', subregion: 'martes', capital: 'la luna', area: 2393, poblacion: 155559, mapa: 'googlemaps' })
.then(() => done(new Error('Debe incluir un código válido')))
.catch(() => done());
});
it('debería lanzar un error si la longitud del código es demasiado larga', (done) => {
Country.create({ id: 'JPTEXTRA', nombre: 'Jupiter', bandera: 'galaxia', continente: 'andromeda', subregion: 'martes', capital: 'la luna', area: 2393, poblacion: 155559, mapa: 'googlemaps' })
.then(() => done(new Error('El código debe tener una longitud máxima de 3 caracteres')))
.catch(() => done());
});
});
});
describe('Validators', () => {
  describe('nombre', () => {
    it('debe lanzar un error si nombre es nulo', (done) => {
      Country.create({ id: 'JPT', bandera: 'galaxia', continente: 'andromeda', subregion: 'martes', capital: 'la luna', area: 2393, poblacion: 155559, mapa: 'googlemaps' })
        .then(() => done(new Error('Debe incluir un nombre válido')))
        .catch(() => done());
    });
    it('debe lanzar un error si nombre es vacío', (done) => {
      Country.create({ id: 'JPT', nombre: '', bandera: 'galaxia', continente: 'andromeda', subregion: 'martes', capital: 'la luna', area: 2393, poblacion: 155559, mapa: 'googlemaps' })
        .then(() => done(new Error('Debe incluir un nombre válido')))
        .catch(() => done());
    });
    it('debe lanzar un error si nombre es demasiado largo', (done) => {
      Country.create({ id: 'JPT', nombre: 'Jupiter'.repeat(10), bandera: 'galaxia', continente: 'andromeda', subregion: 'martes', capital: 'la luna', area: 2393, poblacion: 155559, mapa: 'googlemaps' })
        .then(() => done(new Error('El nombre debe tener una longitud máxima de 50 caracteres')))
        .catch(() => done());
    });
  });
});
