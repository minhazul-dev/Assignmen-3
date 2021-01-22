// https://github.com/minhazul-dev/Assignmen-3


//   <<1st Problem>>  
function kilometerToMeter(km) {
    var in_Km = km * 1000;
    return in_Km;
}
kilometerToMeter();
var result = kilometerToMeter(100);
console.log(result);    //checking return value


//   <<2nd Problem>>  
function budgetCalculator(watch, mobile, laptop) {
    var noOfWatch = watch * 50;
    var noOfMobile = mobile * 100;
    var noOfLaptop = laptop * 500;
    var totalPrice = noOfWatch + noOfMobile + noOfLaptop;
    return totalPrice;
}
budgetCalculator();
var result = budgetCalculator(2, 4, 6);
console.log(result);   //checking return value


// <<3rd Problem>>
function hotelCost(days) {
    var price = 0;
    if (days <= 10) {
        price = days * 100;
    }
    else if (days <= 20) {
        var firstPhase = 10 * 100;
        var remaining = days - 10;
        var secondPhase = remaining * 80;
        price = firstPhase + secondPhase;
    }
    else {
        var firstPhase = 10 * 100;
        var secondPhase = 10 * 80;
        var remaining = days - 20;
        var thirdPhase = remaining * 50;
        price = firstPhase + secondPhase + thirdPhase;
    }
    return price;
}
hotelCost()
var res = hotelCost(100);
console.log(res);     //checking return value


//<<4th Problem>>

var myFriends = ['Tallest Friend', 'Taller Friend', 'Tall Friend']

function megaFriend() {
    var result = "";
    for (var i = 0; i < myFriends.length; i++) {
        var currentSize = myFriends[i];
        if (currentSize.length > result.length) {
            result = myFriends[i];
        }
    }
    return result;

}
megaFriend();
var outputCheck = megaFriend(myFriends);
console.log(outputCheck);    //checking return value
