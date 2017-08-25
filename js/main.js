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
var clicked = [];

$(document).ready( function(){
  $("#no_match").hide()
  $("#match").hide()
  $("#win").hide()

  $(".col-sm-3").on('click', function(){
    var id = $(this).attr('id')
    if (($.inArray(id, clicked) == -1) && ($.inArray(id, matched) == -1 )){
      if(($('#no_match').is(':visible'))){
        $("#no_match").hide()
        $("#"+clicked[0]+" img").attr('src', "images/card_back_360.jpg").fadeIn('fast');
        $("#"+clicked[1]+" img").attr('src', "images/card_back_360.jpg").fadeIn('fast');
        clicked = []
      }
      if (clicked.length === 0){
        $("#match").hide()
        $("#"+id+" img").attr('src', "images/"+arr[id]+".jpg").fadeIn('fast');
        clicked[0] = id
      } else {
        $("#"+id+" img").attr('src', "images/"+arr[id]+".jpg").fadeIn('fast');
        if (arr[clicked[0]] === arr[id]){
          if (matches == 7)
            $("#win").show()
          else
            match(id, clicked[0])
            clicked = []
      }
        else {
          $("#"+id+" img").attr('src', "images/"+arr[id]+".jpg").fadeIn('fast');
          clicked[1] = id
          $("#no_match").show()
        }
      }
    }
  })
}) 
