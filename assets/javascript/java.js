// Main Google Maps function
var map;  
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(),
    zoom: 8
});
};

// Eventful API & Functions
$(document).ready(function () {


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

        var latitude = eventInfo.latitude;
        var longitude = eventInfo.longitude;

      var latLng = new google.maps.LatLng(latitude , longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
      
      console.log(marker);

      $eventList.append($eventListItem);

// Google Communication


      // var infowindow = new google.maps.InfoWindow();

      // var marker, i;
      
      // // var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // var marker = new google.maps.Marker({
      //     position: LatLng,
      // });
      
      // google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {
      //    infowindow.setContent(locations[i][0]);
      //    infowindow.open(map, marker);
      //   }
      //    })(marker, i))
        

      }

      // initMap();
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
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });
      method: "GET"
    }).then(updatePage);
    
  });

});