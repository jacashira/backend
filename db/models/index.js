const { Proveedor, ProveedorSchema } = require('./proveedor.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Proveedor.init(ProveedorSchema , Proveedor.config(sequelize))

  User.associate(sequelize.models);
  Proveedor.associate(sequelize.models);
}

module.exports = setupModels;
