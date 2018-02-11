
//========== Animate Scroll-Point links ==========//

$(function() {
  console.log("fisrt function ran");
  $('body').on('scroll',function() {
    var window_height = $(window).height();
    var window_top_position = $('body').scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    var $animation_elements = $('.animation-element');
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      if ((($('body').scrollTop() + element_bottom_position) >= window_top_position) &&
          (($('body').scrollTop() + element_top_position) <= window_bottom_position)) {
        if (!$element.hasClass('waiting') && !$element.hasClass('in-view')) {
          $element.addClass('waiting');
          setTimeout(function() {
            $element.addClass('in-view');
            $element.removeClass('waiting');
            if ($element.hasClass('port-case')) {
              setTimeout(function() {
                $element.removeClass('animation-element');
                $element.removeClass('in-view');
                $element.removeClass('slide-top');
              },1000);
            }
          },Math.random() * 1000);
        }
      } else {
        $element.removeClass('in-view');
        $element.delay(0);
      }
    });
  });
});

// Animate scroll to anchor points for brackets on home page
$(function() {
  $("a[href^='#']").click(function(e) {
       var elementClicked = $(this).attr("href");
       var destination = $(elementClicked).offset().top;
       $("body").animate({ scrollTop: parseInt($("body").scrollTop() + destination)} );
       e.preventDefault();
  });
});

// Filter Portfolio Cards based on selected skill
$(function() {
  $(".skill-icon").click(function(e) {
    $('.skill-icon.selected').removeClass('selected');
    $('.all-skill-icon.selected').removeClass('selected');
    $(this).addClass('selected');
    let skill = $(this).text();
    $('.port-case').hide();
    $('[data-' + skill + '="true"]').show();
    e.preventDefault();
  });
});

//Show all portfolio cards
$(function() {
  $(".all-skill-icon").click(function(e) {
    $('.skill-icon.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.port-case').show();
    e.preventDefault();
  });
});