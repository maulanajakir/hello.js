var biscuitPrice = 12
if(biscuitPrice > 10){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}


var biscuitPrice = 7
if(biscuitPrice == 8){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}


var biscuitPrice = 7
if(biscuitPrice != 8){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}

var jobPaiso = true;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomar jonno patri khuji");
}
else{
    console.log("Tor kopale biya nai");
}

var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == false || savingAmount > 200000){
    console.log("Aso tomar jonno patri khuji");
}
else{
    console.log("Tor kopale biya nai");
}



var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == false && savingAmount > 200000){
    console.log("Aso tomar jonno patri khuji");
}
else if(jobPaiso == false || savingAmount > 499999){
    console.log("Aso tomar kopale bash");
}
else if(savingAmount == 500000){
    console.log("accha 351 din pore dekhbo")
}
else if(jobPaiso == false){
    console.log("accha koi din pore dekhbo")
}
else{
    console.log("Tor kopale biya nai");
}

var date = new Date();
console.log(date);

var date = new Date("1971-12-16");
console.log(date);