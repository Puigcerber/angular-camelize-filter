'use strict';

describe('Filter: camelize', function () {

  beforeEach(module('puigcerber.camelize'));

  var camelize;
  beforeEach(inject(function ($filter) {
    camelize = $filter('camelize');
  }));

  it('should transform the string to lower camel case', function () {
    expect(camelize('Lower Camel Case')).toBe('lowerCamelCase');
    expect(camelize('AngularJS')).toBe('angularJS');
  });

  it('should replace non-alphanumeric characters', function () {
    expect(camelize('ng-conf')).toBe('ngConf');
    expect(camelize('Angular.io')).toBe('angularIo');
    expect(camelize('__private_key__')).toBe('privateKey');
  });

});
