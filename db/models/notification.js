"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Notification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ UserCourse }) {
            // define association here
            this.belongsTo(UserCourse, { foreignKey: "usercourses", onDelete: "cascade" });
        }
    }

    Notification.init(
        {
            usercourseId: {
                type: DataTypes.INTEGER,
                references: { model: "usercourses", key: "id" },
                allowNull: false,
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            viewed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            createdAt: {
                type: "TIMESTAMP",
                defaultValue: new Date(),
                allowNull: false,
            },
            updatedAt: {
                type: "TIMESTAMP",
                defaultValue: new Date(),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "notifications",
            modelName: "Notification",
        }
    );
    return Notification;
};
