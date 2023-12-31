const sequelize = require("sequelize");
const db = require("../config/db");

class Area extends sequelize.Model {}

Area.init(
  {
    area: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize: db, modelName: "Area" }
);

module.exports = Area;
