function renderTimer() {
    $('#clockDisplay').text(moment().format('dddd MMMM Do YYYY, h:mm a'));
}
renderTimer();

// function colorMorph() {
//     var hour = moment().startOf('day').fromNow();
//     var currentHour = parseInt(hour.split(" ")[0]);
//  $('.save').each(function(){
    
//     var buttonHour = $(this).attr('id') / 100;

//     console.log(typeof currentHour, typeof buttonHour);
// }
// colorMorph();
//   if (currentHour === buttonHour ) {
//       $(this).removeClass().addClass("btn bg-danger btn-outline-secondary save");
// // } else if (currentHour <= buttonHour) {
// //   $(this).removeClass().addClass("btn bg-warning btn-outline-secondary save");
// // } else (currentHour >= buttonHour) {
// //   $(this).removeClass().addClass("btn bg-success btn-outline-secondary save");
// // }
//     //  $(this).removeClass().addClass("btn bg-warning btn-outline-secondary save");
// //  })
// }
