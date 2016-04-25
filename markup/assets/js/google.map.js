var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:23.012312, lng:72.563686},
    zoom: 12,
    mapTypeControl: false,
    zoomControl:false,
    styles:[{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]
  });
}

