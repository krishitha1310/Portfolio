/* ================= LOADER ================= */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 500);

    }, 1500);
});

/* ================= AOS ================= */

AOS.init({
    duration: 1200,
    once: true
});

/* ================= TYPING EFFECT ================= */

new Typed("#typing", {
    strings: [
        "Full Stack Developer",
        "Java Programmer",
        "Problem Solver",
        "UI/UX Designer",
        "Creative Thinker"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});

/* ================= PARTICLES ================= */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100
        },

        color: {
            value: "#00ffff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        }
    }
});

/* ================= CUSTOM CURSOR ================= */

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    outline.style.left = e.clientX - 15 + "px";
    outline.style.top = e.clientY - 15 + "px";
});

/* ================= MOUSE GLOW ================= */

const glow = document.getElementById("mouse-glow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 175 + "px";
    glow.style.top = e.clientY - 175 + "px";
});

/* ================= SCROLL PROGRESS ================= */

window.addEventListener("scroll", () => {

    let winScroll =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled =
        (winScroll / height) * 100;

    document.getElementById("progress-bar")
        .style.width = scrolled + "%";
});

/* ================= COUNTERS ================= */
/* ================= COUNTERS ================= */

let started = false;

function startCounters() {

    if (started) return;

    started = true;

    animateCounter("projectCount", 4);
    animateCounter("leetcodeCount", 85);
    animateCounter("certificateCount", 3);
}

function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const speed = Math.max(1, target / 50);

    const interval = setInterval(() => {

        count += speed;

        if (count >= target) {

            element.innerText = target;
            clearInterval(interval);

        } else {

            element.innerText = Math.floor(count);
        }

    }, 20);
}

/* Start counters when page loads */

window.addEventListener("load", () => {
    startCounters();
});


/* ================= SKILL BARS ================= */

const skillBars =
    document.querySelectorAll(".skill-bar");

function animateSkills() {

    skillBars.forEach(bar => {

        const position =
            bar.getBoundingClientRect().top;

        if (position < window.innerHeight - 50) {

            const width =
                bar.getAttribute("data-width");

            bar.style.width = width;
        }
    });
}

window.addEventListener("scroll", animateSkills);

/* ================= THEME TOGGLE ================= */

const themeBtn =
    document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fas fa-moon"></i>';
    }
});

/* ================= SWIPER ================= */

new Swiper(".certificateSwiper", {

    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2000
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
});

/* ================= ROCKET BUTTON ================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ================= CHATBOT ================= */

const chatbot =
    document.getElementById("chatbot");

const chatHeader =
    document.getElementById("chat-header");

chatHeader.addEventListener("click", () => {

    if (
        chatbot.style.height === "400px"
    ) {

        chatbot.style.height = "50px";

    } else {

        chatbot.style.height = "400px";
    }
});

/* ================= PARALLAX HERO ================= */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector("#home");

    hero.style.backgroundPositionY =
        window.pageYOffset * 0.5 + "px";
});

/* ================= NAVBAR ACTIVE LINK ================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });
});

/* ================= BUTTON HOVER GLOW ================= */

const buttons =
    document.querySelectorAll(
        ".btn"
    );

buttons.forEach(btn => {

    btn.addEventListener(
        "mouseenter",
        () => {

            btn.style.boxShadow =
                "0 0 25px cyan";
        });

    btn.addEventListener(
        "mouseleave",
        () => {

            btn.style.boxShadow =
                "none";
        });
});

/* ================= FLOATING PROJECT CARDS ================= */

const cards =
    document.querySelectorAll(
        ".project-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                (x / rect.width - 0.5) * 20;

            const rotateX =
                -(y / rect.height - 0.5) * 20;

            card.style.transform =
                `perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)`;
        });

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "rotateX(0) rotateY(0)";
        });
});

/* ================= WELCOME MESSAGE ================= */

setTimeout(() => {

    console.log(
        "Welcome to Krishitha Premium Portfolio 🚀"
    );

}, 2000);