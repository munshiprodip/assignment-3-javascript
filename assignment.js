// 

// Convert kilometer to meter
function kilometerToMeter(kilometer){
    let meter = 0;
    if(typeof kilometer != "number" || kilometer<0){
        return "Please enter a valide number";
    }else{
        meter = kilometer * 1000;       //We know 1KM = 100M
    }
    return meter;
}

// Calculate your budget
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

// Calculate hotel cost
function hotelCost(day){
    let totalCost = 0;
    if(typeof day != "number" || day<0){

        return "Please enter a valide number";

    }else if(day <= 10){

        totalCost =  day * 100;

    }else if(day <= 20){
        let costFirstTenDayes = 10 * 100;
        let reminingDays = day-10;
        let costAfterTenDayes = reminingDays * 80;
        totalCost =  costFirstTenDayes + costAfterTenDayes;

    }else if(day > 20){
        let costFirstTenDayes = 10 * 100;
        let costAfterTenDayes = 10 * 80;
        let reminingDays = day-20;
        let costAfterTwentyDayes = reminingDays * 50;

        totalCost =  costFirstTenDayes + costAfterTenDayes + costAfterTwentyDayes;

    }

    return totalCost;
}

// Find your large frien name

function megaFriend(friendsNames){
    if (typeof friendsName != "object" || friendsName.length == 0 ) {
        return "Please enter a list of your friends."
    }else{
        let biggestName = friendsNames[0];
        for (let i = 0; i < friendsNames.length; i++) {
            if (friendsNames[i].length > biggestName.length) {
                biggestName = friendsNames[i];
            }
        }
    }
    
    return biggestName;
}


// console.log("5 Kilometer = ", kilometerToMeter(5), "meter");

console.log(budgetCalculator("5", "5", "5"));

// console.log(hotelCost(5));

// friendsNames = ["Tariqul Islam", "Alamgir Sarker", "Amirul Islam", "Suman Sutradhar"]

// console.log(megaFriend(friendsNames));