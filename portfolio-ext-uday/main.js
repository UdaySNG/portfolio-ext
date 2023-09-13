document.addEventListener("DOMContentLoaded", function () {
    // Haal de knoppen op
    const projectsBtn = document.querySelector('.header__button--projects');
    const aboutBtn = document.querySelector('.header__button--about');
    const contactBtn = document.querySelector('.header__button--contact');

    // Voeg scrollgedrag toe aan de knoppen
    projectsBtn.addEventListener('click', () => {
        document.querySelector('.section--projects').scrollIntoView({ behavior: 'smooth' });
    });

    aboutBtn.addEventListener('click', () => {
        document.querySelector('.section--about').scrollIntoView({ behavior: 'smooth' });
    });

    contactBtn.addEventListener('click', () => {
        document.querySelector('.section--contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Voeg hier eventueel taalwisselfunctionaliteit toe
});


document.addEventListener('DOMContentLoaded', function () {
    const projectArticles = document.querySelectorAll('.project');

    projectArticles.forEach((article, index) => {
        article.addEventListener('click', () => {
            const popup = document.querySelector(`#project-${index + 1}-popup`);
            if (popup) {
                popup.style.display = 'block';
            }
        });
    });

    const closeButtons = document.querySelectorAll('.popup__close-button');

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            if (popup) {
                popup.style.display = 'none';
            }
        });
    });
});







class LanguageToggle {
    constructor() {
        this.languageToggle = document.getElementById("language-toggle");
        this.headerTitle = document.querySelector(".header__title");
        this.projectsButton = document.querySelector(".header__button--projects");
        this.aboutButton = document.querySelector(".header__button--about");
        this.contactButton = document.querySelector(".header__button--contact");

        this.projectdescription = document.querySelector(".project__description");
        this.projectdescription2 = document.getElementById("js--language-desc-1");
        this.projectdescription3 = document.getElementById("js--language-desc-2");
        
        this.typedtext = document.getElementById(".typing__text");

        this.viewmorebutton = document.querySelector(".view-more");
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.languageToggle.addEventListener("click", () => this.toggleLanguage());
    }

    toggleLanguage() {
        if (this.languageToggle.textContent === "Taal") {
            this.languageToggle.textContent = "Language";
            this.headerTitle.textContent = "Uday Singh";
            this.projectsButton.textContent = "My Projects";
            this.aboutButton.textContent = "About Me";
            this.contactButton.textContent = "Contact";
            this.projectdescription.textContent = "Here I made a YouTube clone with the house style of the Twitch streaming platform.";
            this.projectdescription2.textContent = "In this project I recreated the front page of popular course website Udemy in HTML&CSS and JS.";
            this.projectdescription3.textContent = "Here I took inspiration from my favorite color website, Colorhunt so I made my own color picker.";
            this.viewmorebutton.textContent = "View More";
            this.typedtext.text = "Uday Singh - SoftwareDeveloper"

        } else {
            this.languageToggle.textContent = "Taal";
            this.headerTitle.textContent = "Uday Singh";
            this.projectsButton.textContent = "Mijn Projecten";
            this.aboutButton.textContent = "Over Mij";
            this.contactButton.textContent = "Contact";
            this.projectdescription.textContent = "Hier had ik een youtube clone gemaakt met de huiststyle van de Twitch streaming platform.";
            this.projectdescription2.textContent = "In dit project had ik de voorpagina van populaire cursus website Udemy nagemaakt in html&css en js.";
            this.projectdescription3.textContent = "Hier nam ik inspiratie van mijn favoriete kleuren website, Colorhunt dus ik had mijn eigen colorpicker gemaakt.";
            this.viewmorebutton.textContent = "Zie Meer";
            this.typedtext.text = "Uday Singh - Software Ontwikkelaar"

        }
    }
}

// Maak een nieuw LanguageToggle object nadat de pagina is geladen
window.addEventListener("load", () => {
    const languageToggle = new LanguageToggle();
});



class Typewriter {
    constructor(element, text, delay) {
        this.element = element;
        this.text = text;
        this.delay = delay;
        this.index = 0;
        this.type();
    }

    type() {
        const currentText = this.text[this.index];
        this.element.textContent = currentText.substring(0, this.element.textContent.length + 1);

        if (this.element.textContent === currentText) {
            // Stop met typen nadat de tekst is ingetypt zonder verder te wissen
            return;
        } else {
            setTimeout(() => this.type(), this.delay);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = document.querySelector('.typing__text');
    const text = ['Uday Singh - Software Developer.'];
    const delay = 100; // Stel de gewenste typsnelheid in (in milliseconden)

    const typewriter = new Typewriter(typewriterText, text, delay);
});










class ScrollToTopButton {
    constructor() {
        this.button = document.getElementById("scroll-to-top");
        if (this.button) {
            this.addEventListeners();
        }
    }

    addEventListeners() {
        // Voeg een eventlistener toe om te detecteren wanneer er wordt gescrold
        window.addEventListener("scroll", () => this.toggleVisibility());

        // Voeg een eventlistener toe om naar de bovenkant van de pagina te scrollen wanneer erop wordt geklikt
        this.button.addEventListener("click", () => this.scrollToTop());
    }

    toggleVisibility() {
        if (window.scrollY >= 0) {
            this.button.style.display = "block"; // Toon de knop als je omlaag scrollt
        } else {
            this.button.style.display = "none"; // Verberg de knop als je bovenaan bent
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scroll soepel naar boven
        });
    }
}

// Maak een nieuw ScrollToTopButton object als de knop aanwezig is
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = new ScrollToTopButton();
});

