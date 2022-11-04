const products = [
  {
    id: 1,
    img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
    nume: "Fiesta",
    continut:
      "Piept de pui, mozzarella, ceapДѓ roИ™ie, ardei gras, rosii proaspete, salam chorizo, sos chipotle, sos ranch, usturoi granulat",
    pret: 29.9,
  },
  {
    id: 2,
    img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
    nume: "Margherita Classic рџЊ±",
    continut: "Mozzarella, sos de roИ™ii",
    pret: 29.9,
  },
  {
    id: 3,
    img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
    nume: "Dracula рџЊ¶пёЏ",
    continut:
      "Sos de roИ™ii, salam chorizo, ardei jalapeno, salam pepperoni, mozzarella, sos chipotle",
    pret: 29.9,
  },
  {
    id: 4,
    img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
    nume: "Rustica",
    continut:
      "Piept de pui, suncДѓ, ceapДѓ roИ™ie, mozzarella, ardei gras, sos de roИ™ii, porumb",
    pret: 29.9,
  },
];

let productsBlock = document.querySelector(".products");
let basket = document.querySelector(".basket");

products.forEach((element, id) => {
  let list = `
    <div>
    <p>id: ${element.id}</p>
    <p>${element.nume}</p>
    <p>${element.continut}</p>
    <p>${element.pret}</p>
    <form>
     <button class="addBut">Add</button>
    </form>
    <hr>
    </div>
    `;
  productsBlock.innerHTML += list;
});

let addBut = document.querySelectorAll(".addBut");
console.log(addBut);

for (let i = 0; i < products.length; i++) {
  const element = products[i];
  let but = addBut[i];

  but.addEventListener("click", () => {
    let index = element.id;
    var object = products.find(function (elem) {
      return elem.id === index;
    });

    const basket = (() => {
      const fieldValue = localStorage.getItem("cart");
      return fieldValue === null ? [] : JSON.parse(fieldValue);
    })();

    basket.push(object);

    localStorage.setItem("cart", JSON.stringify(basket));
  });
}

// Getting data from localStorage

let showBasket = document.querySelector(".basket");

const data = localStorage.getItem("cart");
const result = JSON.parse(data);
console.log(result);

result.forEach((element) => {
  let list = `
    <div>
    <p>id: ${element.id}</p>
    <p>${element.nume}</p>
    <p>${element.continut}</p>
    <p>${element.pret}</p>

    <hr>
    </div>
    `;
  basket.innerHTML += list;
});

// clear basket
let butClear = document.querySelector(".clear_basket");
butClear.addEventListener("click", () => {
  localStorage.clear();
});
