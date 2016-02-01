import {UsersStore} from './models/users-store';
import usersController from './controllers/users-controllers';
import * as util from './lib/util';
import './script';
import $ from 'jquery';

console.log('LOADING APPLICATION');

const store = new UsersStore();
const $mount = $('#mount');

usersController($mount, store);




util.func1();
util.func2();
