// var 

//  var firstName = "Junaid";
//  var firstName92 = "Khalid";

// document.write(firstName92 );
// document.write(firstName );

// var  a , b ;

// document.write(a);

// let

// let firstName = "Ali";
// let firstName = "Baba";
// document.write(firstName);

// let firstName = "Ali";
// firstName = "Baba";
// document.write(firstName);

// const
// const ali = "Ali";
// document.write(ali);

// const ali = "Ali";
// ali = "Baba";                 /*error*/
// document.write(ali);



// Data types

// var  x = "Ali";
// document.write(x);
// document.write("<br>");
// document.write(typeof x );

// var  x = 'A';
// x = 55.945;
// document.write(x);
// document.write("<br>");
// document.write(typeof x );

// var  x = 'A';
// x = true;
// document.write(x);
// document.write("<br>");
// document.write(typeof x );

// var  x = 'A';
// x = 55.945;
// x = true;
// x = undefined;
// document.write(x);
// document.write("<br>");
// document.write(typeof x );

//  x = ["Ali", "Hasan","Qasim"];
//  document.write(x);
//  document.write("<br>");
//  document.write(typeof x );

// x = {first: "Ali", middle: "Hasan",last:"Qasim"};
// document.write(x);
// document.write("<br>");
// document.write(typeof x );



// Aritmatic Operator

// var a = 2;
// var b = 3;
// var c = a+b;
// document.write(c);
 
// var a = 6;
// var b = 3;
// var c = a - b;
// document.write(c);

// var a = 6;
// var b = 3;
// var c = a * b;
// document.write(c);

// var a = 6;
// var b = 3;
// var c = a / b;
// document.write(c);

// var a = 6;
// var b = 3;
// var c = a % b;
// document.write(c);

// var a = 3;
// var b = 2;
// var c = a ** b;  /*means 3 ki power 2 hai jo k 9 hota hai */
// document.write(c);

// var a = 6;
// var b = 3;
// a++;              /* means a=a+1 yani k a= (a+1) = (6+1) */
// document.write(a);


// var a = 6;
// var b = 3;
// document.write(a + b);
// document.write("<br>");
// a++;
// document.write(a+b);


// var a = 6;
// var b = 3;
// document.write(a + b);
// document.write("<br>");
// a--;
// document.write(a+b);



// var a = 6;
// var b = 3;
// var c = a - b + 3
// document.write(c);

// document.write(2 + 5 - 6 * 3 / 9);

// document.write((2 + 5) - 6 * 3 / 9);

// document.write(2 + (5 - 6) * 3 / 9); 



// Assignment Operator

// a = 5;
// b = a + 3;
// console.log(a);

// var a = 7;
// var b = 2;
// a += b;
// document.write(a);

// var a = 7;
// var b = 2;
// a -= b;
// document.write(a);

// var a = 7;
// var b = 2;
// a *= b;
// document.write(a);

// var a = 7;
// var b = 2;
// a /= b;
// document.write(a);

// var a = 7;
// var b = 2;
// a %= b;
// document.write(a);


// var a = 4;
// var b = 3;
// a **= b;
// document.write(a);


// var x = 4;
// console.log(x);

// var x = 4;
// console.table([1,2,3,4,5]);

// var x = 4;
// console.error("samething error");

// var x = 4;
// console.clear("samething warning");

// var x = 4;
// console.time("Timing Hell");
// console.timeEnd("Timing Hell");

// var ali = "text";
// document.write(ali);


// Comparison Operator
// var a = 20;
// var b = 20;
// console.log( a == b);

// var a = 20;
// var b = "10";
// console.log( a == b);

// var a = 20;
// var b = 20;
// console.log( a === b);
 
// var a = 20;
// var b = "20";
// console.log( a === b);

// var a = 20;
// var b = "10";  /*data type is not same*/
// console.log( a === b);

//  var a = 20;
//  var b = "20";
//  console.log( a != b);

// var a = 20;
// var b = 10;
// console.log( a != b);



// console.log( 5 != 6);


// console.log( 4 != 4);


// console.log( 6 !== "6");   /*if one condition is true answer will be false*/ 


// console.log( 4 !== 3);


// console.log( 4 > 6);

// console.log( 7 > 6);

// console.log( 4 < 6);


// console.log( 4 >= 6);

// console.log( 12 >= 6);

// console.log( 6 >= 6);


// console.log( 12 <= 6);

// console.log( 12 <= 12);

// console.log( 12 <= 14);


// console.log(null == undefined);

// console.log(null === undefined);

// If Statement:

// var a  = 10;
// var b = 15;
  
// if (a > b){
//     document.write("A is greater");
// }

// var a  = 100;
// var b = 15;
  
// if (a > b){
//     document.write("A is greater");
// }

// var a  = 15;
// var b = 15;
  
// if (a == b){
//     document.write("A is greater");
// }

// var a  = 19;
// var b = 19;
  
// if (a === b){
//     document.write("A is greater");
// }


// var a  = 19;
// var b = "19";         /*Data type is different*/
// if (a === b){
//     document.write("A is greater");
// }

// var a  = 19;
// var b = 18;
// if (a != b){
//     document.write("A is greater");
// }


// Logical Operator
// var age = 19;
// if (age => 18 && age <= 20 ){
//     console.log("you are eligible");
// }

// var age = 23;
// if (age >= 18 && age <= 22 ){
//     console.log("you are eligible");
// }

// var a = 19;
// var b = 22
// if (a >= 18 || b <= 23 ){
//     console.log("you are eligible");
// }

// var a = 17;
// var b = 22
// if (a >= 18 || b <= 23 ){
//     console.log("you are eligible");
// }

// var a = 30;
// var b = 25;
// console.log(! a >= 12);

// var a = 30;
// var b = 25;
// console.log(a >= 12);

// var a = 30;
// var b = 25;
// console.log(! b >= 26);


// if else statement
// var a = 15;
// if (a >= 30){console.log("A is Greater");}
// else console.log("A is smaller");

// var a = 35;
// if (a >= 30){console.log("A is Greater");}
// else console.log("A is smaller");

// var a = '30';
// if (a === 30){console.log("A is same");}
// else console.log("A is not same");

// var name = 'Junaid';
// var  sex  = 'male';
// if (sex == 'male')
// {console.log("Hello Mr." + name);}
// else console.log("Hello Mrs."  + name );

// var name = 'Junaid';
// var  name2 = 'Janiya';
// var  sex  = 'female';
// if (sex == 'male')
// {console.log("Hello Mr." + name);}
// else {console.log("Hello Mrs."  + name2);}


// If  else if statement
// var per = 3;
// if (per >= 80 && per <= 100){
//     document.write("Your in Merit");}
// else if (per >= 60 && per <= 80){
//     document.write("Your in Merit 1st Division");}
// else if (per >= 45 && per <= 60){
//     document.write("Your in Merit 2nd Division");}
// else if (per >= 33 && per <= 45){
//     document.write("Your in Merit 3rd Division");}
// else if (per < 33){
//     document.write("You are Fail");
// }
// else {
//     document.write("Enter Valid Percentage");
// }


// Conditional Ternary Operator
// var a  = 15;
// var b;
// (a == 15)? b = "True": b = "False";
// document.write(b);

// var a  = 15;
// var b;
// (a == 20)? b = "True": b = "False";
// document.write(b);

// var a  = 15;
// var b;
// b = (a > 14)? "True": "False";  /* Now Statement will short*/
// document.write(b);

// var a  = 15;
// var b;
// b = "My name  is Junaid & I am " + (a == 15? "True": "False");  /*With message*/
// document.write(b);

// Switch Case/Statement
// var day = 01;
// switch (day) {
//     case 0:
//         document.write("Today is Monday");
//     break;

//     case 1: case 01:      /*mulitple case use in one statement*/
//         document.write("Today is Tuesday");
//     break;

//     case 2:
//         document.write("Today is Wednesday");
//     break;

//     case 3:
//         document.write("Today is Thursday");
//     break;

//     case 4:
//         document.write("Today is Friday");
//     break;

//     case 5:
//         document.write("Today is Saturday");
//     break;

//     case 6:
//         document.write("Today is Sundayday");
//     break;

//     default:
//         document.write("Enter the valid Day");
// }


//  Alert
//  var a = 10;
//  var b = 20;
//  if  (a > b){alert("A is Greater");}
//  else {alert("B  is Greater");}

// alert('Welcome to JavaScript');

// var a = confirm("How are you ");
// if (a){alert("Hello");}
// else{alert("World");}

// prompt
// var a = prompt("What is your name");
// document.write(a);
// alert(a);

// var per = prompt("Enter your percentege");
//  if (per >= 80 && per <= 100){
//      document.write("Your in Merit");}
//  else if (per >= 60 && per <= 80){
//      document.write("Your in Merit 1st Division");}
//  else if (per >= 45 && per <= 60){
//      document.write("Your in Merit 2nd Division");}
//  else if (per >= 33 && per <= 45){
//      document.write("Your in Merit 3rd Division");}
//  else if (per < 33){
//      document.write("You are Fail");
//  }
//  else {
//      document.write("Enter Valid Percentage");
//  }


// Functions
// function Junaid(){
//     document.write("Junaid Khalid ");
// }
// Junaid();
// document.write("<br>");
// Junaid();
// document.write("<br>");
// Junaid();
// Junaid();

// function Junaid(){
//     document.write("Junaid Khalid ");
// }
// function Khalid(){
//     document.write("Junni Khalid ");    /*dual funcation*/
// }

// Junaid();
// document.write("<br>");
// Junaid();
// Khalid();
// document.write("<br>");
// Junaid();
// Junaid();


// Function with Parameters
// function Junaid(fname, lname){
//     document.write("Junaid Khalid " + fname + " " + lname);
// }
// Junaid("Sardar" , "Khan");


// function Junaid(fname, lname){
//     document.write("Junaid Khalid " + fname + " " + lname);
// }
// function Khalid(a , b){
//     document.write(a  + b);
// }
// Junaid("Sardar" , "Khan");
// Khalid(40,50);


// Function return... 
// function fullname(fname = "Juanid", lname="Khalid"){
//     var a = fname + " " + lname;
//     return a;
// }
// var fn = fullname("Ayaan","Khan");
// document.write(fn);


// function sum(math,eng,phy){
//     var s = math + eng + phy;
//     return s;
// }
// var total = sum(65,72,81);
// document.write(total);


// function sum(math,eng,phy){
//     var s = math + eng + phy;
//     return s;
// }
// function percentage(tt){
//     var per = tt/300 *100;
//     document.write(per)
// }
// var total = sum(72,72,72);
// percentage(total);


//  function sum(math,eng,phy){
//      var s = math + eng + phy;
//      return s;
//   };

//  var total = sum(72,72,72);
//      percentage(total);
//  function percentage(tt){
//     var c = tt/300 * 100;
//     return c;
//  };
//  var d = percentage(total);
//  document.write(d + " " +"%");


// Global & Local Variable:
// function hello(){
//     var a = "Junaid Khalid";        /*Local*/
//     document.write(a);

// }
// hello();

// var a = "Junaid Khalid";
// function hello(){
//     document.write(a);      /*Global*/

// }
// hello();

// var a = "Junaid Khalid";   
// function hello(){
//     document.write(a);      /*Both Global & Local*/

// }
// hello();
// document.write(a);
   
//  function hello(){
//      var a = "Junaid Khalid"; 
//      document.write(a);      /*error because 'a' is not defined outside from the function because inner function variable can't perform to outside of the funcation*/
//  }
//  hello();
//  document.write(a);


// Basic Events:
// function junaid(){
//     alert("My Name is  Junaid");
// }

//  function junaid(){
//      document.write("My Name is Junaid");
//  }


 
//    While Loop:
// var a = 2;
// while (a  <= 10) {
//     document.write("Hello Brother <br>");
//     a = a +  1;
// }

// var a = 2;
// while (a  <= 18) {
//     document.write("Hello Brother <br>");
//     a = a +  1;
// }

// var a = 2;
// while (a  <= 10) {
//     document.write(a + " ) Hello Brother <br>");
//     a = a +  1;
// }

// var a = 2;
// document.write("<ul>")                    /*Increament*/
// while (a  <= 10) {
//     document.write("<li>" + a + ") Hello Brother <br></li>");
//     a = a +  1;
// }
// document.write("</ul>")


// var a = 10;
// document.write("<ul>")        /*Decreament*/
// while (a  >= 2) {
//     document.write("<li>" + a + ") Hello Brother <br></li>");
//     a = a -  1;
// }
// document.write("</ul>")



// // Do-While-Loop:
// var a = 1;
// do{
//     document.write(a + ") Hello Junaid<br>");
//     a++;
// }
// while(a <= 10)



// For Loop:
// for(var a = 1; a <= 10; a++){
//     document.write("Hello Junaid<br>");
// }



// Break & Continue Statement:
// for (var a = 1; a <= 10; a++){
//     document.write("Number :" + a + "<br>");
// }


// for (var a = 1; a <= 10; a++){
//     if (a == 3){
//         document.write("Digit : " + a + "<br>");      /* numebr 3  and digit 3 both alot in table */
//     }
//     document.write("Number : " + a + "<br>");
// }


// for (var a = 1; a <= 10; a++){
//     if (a == 3){
//         document.write("Digit : " + a + "<br>");       /* change only digit 3 alot at point 3 and other loopvalue will continue */
//         continue;
//     }
//     document.write("Number : " + a + "<br>");
// }


// for (var a = 1; a <= 10; a++){
//     if (a == 3){
//         document.write("Digit : " + a + "<br>");
//         break;                                           /* when condition is true at digit 3 loop will bee stopped */
//     }
//     document.write("Number : " + a + "<br>");
// }



// Even & Odd Loops:
// for (var a = 1; a <= 10; a++){
// if (a % 2 == 0){
//     document.write(a + "<br>");
//   }
// }


// for (var a = 1; a <= 100; a++){
//     if (a % 2 == 0){                                  /*Even*/
//         document.write(a + "<br>");
//       }
//     }


// for (var a = 1; a <= 100; a++){
//     if (a % 2 != 0){                            /*Odd*/
//         document.write(a + "<br>");
//       }
//     }


// Nested Loop:
// for (var a = 1; a <= 100; a = a+10){
//     for (var b = a; b < a+10 ; b++){
//         document.write(b  + "  ");
//     }
//      document.write("<br>");      /* when you print column value means 1,11,21 break will apply but row(1 to 10, 11 to 20) has no change*/
// }


// for (var a = 1; a <= 5 ; a++){
//   /*condition*/  for (var b = 1; b <= a ; b++){
//      /*statement*/ document.write(b + " ");
//     }
//     document.write("<br>");
// }


// for (var a = 1; a <= 5 ; a++ ){
//     /*condition*/  for (var b = 1; b <= a ; b++){
//        /*statement*/ document.write(a + " ");
//       }
//       document.write("<br>");
//   }
  

// for (var a = 5; a >= 1 ; a--){
//     /*condition*/  for (var b = 1; b <= a ; b++){
//        /*statement*/ document.write(a + " ");
//       }
//       document.write("<br>");
//   }


//  for  (var a = 5; a >= 1 ; a--){
//      /*condition*/  for (var b = a; b >= 1 ; b--){
//         /*statement*/ document.write(b + " " );
//        }
//        document.write("<br>" );
//    }
 

//  for (var a  = 1; a <= 5; a++){
//      for(var b  = 1; b <= a; b++){
//         document.write( b +  " ");
//      }
//      document.write("<br>");
//  }


// for (var a = 0; a < 3; a++){
//     document.write("You Go to Hell : " + a + "<br>");
//     for (var b = 0; b < 5; b++){
//         document.write("Go to Hell : " + b + "<br>");
//     }
    
// }


// for (i = 0; i < 5; i++) {
//     for (j = 0; j < 2; j++) {
//        document.write("The number is i = " + i + " and j = " + j + "<br>");
//     }

//     document.write("<br>");
// }



// Array:
// var arr = [12,  25, 34, 45];
// document.write(arr);


// var arr = [12,  25, 34, 45];
// document.write(arr[2]);                    /*for finding the specific value*/


// var arr = [12,  25, 34, 45];
// for (a = 0; a <= 3; a++){
//     document.write(arr[a] + "<br>");      /*here 'a' represent the index value of array*/
// }



// var arr = [12,  25, 34, 45];
// document.write("<ul>")               /*In the form of list*/
// for (a = 0; a <= 3; a++){
//     document.write("<li>" + arr[a] + "</li>");
// } 
// document.write("</ul>");



// var arr = [12,  25, 34, 45];
// var sum = 0;
// document.write("<ul>")              
// for (a = 0; a <= 3; a++){
//     document.write("<li>" + arr[a] + "</li>");
//     sum = sum+arr[a];                      /*sum of all array*/
//          /*this sum is zero which describe in var sum, after the add  with array making new value of sum*/
// } 
// document.write("</ul>");
// document.write("Total sum of array = " + sum );



// var arr = [12,  "Junni", 34, "Jolli", false];        /*alphbatic value in array*/
//  document.write("<ul>")     /*you can add multiple data type or mix data type because every index(value) has different*/
//  for (a = 0; a <= 4; a++){
//      document.write("<li>" + arr[a] + "</li>");
//  } 
//  document.write("</ul>");


/*Array part 2 Constructor Mehtod*/
// var arr = new Array(12,  "Junni", 34, "Jolli", false);        
// document.write("<ul>")     
// for (a = 0; a <= 4; a++){
//     document.write("<li>" + arr[a] + "</li>");
// } 
// document.write("</ul>");


// var arr = new Array();   /*if you empty the braket that means in future put unlimited value.. if you applied any number like(3) thats means only 3 value will  apply in array*/
// arr[0] =  12;
// arr[2] =  "Junaid";   /*here we give the value to array number 2 but not give the number 1 that's why no. 1 and no. 4 value is undefined */
// arr[3] =  true;
// document.write("<ul>")     
// for (var a = 0; a <= 4; a++){
//     document.write("<li>" + arr[a] + "</li>");
// } 
// document.write("</ul>");


// var ary = new Array(3);

// for (var g = 0; g <= 3; g++){
//     ary[g] = prompt("Enter the Value : ");     /*This array we get the value's from user */
// }
// document.write("<ul>")     
// for (var a = 0; a <= 4; a++){
//     document.write("<li>" + ary[a] + "</li>");       /*In this array we print the value of given from user*/
// } 
// document.write("</ul>");



// Multi-Diminsional-Array:-
// var ary = [
//     ["Harry", 18, "Male", "B.Com"],
//     ["Juanid", 21, "Male", "BSC"],
//     ["Sara", 22, "Female", "MCS"],
//     ["Qayam", 19, "Male", "BCS"],
//     ["Muniba", 25, "Female", "DCS"]
// ];
// for(var a = 0; a <= 4; a++){
//     document.write(ary[a] + "<br>");
// }


// var ary = [
//     ["Harry", 18, "Male", "B.Com"],
//     ["Juanid", 21, "Male", "BSC"],
//     ["Sara", 22, "Female", "MCS"],
//     ["Qayam", 19, "Male", "BCS"],
//     ["Muniba", 25, "Female", "DCS"]
// ];
// for(var a = 0; a <= 3; a++){
//     for (var b = 0; b <= 3; b++){
//     document.write(ary[a][b] + " ");
// }
// document.write("<br>");
// }

/*........*/

// var ary = [
//     ["Harry", 18, "Male", "B.Com"],
//     ["Juanid", 21, "Male", "BSC"],
//     ["Sara", 22, "Female", "MCS"],  /*In loop not only Array's check Array index(No. of Array) also Value Index(name,age,sex,class).*/
//     ["Qayam", 19, "Male", "BCS"],
//     ["Muniba", 25, "Female", "DCS"]
// ];
// for(var a = 0; a <= 4; a++){
//     for (var b = 0; b <= 4; b++){
//     document.write(ary[a][b] + " ");
// }
// document.write("<br>");
// }


// var ary = [
//     ["Harry", 18, "Male", "B.Com", "Maths"],
//     ["Juanid", 21, "Male", "BSC", "Chemistry"],
//     ["Sara", 22, "Female", "MCS", "Physics"],  /*here we add another Value Index(name,age,sex,class,subject).*/
//     ["Qayam", 19, "Male", "BCS", "Biology"],
//     ["Muniba", 25, "Female", "DCS", "Algorithms"]
// ];
// for(var a = 0; a <= 4; a++){
//     for (var b = 0; b <= 4; b++){
//     document.write(ary[a][b] + " ");
// }
// document.write("<br>");
// }


// var ary = [
//     ["Harry", 18, "Male", "B.Com"],
//     ["Juanid", 21, "Male", "BSC"],
//     ["Sara", 22, "Female", "MCS"],  /*when you check the specfic/Index value of any Array Index*/
//     ["Qayam", 19, "Male", "BCS"],
//     ["Muniba", 25, "Female", "DCS"]
// ];
// document.write(ary[2][3] + " ");       /*first represent the Array Index and second represent the value index*/
// document.write(ary[4][2]);


// var ary = [
//     ["Harry", 18, "Male", "B.Com", "Maths"],
//     ["Juanid", 21, "Male", "BSC", "Chemistry"],
//     ["Sara", 22, "Female", "MCS", "Physics"],  /*Tabular Form*/
//     ["Qayam", 19, "Male", "BCS", "Biology"],
//     ["Muniba", 25, "Female", "DCS", "Algorithms"]
// ];
// document.write("<table border = '1px' cellspacing='0'>");  /*when outer use double brsess then use sigle brasess in internal*/
// for(var a = 0; a <= 4; a++){
//     document.write("<tr>");
//     for (var b = 0; b <= 4; b++){
//     document.write("<td>" + ary[a][b] + "</td>");
// }
// document.write("</tr>");
// }
// document.write("</table>");



// var ary = [
//     ["Harry", 18, "Male", "B.Com", "Maths"],
//     ["Juanid", 21, "Male", "BSC", "Chemistry"],
//     ["Sara", 22, "Female", "MCS", "Physics"],  /*Tabular Form*/
//     ["Qayam", 19, "Male", "BCS", "Biology"],
//     ["Muniba", 25, "Female", "DCS", "Algorithms"]
// ];
// document.write(ary.length);         /*when you use lenth then you cgeck unlimited array value and you will not apply any number of values in var. of array */
// document.write("<table border = '1px' cellspacing='0'>"); 
// for(var a = 0; a <= ary.length; a++){
//     document.write("<tr>");
//     for (var b = 0; b <= ary[a].length; b++){
//     document.write("<td>" + ary[a][b] + "</td>");
// }
// document.write("</tr>");
// }
// document.write("</table>");



// Modify/Change & Remove Array Element:-
// var a = ["Sarfraz", "Ali", 25, true];
// document.write(a + "<br>");
// a[0] = "Junaid";
// document.write(a);

/**..**/
// var a = ["Sarfraz", "Ali", 25, true];
// document.write(a + "<br>");
// a[0] = "Junaid";
// document.write(a + "<br>");
// a[2] = 19;
// document.write(a);

/**...Delete....**/
// var a = ["Sarfraz", "Ali", 25, true];
// document.write(a + "<br>");
// a[0] = "Junaid";
// document.write(a + "<br>");
// delete a[1];    /*value delete but Value Index not be delete means empty space*/
// document.write(a + "<br>");


// var a = ["Sarfraz", "Ali", 25, true];
// document.write(a + "<br>");
// a[0] = "Junaid";
// document.write(a + "<br>");
// delete a[1];    
// document.write(a + "<br>");
// document.write(a [1]+ "<br>"); /*show index value 1 has not value that's why showing undefined*/



