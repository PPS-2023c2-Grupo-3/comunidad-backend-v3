"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _usuarios = _interopRequireDefault(require("./usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use('/usuarios', _usuarios.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map