
  const gallerySlider = document.getElementById("gallerySlider");

  let position = 0;
  let speed = 0.6;
  let animationId;

  function animateGallery() {
    position -= speed;

    /*
      Because the second half is an exact duplicate
      of the first half, we can jump back by half
      the total slider width without the user noticing.
    */
    const halfWidth = gallerySlider.scrollWidth / 2;

    if (Math.abs(position) >= halfWidth) {
      position = 0;
    }

    gallerySlider.style.transform = `translate3d(${position}px, 0, 0)`;

    animationId = requestAnimationFrame(animateGallery);
  }

  animateGallery();


  /*
    Pause when the user places the mouse over the gallery.
  */
  gallerySlider.addEventListener("mouseenter", () => {
    speed = 0;
  });

  gallerySlider.addEventListener("mouseleave", () => {
    speed = 0.6;
  });


  /*
    Pause while touching the slider on mobile.
  */
  gallerySlider.addEventListener("touchstart", () => {
    speed = 0;
  }, { passive: true });

  gallerySlider.addEventListener("touchend", () => {
    speed = 0.6;
  }, { passive: true });


  /*
    Recalculate after resizing.
  */
  window.addEventListener("resize", () => {
    position = 0;
    gallerySlider.style.transform = "translate3d(0, 0, 0)";
  });
