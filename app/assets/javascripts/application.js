// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require rails-ujs
//= require jquery-ui
//= require html.sortable
//= require cocoon
//= require gritter
//= require cable
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets


  $(document).ready(function() {
    $('.test-button').hover(function() {
      $(this).html('<a href="/about-me"></a>');
    }, function() {
      $(this).html('About');
    });
  });

  $(function() {
  $("a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 300, 'easeInOutQuad');
  });
});


  // trying out this new animation

//   (function ($, window, document, undefined) {
//     'use strict';
//     var animationObject;

//     function nvsAddAnimation() {
//         animationObject.each(function (index, element) {
//             var $currentElement = $(element),
//                 animationType = $currentElement.attr('nvs-animation-type');

//             if (nvsOnScreen($currentElement)) {
//                 $currentElement.addClass('animated ' + animationType);
//             }
//         });
//     }

//     // takes jQuery(element) a.k.a. $('element')
//     function nvsOnScreen(element) {
//         // window bottom edge
//         var windowBottomEdge = $(window).scrollTop() + $(window).height();

//         // element top edge
//         var elementTopEdge = element.offset().top;
//         var offset = 100;

//         // if element is between window's top and bottom edges
//         return elementTopEdge + offset <= windowBottomEdge;
//     }

//     $(window).load(function () {
//         animationObject = $('[nvs-animation-type]');
//         nvsAddAnimation();
//     });

//     $(window).on('scroll', function (e) {
//         nvsAddAnimation();
//     });
// }(jQuery, window, document));