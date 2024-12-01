let input = document.querySelector("#searchInput");
document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");

  (async function () {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();
    console.log(products);
    products.forEach((product) => {
      let card = document.createElement("div");
      let newName = document.createElement("h5");
      // newName.textContent = product.title;

      card.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src=${product.image} class="card-img-top" alt="img">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Rate: ${product.rating.rate}</li>
    <li class="list-group-item">Count:  ${product.rating.count}</li>
    <li class="list-group-item">Price: ${product.price}</li>
  </ul>
  <div class="card-body">
    <h2>${product.category}</h2>
  </div>
</div>
        `;
      container.append(card);
      input.addEventListener("change", (e) => {
        e.preventDefault();
        const cards = document.querySelectorAll(".card");
        const cardTitle = document.querySelectorAll("h5");

        // console.log(cards);
        for (let i = 0; i <= cards.length; i++) {
          console.log(cards[i]);
          console.log(cardTitle[i].textContent);

          if (cardTitle[i].textContent.includes(e.target.value)) {
            cards[i].style.display = " ";
          } else {
            cards[i].style.display = "none";
          }
        }
      });
    });
  })();
});

