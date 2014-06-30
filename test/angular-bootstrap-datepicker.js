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

  describe('configured in default format (YYYY-MM-DD)', function() {
    var datepickerFn;

    beforeEach(function () {
      datepickerFn = sinon.spy(window.jQuery.fn, 'datepicker');
      scope.dateForPicker = '2013-12-01';

      element = $compile('<input class="form-control"' +
        ' bootstrap-datepicker type="text"' +
        ' ng-model="dateForPicker">')(scope);

      scope.$digest();
    });

    afterEach(function () {
      datepickerFn.restore();
    });

    it('should correctly init the widget', function () {
      expect(datepickerFn).to.have.been.called;
    });

    it('should correctly init the date from default format', function () {
      // internal datepicker format
      expect(element.val()).to.equal('01/12/2013');
    });

    describe('on change', function () {
      beforeEach(function () {
        scope.dateForPicker = '2013-12-26';
        scope.$digest();
        element.datepicker('update');
      });

      it('should update element value in its internal format', function () {
        // internal datepicker format
        expect(element.val()).to.equal('26/12/2013');
      });

      it('should update model value with default format', function () {
        expect(scope.dateForPicker).to.equal('2013-12-26');
      });
    });
  });

  describe('configured in d/m/yy display format', function() {

    beforeEach(function () {
      scope.dateForPicker = '2014-01-13';
      scope.optionsForPicker = {format: 'd/m/yy'};

      element = $compile('<input class="form-control"' +
        ' bootstrap-datepicker type="text"' +
        ' ng-model="dateForPicker"' +
        ' datepicker-options="optionsForPicker">')(scope);

      scope.$digest();
    });

    it('should correctly init date from yyyy-mm-dd format', function () {
      expect(element.val()).to.equal('13/1/14');
    });

    describe('on change', function () {
      beforeEach(function () {
        scope.dateForPicker = '2014-03-25';
        scope.$digest();
        element.datepicker('update');
      });

      it('should update element value in its internal format', function () {
        expect(element.val()).to.equal('25/3/14');
      });

      it('should update model value with yyyy-mm-dd format', function () {
        expect(scope.dateForPicker).to.equal('2014-03-25');
      });
    });
  });

  describe('configured with DD/MM/YY as format io', function () {

    beforeEach(function () {
      scope.dateForPicker = '13/01/14';

      element = $compile('<input class="form-control"' +
        ' bootstrap-datepicker type="text"' +
        ' ng-model="dateForPicker"' +
        ' datepicker-io-format="DD/MM/YY">')(scope);

      scope.$digest();
    });

    it('should correctly init date', function () {
      expect(element.val()).to.equal('13/01/2014');
    });

    it('should update model value', function () {
      expect(scope.dateForPicker).to.equal('13/01/14');
    });
  });
});