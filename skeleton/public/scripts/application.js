'use strict';

var _usersStore = require('./model/users-store');

var _usersControllers = require('./controllers/users-controllers');

var _usersControllers2 = _interopRequireDefault(_usersControllers);

var _util = require('./lib/util');

var util = _interopRequireWildcard(_util);

require('./script');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('LOADING APPLICATION');

var store = new _usersStore.UsersStrore();
var $mount = $('#mount');
(0, _usersControllers2.default)($mount, store);

util.func1();
util.func2();