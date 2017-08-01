'use strict';

describe('Controller: ProfileCtrl', function() {
  // load the controller's module
  beforeEach(module('startupbusApp.profile'));

  var ProfileCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ProfileCtrl = $controller('ProfileCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
