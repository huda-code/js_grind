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
