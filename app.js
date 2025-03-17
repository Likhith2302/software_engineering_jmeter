// Registration Form Handling
document.getElementById("registration-form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sport = document.getElementById("sport").value;

    if (!name || !email || !sport) {
        alert("❌ Please fill out all fields correctly!");
        return;
    }

    alert(`✅ Successfully registered for ${sport} as ${name}!`);
    window.location.href = "dashboard.html";
});

// Booking Form Handling
document.getElementById("booking-form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !date || !time) {
        alert("❌ Please fill out all fields correctly!");
        return;
    }

    alert(`✅ Booking confirmed for ${name} on ${date} at ${time}`);
});

// Profile Update Handling
document.getElementById("profile-form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("❌ Please fill out all fields correctly!");
        return;
    }

    alert(`✅ Profile updated successfully for ${name}`);
});

// Login Form Handling
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "admin@example.com" && password === "admin123") {
        alert("✅ Login Successful! Redirecting to Admin Panel...");
        window.location.href = "admin.html";
    } else if (email && password) {
        alert("✅ Login Successful! Redirecting to Dashboard...");
        window.location.href = "dashboard.html";
    } else {
        alert("❌ Invalid email or password. Please try again.");
    }
});
