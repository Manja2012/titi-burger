let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {  lat: 48.872360, lng: 2.696720  },
    zoom: 8,
  });

  let marker = new google.maps.Marker({
    position: { lat: 48.872360, lng: 2.696720 },
    map: map,
    title:"Hello World!" 
  });
}

window.initMap = initMap;