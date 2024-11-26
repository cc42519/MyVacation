// Initialize and add the map

async function initMap_sydney() {
  
  // The location of Sydney
  
  const position = { lat:-33.871424, lng:151.237659 };
  
  // Request needed libraries.
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Sydney
  
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const FlagImg1 = document.createElement("img");
    FlagImg1.src =
    "img/love.png";
  const FlagImg2 = document.createElement("img");
    FlagImg2.src =
    "img/love.png";
  const FlagImg3 = document.createElement("img");
    FlagImg3.src =
    "img/love.png";
  
  const FlagImg4 = document.createElement("img");
    FlagImg4.src =
    "img/love.png";

  const FlagImg5 = document.createElement("img");
    FlagImg5.src =
    "img/love.png";

  // The marker, positioned at QVB
  
  setInterval(function() {
  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat:-33.873419, lng:151.196117 },
    title: "Queen Victoria Building",
    content: FlagImg1,
  });
  }, 2000);
  
  setInterval(function() {
  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: { lat:-33.870416, lng:151.204353 },
    title: "Sydney Tower",
    content: FlagImg2,
  });
  }, 4000);

  // The marker, positioned at Bondi Beach

  setInterval(function() {
  const marker3 = new AdvancedMarkerElement({
    map: map,
    position: { lat: -33.8923672, lng:151.2780784 },
    title: "Bondi Beach",
    content: FlagImg3,
  });
  }, 6000);
   // The marker, positioned at Sydney Aquarium

  setInterval(function() {
  const marker4 = new AdvancedMarkerElement({
    map: map,
    position: { lat: -33.8695952, lng:151.1995632 },
    title: "Sydney Aquarium",
    content: FlagImg4,
  });
  }, 8000);

  // The marker, positioned at Sydney Opera House

  setInterval(function() {
  const marker5 = new AdvancedMarkerElement({
    map: map,
    position: { lat: -33.8567798, lng:151.2104258 },
    title: "Sydney Opera House",
    content: FlagImg5,
  })
}, 10000);

}

async function initMap_london() {
  
  // The location of London
  
  const position = { lat:51.5131702, lng:-0.1355637 };
  
  // Request needed libraries.
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at London
  

  londonmap = new Map(document.getElementById("londonmap"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  // Marker custom icons
  
  const FlagImg1 = document.createElement("img");
  FlagImg1.src =
    "img/love.png";

  // The marker, positioned at The Shard
  
  
  const marker1 = new AdvancedMarkerElement({
    map: londonmap,
    position: { lat: 51.5045, lng:-0.0890749 },
    title: "London Shangri-la",
    content: FlagImg1,
  });

  const FlagImg2 = document.createElement("img");
  FlagImg2.src =
    "img/love.png";

  // The marker, positioned at King's Cross Station
  
  
  const marker2 = new AdvancedMarkerElement({
    map: londonmap,
    position: { lat: 51.5306898, lng:-0.12593 },
    title: "King's Cross Station",
    content: FlagImg2,
  });


  const FlagImg3 = document.createElement("img");
  FlagImg3.src =
    "img/love.png";

  // The marker, positioned at Harrods
  
  
  const marker3 = new AdvancedMarkerElement({
    map: londonmap,
    position: { lat: 51.4994088, lng:-0.1658093 },
    title: "Harrods London",
    content: FlagImg3,
  });

  const FlagImg4 = document.createElement("img");
  FlagImg4.src =
    "img/love.png";

  // The marker, positioned at BBC
  
  
  const marker4 = new AdvancedMarkerElement({
    map: londonmap,
    position: { lat: 51.5188917, lng:-0.1465056 },
    title: "Broadcasting House",
    content: FlagImg4,
  });
  
}


async function initMap_zurich() {
  
  // The location of Zurich
  
  const position = { lat:47.3654563, lng:8.5414728 };
  
  // Request needed libraries.
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Zurich
  

  zurichmap = new Map(document.getElementById("zurichmap"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  // Marker custom icons
  
  const FlagImg1 = document.createElement("img");
  FlagImg1.src =
    "img/love.png";
  
  const FlagImg2 = document.createElement("img");
  FlagImg2.src =
    "img/love.png";

  const FlagImg3 = document.createElement("img");
  FlagImg3.src =
      "img/love.png";

  // The marker, positioned at Lake Zurich
  
  
  const marker1 = new AdvancedMarkerElement({
    map: zurichmap,
    position: { lat:47.3654563, lng:8.5414728 },
    title: "Lake Zurich",
    content: FlagImg1,
  });

  // The marker, positioned at Bahnhofstrasse
  
  
  const marker2 = new AdvancedMarkerElement({
    map: zurichmap,
    position: { lat:47.3702715, lng:8.5362171 },
    title: "Bahnhofstrasse",
    content: FlagImg2,
  });

  // The marker, positioned at FIFA Football Museum
  
  
  const marker3 = new AdvancedMarkerElement({
    map: zurichmap,
    position: { lat:47.3633384, lng:8.5291284 },
    title: "FIFA Football Museum",
    content: FlagImg3,
  });

}

async function initMap_tokyo() {
  
  // The location of Tokyo
  
  const position = { lat:35.6900803, lng:139.7277251 };
  
  // Request needed libraries.
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Tokyo
  

  tokyomap = new Map(document.getElementById("tokyomap"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  // Marker custom icons
  
  const FlagImg1 = document.createElement("img");
  FlagImg1.src =
    "img/love.png";
  
  const FlagImg2 = document.createElement("img");
  FlagImg2.src =
    "img/love.png";

  // The marker, positioned at Ginza
  
  
  const marker1 = new AdvancedMarkerElement({
    map: tokyomap,
    position: { lat:35.6876378, lng:139.699665 },
    title: "Shinjuku Takashimaya Time Square",
    content: FlagImg1,
  });

  const marker2 = new AdvancedMarkerElement({
    map: tokyomap,
    position: { lat:35.6709006, lng:139.7624233 },
    title: "Ginza Sony Store",
    content: FlagImg2,
  });

}

initMap_london();
initMap_sydney();
initMap_zurich();
initMap_tokyo();
