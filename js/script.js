
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuButton.onclick = function() {
    if (toggleMenu.getAttribute('data-menustate') === 'closed') {
      // if closed, open it    
      toggleMenu.setAttribute('data-menustate','open');
    } else {
      // else, close it
      toggleMenu.setAttribute('data-menustate','closed');
    }
};
// CLOSE THE MENU WHEN A USER CLICKS ON ANY LINK
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate','closed');
  }
});

// ON SCROLL ANIMATION//

// CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      entry.target.setAttribute("data-viewstate", "inactive");
    };   
  });  
});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach((el) => {
    myobserver.observe(el);
});




// TOGGLE BACKROUND AND BUTTON//

function toggleText() {
  const pTag = document.getElementById('toggle-text');
  // Check if checkbox is checked or unchecked and change the text
  if (document.getElementById('switch').checked) {
      pTag.textContent = "The art of coffee by day, and something new by night!";
  } else {
      pTag.textContent = "The art of coffee by day.";
  }
}