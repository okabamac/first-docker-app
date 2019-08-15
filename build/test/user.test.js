"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _expect = _interopRequireDefault(require("expect.js"));

var _models = _interopRequireDefault(require("../models"));

// import chai from "chai";
// import chaiHttp from "chai-http";
// import app from "../../app";
// chai.use(chaiHttp);
// chai.should();
describe("models/index", function () {
  it("returns the user model", function () {
    (0, _expect["default"])(_models["default"].User).to.be.ok();
  });
});
//# sourceMappingURL=user.test.js.map