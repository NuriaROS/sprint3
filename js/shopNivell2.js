var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// ** Nivell II **

// Exercise 8
var cart = [
  {
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
    quantity: 1,
    subtotal: 15,
    subtotalWithDiscount: 30,
  },
  {
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
    quantity: 1,
    subtotal: 19.99,
    subtotalWithDiscount: 30,
  },
  {
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
    quantity: 2,
    subtotal: 19.99,
    subtotalWithDiscount: 30,
  },
];

function buy(id) {
  addToCart(id);
}
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  let e = 0;
  let encontrado = false;

  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      let buscar = products[i].name;
      console.log("producto a buscar en cesta: " + buscar);

      while (e < cart.length && encontrado == false) {
        if (cart[e].name == buscar) {
          encontrado = true;
          yaEnCesta(cart[e]);
          console.log(cart);
        }
        e++;
      }
      if (encontrado == false) {
        push(products[i]);
        console.log(cart);
      }
    }
  }
}

console.log(cart);

function calculateTotal() {
  let total = 0;
  for (i = 0; i < cart.length; i++) {
    total += cart[i].subtotal;
  }
  console.log(total);
}

// función dentro del ejercicio 4
function push(producto) {
  producto.quantity = 1;
  delete producto.id;
  delete producto.offer;
  producto.subtotal = producto.price;
  producto.subtotalWithDiscount = producto.subtotal;
  cart.push(producto);
}
//función dentro del ejercicio 4
function yaEnCesta(producto) {
  // agregamos o quitamos propiedades
  producto.quantity += 1;
  producto.subtotal = producto.price * producto.quantity;
  producto.subtotalWithDiscount = producto.subtotal;
}

// removeFromCart(9);
// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  let e = 0;
  let encontrado = false;
  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      let borrarItem = products[i].name;
      console.log("producto a borrar en cesta: " + borrarItem);
      while (e < cart.length && encontrado == false) {
        if (cart[e].name == borrarItem) {
          encontrado = true;
          break;
        }
        e++;
      }

      if (encontrado == true) {
        console.log("encontrado " + cart[e].name + " en la cesta");
        cart[e].quantity -= 1;
        if (cart[e].quantity == 0) {
          cart.splice([e], 1);
          console.log(cart);
        } else {
          cart[e].subtotal = cart[e].quantity * cart[e].price;
        }
      } else {
        console.log("El producto a eliminar no está  en la cesta");
      }
    }
  }
  console.log(cart);
  applyPromotionsCart();
}


function open_modal() {
  console.log("Open Modal");
  calculateTotal();
  //   printCart();
}
