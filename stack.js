const items = document.querySelectorAll(".amenity-item");

  const topImage = document.getElementById("amenityImageTop");
  const bottomImage = document.getElementById("amenityImageBottom");


  items.forEach((item) => {

    item.addEventListener("mouseenter", () => {

      // Change images
      topImage.src = item.dataset.top;
      bottomImage.src = item.dataset.bottom;


      // Reset all items
      items.forEach((other) => {

        other.classList.remove("text-[#C58A53]");
        other.classList.add("text-[#22201D]");

        other.querySelector(".amenity-arrow")
          .classList.add("invisible");

      });


      // Active item
      item.classList.remove("text-[#22201D]");
      item.classList.add("text-[#C58A53]");

      item.querySelector(".amenity-arrow")
        .classList.remove("invisible");

    });

  });
