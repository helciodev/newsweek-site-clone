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