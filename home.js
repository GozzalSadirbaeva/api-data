document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let searchInput = document.querySelector(".searchInput");

  (async function () {
    let response = await fetch("https://fakestoreapi.com/users");
    let data = await response.json();
    console.log(data);

    data.forEach((user) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h2>${user.name.firstname} ${user.name.lastname}</h2>
      <p>${user.email}</p>
      <p>${user.phone}</p>`;
      container.append(card);
    });
    // cards.append(card);
    searchInput.addEventListener("input", (e) => {
      e.preventDefault();
      let query = e.target.value.toLowerCase();
      let cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        let userName = card.querySelector("h2").textContent.toLowerCase();
        if (userName.includes(query)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  })();
});
