import { Model, Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Hotel extends Model {
    //for fk(city & region)
    static associate(models: any) {
      Hotel.belongsTo(models.City, {
        foreignKey: 'CityID',
        as: 'City'
      });

      Hotel.hasMany(models.Review, { 
        foreignKey: 'HotelID', 
        as: 'Reviews' 
      });

      Hotel.belongsTo(models.Region, {
        foreignKey: 'PropertyStateProvinceID',
        as: 'Region'
      });
    }
  }
  //create table
  Hotel.init(
    {
      GlobalPropertyID: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      SourcePropertyID: dataTypes.STRING(50),
      GlobalPropertyName: dataTypes.STRING(100),
      GlobalChainCode: dataTypes.STRING(10),
      PropertyAddress1: dataTypes.TEXT,
      PropertyAddress2: dataTypes.TEXT,
      PrimaryAirportCode: dataTypes.STRING(10),
      CityID: dataTypes.INTEGER,
      PropertyStateProvinceID: dataTypes.INTEGER,
      PropertyZipPostal: dataTypes.STRING(20),
      PropertyPhoneNumber: dataTypes.STRING(20),
      PropertyFaxNumber: dataTypes.STRING(20),
      SabrePropertyRating: dataTypes.DECIMAL(3, 1),
      PropertyLatitude: dataTypes.DECIMAL(9, 6),
      PropertyLongitude: dataTypes.DECIMAL(9, 6),
      SourceGroupCode: dataTypes.STRING(10)
    },
    {
      sequelize,
      modelName: 'Hotel',
      tableName: 'Hotels',
      timestamps: true
    }
  );

  return Hotel;
};
