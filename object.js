var student1 = {id:121, phone:1745, name:"jakir"}
var student2 ={id:321, phone:3244, name:"zakir"}

var phoneNo1 = student1.phone;
var phoneNo2 = student1["phone"];
var phoneNoPro = "phone";
var phoneNo3 = student1[phoneNoPro];
//update phone number
student2.phone = 66666;
student2["phone"] = 999999;
student2[phoneNoPro] = 5500000011;

student2.cinema = "jsdkafjdfj"
student2["cinema"] = "riopropasop";

console.log(phoneNo3);
console.log(student2);