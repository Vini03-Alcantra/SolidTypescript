"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./shopping-cart");
const order_1 = require("./classes/order");
const messaging_1 = require("./services/messaging");
const Persistency_1 = require("./services/Persistency");
const product_1 = require("./classes/product");
const discount_1 = require("./classes/discount");
/// S - Single  Responsbility
///o - OPEN/closed principle abertas para extensão, mas fechada para modificação
const fiftyPercentDiscount = new discount_1.FiftyPercentDiscount();
const tenPercentDiscount = new discount_1.TenPercentDiscount();
const shoppingCart = new shopping_cart_1.ShoppingCart(tenPercentDiscount);
const messaging = new messaging_1.Messaging();
const persistency = new Persistency_1.Persistency();
const order = new order_1.Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new product_1.Product('Borracha', 2.00));
shoppingCart.addItem(new product_1.Product('Apontador', 3.09));
shoppingCart.addItem(new product_1.Product('Lápis', 1.87));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totaltWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
