const profile1 = document.querySelectorAll(".profile");

profile1.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("flip-profile");
  });
});
