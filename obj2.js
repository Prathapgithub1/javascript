//switch case statements 
/*The switch statement is used to perform different actions based on different conditions.
*/
let exp="prathap";
switch(exp){
    case "prathaap":

        console.log("this is not correct")
    case "prathap":
        console.log("this is correct statement")
        break;
    default:
        console.log("default statement")

}
//for loop 
let str=" "
for(let i=0;i<5;i++){
    console.log(i)
}
let obj={
    "name":"Prathap",
    132:"idont know",
    "roll-N0":1233454566
}
for(let keys in obj){
    console.log(keys)
    console.log(obj[keys])
}

//arrays in loop 
let arr=[1,2,3,"prathap","i want u"]
for(let pra in arr){
    console.log(pra)
}