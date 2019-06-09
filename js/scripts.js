$(document).ready(function() {

  $("form#quiz").submit(function(event) {

    var answer = $("input:radio[name=gayorstraight]:checked").val();

    console.log(answer);

    if (answer === "gay") {
      $("div#gay-message").show();
    } else {
      $("div#straight-message").show();
    }

    /*$(".hidden").show();
    $("#gay-message").show();*/

    event.preventDefault();
  });

  $("button#try-again").click(function() {
    location.reload(true);
  });

});

/*$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var gayorboring = $("input#gayorstraight").val();

    if (gayorboring === "gay") {
      $("div#gay-message").show();
    } else {
      $("div#straight-message").show();
    }

    event.preventDefault();
  });
  $("button#try-again").click(function() {
    location.reload(true);
  });
});*/
