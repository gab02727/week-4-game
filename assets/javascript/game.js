var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Line 8 to 39 are under one function

var resetAndStart = function() {
    // This is emptying the crystals
    $(".crystals").empty();

    // creating an array of images for my crystal
    var images = [
        'https://s10.postimg.org/3sxzshl55/healingcrystalspurplewhite.png',
        'https://s17.postimg.org/le39cwyxr/dreams.metroeve_crystals-dreams-meaning.jpg',
        'https://s17.postimg.org/r29k3v8fz/images_1.jpg',
        'https://s17.postimg.org/rrscga6fj/images.jpg'];

    // This is generating a new result
    random_result = Math.floor(Math.random() * 69) + 30;

// Adding this to the dorm
$("#result").html('Random Results: ' + random_result);

// This is looping four times, and creating random numbers every single time
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) +1;
    // This is creating four divs for each crystal still using the above for loop

    var crystal = $("<div>");
    // we adding attributes to the crystal
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        // Addind images to the crystal box we created above
        crystal.css({
            "background-image":"url('" + (images[i]) + "')", 
            "background-size":"cover"

        });

        // this is appending the crystal to the class 'crystals'
    $(".crystals").append(crystal);

    }
    // Adding this to the dorm
    $("#previous").html("Total score: " + previous);
}
 // we invoke this function when the page loads
resetAndStart();

//Event delegation...
// This click button will not listen to any new element that comes into the box after executing the first 
//$(".crystal").on('click', function() {
// This click functions listens to the dorm directly, hence, listens to a click from new elements
$(document).on('click', ".crystal", function(){
    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Total score: " + previous);

    console.log(previous);

 // if the previous result is greater than the random result, that is a loss
    if(previous > random_result){
       // we increment the lost counter if the above is  true
        lost++;
        // syntax on what exactly should appear on the page
        $("#lost").html("You lost: " + lost);
        previous = 0;
        resetAndStart(); 
    }
    // if previous is equal to random result, that is a win
    else if(previous === random_result){
        // we increment the win counter
        win++;
        $("#win").html("You win: " + win);
        previous = 0;

        resetAndStart();
    }
   
});



//pseudocoding
// a game with 4 crystals and a random result
// every crystal needs to have a random number btw 1-12
// A new number should be generated anytime we have a win or lost
// to those 4 crystal
// when clicking any crystal, it should be adding with the previous result
// until it equals the total score
//if it is greater than the random result equal, we decrement a lost counter
// if it is equal, then we increment a win counter
