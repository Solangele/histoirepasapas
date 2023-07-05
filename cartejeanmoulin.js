var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.33, 3.22]).addTo(map)
  .bindPopup('Statue Jean Moulin')
  .openPopup();

  L.marker([43.34, 3.22]).addTo(map)
  .bindPopup('Maison de naissance de Jean Moulin')
  .openPopup();

  L.marker([48.19, -4.08]).addTo(map)
  .bindPopup('Monument Jean Moulin')
  .openPopup();

  L.marker([45.68, 5.91]).addTo(map)
  .bindPopup('Monument commémoratif Jean Moulin')
  .openPopup();

  L.marker([48.41, 1.38]).addTo(map)
  .bindPopup('Premier acte de résistance de Jean Moulin')
  .openPopup();

  L.marker([48.44, 1.48]).addTo(map)
  .bindPopup('Monument à Jean Moulin, aux résistants et déportés')
  .openPopup();

  L.marker([43.83, 4.94]).addTo(map)
  .bindPopup('Musée Jean Moulin avec chemin de la liberté')
  .openPopup();

  L.marker([45.75, 4.86]).addTo(map)
  .bindPopup('Mémorial de la Prison de Montluc')
  .openPopup();

  L.marker([44.83, -0.57]).addTo(map)
  .bindPopup('Centre national Jean Moulin')
  .openPopup();

  L.marker([48.87, 2.30]).addTo(map)
  .bindPopup('Monument à Jean Moulin sur les Champs-Elysées')
  .openPopup();

  L.marker([48.84,2.34]).addTo(map)
  .bindPopup('Panthéon')
  .openPopup();