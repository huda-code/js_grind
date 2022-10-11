// ALGORITHMS & DATA STRUCTURES -
// PROBLEM SOLVING
// 1) Write a program to given input Check whether Even or odd.
// 2) Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
// Numbers.
// 3) Write a program to decide given N is Prime or not. x
// 4) Write a program to subtract two integers without using Minus (-) operator x
// 5) Write a program to find remainder of two numbers without using modulus (%) operator x
// 6) Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime Numbers/in given
// range. x
// 7) Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of
// the number and for the multiples of '5' print "Buzz".
// 8) Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two
// numbers is the largest number that divides both of them using recursion.
// 9) Write a program find GCD of the array elements given an array of numbers,
// 10) Write a program given an array of ‘N’ numbers, find LCM of it.



// ..............................................................
// 1) Write a program to given input Check whether Even or odd.
// var a=6
// if ((a%2)==0){
//     console.log("the given number is even");
// }
// else{
//     console.log("the given number is odd");
// }
// ...........................................................

// 2) Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
// Numbers.
// let even = ""
// let odd = " "
// for(i=1;i<=100;i++){
//     if((i%2)==0){
//          even += i +"," 
           
//         }
//         else{
//             odd += i+ ","
//         }
   
// }
// console.log(even);
// console.log(odd);

// ........................................................
// 3) Write a program to decide given N is Prime or not.x
// let prime =(n) =>{
//     for (i=2;i<n;i++){
//         if (n === 1) {
//             console.log("1 is neither prime nor composite number.");
//         } 
//          else if(n % i == 0){
//             console.log (`the number is Prime ${i}`);
//         }
//         else{
//             console.log(`the number is composite ${i}`)
//         }
//     }
// };
// prime(20)

//  for(n=1;n<=100;n++){
//     // n=20
// if(n==1){
//     console.log("1 is neither prime nor composite number.");
// }
// for(i=2;i<n;i++){
//     if ((n%i)==0){
//         console.log (`the number is not a Prime ${i}`);
//     }
//     else {
//         console.log(`the number is prime ${i}`)
//     }
// }

//  }


// var n=11

//     if(n==1){
//     console.log("1 is neither prime nor composite number.");
// }
// for(i=2;i<n;i++){
// if((n%i) ==0 ){
//     // console.log("div by:",i);
//     console.log("then it is not  prime number")
//     break;
// }
// else {
//     // console.log("div by:",i);
//     console.log("it is  a prime number")
//     break;
// }
// }
// 
// ......................................
// 4) Write a program to subtract two integers without using Minus (-) operator x
// 5) Write a program to find remainder of two numbers without using modulus (%) operator x
// 6) Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime Numbers/in given
// range. x
// ..........................................


// 7) Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of
// the number and for the multiples of '5' print "Buzz".

// for(i=1;i<=100;i++){

//     if ((i%3)==0){
//         console.log(` Fizz`)
//     }
//     if ((i%5)==0){
//         console.log(` buzz`)
//     }
//     else 
// {
//     console.log (`${i}`)
// }
 
// }
// ....................................
// 11) Write a program to find the Sum of Array Elements
// var a=[1,4,6,8]
// var b=[2,6,9,3]
// var sum= " "
// for (i=0;i<=a.length-1;i++){
//      sum +=  a[i] + b[i] +" "
// }
// console.log (sum)
// // ...............................
// 12) Write a program for swapping of two arrays
// var a = [1,3,5,36,64,7]; //swapping of an element in an array
// [a[2],a[0]]=[a[0],a[2]];
// console.log(a)
//....................
// sort an Array, accending order
// let a=[1,4,8,2,3,0,1,5]
// a.sort(function(a,b){return a-b});
// console.log(a)

// sort an Array, deccending order
// let a=[1,4,8,2,3,0,1,5]
// a.sort(function(a,b){return b-a});
// console.log(a[0])
// ...........................

// 13) Write a program to find the maximum number in an array using function
// var a = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     var largest = Math.max.apply(0, a);
// }
// console.log(largest);
// .........................................
// 15) Write a program to find the minimum number in an array using function
// var a = [3 , 6, 2, 56, 32, 5, 89, 32];
// var mini= 0;
// var largest=0;

// for (i=0; i<=mini;i++){
//     var mini = Math.min.apply(0, a);
// }
// for (i=0; i<=largest;i++){
//     var largest = Math.max.apply(0, a);
// }
// console.log(mini);
// console.log(largest);
// ..............................
