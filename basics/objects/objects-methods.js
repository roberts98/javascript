let restaurant = {
    name: 'ABS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(number) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return number <= seatsLeft;
    },
    seatParty: function(number) {
        this.guestCount += number;
    },
    removeParty: function(number) {
        this.guestCount -= number;
    }
}

restaurant.seatParty(73);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
