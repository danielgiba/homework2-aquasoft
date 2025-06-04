'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hotels', {
      GlobalPropertyID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SourcePropertyID: {
        type: Sequelize.STRING
      },
      GlobalPropertyName: {
        type: Sequelize.STRING
      },
      GlobalChainCode: {
        type: Sequelize.STRING
      },
      PropertyAddress1: {
        type: Sequelize.TEXT
      },
      PropertyAddress2: {
        type: Sequelize.TEXT
      },
      PrimaryAirportCode: {
        type: Sequelize.STRING
      },
      CityID: {
        type: Sequelize.INTEGER
      },
      PropertyStateProvinceID: {
        type: Sequelize.INTEGER
      },
      PropertyZipPostal: {
        type: Sequelize.STRING
      },
      PropertyPhoneNumber: {
        type: Sequelize.STRING
      },
      PropertyFaxNumber: {
        type: Sequelize.STRING
      },
      SabrePropertyRating: {
        type: Sequelize.DECIMAL
      },
      PropertyLatitude: {
        type: Sequelize.DECIMAL
      },
      PropertyLongitude: {
        type: Sequelize.DECIMAL
      },
      SourceGroupCode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};