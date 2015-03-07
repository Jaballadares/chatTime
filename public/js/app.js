// $('.circles').on('click', function() {
//   $(this).append("<textarea></textarea>");
// });
$('.circles').on('click', function() {
  $(this).replaceWith("<textarea></textarea>" + "<button>Submit</button>");
  $('button').on('click', function() {
    $(this).after("hooray");
  });
});