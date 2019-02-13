function Oyster() {
  this.balance = 0
}

Oyster.prototype.topUp = function (Number) {
  this.balance += Number
}

Oyster.prototype.tapIn = function () {
  this.balance -= 1
}
