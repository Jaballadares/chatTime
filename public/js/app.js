// $('.circles').on('click', function() {
//   $(this).append("<textarea></textarea>");
// });
// $('.circles').on('click', function() {
//   var chatModule = "<div class='chatContainer'>" +
//                    "<p class='description'></p>" +
//                    "<textarea placeholder='This is not a chat app. \n
//                    I repeat this is not a chat app'</textarea>" +
//                    "<button class='buttonTime'>Shh</button>" +
//                    "</div>";
//   $(this).replaceWith("<div class='chatContainer'>" +"<p class='description'></p>" + "<textarea placeholder='This is not a chat App. \n I REPEAT THIS IS NOT A CHAT APP'></textarea>" + "<button class='buttonTime'>Shh</button>" + "</div>");
//   $('button').on('click', function() {
//     $(this).after("hooray");
//   });
// });
$('.circles').on('click', function() {
  var chatModule = "<div class='chatContainer'>"  +
                   "<p class='description'></p>" +
                   "<textarea placeholder='This is not a chat App. \n I REPEAT THIS IS NOT A CHAT APP'></textarea>" +
                   "<button class='buttonTime'>Shh</button>" +
                   "</div>";
  $(this).replaceWith(chatModule);
});

$('button').on('click', function() {
    $(this).after("hooray");
});
