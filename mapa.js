 // Inicializa o mapa e define o ponto central
 var map = L.map('map').setView([-8.2945676,-35.9536542], 18.79); 
    
 // Adiciona o OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // Adiciona um marcador para a localização da empresa
 var marker = L.marker([-8.2945676,-35.9536542]).addTo(map)
     .bindPopup('<b>TechSolution</b><br>Estamos aqui.')
     .openPopup();