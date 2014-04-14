var expect = chai.expect;
// mocha.setup({globals: ['ch']});

describe('Input date directive', function () {
  var $compile, $rootScope, scope, element;
  beforeEach(module('bootstrap-datepicker'));

  beforeEach(inject(function ($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');

    scope = $rootScope.$new();
  }));

  describe('configured in ISO format', function() {

    beforeEach(function () {
      scope.dateForPicker = new Date(2013, 11, 1, 12).toISOString();

      element = $compile('<input class="form-control"' +
        ' input-date type="text"' +
        ' ng-model="dateForPicker"' +
        ' date-format="ISOString">')(scope);

      scope.$digest();
    });

    it('should correctly init date from ISO format', function () {
      // internal datepicker format
      expect(element.val()).to.equal('01/12/2013');
    });

    describe('on change', function () {
      beforeEach(function () {
        scope.dateForPicker = new Date(2014, 11, 26, 12).toISOString();
        scope.$digest();
        element.datepicker('update');
      });

      it('should update element value in its internal format', function () {
        // internal datepicker format
        expect(element.val()).to.equal('26/12/2014');
      });

      it('should update model value with ISO format', function () {
        expect(scope.dateForPicker).to.equal(new Date(2014, 11, 26, 12).toISOString());
      });
    });
  });

  describe('configured in yyyy-mm-dd format', function() {

    beforeEach(function () {
      scope.dateForPicker = '2013-01-31';

      element = $compile('<input class="form-control"' +
        ' input-date type="text"' +
        ' ng-model="dateForPicker"' +
        ' date-format="yyyy-mm-dd">')(scope);

      scope.$digest();
    });

    it('should correctly init date from yyyy-mm-dd format', function () {
      expect(element.val()).to.equal('2013-01-31');
    });

    describe('on change', function () {
      beforeEach(function () {
        scope.dateForPicker = '2014-12-25';
        scope.$digest();
        element.datepicker('update');
      });

      it('should update element value in its internal format', function () {
        expect(element.val()).to.equal('2014-12-25');
      });

      it('should update model value with yyyy-mm-dd format', function () {
        expect(scope.dateForPicker).to.equal('2014-12-25');
      });
    });
  });
});