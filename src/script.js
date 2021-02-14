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
      openTime: 9,
      closeTime: 15,
    },
    Monday: {
      open: false,
      openTime: 7,
      closeTime: 17,
    },
    Tuesday: {
      open: false,
      openTime: 7,
      closeTime: 17,
    },
    Wednesday: {
      open: true,
      openTime: 11,
      closeTime: 20,
    },
    Thursday: {
      open: true,
      openTime: 11,
      closeTime: 20,
    },
    Friday: {
      open: true,
      openTime: 11,
      closeTime: 20,
    },
    Saturday: {
      open: true,
      openTime: 15,
      closeTime: 20,
      closeTimeMin: 30,
    },
  };
  function updateOperation() {
    let theDay = days[weekday[date.getDay()]];
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    //need to convert to am pm system and add caluclaations for minutes
    if (currentHour >= theDay.openTime && currentHour < theDay.closeTime) {
      operation.innerHTML = "Open";
      operation.style.color = "green";
      operationHours.innerHTML = `${theDay.openTime}-${theDay.closeTime}`;
    } else {
      operation.innerHTML = "Closed";
      operation.style.color = "red";
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
