const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    duracion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    temporada: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
      allowNull: true
    },
    pais: {
      type: DataTypes.ARRAY(DataTypes.STRING), 
      allowNull: false 
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
};
