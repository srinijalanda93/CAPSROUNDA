document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  const schoolDropdown1 = document.getElementById("school-dropdown-1");
  const dropdownContent1 = document.getElementById("dropdown-content-1");
  const schoolDropdown2 = document.getElementById("school-dropdown-2");
  const dropdownContent2 = document.getElementById("dropdown-content-2");

  schoolDropdown1.addEventListener("mouseenter", () => {
    dropdownContent1.style.display = "block";
  });

  schoolDropdown1.addEventListener("mouseleave", () => {
    dropdownContent1.style.display = "none";
  });

  schoolDropdown2.addEventListener("mouseenter", () => {
    dropdownContent2.style.display = "block";
  });

  schoolDropdown2.addEventListener("mouseleave", () => {
    dropdownContent2.style.display = "none";
  });
  const h1Tag = document.querySelector("#info>h1");
  const h2Tag = document.querySelector("#info>h2");
  h1Tag.addEventListener("mouseenter", () => {
    //add the transition with link icon
    h1Tag.classList.add("hovered");
  });
  h2Tag.addEventListener("mouseenter", () => {
    h2Tag.classList.add("hovered");
  });

  h1Tag.addEventListener("mouseleave", () => {
    //remove the transition with link icon
    h1Tag.classList.remove("hovered");
  });
  h2Tag.addEventListener("mouseleave", () => {
    h2Tag.classList.remove("hovered");
  });
});
