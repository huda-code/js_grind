// question 57 - 87.
// 57)
// 12345
// 1234
// 123
// 12
// 1

// var n =5
// for(i = 0;i<n;i++){
//     var a = ""
//     for(j=1;j<=n-i;j++){
//         a += j
//     }
//     console.log(a)
// }
// ................................
// 58)
/*
12345
2345
345
45
5
*/
// var n = 5
// for(i = 0; i < n;i++){
//     var ptn = ""
//     for(j=i+1;j<=n;j++){
//         ptn += j
//     }
//     console.log(ptn)
// }
// ..................................
// 59)
/*
54321
4321
321
21
1
*/
// var n =5
// for(i = 0;i < n;i++){
//     var ptn = ""
//     for(j = n-i ;j >= 1;j--){
//         ptn += j
//     }
//     console.log(ptn)
// }
// .......................................
// 60)
/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
// var str= "1 "
// for (var i = 1;i<=5;i++)
// {
//     console.log(str)
//     str = str + (i+1) + " "
// }
// .......................................
// 62)
/*
5
45
345
2345
12345
*/
// var n = 5
// for(i = 0;i < n;i++){
//     var ptn = ""
//     for(j = n-i;j <=n;j++){
//         ptn += j
//     }
//     console.log(ptn)
// }
// .........................................
// 64)
// 1 
// 2 3 4 
// 5 6 7 8 9 

// 
// let i, s, r, k = 0;
// r = 4
// let x = 0
// for (i = 1; i <= r; ++i, k = 0) {
// let p = ""
// for (s = 1; s <= r - i; ++s) {
// p += "  "
// }
// while (k != 2 * i - 1) {
// p += ++x + " "
// ++k;
// }
// console.log(p)
// }
// ........................................
// 66)
/*
11111
2222
333
44
5
*/
// var n = 5
// for(i = 0;i < n;i++){
//     var ptn = ""
//     for(j = 1;j <= n-i;j++){
//         ptn += i +1
//     }
//     console.log(ptn)
// }
// .....................................
// 74)
//    *
//   ***
//  *****
// *******

// let i, s, r, k = 0;
// r = 4
// for (i = 1; i <= r; ++i, k = 0) {
//   let p = ""
//  for (s = 1; s <= r - i; ++s) {
//     p += " "
//  }
//  while (k != 2 * i - 1) {
//     p += "*"
//     ++k;
//  }
//  console.log(p)
// }
// ...................................
// 78)
/*

*
* *
* * *
* * * *
* * * * *

*/
// var str = " *";
// for (var i=0 ;i<10;i++)
// {
//     console.log(str);
//     str = str + " *";
// }
// .............................................
// 79)
/*

* * * * *
* * * *
* * *
* * 
*

*/
// var n=5
// var str = ""
// for(var j=0;j<n;j++)
// str+="* "
// for(var i = (n*2)-1;i>0;i-=2)
// {
//     console.log(str.substring(0,i))
// }
// ............................................
// 80)
/*
A
A B
A B C
A B C D
A B C D E
*/
// var input = "E"
// var str = "" //= String.fromCharCode(65)
// var end = input.charCodeAt(0)
// for (var i = 65 ; i <= end ;i++)
// {
//     str = str + String.fromCharCode(i) + " " 
//     console.log(str)
// }
// ....................................