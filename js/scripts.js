async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const city = "Rexburg";
  const lat = 43.825386;
  const lon = -111.472288;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("There was an error!", error);
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
