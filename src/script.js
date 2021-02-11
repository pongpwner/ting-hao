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
