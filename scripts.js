var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0519752, lng: -76.314270999999}, // lat/long of center of map
    zoom: 15, // 8 or 9 is typical zoom 
  });
}