var disk, speed, rotSpeed, rotSpeed2, direction, fail, fail0, fail25, fail50, failSpeed;

var direction = "+=360";
var fishfail = false;
var fail0 = 100;
var fail25 = 71;
var fail50 = 58;


function rotate() {
    TweenMax.to('#loading', rotSpeed, {
        rotation: direction,
        ease: Linear.easeNone,
        repeat: -1
    });
    TweenMax.to('#fish', rotSpeed2, {
        rotation: direction,
        ease: Linear.easeNone,
        repeat: -1
    });
}


$(document).on('input', '#slider', function () {
    speed = $(this).val();
    rotSpeed = 11 - speed / 10;
    
    $('#speed').html(Math.floor(speed * 0.2841 - 0.7246));
    rotSpeed = rotSpeed === 11 ? 0 : rotSpeed;
    rotSpeed2 = 12 - speed / 10;
       rotSpeed2 = rotSpeed2 === 12 ? 0 : rotSpeed2; 
      rotate();
    
    
  
    
    if (Number(speed) > failSpeed) {
        fishfail = true;
        fishFail();
        $('#fail').html("Fail! Fail at " + Math.floor(failSpeed * 0.2841 - 0.7246) + " volts" );
         rotate();
        
}
});

function fishFail () {
    if (fishfail == true) {
       rotSpeed2 = 40;
    }  else if (fishfail) {
        return;
    }
}

function showDirection(direction){
    $('#fishdirection').html(direction);
}

function showCond(condition){
    $('#cond').html(condition);
}

function showFish(condition){
    $('#cond').html(condition);
}


$(function () {

    $(".dropdown-menu a").click(function () {
        //set text
        $(".dropdown-toggle").text($(this).text());

        //set direction
        if ($(this).attr("data-direction") == "cw") {
            direction = "+=360"
            $("#fish").attr("src", "fish2.png");
        } else {
            direction = "-=360"
            $("#fish").attr("src", "fish3.png");
        }
      

    });

});


function fail() {
    if ( Number(speed) > failSpeed) {
        console.log("fail");
  
        }
}


$(".switch").click(function () {
    var contamination = $(this).attr("data-volts");
    switch (contamination) {
        case 0:
            var fail = fail0;
            break;
        case 25:
            var fail = fail25;
            break;
        default:
            var fail = fail50;
    }
});





$("button[type='button']").click(function () {
    switch (this.id) {
        case 'cond1':
            if ($(".dropdown-item").attr("data-direction") == "cw") {
                failSpeed = 71;
            } else if ($(".dropdown-item").attr("data-direction") == "ccw")
            {
                failSpeed = 100;
            }

            break;
        case 'cond2':
            if ($(".dropdown-item").attr("data-direction") == "ccw") {
                failSpeed = 23;
            } else {
                failSpeed = 15;
            }

            break;
    }
});


	
$('#cont').on('click', function() {
     $('#cond1').attr('disabled', 'disabled');
     $('#cond2').attr('disabled', 'disabled');
});

$('#cond1').on('click', function() {
     $('#cont').attr('disabled', 'disabled');
     $('#cond2').attr('disabled', 'disabled');
});

$('#cond2').on('click', function() {
     $('#cont').attr('disabled', 'disabled');
     $('#cond1').attr('disabled', 'disabled');
});




	

