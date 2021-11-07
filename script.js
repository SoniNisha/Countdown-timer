var givenDate = new Date("dec 31, 2021 08:57:38").getTime();

var x = setInterval(function() {
    var current = new Date().getTime();
    var timer = givenDate - current;
    var days = Math.floor(timer / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timer % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((timer % (1000 * 60 * 60))/(1000 * 60));
    var seconds = Math.floor((timer % (1000 * 60))/(1000));
    document.getElementById("day").innerHTML = days ;
    document.getElementById("hour").innerHTML = hours ;
    document.getElementById("minute").innerHTML = minutes ;
    document.getElementById("second").innerHTML = seconds ;

    if (timer < 0) {
        clearInterval(x);
        document.getElementById("state").innerHTML = "TIME UP!" ;
        document.getElementById("day").innerHTML = '0' ;
        document.getElementById("hour").innerHTML = '0' ; 
        document.getElementById("minute").innerHTML = '0' ; 
        document.getElementById("second").innerHTML = '0' ; 
    }

}, 1000);