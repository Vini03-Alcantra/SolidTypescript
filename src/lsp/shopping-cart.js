"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this._items = [];
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
    total() {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }
    isEmpty() {
        return this._items.length === 0;
    }
    clear() {
        console.log("Carrinho de compras foi lido");
        this._items.length = 0;
    }
}
exports.ShoppingCart = ShoppingCart;
