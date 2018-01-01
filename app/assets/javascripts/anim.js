  // $(function() {
  //   $("a[href^='#']").on('click', function(e) {
  //     console.log('working');
  //     $('body').animate({
  //       scrollTop: $($(this).attr('href')).offset().top }, 300, 'easeInOutQuad');
  //     e.preventDefault();
  //   });
  // });


$(function() {
  $("a[href^='#']").click(function(e) {
       var elementClicked = $(this).attr("href");
       var destination = $(elementClicked).offset().top;
       $("body").animate({ scrollTop: parseInt($("body").scrollTop() + destination)} );
       e.preventDefault();
  });
});


//   $('a').click(function(e){
//     e.preventDefault();
//     console.log('default stopped');
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// });
