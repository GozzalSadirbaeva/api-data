document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  async function call() {
    try {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;

        let response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        let token = await response.json();
        localStorage.setItem("authToken", token.token);
        window.location.replace("/home.html");
      });
    } catch (e) {
      console.log("Failed to fetch data:", e);
    }
  }

  call();
});
