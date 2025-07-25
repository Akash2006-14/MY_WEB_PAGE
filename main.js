// main.js
// main.js

// Show current IST time in top-left corner

function showISTTime() {
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
  
    const now = new Date();
    const istTime = now.toLocaleString('en-IN', options);
    const datetimeElement = document.getElementById('datetime');
  
    if (datetimeElement) {
      datetimeElement.textContent = `📅 ${istTime} (IST)`;
    }
  }
  
  setInterval(showISTTime, 1000);
  
  showISTTime();

// 1. Age Calculation based on DOB
document.addEventListener("DOMContentLoaded", function () {
    const dob = new Date("2006-10-14"); // Format: YYYY-MM-DD
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    const ageElement = document.getElementById("user-age");
    if (ageElement) {
      ageElement.textContent = age;
    }
  });
  
  // 2. WhatsApp Contact Form Submission
  function redirectToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    const fullMessage = `Hello Akash,%0A%0AMy Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "918838694149";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  }
  
  // 3. Optional: Smooth Scrolling (for anchor links)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  
  // 4. Profile image hover effect log (optional but fun for testing)
  const profilePic = document.querySelector("img[alt*='Profile']");
  if (profilePic) {
    profilePic.addEventListener("mouseenter", () => {
      console.log("You're hovering over Akash's profile photo!");
    });
  }
  