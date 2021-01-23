function updateMap() {
  fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        latitude = element.countryInfo.lat;
        longitude = element.countryInfo.long;
        //console.log(latitude, longitude);

        covidCases = element.cases;
        if (covidCases > 1000) {
          color = "rgb(255,0,0)";
        } else {
          color = `rgb(${covidCases},0,0)`;
        }

        //mark on the map

        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updateMap();
