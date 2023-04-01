/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');
const { getCountries, getCountriesById } = require('../../src/controllers/index.js');
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



//* Ruta get para todos los paises

describe('getCountries', () => {
  test('Debería devolver todos los países', async () => {
    // Crear un mock de Country.findAll() que devuelva un arreglo de países
    Country.findAll = jest.fn().mockResolvedValue([{nombre: 'Argentina'}, {nombre: 'Uruguay'}]);

    // Hacer una petición a la función getCountries
    const req = { query: {} };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getCountries(req, res);

    // Verificar que se llamó a Country.findAll() una vez
    expect(Country.findAll).toHaveBeenCalledTimes(1);

    // Verificar que se envió la respuesta con los países encontrados
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([{nombre: 'Argentina'}, {nombre: 'Uruguay'}]);
  });

  test('Debería devolver un país por nombre', async () => {
    // Crear un mock de Country.findOne() que devuelva un país
    Country.findOne = jest.fn().mockResolvedValue({nombre: 'Argentina'});

    // Hacer una petición a la función getCountries con el parámetro name
    const req = { query: { name: 'argentina' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getCountries(req, res);

    // Verificar que se llamó a Country.findOne() una vez con el nombre del país en mayúsculas
    expect(Country.findOne).toHaveBeenCalledTimes(1);
    expect(Country.findOne).toHaveBeenCalledWith({ where: { nombre: 'Argentina' } });

    // Verificar que se envió la respuesta con el país encontrado
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({nombre: 'Argentina'});
  });

  test('Debería devolver un error si no se encuentra el país', async () => {
    // Crear un mock de Country.findOne() que no devuelva ningún país
    Country.findOne = jest.fn().mockResolvedValue(null);

    // Hacer una petición a la función getCountries con un nombre de país que no existe
    const req = { query: { name: 'fakecountry' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getCountries(req, res);

  });
});


//*ruta GET por ID

describe('getCountriesById', () => {
  test('Debería devolver un país por id', async () => {
    // Crear un mock de Country.findByPk() que devuelva un país
    Country.findByPk = jest.fn().mockResolvedValue({ id: "ARG", nombre: 'Argentina' });

    // Hacer una petición a la función getCountriesById con el id del país
    const req = { params: { id: "ARG" } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getCountriesById(req, res);

    // Verificar que se llamó a Country.findByPk() una vez con el id del país
    expect(Country.findByPk).toHaveBeenCalledTimes(1);
    expect(Country.findByPk).toHaveBeenCalledWith(1);

    // Verificar que se envió la respuesta con el país encontrado
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ id: 'ARG', nombre: 'Argentina' });
  });

  test('Debería devolver un error si no se encuentra el país', async () => {
    // Crear un mock de Country.findByPk() que no devuelva ningún país
    Country.findByPk = jest.fn().mockResolvedValue(null);

    // Hacer una petición a la función getCountriesById con un id de país que no existe
    const req = { params: { id: 'AAA '} };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    await getCountriesById(req, res);

    // Verificar que se llamó a Country.findByPk() una vez con el id del país
    expect(Country.findByPk).toHaveBeenCalledTimes(1);
    expect(Country.findByPk).toHaveBeenCalledWith('AAA');

    // Verificar que se envió la respuesta con el mensaje de error adecuado
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('ID no existe por favor intente con otro"');
  });
});
