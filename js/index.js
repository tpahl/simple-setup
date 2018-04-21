  
var latlng = [38.44, -105.987];
var mymap = L.map('map').setView(latlng, 10);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap);

// var marker = L.marker(latlng).addTo(mymap);
// navigator.geolocation.getCurrentPosition(function(location) {
//     var latlng = new L.LatLng(
//       location.coords.latitude,
//       location.coords.longitude
//     );
  
//     var mymap = L.map("mapid").setView(latlng, 13);
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//                   maxZoom: 18,
//                   id: 'mapbox.streets'
//           }).addTo(mymap);
  
//     var marker = L.marker(latlng).addTo(mymap);
//   });

      // onLocationfound = function(e){
    //       marker.setLatLng(e.latlng);
    //       map.setView(marker.getLatLng(),map.getZoom()); 
    //       alert('Marker has been set to position :'+marker.getLatLng().toString());
    //     };
    //     // var mymap = L.map('mapid').setView([38.8339, -104.8214], 13);
        
    //     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //             maxZoom: 18,
    //             id: 'mapbox.streets'
    //     }).addTo(mymap);

	// var cities = L.layerGroup();