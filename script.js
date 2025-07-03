// Splash hide after 5 seconds
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 5000);

// Profile dropdown toggle
document.getElementById("profileBtn").onclick = () => {
  const drop = document.getElementById("profileDropdown");
  drop.style.display = drop.style.display === "block" ? "none" : "block";
};

// Get user location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("location").innerText = "Geolocation not supported.";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
    .then(response => response.json())
    .then(data => {
      const loc = `${data.locality || data.city}, ${data.principalSubdivision}, ${data.postcode}`;
      document.getElementById("location").innerText = "📍 " + loc;
      showWeatherEffect();
    });
}

// Weather effect (just demo - you can extend using real API)
function showWeatherEffect() {
  const temp = Math.floor(Math.random() * 30); // Fake temp
  const container = document.getElementById("weatherEffect");
  container.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    if (temp < 18) {
      el.className = "raindrop";
    } else if (temp < 20) {
      el.className = "snowflake";
    } else {
      el.className = "sun";
    }
    el.style.left = `${Math.random() * 100}%`;
    container.appendChild(el);
  }

  setTimeout(() => {
    container.innerHTML = "";
  }, 10000);
}

window.onload = getLocation;
