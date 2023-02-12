
// create a new cart class add method to add item to cart
// add method to remove item from cart
// add method to update item in cart
// add method to get all items in cart
// add method to get total price of cart
// consider id of item, quantity, price, name, image

interface CartItem {
    id: string;
    quantity: number;
    price: number;
    name: string;
    image: string;
}

class Cart {
    private items: CartItem[] = [];
    constructor() {
        this.items = [];
    }
    addItem(item: CartItem) {
        // check if item already exists in cart
        let itemExists = this.items.find(cartItem => cartItem.id === item.id);
        if (itemExists) {
            itemExists.quantity += item.quantity;
        }
        else {
            this.items.push(item);
        }

    }
    removeItem(id: string) {
        this.items = this.items.filter(item => item.id !== id);
    }
    getItems() {
        return this.items;
    }
    getTotalPrice() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }
}

let cart = new Cart();


export default cart;
