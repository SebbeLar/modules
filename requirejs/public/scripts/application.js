define(['./models/users-store', './controllers/users-controllers', './lib/util', 'jquery', './script'], function (_usersStore, _usersControllers, _util, _jquery) {
  'use strict';

  var _usersControllers2 = _interopRequireDefault(_usersControllers);

  var util = _interopRequireWildcard(_util);

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log('LOADING APPLICATION');
  var store = new _usersStore.UsersStore();
  var $mount = (0, _jquery2.default)('#mount');
  (0, _usersControllers2.default)($mount, store);
  util.func1();
  util.func2();
});