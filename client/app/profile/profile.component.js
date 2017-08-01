'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './profile.routes';

export class ProfileComponent {
  $http;
  socket;

  newTrade;
  newLocation;
  newTelephone;
  newKeywords = [];
  newPhoto;
  newBio;

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.message = 'Hello';
  }

  addProfile() {
    console.log("this.newTrade, this.newLocation")
  }

}


export default angular.module('startupbusApp.profile', [uiRouter])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  })
  .name;
