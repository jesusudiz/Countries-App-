const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // moneda:{
    //   type: DataTypes.STRING,
    //   allowNull: true
    // }

  }, {
    freezeTableName: true,
    timestamps: false,
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    }
  });
};



