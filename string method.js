
let str1="abcdefg"//string 
console.log(str1.length)//to show the length of the string 

//method 2 
console.log(str1.charAt(0))
console.log(str1.charAt(1))
console.log(str1.charAt(2))
console.log(str1.charAt(3))
console.log(str1.charAt(4))
console.log(str1.charAt(5))
console.log(str1.charAt(6))

//method-3 
console.log(str1.toUpperCase())//to print the all upper case 

//method-4

console.log(str1.toLowerCase())//to print the all lower case 
//substring method is nothing but to access the inner string character 
console.log(str1.substr(1,3))//to access the upto 1-index to after 3 charcters 
console.log(str1.substring(1,3))//to access the upto 1-index to after 2 characters becuase ending index always less than one in substring method
//method-5

let str2="hey how are you"//split method is nothing but its convert string to array like spliting characters in array like show in below

console.log(str2.split("h"))
console.log(str2.split(","))
console.log(str2.split(" "))
console.log(str2.split("y"))
//can you observe the below problem 
var str3="finland, pakistan, india"
console.log(str3.split(", "))// then it will print like coma and space like see['finland', 'pakistan', 'india']

//method -6 -->trim  is nothing but it can remove the all spaces at before the character and at end the character 
var str4="       prathap kunartapu     "
console.log(str4.length)
console.log(str4.trim())
console.log(str4.trim().length)
//method==> includes is nothing but it shows true when the substring is exist in actual string otherwise false
console.log(str4.includes("prathap")) // it is there in actual string that y it shows the true 

//method ==> replace method is nothing but it can replace the character like shown below 
var str5='my mommy name is i dont know'
console.log(str5.replace('i dont know','padma'))

