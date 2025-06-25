    // window.addEventListener("scroll", function () {
    //     const skillsSection = document.querySelector(".skills-section");
    //     const skillBars = document.querySelectorAll(".progress-bar");
    //     const sectionTop = skillsSection.getBoundingClientRect().top;
    //     const triggerPoint = window.innerHeight - 150;

    //     if (sectionTop < triggerPoint) {
    //         skillBars.forEach(bar => {
    //             bar.classList.add("animate");
    //         })
    //     }
    // });

  const toggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
