import { Model, Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  //association/relation -> 1 reg has many hotels (one-to-many)
  class Region extends Model {
    static associate(models: any) {
      Region.hasMany(models.Hotel, {
        foreignKey: 'PropertyStateProvinceID',
        as: 'Hotels'
      });
    }
  }
  //create table
  Region.init(
    {
      PropertyStateProvinceID: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      PropertyStateProvinceName: {
        type: dataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Region',
      tableName: 'Regions',
      timestamps: true
    }
  );

  return Region;
};
