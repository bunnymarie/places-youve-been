function TravelData (title, location, date, returnVal, score, notes) {
  this.title = title;
  this.location = location;
  this.date = date;
  this.returnVal = returnVal;
  this.score = score;
  this.notes = notes;
}

TravelData.prototype.shownData = function() {
  return this.title + " " + this.location;
}


$(document).ready(function() {
  $("form#travelForm").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("input#newTitle").val();
    var inputLocation = $("input#newLocation").val();
    var inputDate = $("input#newDate").val();
    var inputReturn = $("input#newReturn").val();
    var inputScore = $("select#newScore").val();
    var inputNotes = $("input#newNotes").val();

    var newTravelData = new TravelData(inputTitle, inputLocation, inputDate, inputReturn, inputScore, inputNotes);

    $("ul#travelLabels").append("<li><span class='TravelData'>" + newTravelData.shownData() + "</span></li>")

    clearData();

    $(".TravelData").last().click(function() {
      $("#travelFull").show();
      $("#travelFull h2").text(newTravelData.title);
      $(".title").text(newTravelData.title);
      $(".location").text(newTravelData.location);
      $(".date").text(newTravelData.date);
      $(".returnVal").text(newTravelData.returnVal);
      $(".score").text(newTravelData.score);
      $(".notes").text(newTravelData.notes);
    });
  });
});

function clearData() {
  $("input#newTitle").val("");
  $("input#newLocation").val("");
  $("input#newDate").val("");
  $("input#newReturn").val("");
  $("select#newScore").val("");
  $("input#newNotes").val("");
}
