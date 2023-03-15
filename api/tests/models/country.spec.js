const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});

describe('code', () => {
  it('should allow null or empty values', () => {
    Country.create({ name: 'Argentina', code: null });
    Country.create({ name: 'Argentina', code: '' });
  });
  
  it('should throw an error if the maximum length is exceeded', (done) => {
    Country.create({ name: 'Argentina', code: 'ABC' })
      .then(() => done(new Error('The maximum length of code has been exceeded')))
      .catch(() => done());
  });
});

describe('capital', () => {
  it('should allow null or empty values', () => {
    Country.create({ name: 'Argentina', capital: null });
    Country.create({ name: 'Argentina', capital: '' });
  });
  
  it('should throw an error if the maximum length is exceeded', (done) => {
    Country.create({ name: 'Argentina', capital: 'This is a very long capital name' })
      .then(() => done(new Error('The maximum length of capital has been exceeded')))
      .catch(() => done());
  });
});

describe('flag', () => {
  it('should allow null or empty values', () => {
    Country.create({ name: 'Argentina', flag: null });
    Country.create({ name: 'Argentina', flag: '' });
  });
  
  it('should throw an error if the maximum length is exceeded', (done) => {
    Country.create({ name: 'Argentina', flag: 'https://verylongurl.com/thisisaverylongurl' })
      .then(() => done(new Error('The maximum length of flag has been exceeded')))
      .catch(() => done());
  });
});

describe('name and code combination', () => {
  it('should allow unique combinations', () => {
    Country.create({ name: 'Argentina', code: 'AR' });
    Country.create({ name: 'Brazil', code: 'BR' });
  });
  
  it('should throw an error if the combination is not unique', (done) => {
    Country.create({ name: 'Argentina', code: 'AR' })
      .then(() => Country.create({ name: 'Argentina', code: 'AR' }))
      .then(() => done(new Error('The combination of name and code must be unique')))
      .catch(() => done());
  });
});

