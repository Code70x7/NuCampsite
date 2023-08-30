async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const city = "Rexburg";
  const lat = 43.825386;
  const lon = -111.472288;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}`;

  // `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

console.log("super fun");

function displayWeather(data) {
  if (data.main && data.main.temp) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const weatherIconElement = document.getElementById("weatherIcon");

    temperatureElement.textContent = `${temperature} °F`;
    descriptionElement.textContent = description;

    const imgIcon = document.createElement("img");
    imgIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIconElement.appendChild(imgIcon);
  } else {
    console.error("Weather data is missing or invalid.");
  }
}

fetchWeather();

const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 2000,
  pause: false,
});

// when the pause button is clicked, pause the carousel
const carouselPause = document.getElementById("carouselPause");
carouselPause.addEventListener("click", function () {
  console.log("pausing the carousel");
  carousel.pause();
});

// when the play button is clicked, begin cycling through the images
const carouselPlay = document.getElementById("carouselPlay");
carouselPlay.addEventListener("click", function () {
  console.log("cycle the carousel");
  carousel.cycle();
});
