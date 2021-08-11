// kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;

}
var result = kilometerToMeter(5);
console.log(result);



// budgetCalculator

function budgetCalculator(clock, phone, laptop) {
    var clock = clock * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var total = clock + phone + laptop;
    return total;
}
var result = budgetCalculator(10, 10, 10);
console.log(result);


// hotelCost

function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;

    }
    else if (day <= 20) {
        var firstShipt = 10 * 100;
        var remaining = day - 10;
        var secondShipt = remaining * 80;
        cost = firstShipt + secondShipt;

    }
    else {
        var firstShipt = 10 * 100;
        var secondShipt = 10 * 80;
        var remaining = day - 20;
        var thirdShipt = remaining * 50;
        cost = firstShipt + secondShipt + thirdShipt;
    }
    return cost;
}
var totalCost = hotelCost(71);
console.log(totalCost);


// megaFriend

function megaFriend(name) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > lgth) {
            var lgth = name[i].length;
            longest = name[i];

        }
    }
    return longest;
}

var name = ['abu', 'babu', 'cabbu', 'dabbbu'];
var largeName = megaFriend(name);
console.log(largeName);





