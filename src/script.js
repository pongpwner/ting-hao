// gets the date and open/closed status for the pasic information bar
(function () {
  let weekDay = document.querySelector(".clock");
  let operation = document.querySelector(".operation");
  let operationHours = document.querySelector(".operationHours");
  let date = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  //open close time
  var days = {
    Sunday: {
      open: false,
      openTime: 25,
      closeTime: 25,
    },
    Monday: {
      open: false,
      openTime: 25,
      closeTime: 25,
    },
    Tuesday: {
      open: false,
      openTime: 25,
      closeTime: 25,
    },
    Wednesday: {
      open: true,
      openTime: 11,
      closeTime: 20.31,
    },
    Thursday: {
      open: true,
      openTime: 11,
      closeTime: 20.3,
    },
    Friday: {
      open: true,
      openTime: 11,
      closeTime: 20.3,
    },
    Saturday: {
      open: true,
      openTime: 15,
      closeTime: 20.3,
    },
  };
  function updateOperation() {
    let theDay = days[weekday[date.getDay()]];

    let now = `${date.getHours()}.${date.getMinutes()}`;
    //need to convert to am pm system and add caluclaations for minutes
    //probably use current minute instead of current hour to be more precise and get the 8:30 now= gethours.getmin
    if (now >= theDay.openTime && now < theDay.closeTime) {
      operation.innerHTML = "Open";
      operation.style.color = "green";
      operationHours.innerHTML = `${theDay.openTime}:00AM-${
        Math.floor(theDay.closeTime) - 12
      }:${Math.floor((theDay.closeTime % 1) * 100)}PM`;
    } else {
      operation.innerHTML = "Closed";
      operation.style.color = "#ba1e1e";

      operationHours.innerHTML = "Not open today";
    }
  }

  function updateDay() {
    weekDay.innerHTML = weekday[date.getDay()]; //
  }
  function updateAll() {
    updateDay();
    updateOperation();
  }

  setInterval(function () {
    updateAll(weekDay);
  }, 1000);
})();

function openMobileNav() {
  let mobileNav = document.querySelector(".mobileNavBar");

  if (mobileNav.style.display !== "flex") {
    mobileNav.style.display = "flex";
    //mobileNav.style.zIndex = 2;
    mobileNav.style.height = "100%";
    mobileNav.style.flexDirection = "column";
  }
}
function closeMobileNav() {
  let mobileNav = document.querySelector(".mobileNavBar");

  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  }
}

function mobileMenuNav() {
  menu = document.querySelector(".menuNav");

  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
