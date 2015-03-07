// $('.circles').on('click', function() {
//   $(this).append("<textarea></textarea>");
// });
$('.circles').on('click', function() {
  $(this).replaceWith("<div class='chatContainer'>" + "<textarea></textarea>" + "<button class='buttonTime'>Shh</button>" + "</div");
  $('button').on('click', function() {
    $(this).after("hooray");
  });
});