$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("open");
  });

  $('a[href^="#"]').click(function (e) {
    const target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        800
      );
    }
  });

  $("#year").text(new Date().getFullYear());

  $("#newsletterForm").submit(function (e) {
    e.preventDefault();
    const email = $("#newsletterEmail").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      $("#newsletterStatus")
        .removeClass("success")
        .addClass("error")
        .text("Please enter a valid email.");
      return;
    }

    $("#newsletterStatus")
      .removeClass("error")
      .addClass("success")
      .text("You have joined The Travel Hub newsletter.");

    this.reset();
  });

  $(".filter-btn").click(function () {
    const filterValue = $(this).attr("data-filter");
    $(".filter-btn").removeClass("active-filter");
    $(this).addClass("active-filter");

    if (filterValue === "all") {
      $(".destination-card").show();
    } else {
      $(".destination-card").hide();
      $("." + filterValue).show();
    }
  });

  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const destination = $("#destination").val();
    const message = $("#message").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || destination === "" || message === "") {
      $("#formStatus")
        .removeClass("success")
        .addClass("error")
        .text("Please complete all fields before sending your message.");
      return;
    }

    if (!emailPattern.test(email)) {
      $("#formStatus")
        .removeClass("success")
        .addClass("error")
        .text("Please enter a valid email address.");
      return;
    }

    $("#formStatus")
      .removeClass("error")
      .addClass("success")
      .text("Thank you. Your enquiry has been submitted successfully.");

    this.reset();

    let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);


  });
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const html = document.documentElement;
  let fontSize = 100;

  


  
  const panelHTML = `
    <div id="accessibilityContainer" style="position:fixed;bottom:10px;right:10px;z-index:999;">
      <button id="accessibilityToggle">⚙️</button>
      <div id="accessibilityPanel" style="display:none;background:#fff;border:1px solid #ccc;padding:10px;border-radius:8px;">
        <h3>Accessibility</h3>
        <button id="increaseFont">A+</button>
        <button id="decreaseFont">A-</button>
        <button id="darkModeToggle">Dark Mode</button>
        <button id="highContrastToggle">High Contrast</button>
        <button id="reduceMotionToggle">Reduce Motion</button>
        <button id="resetAccessibility">Reset</button>
      </div>
    </div>`;
  body.insertAdjacentHTML("beforeend", panelHTML);

  const toggle = document.getElementById("accessibilityToggle");
  const panel = document.getElementById("accessibilityPanel");

  toggle.addEventListener("click", () => {
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });

  document.getElementById("increaseFont").addEventListener("click", () => {
    fontSize += 10;
    html.style.fontSize = fontSize + "%";
  });

  document.getElementById("decreaseFont").addEventListener("click", () => {
    fontSize = Math.max(50, fontSize - 10);
    html.style.fontSize = fontSize + "%";
  });

  document.getElementById("darkModeToggle").addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  document.getElementById("highContrastToggle").addEventListener("click", () => {
    body.classList.toggle("high-contrast");
  });

  document.getElementById("reduceMotionToggle").addEventListener("click", () => {
    body.style.scrollBehavior =
      body.style.scrollBehavior === "auto" ? "smooth" : "auto";
    alert(
      body.style.scrollBehavior === "smooth"
        ? "Reduced motion deactivated: smooth scrolling enabled."
        : "Reduced motion activated: smooth scrolling disabled."
    );
  });

  document.getElementById("resetAccessibility").addEventListener("click", () => {
    body.classList.remove("dark-mode", "high-contrast");
    html.style.fontSize = "100%";
    body.style.scrollBehavior = "smooth";
  });
});