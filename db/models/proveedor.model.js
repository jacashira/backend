const { Model,DataTypes, Sequelize } = require('sequelize');

const PROVEEDOR_TABLE = 'proveedores';

const ProveedorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  razon_social: {
    allowNull: false,
    type: DataTypes.STRING
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Proveedor extends Model {

  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVEEDOR_TABLE,
      modelName: 'Proveedor',
      timestamps: false
    }
  }
}


module.exports = { PROVEEDOR_TABLE, ProveedorSchema, Proveedor }
