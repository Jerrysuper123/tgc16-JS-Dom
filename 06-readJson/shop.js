//store the repsonse.data in a global variable to be used later
//not the best way of doing it (we an use module and class as well)
let catalog = [];

async function main() {
  let response = await axios.get("product.json");
  //   console.log(response);
  catalog = response.data;
  for (let product of response.data) {
    let optionElement = document.createElement("option");
    optionElement.value = product.sku;
    optionElement.innerHTML = product.name;

    document.querySelector("#product").appendChild(optionElement);
  }
}
main();
//lalala appear before repsonse.data appears

document.querySelector("#btnDisplay").addEventListener("click", function () {
  //for option just to get select value to
  let selectedProductSKU = document.querySelector("#product").value;
  //   console.log(selectedProduct);
  let targetProduct = null;
  for (let product of catalog) {
    if (selectedProductSKU === product.sku) {
      targetProduct = product;
      break;
    }
  }

  //show the ul when user click display product details
  document.querySelector("#details").style.display = "block";
  document.querySelector("#price").innerHTML = targetProduct.price;
  document.querySelector("#name").innerHTML = targetProduct.name;
  //get the targetProduct price and name to fill up in the html
  //display none for the element, once user click, we diplay block of product details
});
