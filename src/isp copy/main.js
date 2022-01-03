"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./shopping-cart");
const order_1 = require("./entities/order");
const messaging_1 = require("./services/messaging");
const Persistency_1 = require("./services/Persistency");
const product_1 = require("./entities/product");
const customer_1 = require("./entities/customer");
/// S - Single  Responsbility
///o - OPEN/closed principle abertas para extensão, mas fechada para modificação
///L - Liskov substitution principle(Princípio da substituição de liskov)
///Subtipos precisam ser substituíveis por seus tipos base
///I - Iterface segregation principle(Princípio  de segregação de interface)
///Os clientes não devem ser forçados a depender de interfaces que não utilizam
const shoppingCart = new shopping_cart_1.ShoppingCart();
const messaging = new messaging_1.Messaging();
const persistency = new Persistency_1.Persistency();
const indivdualCustomer = new customer_1.IndividualCustomer('Vinícius', 'Alcântra', '61909823400');
const enterpriseCustomer = new customer_1.EnterpriseCustomer('Somapay', '449494903039');
const order = new order_1.Order(shoppingCart, messaging, persistency, enterpriseCustomer);
shoppingCart.addItem(new product_1.Product('Borracha', 2.00));
shoppingCart.addItem(new product_1.Product('Apontador', 3.09));
shoppingCart.addItem(new product_1.Product('Lápis', 1.87));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
