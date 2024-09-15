/*===================================toggle icon navbar=============================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; // Fixed typo here
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Fixed the extra space here
            });
        };
    });

    /*==============================sticky navbar==================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

document.getElementById("seeMoreBtn").addEventListener("click", function() {
    var moreContent = document.getElementById("moreContent");
    
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        this.textContent = "See Less";
    } else {
        moreContent.style.display = "none";
        this.textContent = "See More";
    }
});

// toggle icon navbar

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, It's Me";
    const helloText = document.getElementById("helloText");
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        helloText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Adjust speed by changing the timeout
      }
    }
  
    typeWriter();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Add the 'loaded' class to trigger the animations
    document.body.classList.add('loaded');
  });
  