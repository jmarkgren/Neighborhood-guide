// var restaurants = [
//   {
//     name : 'Poké Bar',
//     latlngLoc: {lat: -33.414486, lng: 70.601975},
//     markerLoc: true,
//     URL: "http://pokebar.cl",
//     wikiSnippet: '',
//     Street: "Avenida el Bosque Norte 0226",
//     City: "Santiago, Chile",
//     infoWindow: ''
//   }
// ]

var map;
// Create a new blank markers array to push to
var markers = [];

function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.417728, lng: -70.611727},
    zoom: 14
  });

  //These are my locations to show on the map
  var restaurants = [
    {title: 'Poké Bar', location: {lat: -33.414486, lng: -70.601975}},
    {title: 'Liguria', location: {lat: -33.428310, lng: -70.619139}},
    {title: 'Lomit\'s', location: {lat: -33.423880, lng: -70.612827}},
    {title: 'Italita', location: {lat: -33.423880, lng: -70.607210}},
    {title: 'Insert Coin', location: {lat: -33.427433, lng: -70.618138}}
  ]

  var largeInfoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  //Loop to use the location array to create markers
  for (var i = 0; i < restaurants.length; i++) {
    var position = restaurants[i].location;
    var title = restaurants[i].title;

    //Create a marker for every location and put into the markers array
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });

    //Push marker to array
    markers.push(marker);
    //Create onclick event to open an info window for each marker
    marker.addListener('click', function(){
      populateInfoWindow(this, largeInfoWindow);
    });
    bounds.extend(markers[i].position);
  }
  //Extend the boundaries of the map for each marker
  map.fitBounds(bounds);
}

//Funtion that populates the info window when the marker is clicked
// only one info window will show up at a time
function populateInfoWindow(marker, infowindow) {
  //Check to make sure the info window isn't already open on this marker
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    //make sure the marker is properly cleared if hte window is closed
    infowindow.addListener('closeclick',function(){
      infowindow.setmarker = null;
    });
  }
}
















