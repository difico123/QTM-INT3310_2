"use strict";
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("users", {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            phoneNumber: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            role: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
            },
            dateAdded: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            lastUpdated: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable("users");
    },
};
