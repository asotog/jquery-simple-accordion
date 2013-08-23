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
        options = $.extend({}, $.fn.jquerySimpleAccordion.options, options);
        $(this).find(options.toggleButtonSelector).click(function (e) {
            e.preventDefault();
            var box = $(this).parent().find(options.itemContainerSelector);
            box.slideToggle();
            box.parent().toggleClass(options.collapsedClass);
        });
        // Return something awesome.
        return $(this);
    };

    // Static method default options.
    $.fn.jquerySimpleAccordion.options = {
        toggleButtonSelector: 'li > a',
        itemContainerSelector: '> div',
        collapsedClass: 'collapsed'
    };

}(jQuery));