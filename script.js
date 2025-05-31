document.addEventListener('click', function (e) {
    // Tutup semua dropdown jika klik di luar
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu.classList.contains('show')) {
                menu.classList.add('hide');
                setTimeout(() => {
                    menu.classList.remove('show', 'hide');
                }, 300); // Sesuaikan dengan durasi animasi
            }
        });
    }
});

// Toggle dropdown saat diklik
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const menu = this.nextElementSibling;

        // Tutup dropdown lain jika ada
        document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
            if (otherMenu !== menu && otherMenu.classList.contains('show')) {
                otherMenu.classList.add('hide');
                setTimeout(() => {
                    otherMenu.classList.remove('show', 'hide');
                }, 300);
            }
        });

        // Toggle dropdown yang diklik
        if (menu.classList.contains('show')) {
            menu.classList.add('hide');
            setTimeout(() => {
                menu.classList.remove('show', 'hide');
            }, 300);
        } else {
            menu.classList.remove('hide');
            menu.classList.add('show');
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
  let foundMatch = false; // untuk cek apakah ada section yang cocok

  sections.forEach((section) => {
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= offset && scrollPos < offset + height) {
      foundMatch = true; // ada yang cocok

      secondaryNavItems.forEach((link) => {
        link.parentElement.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.parentElement.classList.add("active");
        }
      });
    }
  });

  // Jika tidak ada section yang cocok, hilangkan semua 'active'
  if (!foundMatch) {
    secondaryNavItems.forEach((link) => {
      link.parentElement.classList.remove("active");
    });
  }
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 1500, // kecepatan transisi (ms)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
    icon.setAttribute("name", "pause-outline"); // ganti jadi pause
  } else {
    music.pause();
    isPlaying = false;
    icon.setAttribute("name", "musical-notes-outline"); // ganti balik ke musik
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
