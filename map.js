"use strict";
var L = window['L'];
var map = L.map('map').setView([27.955280, -15.597910], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([27.955280, -15.597910]).addTo(map);
marker.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
