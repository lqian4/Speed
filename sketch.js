//var slider = document.getElementById("slider");
//var output = document.getElementById("speed");
//var fail = document.getElementById("fail");
//var failtime = 0;
//output.innerHTML = slider.value;
//
//slider.oninput = function () {
//    output.innerHTML = this.value;
//    $("#loading").css(
//        "animation-duration", 5 / this.value + "s"
//    );
//
//    if (this.value > 8) {
//        $("#fish").css(
//            "animation-duration", "15s"
//        );
//        if (failtime == 0) {
//            failtime = slider.value
//            fail.innerHTML = "fail time: " + failtime;
//        }
//    } else {
//        $("#fish").css(
//            "animation-duration", 7 / this.value + "s"
//        );
//    }
//
//
//
//}


$(document).on('input', '#slider', function() {
    var speed = $(this).val();
    $('#speed').html(speed);
    $("#loading").css(
        "animation-duration", 50/speed + "s"
    );
});
