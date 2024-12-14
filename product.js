document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const input = document.querySelector("#searchInput");
  const select = document.querySelector("#options");

  (async function () {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);

    function renderCards(filteredProducts) {
      container.innerHTML = "";
      filteredProducts.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <div class="card" style="width: 18rem;">
            <img src=${product.image} class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Rate: ${product.rating.rate}</li>
              <li class="list-group-item">Count: ${product.rating.count}</li>
              <li class="list-group-item">Price: ${product.price}</li>
            </ul>
            <div class="card-body">
              <h2>${product.category}</h2>
            </div>
          </div>
        `;
        container.append(card);
      });
    }

    function filterProducts() {
      const searchItem = input.value.toLowerCase();
      const limit =
        select.value === "all" ? products.length : parseInt(select.value);

      let filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchItem)
      );

      filteredProducts = filteredProducts.slice(0, limit);

      renderCards(filteredProducts);
    }

    renderCards(products);

    input.addEventListener("input", filterProducts);
    select.addEventListener("change", filterProducts);
  })();
});
