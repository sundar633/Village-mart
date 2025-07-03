window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main").style.display = "block";
    getLocation();
  }, 4000); // splash duration
};

document.getElementById("profileBtn").onclick = () => {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        const locationText = `${data.address.village || data.address.town || data.address.city || "Your Area"}, ${data.address.road || ""} - ${data.address.postcode || ""}`;
        document.getElementById("location").textContent = "📍 " + locationText;
      } catch {
        document.getElementById("location").textContent = "📍 Location found";
      }
    });
  } else {
    document.getElementById("location").textContent = "Location not supported.";
  }
}
