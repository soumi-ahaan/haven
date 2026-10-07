

    /* =========================================
       HERO SLIDER
    ========================================= */

    const slides = document.querySelectorAll(".hero-slide");

    let currentSlide = 0;

    setInterval(() => {

      slides[currentSlide].classList.remove("opacity-100");
      slides[currentSlide].classList.add("opacity-0");

      currentSlide =
        (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.remove("opacity-0");
      slides[currentSlide].classList.add("opacity-100");

    }, 5000);



//    =================================================
//      MENU JAVASCRIPT
// ================================================== 



  const menuButton = document.getElementById("menuButton");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  const mobileLinks = document.querySelectorAll(".mobile-link");


  /* ================================================
     OPEN MOBILE MENU
  ================================================= */

  function openMenu() {

    mobileMenu.classList.remove("translate-x-full");

    menuOverlay.classList.remove("hidden");

    menuButton.setAttribute("aria-expanded", "true");

    document.body.classList.add("overflow-hidden");

  }


  /* ================================================
     CLOSE MOBILE MENU
  ================================================= */

  function closeMobileMenu() {

    mobileMenu.classList.add("translate-x-full");

    menuOverlay.classList.add("hidden");

    menuButton.setAttribute("aria-expanded", "false");

    document.body.classList.remove("overflow-hidden");

  }


  /* ================================================
     MENU BUTTON
  ================================================= */

  menuButton.addEventListener("click", openMenu);


  /* ================================================
     CLOSE BUTTON
  ================================================= */

  closeMenu.addEventListener("click", closeMobileMenu);


  /* ================================================
     OVERLAY CLICK
  ================================================= */

  menuOverlay.addEventListener("click", closeMobileMenu);


  /* ================================================
     CLOSE MENU WHEN LINK IS CLICKED
  ================================================= */

  mobileLinks.forEach((link) => {

    link.addEventListener("click", closeMobileMenu);

  });


  /* ================================================
     ACTIVE PAGE
  ================================================= */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";


  /* Desktop active state */

  document.querySelectorAll(".desktop-link").forEach((link) => {

    const page = link.getAttribute("data-page");

    if (page === currentPage) {

      link.classList.remove("text-white/80");

      link.classList.add(
        "text-[#C58A53]",
        "font-medium"
      );

    }

  });


  /* Mobile active state */

  document.querySelectorAll(".mobile-link").forEach((link) => {

    const page = link.getAttribute("data-page");

    if (page === currentPage) {

      link.classList.remove("text-white/75");

      link.classList.add(
        "text-[#C58A53]",
        "font-medium"
      );

    }

  });


  /* ================================================
     CLOSE MENU WHEN RESIZING TO DESKTOP
  ================================================= */

  window.addEventListener("resize", () => {

    if (window.innerWidth >= 1024) {

      closeMobileMenu();

    }

  });




