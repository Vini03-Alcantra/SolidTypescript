import { ShoppingCart } from "./shopping-cart"
import { Order } from "./classes/order"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/Persistency"
import { Product } from "./classes/product"
import { FiftyPercentDiscount, TenPercentDiscount } from "./classes/discount"

/// S - Single  Responsbility
///o - OPEN/closed principle abertas para extensão, mas fechada para modificação

const fiftyPercentDiscount = new FiftyPercentDiscount()
const tenPercentDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(tenPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()

const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product('Borracha', 2.00))
shoppingCart.addItem(new Product('Apontador', 3.09))
shoppingCart.addItem(new Product('Lápis', 1.87))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totaltWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)