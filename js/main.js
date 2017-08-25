function shuffle(array){
var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function noMatch(id, clicked){
  $("#no_match").show()
  $("#no_match").append("<button type='button' id='no_match_button'>Flip Cards</button>")
  $("#no_match_button").on('click', function(){
    $("#"+id+" img").attr('src', "images/card_back_360.jpg").fadeIn('fast');
    $("#"+clicked+" img").attr('src', "images/card_back_360.jpg").fadeIn('fast');
    $("#no_match").hide()
    $("#no_match_button").remove()
  })
}

function match(id, clicked){
  $("#match").show()
  matched.push(id)
  matched.push(clicked)
  matches++
}

var arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
var matched = []
arr = shuffle(arr)
matches = 0
var clicked = null;

$(document).ready( function(){
  $("#no_match").hide()
  $("#match").hide()
  $("#win").hide()

  $(".col-sm-3").on('click', function(){
    var id = $(this).attr('id')
    if (id != clicked && ($.inArray(id, matched) == -1 ) && !($('#no_match_button').is(':visible'))){
      if (clicked === null){
        $("#match").hide()
        $("#"+id+" img").attr('src', "images/"+arr[id]+".jpg").fadeIn('fast');
        clicked = id
      } else {
        $("#"+id+" img").attr('src', "images/"+arr[id]+".jpg").fadeIn('fast');
        if (arr[clicked] === arr[id]){
          if (matches == 7)
            $("#win").show()
          else
            match(id, clicked)
          clicked = null
      }
        else {
          $("#"+id+" img").attr('src', "images/"+arr[id]+".jpg").fadeIn('fast');
          noMatch(id, clicked)
          clicked = null
        }
      }
    }
  })
}) 
