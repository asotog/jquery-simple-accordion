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
        if (options.mode == 'normal') {
            $(this).find(options.toggleButtonSelector).click(function (e) {
                e.preventDefault();
                $(this).parent().find(options.itemContainerSelector).slideToggle();
                console.info('clicked');
            });
        }
        // Return something awesome.
        return $(this);
    };

    // Static method default options.
    $.fn.jquerySimpleAccordion.options = {
        mode: 'normal',
        toggleButtonSelector: 'li > a',
        itemContainerSelector: '> div'
    };

}(jQuery));