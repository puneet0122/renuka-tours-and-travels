document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const members = document.getElementById("members").value;
    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const vehicle = document.getElementById("vehicle").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "🚕 *NEW RIDE BOOKING - RENUKA TRAVELS*%0A%0A" +
        "👤 Name: " + name + "%0A" +
        "📞 Phone: " + phone + "%0A" +
        "👥 Members: " + members + "%0A" +
        "📍 Pickup: " + pickup + "%0A" +
        "🏁 Destination: " + destination + "%0A" +
        "📅 Travel Date: " + date + "%0A" +
        "🚗 Vehicle: " + vehicle + "%0A" +
        "💬 Message: " + (message || "None");

    const whatsappURL =
        "https://wa.me/918722527496?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});