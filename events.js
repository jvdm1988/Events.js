console.log("EVENTS.JS IS WORKING");

$(document).ready(function () {
  $("#my-checkbox").change(function () {
    var isChecked = $ ("#my-checkbox").prop("checked");

    if (isChecked === true) {
      $("#pizza-img").fadeIn(3000);
    }
    else {
      $("#pizza-img").hide ();
    }
  });
});

$(document).ready(function () {

  var leftAmount = 0;
  var topAmount = 0;

//keydown, keyup, keypress
  $(document).keydown(function (theEvent) {
    // theEvent.preventDefault();
    //up arrow key
    if (theEvent.which === 38) {
        topAmount -= 15;
    }
    //right arrow key
    else if (theEvent.which === 39){
        leftAmount += 15;
    }
    //down arrow key
    else if (theEvent.which === 40){
        topAmount += 15;
    }
    //left arrow key
    else if (theEvent.which === 37){
        leftAmount -= 15;
    }

$(".literally-everything").css("left", leftAmount + "px");
$(".literally-everything").css("top", topAmount + "px");
$(".literally-everything").css("position", "relative");
  });
});
