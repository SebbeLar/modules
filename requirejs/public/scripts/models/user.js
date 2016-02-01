define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _first = Symbol('first'),
      _last = Symbol('last'),
      _id = Symbol('id');

  var User = exports.User = function () {
    _createClass(User, [{
      key: 'id',
      get: function get() {
        return this[_id];
      }
    }, {
      key: 'first',
      get: function get() {
        return this[_first];
      }
    }, {
      key: 'last',
      get: function get() {
        return this[_last];
      }
    }]);

    function User(id, first, last) {
      _classCallCheck(this, User);

      this[_id] = id;
      this[_first] = first;
      this[_last] = last;
    }

    _createClass(User, [{
      key: 'toString',
      value: function toString() {
        return this.id + ': ' + this.first + ' ' + this.last;
      }
    }]);

    return User;
  }();
});