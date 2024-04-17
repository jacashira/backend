const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ProveedorService {
  constructor() {}

  async create(data) {
    const newProveedor = await models.Proveedor.create(data);
    return newProveedor;
  }

  async find() {
    const rta = await models.Proveedor.findAll();
    return rta;
  }

  async findByName(name) {
    const rta = await models.Proveedor.findOne({
      where: { name }
    });
    return rta;
  }

  async findOne(id) {
    const proveedor = await models.Proveedor.findByPk(id);
    if (!proveedor) {
      throw boom.notFound('user not found');
    }
    return proveedor;
  }

  async update(id, changes) {
    const proveedor = await this.findOne(id);
    const rta = await proveedor.update(changes);
    return rta;
  }

  async delete(id) {
    const proveedor = await this.findOne(id);
    await proveedor.destroy();
    return { id };
  }
}

module.exports = ProveedorService;
