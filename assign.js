// 1. Accept only numbers, Make a number always positive though given negative? With & without builtin function?
// var n=-8 
// n=Math.abs(n);
// console.log (n)

// if (n<0){
//     n*1
//     console.log(n)
// }
// else if (n<0){
//     n*=(-1)
//     console.log(n)
// }
// ....................................
// 2. A shop will give discount of 10% only if you purchase more than 1000 rupees.
// Any item costs exactly 100 rupees. inputs = quantity of items.
// Result must be Final bill prize

// q=15
// c=100
// a=(q*c)
// if (a>1000){
//     console.log(a-(a*10/100))
// }
// else {
//     console.log(a)
// }

// .........................................
// 3.check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
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
// 
// 4.Build Mini calculator having functionalities - *, /, +, - , %, squareroot, exponentiation, floor, ceil
// var a=3,b=4,operator="/"
// if(operator == "-"){
//     c=a-b
//     console.log(c)
// }
// else if (operator == "+"){
//     c=a+b
//     console.log(c)
// }
// else if (operator == "*"){
//     c=a*b
//     console.log(c)
// }
// else if (operator == "%"){
//     c=a%b
//     console.log(c)
// }
// else if (operator == "/"){
//     c=a/b
//     console.log(c)
// }

//  5.roots of quadratic equation, nature of roots 
// var a=6,b=7,c=1;
// D=b*b-4*a*c;

// if(D>0){
//     console.log((-b)+(Math.sqrt(D))/2*a)
//     console.log("Roots are real")
// }
// else if(D<0){
//     console.log((-b)+(Math.sqrt(D))/2*a)
//     console.log("Roots are imaginary")
// }
// else {
//     console.log("Equal roots")
// }