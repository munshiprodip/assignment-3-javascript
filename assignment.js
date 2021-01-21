// https://github.com/munshiprodip/assignment-3-javascript


//Task-1:  Convert kilometer to meter
function kilometerToMeter(kilometer){
    let meter = 0;
    if(typeof kilometer != "number" || kilometer<0){
        return "Please enter a valide number";
    }else{
        meter = kilometer * 1000;       //We know 1KM = 100M
    }
    return meter;
}

//Task-2:  Calculate your budget
function budgetCalculator(watch, mobile, laptop){
    let eachWatchPrice = 50;
    let eachMobilePrice = 100;
    let eachLaptopPrice = 500;
    let totalCost = 0;
    
    if ((typeof watch != "number" || watch < 0) || (typeof mobile != "number" || mobile < 0) || (typeof laptop != "number" || laptop < 0)) {
        return "Please enter a valide number";
    }else{
        let totalWatchPrice = eachWatchPrice * watch;
        let totalMobilePrice = eachMobilePrice * mobile;
        let totalLaptopPrice = eachLaptopPrice * laptop;

        totalCost = totalWatchPrice + totalMobilePrice + totalLaptopPrice;
    }
    return totalCost;
}

//Task-3:  Calculate hotel cost
function hotelCost(day){
    let totalCost = 0;
    if(typeof day != "number" || day<0){
        return "Please enter a valide number";

    }else if(day <= 10){
        totalCost =  day * 100;

    }else if(day <= 20){
        let costFirstTenDays = 10 * 100;
        let reminingDays = day-10;
        let costAfterTenDays = reminingDays * 80;
        totalCost =  costFirstTenDays + costAfterTenDays;

    }else if(day > 20){
        let costFirstTenDays = 10 * 100;
        let costAfterTenDays = 10 * 80;
        let reminingDays = day-20;
        let costAfterTwentyDays = reminingDays * 50;

        totalCost =  costFirstTenDays + costAfterTenDays + costAfterTwentyDays;
    }
    return totalCost;
}


//Task-4:  Find your large frien name
function megaFriend(friendsNames){
    if (typeof friendsNames != "object" || friendsNames.length == 0 ) {
        return "Please enter a list of your friends."
    }else{
        let biggestName = friendsNames[0];
        for (let i = 0; i < friendsNames.length; i++) {
            if (friendsNames[i].length > biggestName.length) {
                biggestName = friendsNames[i];
            }
        }
        return biggestName;
    }
}





// convert 5KM to Meter
console.log(kilometerToMeter(5));

// Budget for 10 Watches, 5 Mobiles and 1 Laptop
console.log(budgetCalculator(10, 5, 1));

// Total hotel cost for 25 days
console.log(hotelCost(25));

// Find the largest name of your frinds
friendsNames = ["Tariqul Islam", "Alamgir Sarker", "Amirul Islam", "Suman Sutradhar"];
console.log(megaFriend(friendsNames));