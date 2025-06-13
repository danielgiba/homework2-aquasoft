import { Sequelize, DataTypes, Model } from 'sequelize';
//rel about review & hotel
export default (sequelize: Sequelize) => {
  class Review extends Model {
    static associate(models: any) {
      Review.belongsTo(models.Hotel, {
        foreignKey: 'HotelID',
        as: 'Hotel'
      });
    }
  }
  //review table
  Review.init({
    ReviewID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    HotelID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReviewerName: DataTypes.STRING(100),
    ReviewSubject: DataTypes.STRING(200),
    ReviewContent: { type: DataTypes.TEXT, allowNull: false },
    ReviewDate: { type: DataTypes.DATEONLY, allowNull: false },
    OverallRating: { type: DataTypes.DECIMAL(2, 1), allowNull: false },
    CleanlinessRating: DataTypes.DECIMAL(2, 1),
    LocationRating: DataTypes.DECIMAL(2, 1),
    ServiceRating: DataTypes.DECIMAL(2, 1),
    ValueRating: DataTypes.DECIMAL(2, 1),
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'Reviews',
    timestamps: true
  });

  return Review;
};
