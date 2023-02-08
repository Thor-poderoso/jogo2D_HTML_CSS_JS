$(document).ready(function () {
  var i = 1;

  $("body").keydown(function (e) {
    if (e.keyCode == 37) { //left
      var run = "pos" + (++i);
      $("#aladdin").addClass(run);
      if (i >= 4) {
        $("#aladdin").removeClass();
        $("#aladdin").addClass("char");
        i = 0;
      }
    }
  });
});

$(document).ready(function () {
  var i = 1;

  $("body").keydown(function (e) {
    if (e.keyCode == 37) { //left
      var run = "pos" + (++i);
      $("#aladdin").addClass(run);
      if (i >= 4) {
        $("#aladdin").removeClass();
        $("#aladdin").addClass("char");
        i = 0;
      }
    }
  });
});

