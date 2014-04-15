var expect = chai.expect;
chai.config.includeStack = true; // defaults to false


describe('Input date directive', function () {
  var $compile, $rootScope, scope, element;
  beforeEach(module('bootstrap-datepicker'));

  beforeEach(inject(function ($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');

    scope = $rootScope.$new();
  }));

  describe('dynamic reconfiguration', function() {

    beforeEach(function () {
      scope.dateForPicker = '01/01/1901';

      // we'll use this hook function as a reset detector
      scope.datePickerOptions = {
        beforeShowDay: sinon.spy()
      };

      element = $compile('<input class="form-control"' +
        ' bootstrap-datepicker type="text"' +
        ' ng-model="dateForPicker"' +
        ' datepicker-options="datePickerOptions" >')(scope);

      scope.$digest();
    });

    it('should be taken into account at start', function () {
      expect( scope.datePickerOptions.beforeShowDay).to.have.been.called;
    });

    it.only('should be applied on dynamic change', function () {

      expect( scope.datePickerOptions.beforeShowDay).to.have.been.called;

      // change options
      scope.datePickerOptions.toto = 1;
      // reset our detector
      scope.datePickerOptions.beforeShowDay.reset();

      // not called yet
      expect( scope.datePickerOptions.beforeShowDay).to.not.have.been.called;

      // for watch to trigger
      scope.$digest();

      // ok
      expect( scope.datePickerOptions.beforeShowDay).to.have.been.called;
    });

  });
});