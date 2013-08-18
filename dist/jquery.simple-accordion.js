/*! simple-accordion - v1.0.0 - 2013-08-17
* https://github.com/asotog88/jquery-simple-accordion
* Copyright (c) 2013 Alejandro Soto; Licensed y */
(function ($) {

  // Static method.
  $.fn.jquerySimpleAccordion = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.awesome.options, options);
    // Return something awesome.
    return $(this);
  };

  // Static method default options.
  $.awesome.options = {
    punctuation: '.'
  };

}(jQuery));
