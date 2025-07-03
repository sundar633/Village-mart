window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main").style.display = "block";
    initApp();
  }, 5000);
};

document.getElementById("profileBtn").onclick = () => {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

function initApp() {
  getLocationByIP();
  triggerWeatherEffect();
}

// 📍 Get location using IP address (no API key needed)
function getLocationByIP() {
  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      const village = data.city || data.region;
      const pincode = data.postal || '';
      showLocation(`📍 ${village}, ${pincode}`);
    })
    .catch(() => {
      showLocation("📍 Location not available");
    });
}

function showLocation(text) {
  document.getElementById("locText").textContent = text;
}

// Weather simulation
function triggerWeatherEffect() {
  const temp = Math.floor(Math.random() * 15) + 10;
  const tempElem = document.getElementById("temperature");
  const weatherContainer = document.getElementById("weatherEffect");

  if (temp < 18) simulate('raindrop', 20, tempElem, '🌧️');
  else if (temp < 20) simulate('snowflake', 20, tempElem, '❄️');
  else simulateSingle('sun', tempElem, '☀️');

  tempElem.innerHTML = `🌡 ${temp}°C ${tempElem.innerHTML}`;
  setTimeout(() => weatherContainer.innerHTML = '', 10000); // remove effects after 10s
}

function simulate(cls, count, tempElem, icon) {
  const container = document.getElementById("weatherEffect");
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = cls;
    el.style.left = `${Math.random() * window.innerWidth}px`;
    el.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(el);
  }
  tempElem.innerHTML += ` ${icon}`;
}

function simulateSingle(cls, tempElem, icon) {
  const el = document.createElement("div");
  el.className = cls;
  document.getElementById("weatherEffect").appendChild(el);
  tempElem.innerHTML += ` ${icon}`;
}
