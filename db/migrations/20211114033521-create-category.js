"use strict";
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("categories", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
            },
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable("categories");
    },
};
