function Oyster(journeys = new Journeys()) {
  this.journeys = journeys.history
  this.balance = 0
}

Oyster.prototype.topUp = function (Number) {
  this.balance += Number
}

Oyster.prototype.tapIn = function () {
  this.balance -= 1
}

Oyster.prototype.tapOut = function (station) {
  this.journeys.push(station)
}
