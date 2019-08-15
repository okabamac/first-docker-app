"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./models"));

var PORT = process.env.PORT || 3000;
var app = (0, _express["default"])();
app.get("/",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send('Hello world Mac');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post("/create",
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var newUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req);
            _context2.prev = 1;
            _context2.next = 4;
            return _models["default"].User.create({
              username: req.username,
              email: req.email,
              password: req.password
            });

          case 4:
            newUser = _context2.sent;
            res.send(newUser);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get("/all", function (req, res) {
  _models["default"].User.findAll({}).then(function (users) {
    res.send(users);
  });
});
app.use("*", function (req, res) {
  res.status(404).json({
    status: 404,
    error: "Sorry, we couldn't find that!"
  });
});
app.use(function (err, req, res, next) {
  if (!err) return next();
  return res.status(400).json({
    status: 400,
    error: "Failed to decode param: ".concat(req.url)
  });
}); // sync() will create all table if they doesn't exist in database

_models["default"].sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Started at http://localhost:%d", PORT);
  });
});
//# sourceMappingURL=index.js.map