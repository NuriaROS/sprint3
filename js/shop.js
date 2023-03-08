// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
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
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
console.log("hello");

function buy(id) {

  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      console.log("buscar " + products[i].name + "en lista de productos");
      cartList.push(products[i]);
      break;
    }
  }
  console.log(cartList);
}

// Exercise 2
function cleanCart() {
  cartList = [];
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  console.log(total);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  let encontrado = false;
  let x = 0;

  for (i = 0; i < cartList.length; i++) {
    let buscar = cartList[i].name;
    console.log("producto a buscar en cart: " + buscar);

    if (cart.length == 0) {
      push(cartList[i]);
    } else {
      for (x = 0; x < cart.length; x++) {
        //     console.log('Es ' + buscar + ' igual a ' + cart[x].name);
        if (buscar === cart[x].name) {
          encontrado = true;
          break;
        } else {
          encontrado = false;
        }
      }
      if (encontrado == false) {
        push(cartList[i]);
      } else {
        yaEnCesta(cart[x]);
      }
    }
  }
  console.log(cart);
}

//función dentro del ejercicio 4
function push(producto) {
  producto.quantity = 1;
  delete producto.id;
  delete producto.offer;
  producto.subtotal = producto.price;
  producto.subtotalWithDiscount = producto.subtotal;
  cart.push(producto);
  console.log(cart);
}
//función dentro del ejercicio 4
function yaEnCesta(producto) {
  // agregamos o quitamos propiedades
  producto.quantity += 1;
  producto.subtotal = producto.price * producto.quantity;
  producto.subtotalWithDiscount = producto.subtotal;
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  let newprice;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].name == "cooking oil") {
      if (cart[i].quantity >= 3) {
        newprice = 10;
        subtotal(cart[i], newprice);
      }
    }
    if (cart[i].name == "Instant cupcake mixture") {
      if (cart[i].quantity >= 10) {
        newprice = cart[i].price * 0.6666;
        subtotal(cart[i], newprice);
      }
    }
  }
  console.log(cart);
}

//función dentro del ej.5
function subtotal(producto, nuevoPrecio) {
  producto.subtotalWithDiscount = nuevoPrecio * producto.quantity;
}

// Exercise 6
function printCart() {
  generateCart();
  applyPromotionsCart();
  // Fill the shopping cart modal manipulating the shopping cart dom
  var info = document.getElementById("cart_list");
  let data = [];
  cart.forEach((cart) => {
    data +=
      "<tr><td>" +
      cart.name +
      "</td><td>" +
      cart.price +
      "</td><td>" +
      cart.quantity +
      "</td><td>" +
      cart.subtotalWithDiscount +
      "</th>";
  });

  info.innerHTML = data;

  cart.forEach((cart) => {
    total += cart.subtotalWithDiscount;
  });

  var sumatotal = document.getElementById("total_price");
  sumatotal.innerHTML = total;
}

// Exercise 7
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

function calculateTotal2() {
  let total = 0;
  for (i = 0; i < cart.length; i++) {
    total += cart[i].subtotal;
  }
  console.log(total);
}


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
  calculateTotal2()
  
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
