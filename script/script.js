function toggleMode() {
  const html = document.documentElement;

  //theme change
  let theme = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  if (theme === "light") {
    html.classList.add("light");
  }

  /* if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } */
  html.classList.toggle("light"); // if there is the light class, it will remove, else, it will add

  //img change
  if (html.classList.contains("light")) {
    const img = document.querySelector("#profile img");
    img.setAttribute("src", "assets/profile/profile.png"); // changing the image
  } else {
    img.setAttribute("src", "assets/profile/light-mode-profile.png");
  }
}
