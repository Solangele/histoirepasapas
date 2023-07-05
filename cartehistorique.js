var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.04, 3.40]).addTo(map)
  .bindPopup('Musée Jean de la Fontaine.')
  .openPopup();

  L.marker([49.02, 3.44]).addTo(map)
  .bindPopup('Ferme Historique Jean de la Fontaine.')
  .openPopup();

  L.marker([48.86, 2.39]).addTo(map)
  .bindPopup('Cimetière du Père-Lachaise.')
  .openPopup();

  L.marker([48.86, 2.33]).addTo(map)
  .bindPopup('Musée du Louvre.')
  .openPopup();

