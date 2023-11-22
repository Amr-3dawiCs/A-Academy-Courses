document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const navBar = document.querySelector(".navBar");

  function toggleMenu() {
    menuIcon.classList.toggle("fa-times");
    navBar.classList.toggle("active");
  }

  function updateMenuVisibility() {
    if (window.innerWidth <= 768) {
      menuIcon.style.display = "block";
      menuIcon.addEventListener("click", toggleMenu);
    } else {
      menuIcon.style.display = "none";
      menuIcon.removeEventListener("click", toggleMenu);
      menuIcon.classList.remove("fa-times");
      navBar.classList.remove("active");
    }
  }

  // Initial check and event listener
  updateMenuVisibility();

  // Update on window resize
  window.addEventListener("resize", updateMenuVisibility);
});


// scroll button function 
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => { 
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else { 
    toTop.classList.remove("active");
  }
})
