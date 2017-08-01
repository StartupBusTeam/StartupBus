'use strict';
// @flow

import angular from 'angular';

type Profile = {
  trade: string;
  location: string;
  telephone: string;
  keywords: string;
  photo: File;
  bio: string;
};

export default class ProfileController {
  profile: Profile = {
    trade: '',
    location: '',
    telephone: '',
    keywords: '',
    photo: '',
    bio: '',
  };
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;
    console.log("somethings working", this.profile);
    // if(form.$valid) {
    //   return this.Auth.createUser({
    //     name: this.user.name,
    //     email: this.user.email,
    //     password: this.user.password
    //   })
    //     .then(() => {
    //       // Account created, redirect to home
    //       this.$state.go('profile');
    //     })
    //     .catch(err => {
    //       err = err.data;
    //       this.errors = {};
    //       // Update validity of form fields that match the mongoose errors
    //       angular.forEach(err.errors, (error, field) => {
    //         form[field].$setValidity('mongoose', false);
    //         this.errors[field] = error.message;
    //       });
    //     });
    // }
  }
}
