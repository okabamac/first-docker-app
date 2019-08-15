"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });

  User.associate = function (models) {// models.User.hasMany(models.Task);
  };

  return User;
};

exports["default"] = _default;
//# sourceMappingURL=user.js.map