"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = exports.TenPercentDiscount = exports.FiftyPercentDiscount = exports.Discount = void 0;
class Discount {
    constructor() {
        this.discount = 0;
    }
    calculate(price) {
        return price - price * this.discount;
    }
}
exports.Discount = Discount;
class FiftyPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = .5;
    }
}
exports.FiftyPercentDiscount = FiftyPercentDiscount;
class TenPercentDiscount extends Discount {
    constructor() {
        super(...arguments);
        this.discount = .1;
    }
}
exports.TenPercentDiscount = TenPercentDiscount;
class NoDiscount extends Discount {
}
exports.NoDiscount = NoDiscount;
