const form = document.querySelector("form");
const generate = document.getElementById("generate");

generate.addEventListener("click", (e) => {
  function generateRand(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  let generatedResult = generateRand(10);
  form.coupon.value = generatedResult;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("success");
  window.location = "index.html";
});
