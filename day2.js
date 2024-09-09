// 1) print your name for 5 times.
// a="Huda Hajira"
// for (i=0;i<=4;i++){
//     console.log(a)
// }
// ..................................
// a="huda hajira"
// i=1;
// while(i<=5){
//     console.log(a)
//     i++;
// }
// a="huda hajira"
// function nam(a){
//     i=1;
//     while(i<=5){
//         console.log(a)
//         i++;
//     }
// }
// nam(a)
// .................
// 2) remove second letter of your name.
// a= ["h","u","d","a"];
//     a.splice(1,1);
//     console.log(a);

// // 3)write a program which returns additions of the given.
// var a=146
// var sum = 0
// d= a.toString().split('')
// console.log(d) 
// for(i=0;i<d.length;i++){
//     sum += (+(d[i]))   
// }
// console.log(sum);
// // ......................................................
// 4)fibanocci series with recurtion.
// var first =0
// second =1
// sum =0
// upto=20
// for(i=1;i<=upto;i++){
//     console.log(first)
//     sum =first+second
//     first=second
//     second=sum
// }
// .......................................................
// 5)linear search
// a=[1,2,5,7,8];
// key=5
// for (i=0;i<a.length;i++){
//     if (a[i]== key){
//         console.log(i)
//     }
// }
// .....................................
// 6)greatest of two numbers.
// var a=5,b=9;
// if(a==b){
//     console.log("The numbers are equal")
// }
// else if(a<b){
//     console.log(`${a} is less than ${b} `)
// }
// else if(a>b){
//     console.log(`${a} is greater than ${b} `)
// }
// ..........................................
// 7) .Biggest among three numbers?
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
// 'else if ((b>c) && (b>a))
// {
//     console.log(`${b} is greater`)
// }
// else if ((c>a) && (c>b))
// {
//     console.log(`${c} is greater`)
// }
// ............................................
// 8) Greatest number in the array.
// a=[1,3,6,2,8,3,6]
// var largest= 0;

// for (i=0; i<=largest;i++){
//     var largest = Math.max.apply(0, a);
// }
// console.log(largest);
// .............................................
// 9)Print the number of digits given.
// var ha = 9325;
// h=" "+ha;
// // var number=4;
// h=h.length-1
// if(h.length==3){
//     console.log(`It is a ${h}} digit number`)
// }
// else{
//     console.log(`it is not ${h} digit number`)
// }
// ..............................
// 10) Print the number of digit given (if 243 answer should be 3)
// var v=16234;
// c=v.toString().length
// console.log(c)
// .................................
// 11) convert the given number to string and tell the type of string.
// var q=234;
// b=toString(q)
// console.log(q, typeof(b))
// ..........................

// ............................

// 12) Write a program to print 2 table using while loop?

// i=1
// while (i<=10){
//     console.log(` 2 x ${i} = ${i*2}`)
//     i++
// }
// .........................................
// 13) Write the program to find the median of the array.
// a=[1,2,5,7,8,9];
// b=a.sort
// b=(Math.floor(a.length/2))
// console.log(a[b])

// 1.) Start by writing a function to find the smallest prime factor of a number.
// 2.) Then, create a loop that will continue until Apu's score is greater than or equal to Y. 
//   In each iteration, find the smallest prime factor of the current score and add it 
//   to the score, also increment a counter to keep track of the time.

// Add smallest prime factor
// Time Limit: 2, Memory Limit: 128000
// Apu's current score is X. Each second, Apu will find the smallest prime factor of her score and add it to her score.
// Determine the minimum time in seconds, after which her score becomes ≥ Y.

// Input
// The first line of input contains a single integer T, denoting the number of test cases.
// Each test case consists of a single line containing two integers X and Y, the initial and required score of Apu.

// Constraints
// 1 ≤ T ≤ 1000
// 2 ≤ X ≤ 10
// 20 ≤ Y ≤ 109
// Output
// For each test case, output the minimum time in seconds, after which Apu's score becomes ≥ Y.
// Example
// Sample Input
// 2
// 2 23
// 9 20
// Sample Output
// 11
// 5
// Explanation
// Test case 1: The initial score is 2. Apu needs the score to be at least 23.
// The smallest prime factor of 2 is 2. Thus, the score increase to 2 + 2 = 4.
// The smallest prime factor of 4 is 2. Thus, the score increase to 4 + 2 = 6.
// Similarly, each time the score would be increased by 2. Thus, after 11 seconds, the score becomes 24, which is ≥ 23.
// Test case 2: The initial score is 9. Apu needs the score to be at least 20.
// The smallest prime factor of 9 is 3. Thus, the score increase to 9 + 3 = 12.
// The smallest prime factor of 12 is 2. Thus, the score increase to 12 + 2 = 14.
// The smallest prime factor of 14 is 2. Thus, the score increase to 14 + 2 = 16.
// The smallest prime factor of 16 is 2. Thus, the score increase to 16 + 2 = 18.
// The smallest prime factor of 18 is 2. Thus, the score increase to 18 + 2 = 20.
// Thus, after 5 seconds, the score becomes 20, which is ≥ 20.

    
// function smallestPrimeFactor(n){
//     if (n <= 1){
//         return null;
//     }
//     if (n % 2 === 0){
//         return 2;
//     }
//     for (let i=3; i*i <= n; i +=2){
//         if (n % i === 0){
//     return i;
//       }
// }
// return n;
// }
