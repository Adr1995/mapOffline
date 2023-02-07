"use strict";
var L = window['L'];
var map = L.map('map').setView([27.955280, -15.597910], 13);
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
satellite.addTo(map);
var marker = L.marker([27.955280, -15.597910]).addTo(map);
marker.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
var control = L.Routing.control({
  waypoints: [
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949)
  ]
}).addTo(map);