// Splash screen
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 5000);

// Location and Weather
window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").textContent = "📍 Not supported";
  }
};

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  document.getElementById("location").textContent = `📍 ${lat.toFixed(2)}, ${lon.toFixed(2)}`;

  // Fake temp data (you can replace this with real API like OpenWeatherMap)
  const fakeTemp = 28 + Math.floor(Math.random() * 5);
  document.getElementById("temperature").textContent = `🌡 ${fakeTemp}°C`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("location").textContent = "📍 Permission Denied";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("location").textContent = "📍 Location Unavailable";
      break;
    case error.TIMEOUT:
      document.getElementById("location").textContent = "📍 Timeout";
      break;
    default:
      document.getElementById("location").textContent = "📍 Unknown Error";
      break;
  }
}
