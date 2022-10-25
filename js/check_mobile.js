function detectMob() {
  return window.outerWidth <= 800;
}

const setMobileStyles = () => {
  const isMobile = detectMob();
  const elem = document.getElementById("html");
  if (isMobile) {
    elem.classList.add("mobile");
  } else {
    elem.classList.remove("mobile");
  }
};

window.onresize = setMobileStyles;
window.onload = setMobileStyles;
