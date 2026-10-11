// Vending Machine - simulate a vending machine with items and money
class VendingMachine {
  constructor(items, money) {
    this.items = items;
    this.money = money;
  }
  updateQuantity(itemCode) {
    this.items = this.items.map((item) =>
      item.code.toLowerCase() === itemCode.toLowerCase()
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  vend(itemCode, userMoney) {
    let machineItem = null;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].code.toLowerCase() === itemCode.toLowerCase()) {
        machineItem = this.items[i];
        break;
      }
    }
    if (!machineItem) {
      return `Invalid selection! : Money in vending machine = ${this.money.toFixed(
        2
      )}`;
    }
    if (machineItem.quantity === 0) {
      return `${machineItem.name}: Out of stock!`;
    }
    if (machineItem.price > userMoney) {
      return "Not enough money!";
    }
    if (machineItem.price === userMoney) {
      this.money += machineItem.price;
      this.updateQuantity(machineItem.code);
      return `Vending ${machineItem.name}`;
    }
    if (machineItem.price < userMoney) {
      const change = userMoney - machineItem.price;
      this.money += machineItem.price;
      this.updateQuantity(machineItem.code);
      return `Vending ${machineItem.name} with ${change.toFixed(2)} change.`;
    }
  }
}