'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      ReviewID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      HotelID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Hotels', key: 'GlobalPropertyID' },
        onDelete: 'CASCADE'
      },
      ReviewerName:      Sequelize.STRING(100),
      ReviewSubject:     Sequelize.STRING(200),
      ReviewContent: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      ReviewDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      OverallRating: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: false
      },
      CleanlinessRating: Sequelize.DECIMAL(2, 1),
      LocationRating:    Sequelize.DECIMAL(2, 1),
      ServiceRating:     Sequelize.DECIMAL(2, 1),
      ValueRating:       Sequelize.DECIMAL(2, 1),
      createdAt:         Sequelize.DATE,
      updatedAt:         Sequelize.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Reviews');
  }
};
