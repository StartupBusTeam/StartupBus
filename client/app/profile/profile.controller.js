'use strict';
const angular = require('angular');

/*@ngInject*/
export function profileController() {
  this.message = 'Hello';
}

export default angular.module('startupbusApp.profile', [])
  .controller('ProfileController', profileController)
  .name;
