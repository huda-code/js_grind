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
// var a = -10 , b = -5
// console.log(`${a} - (${b}) = ${a+~b+1}`)
// ............................................
// 5) Write a program to find remainder of two numbers without using modulus (%) operator x
// var divident = -100 , divisor = 101
// var quotient
// var res = 0
// if(divident<0)
//     divident = -divident
// if(divisor<0)
//     divisor = -divisor
// for(var i = 0; res<=divident; i++)
// {
//     res = i * divisor
//     if(res <= divident)
//         quotient = i
// }
// var remainder = divident - (quotient * divisor)
// console.log(remainder)
// ...........................................
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
// 8)Write a program to find GCD.
// function gcd(a,b){
//     if(b==0)return a
//     r = a % b
//    return gcd(b,r)
// }
// console.log(gcd(30,45))
// ......................................................................
// 9) write a program find GCD of the array.
//Using eucledins formula
// a = b*q + r
// var a = 102, b = 32;
//    var r;
//    while(r!=0)
//    {     
//        r = a%b;
//        a = b;
//        b = r;
//    }
//    console.log(a)
// ..................................
// 10)Write a program given an array of N numbers, find LCM
// var a = 9,b = 15
// var lcm = lcm(a,b)
// console.log(lcm)

// function lcm(a,b){
//     var min = a > b ? b : a
//     var max = a < b ? b : a
//     for(var i = 1;i<=max;i++){
//         if((max * i)%min == 0)
//             return max * i
//     }
// }
// .....................................
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
// 14)) Write the program to find the median of the array.
// a=[1,2,5,7,8,9];
// b=a.sort
// b=(Math.floor(a.length/2))
// console.log(a[b])
// // .......................
// // 15))  Write a program to find the highest and the lowest number in array
// let a = [3 , 6, 2, 56, 32, 5, 89, 32];
// let b=a.sort();

// console.log(b[a.length-1] )
// ..........................................................
// x) Write a program to find the minimum number in an array using function
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
// // 16) Write a program to find Mean of given Array Elements?
// var a=[1,4,6,8]
// sum=0
// for (i=0;i<=a.length-1;i++){
//      sum +=  a[i] 
// }
// console.log (sum)
// mean = sum/a.length
// console.log(mean)
// .......................................
// 17) Write a program to find whether given number is an Armstrong number or not? ** (Narcissistic
    // number or Pluperfect digital invariant (PPDI) or a Plus perfect number)
//     var arm = 0, a, num;
//     temp = num;
//     l = num.toString().length
//     while (temp > 0) {
//         a = temp % 10;
//         temp = parseInt(temp / 10); // convert float into Integer
//         arm = arm + a ** l
// }
//     if (arm == num) {
//         console.log("Armstrong number");
//     } else {
//         console.log("Not Armstrong number");
//     }
// }

// armstr(1)
// ......................................
// 18) Write a program to find whether given number is an Perfect number or not
// function perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// perfect(6);
// ........................................
// 19)
// .Write a  program to test whether a passed letter is a vowel or not? (edited)
// function vowels(v){
// if(v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u' || v == 'A' || v == 'E' || d == 'I' || d == 'O' || d == 'U' )
//     console.log(v + " is Vowel");
// else
//     console.log(v + " is Consonant");
// return v;
// }
// .............................................
// 20.Biggest among three numbers?
// var a=8,b=5,c=1

// if ((a==b) && (b==c) && (c==a))
// {
//     console.log(`${a} all are equal`)
// }
// else if ((a==b))
// {
//     console.log(`${a} and ${b} are equal`)
// }
// else if ((b==c))
// {
//     console.log(`${b} and ${c} are equal`)
// }
// else if ((a==c))
// {
//     console.log(`${a} and ${c} are equal`)
// }
// else if ((a>b) && (a>c))
// {
//     console.log(`${a} is greater`)
// }
// else if ((b>c) && (b>a))
// {
//     console.log(`${b} is greater`)
// }
// else if ((c>a) && (c>b))
// {
//     console.log(`${c} is greater`)
// }
// ............................................
// //  21.roots of quadratic equation, nature of roots 
// var a=6,b=-0,c=1
// D=b*b-4*a*c
                                  // console.log(D)
//  if (D>0){
//     console.log((-b)+(Math.sqrt(D))/2*a)
//     console.log((-b)-(Math.sqrt(D))/2*a)
//     console.log("Roots are Real")
//  }
//  else if (D<0){
//     console.log((-b)+(Math.sqrt(-D))/2*a)
//     console.log((-b)-(Math.sqrt(-D))/2*a)
//     console.log("Roots are imaginary")
//  }
//  else{
//       console.log("equal roots")
//  }
// ...........................................
// 22) Write a program to Check Whether the given year is a leap year or not
// function leapyear(year){
//     rem = year%4;
//     if(rem == 0){
//         return 'leap year'
//     }
//     else {
//         return 'not a leap year'
//     }
// }
// result =   leapyear(1956)
// console.log(result);
// ....................................
// 23) Write a program to check whether a number is a positive number or negative number?
// var a=2;
// if (a>0){
//     console.log( `the ${a} is positive`)
// }
// else {
//     console.log( `the ${a} is negative`) 
// }
// ...................................................
// 24,
// ...................
// 25)
// function power(num,pwr){
//     if(pwr==0)return 1
//     return num * power(num,pwr-1)
// }
// console.log(power(5,4))
// ...........................................
// 26) Write a program to check wheather the given character is alphabet or not.
// var c = 'z'
// var d = c.charCodeAt(0)
// if( (d >= 65 && d <= 90) || (d >= 97 && d <= 122) )
//     console.log("Its An Alphabet")
// else 
//     console.log("ITS NOT AN ALPHABET")
// .................................
// 27) .check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
// i) if directly lengths are given,
// ii) Take coordinates as input.

// var a=13,b=24,c=23;
// if ((a+b>c)&&(b+c>a)&&(c+a>b)){
//     console.log("It is an triangle");
// }
// else{
//     console.log("It is not a triangle");
// }
// if (a!=b!=!c){
//     console.log("its a scalene triangle")
// }
// else if (a==b || b==c||c==a){
//     console.log("Its an isoscelec triangle")
// }
// else if (a==b && b==c && c==a){
//     console.log("its an equilateral triangle")
// }
// ......................................
// 28) Write a program to find area and circumference of a circle.
// var r=3;
// R=3.14*r*r;
// console.log(`The Area of the Circle is ${R}`)
// C=3.14*2*r;
// console.log(`The circumference of the circle is ${C}`)
// ..............................
// 30)Write a program to check if the given string is palindrome or not
// var str = "ABCD"
// str = str.toLocaleLowerCase()
// var len = str.length
// var j = len-1
// for(var i = 0;i<len/2;i++){
//     if(str.charAt(i)!=str.charAt(j--))
//         break
// }
// if(i>=len/2)
//     console.log("string is palindrome")
// else
//     console.log("not palindrome")
// ......................................
// 43)Write an algorithm using JAVASCRIPT to swap two number using temp variables

//Using temporary variable
// var a = 21
// var b = 13
// console.log("before swap a = "+a + " b = "+b)
// var temp
// temp = a
// a = b
// b = temp
// console.log("after swap a = " + a + " b = " + b)


// //Using + and -
// var a = 21
// var b = 13
// console.log("before swap a = "+a + " b = "+b)
// a = b - a // b = (a = b) - (b - a)
// b = b - a
// a = b + a  
// console.log("after swap a = " + a + " b = " + b)

// //Using * and /
// var a = 18
// var b = 10
// console.log("before swap a = "+a + " b = "+b)
// a = a * b
// b = a / b
// a = a / b
// console.log("after swap a = " + a + " b = " + b)

// //Using ^
// var a = 17
// var b = 12
// console.log("before swap a = "+a + " b = "+b)
// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log("after swap a = " + a + " b = " + b)

// //Using * and / in oneline

// var a = 16
// var b = 12
// console.log("before swap a = "+a + " b = "+b)
// a = (a * b) / (b = a)
// console.log("after swap a = " + a + " b = " + b)
// ....................................................
// 44)Write a program to convert Decimal to Binary and binary to decimal
// var a = ""
// var num = 12
// while(num>0){
//     a += num%2
//     num= Math.trunc(num/2)
// }
// str = a.split('').reverse().join('')
// console.log(str)
// ...........................................................
// 50)Write an algorithm using Javascript to reverse Array method
// var arr = ['a','b','c','d','e','f','g']
// var len = arr.length
// var j = len - 1
// for(var i = 0;i < len/2;i++){
//     var temp
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j--
// }
// console.log(arr)
// .....................................................
// 51)Write an algorithm using JAVASCRIPT to check if a given number is in the following series.
// let num = 4096
// res = num/4
// if(num/res == 4)
//     console.log("Given number is from series")
// else
//     console.log("Given number is not from series")
// ..................................................
// 54)Write a program to generate N fibonnaci series ,generate fibonacci series upto N. with recursion, with iteration. which approach is more efficient.
//Recursion
// var a=0,b=1,c
// function fibSeries(n){
//     if(n>0)
//     {
//          c = a + b
//          a = b
//          b = c
//          console.log(c)
//          fibSeries(n-1)
//     }
// }
// console.log(0+"\n"+1)
// fibSeries(6)
// //
// console.log("with Iterations")
// var a =0,b=1,c
// console.log(0+"\n"+1)
// for(var i = 0;i<6;i++){
//     c = a + b
//     a = b
//     b = c
//     console.log(c)
// }
// ..............................................
// 55)Write a program to calculate factorial of any given number N. with recursion, without recursion.
// which approach is more efficient?
//Recursion
// function fact(n){
//     if(n==1 || n==0)
//         return 1
//     return n * fact(n-1)
//  }
// console.log(fact(5))
// //Iterative
// function fact(n){
//     if(n==1 || n==0)
//         return 1
//     return n * fact(n-1)
//  }
// console.log(fact(5))
// ....................................


