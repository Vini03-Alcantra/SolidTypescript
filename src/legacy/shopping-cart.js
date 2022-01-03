"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this._items = [];
        this._orderStatus = 'open';
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(index) {
        this._items.splice(index, 1);
    }
    get items() {
        return this._items;
    }
    get orderStatus() {
        return this._orderStatus;
    }
    total() {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }
    checkout() {
        if (this.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }
        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido foi no total de ${this.total()} foi recebido`);
        this.saveOrder();
        this.clear();
    }
    isEmpty() {
        return this._items.length === 0;
    }
    sendMessage(msg) {
        console.log("Mensagem evniada com sucesso", msg);
    }
    saveOrder() {
        console.log("Pedido salvo com sucesso");
    }
    clear() {
        console.log("Carrinho de compras foi lido");
        this._items.length = 0;
    }
}
exports.ShoppingCart = ShoppingCart;
const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Borracha', price: 2.00 });
shoppingCart.addItem({ name: 'Apontador', price: 3.09 });
shoppingCart.addItem({ name: 'Lápis', price: 1.87 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
