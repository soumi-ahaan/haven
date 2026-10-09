
  const roomPopup = document.getElementById("roomPopup");
  const closeRoomPopup = document.getElementById("closeRoomPopup");

  const popupRoomImage = document.getElementById("popupRoomImage");
  const popupRoomType = document.getElementById("popupRoomType");
  const popupRoomName = document.getElementById("popupRoomName");
  const popupRoomDescription = document.getElementById(
    "popupRoomDescription"
  );
  const popupRoomFeatures = document.getElementById("popupRoomFeatures");

  const popupBookButton = document.getElementById("popupBookButton");
  const popupWhatsAppButton = document.getElementById(
    "popupWhatsAppButton"
  );

  // Room information
  const rooms = {
    classic: {
      type: "Room",
      name: "Classic Room",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      description:
        "A calm and elegant retreat with warm interiors and everything you need for a comfortable stay.",
      features: ["Queen Bed", "2 Guests", "32 m²"]
    },

    executive: {
      type: "Suite",
      name: "Executive Suite",
      image:
        "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=500&auto=format&fit=crop&q=60",
      description:
        "More room to unwind, with thoughtful details and a refined atmosphere throughout.",
      features: ["King Bed", "3 Guests", "48 m²"]
    },

    deluxe: {
      type: "Room",
      name: "Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1612320743558-020669ff20e8?w=500&auto=format&fit=crop&q=60", 
      description:
        "Contemporary comfort paired with generous space and beautiful surroundings.",
      features: ["King Bed", "2 Guests", "38 m²"]
    },

    single: {
      type: "Room",
      name: "Single Room",
      image:
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0",
      description:
        "A calm and elegant retreat with warm interiors and everything you need for a comfortable stay.",
      features: ["Single Bed", "1 Guest", "25 m²"]
    },

    double: {
      type: "Room",
      name: "Double Room",
      image:
        "https://images.unsplash.com/photo-1630999295881-e00725e1de45?w=500&auto=format&fit=crop&q=60",
      description:
        "More room to unwind, with thoughtful details and a refined atmosphere throughout.",
      features: ["Double Bed", "2 Guests", "40 m²"]
    },

    signature: {
      type: "Room",
      name: "Signature Room",
      image:
        "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      description:
        "Contemporary comfort paired with generous space and beautiful surroundings.",
      features: ["King Bed", "2 Guests", "38 m²"]
    }

    
  };

  // Open the popup for the selected room
  document.querySelectorAll(".room-card").forEach((card) => {
    card.addEventListener("click", () => {
      const room = rooms[card.dataset.room];

      if (!room) return;

      popupRoomImage.src = room.image;
      popupRoomImage.alt = room.name;
      popupRoomType.textContent = room.type;
      popupRoomName.textContent = room.name;
      popupRoomDescription.textContent = room.description;

      // Display room features
      popupRoomFeatures.replaceChildren();

      room.features.forEach((feature) => {
        const span = document.createElement("span");
        span.textContent = feature;
        popupRoomFeatures.appendChild(span);
      });

      // Update WhatsApp message for this room
      const message = `Hello Aurelia Hotel, I would like to enquire about the ${room.name} and its availability.`;

      popupWhatsAppButton.href =
        "https://wa.me/919876543210?text=" +
        encodeURIComponent(message);

      roomPopup.classList.remove("hidden");
      roomPopup.classList.add("flex");
      document.body.style.overflow = "hidden";

      closeRoomPopup.focus();
    });
  });

  // Close the popup
  function closePopup() {
    roomPopup.classList.add("hidden");
    roomPopup.classList.remove("flex");
    document.body.style.overflow = "";
  }

  closeRoomPopup.addEventListener("click", closePopup);

  // Close when clicking the dark background
  roomPopup.addEventListener("click", (event) => {
    if (event.target === roomPopup) {
      closePopup();
    }
  });

  // Close with Escape
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      !roomPopup.classList.contains("hidden")
    ) {
      closePopup();
    }
  });

