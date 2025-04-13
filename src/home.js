function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "../dist/images/chef.png";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("The juiciest burgers in town"));
  home.appendChild(createParagraph("Made with passion since 1808"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.classList.add('contact-info');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
