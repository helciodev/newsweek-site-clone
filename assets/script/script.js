   // Look for .hamburger
        const hamburger = document.querySelector(".hamburger");
        // On click
        hamburger.addEventListener("click", function() {
          // Toggle class "is-active"
          hamburger.classList.toggle("is-active");
          // Do something else, like open/close menu
        });

        //look for .date
        const date = document.querySelector('.date');
        //gets the real date
        let currentDate = new Date();
        
const daysOfTheWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];

const MonthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul','Aug','Sep', 'Oct','Nov', 'Dec'];
//gets current date
currentDay = currentDate.getDate();
//gets current day of the week
let dayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
//gets current month of the year
let currentMonth = MonthsOfTheYear[currentDate.getMonth()];
//gets current year
let currentYear = currentDate.getFullYear();
//displays current year, day and month
date.innerText = `${dayOfTheWeek}, ${currentMonth} ${currentDay }, ${currentYear}`;

//makes fixed nav appear
const fixedNavbar = document.querySelector('.fixed--nav');
window.addEventListener('scroll',function () {
  window.scrollY >= 209? fixedNavbar.style.display = 'flex': fixedNavbar.style.display ='none'

} ) 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".more-stories-small");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if(window.scrollY >= 4750) navbar.classList.remove('sticky');
}