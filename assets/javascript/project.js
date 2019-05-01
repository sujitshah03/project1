// var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});


//   var infowindow = new google.maps.InfoWindow();

//   var marker, i;

//   setTimeout(function() {
  
//   }, 1000)

// initMap();


function buildQueryURL() {
  var queryURL = "https://api.eventful.com/json/events/search?...&";
  var queryParams = {
      "app_key": "Cc5b498hZCQZ9P8m",
      "oauth_fields": "4c420762561519b874ff",
      "page_numbers": "1",
      "page_size": "5",
  }
  queryParams.q = $("#event-type")
      .val()
      .trim();
  var zipCode = $("#zip-code")
      .val()
      .trim();
  if (parseInt(zipCode)) {
      queryParams.location = zipCode;
  }
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

function updatePage(localEvent) {
  console.log(localEvent);
  var events = localEvent.events.event;
  console.log("EVENTS", events);
  for (var i = 0; i < events.length; i++) {
      var eventInfo = events[i];
      var $eventList = $("<ul>");
      $eventList.addClass("list-group");
      $("#event-view").append($eventList);
      var title = eventInfo.title;
      console.log(title);
      var $eventListItem = $("<li class='list-group-item eventTitle'>");
      var eventURL = eventInfo.url;
      if (eventURL) {
          console.log(eventURL);
          $eventListItem.append(
              "<span class='label label-primary'>" +
              "</span>" +
              "<strong> " +
              title +
              "</strong>"
          );
      }
      var eventImage = eventInfo.image.medium.url;
      if (eventImage) {
          $eventListItem.append("<img src=" + eventImage + ">");
      }
      var description = eventInfo.description;
      if (description) {
          $eventListItem.append("<p>" + "Description: " + description + "</p>");
      }
      var startTime = eventInfo.start_time;
      if (startTime) {
          $eventListItem.append("<p>" + "Start Time: " + startTime + "</p>");
      }
      var venueAddress = eventInfo.venue_address;
      if (venueAddress) {
          $eventListItem.append("<p>" + "Location: " + venueAddress + "</p>");
      }
      var latlong = {
          lat: parseFloat(eventInfo.latitude),
          lng: parseFloat(eventInfo.longitude)
        };
  
        console.log(latlong);
        }
      
        var marker = new google.maps.Marker({
          position: latlong
        });
        marker.setMap(map);
      $eventList.append($eventListItem);
  }

function clear() {
  $("#event-view").empty();
}
$("#search-event").on("click", function (event) {
  event.preventDefault();
  clear();
  var queryURL = buildQueryURL();
  $.ajax({
      url: queryURL,
      dataType: "jsonp",
      method: "GET"
  }).then(updatePage);
});


}
$( "#explore" ).click(function() {
  console.log( "Handler for .click() called." );
});
