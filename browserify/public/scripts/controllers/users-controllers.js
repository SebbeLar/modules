'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersController;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-ui');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('../lib/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usersController($mount, usersStore) {
  $mount.empty();

  var $parent = (0, _jquery2.default)('\n    <div class="users-controller">\n      <h1>' + _constants.APPLICATION_NAME + '</h1>\n      <ul class="users-list" />\n      <a href="#" class="add-user">Add User</a>\n    </div>\n  ').appendTo($mount);

  var $userList = $parent.find('.users-list'),
      $addUserButton = $parent.find('.add-user');

  function createUserRow(user) {
    var $row = (0, _jquery2.default)('<li />').text(user.toString()).click(function () {
      (0, _jquery2.default)('<div title="Confirm">Are you sure</div>').dialog({
        modal: true,
        buttons: {
          Delete: function Delete() {
            userStore.remove(user.id);
            $row.remove();
            (0, _jquery2.default)(this).dialog('close');
          },
          Cancel: function Cancel() {
            (0, _jquery2.default)(this).dialog('close');
          }
        }
      });
    }).appendTo($userList);

    return $row;
  }

  $addUserButton.click(function (e) {
    e.preventDefault();
    createUserRow(usersStore.add('FIRST', 'LAST'));
  }).appendTo($parent);

  _each(usersStore.users, function (u) {
    return createUserRow(u);
  });

  return {
    destroy: function destroy() {
      $parent.remove();
    }
  };
}