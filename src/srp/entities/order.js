"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(cart, messaging, persistency) {
        this.cart = cart;
        this.messaging = messaging;
        this.persistency = persistency;
        this._orderStatus = 'open';
    }
    get orderStatus() {
        return this._orderStatus;
    }
    checkout() {
        if (this.cart.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }
        this.messaging.sendMessage(`Seu pedido foi no total de ${this.cart.total()} foi recebido`);
        this.persistency.saveOrder();
        this.cart.clear();
    }
}
exports.Order = Order;
