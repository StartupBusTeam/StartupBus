'use strict';

import angular from 'angular';
import ProfileController from './profile.controller';

export default angular.module('startupbusApp.profile', [])
  .controller('ProfileController', ProfileController)
  .name;
