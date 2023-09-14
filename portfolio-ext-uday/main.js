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

        this.abouttitle = document.getElementById("js--about--title");
        this.aboutdescription = document.getElementById("js--about--description");

        this.featuredtitle = document.getElementById("js--featured--title");
        this.featureddescription = document.getElementById("js--featured--description");

        this.skilldescription1 = document.getElementById("js--language--description--1");
        this.skilldescription2 = document.getElementById("js--language--description--2");
        this.skilldescription3 = document.getElementById("js--language--description--3");
        this.skilldescription4 = document.getElementById("js--language--description--4");
        this.skilldescription5 = document.getElementById("js--language--description--5");
        this.skilldescription6 = document.getElementById("js--language--description--6");
        // this.typedtext = document.querySelector(".typing__text");

        this.viewmorebutton = document.querySelector(".view-more");
        this.mycvbutton = document.querySelector(".mijn__cv__button");
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
            this.mycvbutton.textContent = "My CV"
            // this.typedtext.textContent = "Uday Singh - SoftwareDeveloper";
            this.abouttitle.textContent = "About Me";
            this.aboutdescription.textContent = "I am a passionate software developer. My expertise includes HTML, CSS, JavaScript and other modern web technologies.";
            this.featuredtitle.textContent = "Featured Project"
            this.featureddescription.textContent = "This is an awesome project I've been working on. It shows my skills in Software and Hardware."


            this.skilldescription1.textContent = "I am able to write Semantic HTML code and structure the codes well for a clearer experience.";
            this.skilldescription2.textContent = "I'm a big fan of design, so I really like CSS, not only creating beautiful elements but also beautiful animations.";
            this.skilldescription3.textContent = "Scss has taught me how to divide my CSS and therefore work on my projects in a categorized manner.";
            this.skilldescription4.textContent = "I find JavaScript very interesting, especially because of the countless possibilities it offers, it really takes your project to a completely different level and it is really a challenge sometimes, which I like.";
            this.skilldescription5.textContent = "I am a big fan of designing, I always try to make everything as unique as possible so that it really radiates my personality, of course I can work well if there are requirements for the design in terms of layout.";
            this.skilldescription6.textContent = "In my spare time, in addition to programming, I also often work on video/photo editing, mainly with Adobe After Effects and Premiere Pro, I really enjoy making those types of projects.";
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
            this.mycvbutton.textContent = "Mijn CV"
            // this.typedtext.textContent = "Uday Singh - Software Ontwikkelaar";
            this.abouttitle.textContent = "Over Mij";
            this.aboutdescription.textContent = "Ik ben een gepassioneerde softwareontwikkelaar. Mijn expertise omvat HTML, CSS, JavaScript en andere moderne webtechnologieën. ";
            this.featuredtitle.textContent = "Uitgelicht project"
            this.featureddescription.textContent = "Dit is een geweldig project waar ik aan heb gewerkt. Het toont mijn vaardigheden op het gebied van Software en Hardware."

            this.skilldescription1.textContent = "Ik ben instaat om Semantische html code te schrijven en de codes goed te structuren voor een overzichtelijkere ervaring.";
            this.skilldescription2.textContent = "Ik ben heel erg fan van design dus ik kan me goed vinden in css,om niet alleen mooie elementen te maken maar ook mooie animaties."
            this.skilldescription3.textContent = "Scss heeft me geleerd hoe ik mijn css kan verdelen en dus ook gecategoriseerd kan gaan werken aan mijn projecten.";
            this.skilldescription4.textContent = "Ik vind javascript heel interresant, vooral wegens de ontelbare mogelijkheden dat het bied, het neemmt je project echt op een hele andere niveau en het is ook echt een uitdaging soms wat ik dus fijn vind.";
            this.skilldescription5.textContent = "Ik ben heel erg fan van designing, ik probeer alles altijd zo uniek mogelijk te maken dat het dus ook echt mijn personaliteit uitstraalt, uiteraard kan ik goed werken als er eisen zijn aan het design wat betreft opmaak.";
            this.skilldescription6.textContent = "In mijn vrije tijd naast het programmeren ben ik ook vaak bezig met video/foto editing voornamelijk met Adobe After Effects en Premiere Pro, ik vind het heel erg leuk om ook dat soort projecten te maken.";

        }
    }
}

// Maakt een nieuw LanguageToggle object nadat de pagina is geladen
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
    const text = ['UDAY SINGH - SOFTWARE DEVELOPER.'];
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



