(function ($) {
    /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

    module('jQuery#jquerySimpleAccordion', {
        // This will run before each test in this module.
        setup: function () {
            this.elems = $('#qunit-fixture').children();
        }
    });

    test('is jquerySimpleAccordion', function () {
        expect(1);
        strictEqual(this.elems.jquerySimpleAccordion().text(), '123', 'should be the same');
    });

    module('jQuery.jquerySimpleAccordion');

    module(':awesome selector', {
        // This will run before each test in this module.
        setup: function () {
            this.elems = $('#qunit-fixture').children();
        }
    });

}(jQuery));

(function ($) {

    $(document).ready(function () {
        $('.normal-mode').jquerySimpleAccordion();
        
        $('.custom-mode').jquerySimpleAccordion({toggleButtonSelector: 'label', itemContainerSelector: 'div'});
    });


}(jQuery));