  // $(function() {
  //   $("a[href^='#']").on('click', function(e) {
  //     console.log('working');
  //     $('body').animate({
  //       scrollTop: $($(this).attr('href')).offset().top }, 300, 'easeInOutQuad');
  //     e.preventDefault();
  //   });
  // });

//========== Animate Scroll-Point links ==========//

$(function() {
  $("a[href^='#']").click(function(e) {
       var elementClicked = $(this).attr("href");
       var destination = $(elementClicked).offset().top;
       $("body").animate({ scrollTop: parseInt($("body").scrollTop() + destination)} );
       e.preventDefault();
  });
});

$(function() {
  $(".skill-icon").click(function(e) {
    skill = $(this).text();
    $('.port-case').hide();
    $('[data-' + skill + '="true"]').show();
    e.preventDefault();
  });
});