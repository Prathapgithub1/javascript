//object defination: object is an a non premitetive data type to store the data like in key and value paires 
let obj={
    name:"Prathap",
    class:"B-tech",
    "stream":"EEE"
}
console.log(obj.name)
console.log(Object.keys(obj))
console.log(Object.values(obj))
// let arr={
//     subjects:['maths','hindi','english','science'],
//     marks:[90,80,75,85]
// }
// console.log(arr.sort (function (a,b){
//     if(marks[arr.indexOf(a)]> marks[arr.indexOf(b)]){
//         return +1
//     }
//     else if(marks[arr.indexOf(a)]==marks[arr.indexOf(b)]){
//         return 0
//     }
//     else{
//         return -1
//     }
//}))
    let obj11=[{value:4,value:7,value:2}]
    console.log(obj11.sort(function(a,b){
        if(a['value']>b['value']) return +1
        else if(a['value']===b['value']) return 0
        else return -1
    }))

    //to check amstrong number are not 
let amstrong= num =>{
    let rem 
    let sum=0;
    let temp = num
    while(temp>0){
        rem=temp%10
        sum+=rem*rem*rem;
        temp=parseInt(temp/10)
    }
    if(sum==num){
        console.log("amstrong number")
    }
    else{
        console.log("not a amstrong number")
    }
}
amstrong(153)





