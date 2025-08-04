document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu.classList.contains("show")) {
        menu.classList.add("hide");
        setTimeout(() => {
          menu.classList.remove("show", "hide");
        }, 300);
      }
    });
  }
});

// Toggle dropdown saat diklik
document.querySelectorAll(".dropdown-toggle").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const menu = this.nextElementSibling;

    // Tutup dropdown lain jika ada
    document.querySelectorAll(".dropdown-menu").forEach((otherMenu) => {
      if (otherMenu !== menu && otherMenu.classList.contains("show")) {
        otherMenu.classList.add("hide");
        setTimeout(() => {
          otherMenu.classList.remove("show", "hide");
        }, 300);
      }
    });

    // Toggle dropdown yang diklik
    if (menu.classList.contains("show")) {
      menu.classList.add("hide");
      setTimeout(() => {
        menu.classList.remove("show", "hide");
      }, 300);
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
    }
  });
});

window.addEventListener("load", function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";
  }, 10);
});
document.documentElement.style.scrollBehavior = "auto";

let sections = document.querySelectorAll("section");
let secondaryNavItems = document.querySelectorAll(".secondary-nav .list a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  let foundMatch = false;

  sections.forEach((section) => {
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= offset && scrollPos < offset + height) {
      foundMatch = true;

      secondaryNavItems.forEach((link) => {
        link.parentElement.classList.remove("active");
        const href = link.getAttribute("href");
        if (href.endsWith(`/${id}`)) {
          link.parentElement.classList.add("active");
        }
      });
    }
  });

  if (!foundMatch) {
    secondaryNavItems.forEach((link) => {
      link.parentElement.classList.remove("active");
    });
  }
});

const galleryswiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 150,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      coverflowEffect: {
        stretch: 30,
      },
    },
    480: {
      coverflowEffect: {
        stretch: 60,
      },
    },
    768: {
      coverflowEffect: {
        stretch: 100,
      },
    },
    1024: {
      coverflowEffect: {
        stretch: 150,
      },
    },
    1440: {
      coverflowEffect: {
        stretch: 200,
      },
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".newsSwiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,

  // Tambahan untuk responsif
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1068: {
      slidesPerView: 5,
    },
  },
});




const music = document.getElementById("bg-music");
const button = document.getElementById("music-button");
const icon = button.querySelector("ion-icon");
let isPlaying = false;

button.addEventListener("click", function () {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    icon.setAttribute("name", "pause-outline");
  } else {
    music.pause();
    isPlaying = false;
    icon.setAttribute("name", "musical-notes-outline");
  }
});

function togglePlay(el) {
  const audio = el.parentElement.querySelector("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
