var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.84, 2.34]).addTo(map)
  .bindPopup('Musée Marie Curie')
  .openPopup();

  L.marker([48.85, 2.35]).addTo(map)
  .bindPopup('Maison de Marie Curie')
  .openPopup();

  L.marker([48.78, 2.29]).addTo(map)
  .bindPopup('Maison de Marie Curie')
  .openPopup();

  L.marker([48.95, 2.34]).addTo(map)
  .bindPopup('La Sorbonne')
  .openPopup();

  L.marker([48.84,2.34]).addTo(map)
  .bindPopup('Panthéon')
  .openPopup();