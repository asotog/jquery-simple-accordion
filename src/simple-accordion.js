/*
 * jquery-simple-accordion
 * 
 *
 * Copyright (c) 2013 Alejandro Soto
 * Licensed under the y license.
 */

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
