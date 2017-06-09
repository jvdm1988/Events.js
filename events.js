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
