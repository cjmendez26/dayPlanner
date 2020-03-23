function renderTimer() {
    $('#clockDisplay').text(moment().format('dddd MMMM Do YYYY, h:mm a'));
}
renderTimer();

function colorMorph() {
    var hour = moment().startOf('day').fromNow();
    var currentHour = parseInt(hour.split(" ")[0]);
 $('.save').each(function(){

     
     var buttonHour = $(this).attr('id') / 100;
     $(this).click(function(){
        console.log(buttonHour);
        var key = "hour-" + buttonHour;
        var value = $("#input-"+ buttonHour).val();
        console.log(value);
        window.localStorage.setItem(key, value)
     })
     
    if (currentHour === buttonHour ) {
        $(this).removeClass().addClass("btn bg-danger btn-outline-secondary save");
  } else if (currentHour <= buttonHour) {
    $(this).removeClass().addClass("btn bg-warning btn-outline-secondary save");
  } else {
    $(this).removeClass().addClass("btn bg-success btn-outline-secondary save");
  }

})}

colorMorph();



  
