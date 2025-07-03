window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main").style.display = "block";
    getLocation();
  }, 5000); // Splash duration
};

document.getElementById("profileBtn").onclick = () => {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("location").textContent = "Location not supported.";
  }
}

function showPosition(position) {
  const temp = Math.floor(Math.random() * 15) + 10; // Simulated temp
  document.getElementById("location").textContent = "📍 Village Street, India";
  const tempElem = document.getElementById("temperature");
  tempElem.textContent = `🌡 ${temp}°C`;

  const weatherContainer = document.getElementById("weatherEffect");

  if (temp < 18) {
    for (let i = 0; i < 20; i++) {
      let drop = document.createElement("div");
      drop.className = "raindrop";
      drop.style.left = `${Math.random() * 50}px`;
      drop.style.animationDelay = `${Math.random()}s`;
      weatherContainer.appendChild(drop);
    }
    tempElem.innerHTML += " 🌧️";
  } else if (temp < 20) {
    for (let i = 0; i < 20; i++) {
      let flake = document.createElement("div");
      flake.className = "snowflake";
      flake.style.left = `${Math.random() * 50}px`;
      flake.style.animationDelay = `${Math.random()}s`;
      weatherContainer.appendChild(flake);
    }
    tempElem.innerHTML += " ❄️";
  } else {
    const sun = document.createElement("div");
    sun.className = "sun";
    weatherContainer.appendChild(sun);
    tempElem.innerHTML += " ☀️";
  }
}
