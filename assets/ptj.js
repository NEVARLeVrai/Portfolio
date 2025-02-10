window.addEventListener('load', () => {
  setTimeout(() => {
      const loader = document.getElementById('loader-wrapper');
      loader.classList.add('loader-hidden');
      loader.addEventListener('transitionend', () => {
          loader.style.display = 'none';
      });
  }, 0);
});

const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
}

if (navClose) {
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
} else {
console.error("L'élément nav-close n'existe pas.");
}


/*==================== RETIRER LE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Lorsque nous cliquons sur chaque nav__link, nous retirons la classe show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD DES COMPÉTENCES ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*======================= Modal des services ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*======================= Swiper du portfolio ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== LIEN ACTIF DES SECTIONS DÉFILEMENT ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGER L'EN-TÊTE DE FOND ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // Lorsque le défilement est supérieur à 200 hauteurs de viewport, ajoutez la classe scroll-header à la balise d'en-tête
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== MONTRER LE DÉFILEMENT ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Lorsque le défilement est supérieur à 560 hauteurs de viewport, ajoutez la classe show-scroll à la balise a avec la classe scroll-top
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Sujet précédemment sélectionné (si l'utilisateur a sélectionné)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Nous obtenons le thème actuel que l'interface a en validant la classe dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Initialisation immédiate du thème pour toutes les pages
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem("selected-theme");
    const savedIcon = localStorage.getItem("selected-icon");

    if (!savedTheme) {
        // Première visite : appliquer le thème sombre par défaut
        document.body.classList.add(darkTheme);
        themeButton.classList.remove(iconTheme);
        localStorage.setItem("selected-theme", "dark");
        localStorage.setItem("selected-icon", "uil-moon");
    } else {
        // Appliquer le thème sauvegardé et l'icône correspondante
        document.body.classList[savedTheme === "dark" ? "add" : "remove"](darkTheme);
        themeButton.classList[savedIcon === "uil-moon" ? "remove" : "add"](iconTheme);
    }

    // Vérifier si nous sommes sur la page d'accueil pour appliquer la logique spécifique
    const homeSection = document.querySelector('.home.section');
    if (homeSection) {
        handleThemeOnScroll();
    } else {
        // Sur les autres pages, s'assurer que l'icône correspond au thème
        const currentTheme = document.body.classList.contains(darkTheme) ? "dark" : "light";
        themeButton.classList[currentTheme === "light" ? "remove" : "add"](iconTheme);
    }
});

// Fonction pour gérer le thème en fonction du scroll
function handleThemeOnScroll() {
    const homeSection = document.querySelector('.home.section');
    if (homeSection) {
        const scrollPosition = window.scrollY;
        if (scrollPosition < homeSection.offsetHeight) {
            // Dans la section home : forcer le thème sombre
            document.body.classList.add(darkTheme);
            themeButton.classList.add(iconTheme);
        } else {
            // En dehors de home : revenir au thème sélectionné
            const savedTheme = localStorage.getItem("selected-theme");
            const savedIcon = localStorage.getItem("selected-icon");
            document.body.classList[savedTheme === "dark" ? "add" : "remove"](darkTheme);
            themeButton.classList[savedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
        }
    }
}

// Écouter le scroll
window.addEventListener('scroll', handleThemeOnScroll);

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    const homeSection = document.querySelector('.home.section');
    const scrollPosition = window.scrollY;
    
    // Vérifier si on est dans la section home
    if (homeSection && scrollPosition < homeSection.offsetHeight) {
        // Ne rien faire si on est dans la section home
        return;
    } else {
        // En dehors de home : permettre le changement de thème
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
    }
});

// Appeler handleThemeOnScroll au chargement de la page
document.addEventListener('DOMContentLoaded', handleThemeOnScroll);