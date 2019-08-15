"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var sequelize = new _sequelize["default"](process.env.TEST_DB || process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  define: {
    underscored: true
  }
});
var models = {
  User: sequelize["import"]('./user')
};
Object.keys(models).forEach(function (modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});
models.sequelize = sequelize;
models.Sequelize = _sequelize["default"];
var _default = models;
exports["default"] = _default;
//# sourceMappingURL=index.js.map