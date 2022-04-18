"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Rate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ UserCourse }) {
            // define association here
            this.belongsTo(UserCourse, { foreignKey: "usercourseId", onDelete: "cascade" });
        }
    }
    Rate.init(
        {
            usercourseId: {
                type: DataTypes.INTEGER,
                references: { model: "usercourses", key: "id" },
                allowNull: false,
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            rating: {
                type: DataTypes.ENUM("1", "2", "3", "4", "5"),
                defaultValue: "1",
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
            modelName: "Rate",
            tableName: "rates",
        }
    );
    return Rate;
};