function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  
  var marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"Navigate using Google Maps!"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
