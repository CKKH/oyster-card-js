function Oyster(journeys = new Journeys()) {
  this.journeys = journeys.history
  this.balance = 0
}

Oyster.prototype.topUp = function (Number) {
  this.balance += Number
}

Oyster.prototype.tapIn = function (station) {
  this.balance -= 1
  this.journeys.push([station])
}

Oyster.prototype.tapOut = function (station) {
  this.journeys[0].push(station)
}
