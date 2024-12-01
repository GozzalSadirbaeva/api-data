document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  (async function () {
    let response = await fetch("https://fakestoreapi.com/users");
    let data = await response.json();
    console.log(data);
    data.forEach((user) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h2>${user.name.firstname}</h2>
      <p>${user.email}</p>
      <h2>${user.phone}</h2>`;
      container.append(card);
    });
  })();
});
