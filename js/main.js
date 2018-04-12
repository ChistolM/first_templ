function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.001547, lng: 28.851624},
          zoom: 16
        });
      }