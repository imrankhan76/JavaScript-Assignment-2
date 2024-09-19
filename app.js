// ----------------------------CH# USER INPUT & CONDITIONAL STATEMENT------------------


//  --------------------------------------Q#1------------------------------------------

var city=prompt("Enter city name")
if(city=="karachi"){
   alert("welcome to the city of lights")

}
else{
   alert("welcome "+city)
}


//  --------------------------------------Q#2------------------------------------------

var gender=prompt("Enter you Gender")

if(gender=="male"){
   alert("Good morning Sir")
}
else if(gender=="female"){
   alert("Good morning ma'am")
}
else{
  alert ("Good morning")

}

//  --------------------------------------Q#3------------------------------------------


var signal_color=prompt("Enter Traffic Signal")
if(signal_color=="red"){
   alert("must stop")
}
else if(signal_color=="yellow"){
   alert("ready to move")
}
else if(signal_color=="green"){
   alert("move now")
}
else{
  alert(signal_color+" is not a traffic signal")
}


//  --------------------------------------Q#4------------------------------------------

var fuel=+prompt("Remaining fuel in a car")
if(fuel<0.25){
   alert("Please refill the fuel in your car")
}


//  --------------------------------------Q#5------------------------------------------

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}


//  --------------------------------------Q#6------------------------------------------


var sub1_marks = +prompt("Enter English  marks");
var sub2_marks = +prompt("Enter Urdu  marks");
var sub3_marks = +prompt("Enter Math  marks");

var total_marks = 300;
var obatin_marks = sub1_marks + sub2_marks + sub3_marks;
var percentage = (obatin_marks / total_marks) * 100;

if (percentage >= 80) {
  var grade = "A-one";
  var remarks = "Exellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage < 60) {
  grade = "Fail";
  remarks = "Sorry";
} else {
  alert("Error");
}

document.write(`
    <h1>Marks Sheet </h1>
    <br>

    <h3>Total marks    =    ${total_marks}</h3>
    <h3>Marks Obtained = ${obatin_marks}</h3>
    <h3>Percentege     =     ${percentage}%</h3>
    <h3>Grade          =          ${grade}</h3>
    <h3>Remarks        =        ${remarks}</h3>

`);
  //  --------------------------------------Q#7------------------------------------------

var secret_num=4;
var select_num=+prompt("Choose a number from 1 to 10")

if(select_num===secret_num){
    alert("Bingo! Correct answer")
}
else if(select_num===++secret_num){
    alert("Close enough to the correct answer")

}
else{
    alert("Incorrect! Try again")
}


//  --------------------------------------Q#8------------------------------------------

var num=+prompt("Enter a number")

if(num % 3===0){
alert(num+" is divisible by 3")
}
else{
    alert(num+" is not divisible by 3")
}


//  --------------------------------------Q#9------------------------------------------

var num=+prompt("Enter a number")

if(num%2===0){
alert(num+" is an even number ")
}
else{
    alert(num+" is an odd number ")
}


//  --------------------------------------Q#10------------------------------------------


var temp=+prompt("Input Temperature")

if(temp>40){
    alert("It is too hot out side")

}
else if(temp>30){
    alert("The Weather today is normal")
}
else if(temp>20){
    alert("Today's Weather is cool")
}
else if(temp>10){
    alert("OMG! Today's Weather is so cool")
}
else
{
    alert("Outside is Snowing")
}



//  --------------------------------------Q#11------------------------------------------


var num1=Number(prompt("Enter First number"))
var num2=Number(prompt("Enter Second number"))
var operation=prompt("Which operation you are performing  ( + , - , * , /, % ) ")

if (operation =="+")
    {
    alert("Addition of "+num1+" + " +num2+" is "+ (num1+num2))
 }
 else if(operation=="-")
 {
    alert("Subtraction of "+num1+" - " +num2+" is "+(num1-num2) )

 }
 else if(operation=="*")
    {
       alert("Multiplication of "+num1+" * " +num2+" is "+ (num1*num2))

    }
else if(operation=="/")
        {
           alert("Division of "+num1+" / " +num2+" is "+ (num1/num2))

        }
else if(operation=="%")
            {
               alert("Modulus of "+num1+" % " +num2+" is "+ (num1%num2))

            }
else{
alert("Syntax Error")
            }

            var num1 = Number(prompt("Enter First number"));
var num2 = Number(prompt("Enter Second number"));
var operation = prompt("Which operation you are performing ( + , - , * , /, % ) ");

if (operation == "+") {
    alert("Addition of " + num1 + " + " + num2 + " is " + (num1 + num2));
} else if (operation == "-") {
    alert("Subtraction of " + num1 + " - " + num2 + " is " + (num1 - num2));
} else if (operation == "*") {
    alert("Multiplication of " + num1 + " * " + num2 + " is " + (num1 * num2));
} else if (operation == "/") {
    if (num2 != 0) {
        alert("Division of " + num1 + " / " + num2 + " is " + (num1 / num2));
    } else {
        alert("Division by zero is not allowed.");
    }
} else if (operation == "%") {
    alert("Modulus of " + num1 + " % " + num2 + " is " + (num1 % num2));
} else {
    alert("Syntax Error");
}

// ----------------------------------------------------------------------------------


//  -------------------------------CH# MATH EXPRESSIONS--------------------------------


//  --------------------------------------Q#1------------------------------------------

var value=10;

document.write("Result: <br>The value of a is: "+value+"<br><br>");
++value
document.write("The value of ++a is: "+value+"<br>");
document.write("Now the value of ++a is: "+value+"<br><br>");

document.write("The value of a++ is: "+value+++"<br>");
document.write("Now the value of a++ is: "+value+"<br><br>");

--value
document.write("The value of --a is: "+value+"<br>");
document.write("Now the value of --a is: "+value+"<br><br>");

document.write("The value of a-- is: "+value--+"<br>");
document.write("Now the value of a-- is: "+value+"<br>");


//  --------------------------------------Q#2------------------------------------------

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//  first pre decrement --a, now the value of a =1
// and than pre decrement --b, now the value of b =0
// after pre increment of ++b the value of b=1
// again decrement of b but this time it is post decrement so before caalling b its value is b=1 and after call its value will be b=0

document.write("a="+a+"<br>b="+b+"<br>")
document.write("Result: "+result+"<br>")


//  --------------------------------------Q#3------------------------------------------


var name=prompt("Enter your name")
alert("Good Morning "+name)

//  --------------------------------------Q#4 and Q#5------------------------------------------


var num=Number(prompt("Table",num=5));
document.write("<b>Table of  "+num+"</b><br>");
document.write(num+" x "+1+" =  "+num*1+"<br>");
document.write(num+" x "+2+" =  "+num*2+"<br>");
document.write(num+" x "+3+" =  "+num*3+"<br>");
document.write(num+" x "+4+" =  "+num*4+"<br>");
document.write(num+" x "+5+" =  "+num*5+"<br>");
document.write(num+" x "+6+" =  "+num*6+"<br>");
document.write(num+" x "+7+" =  "+num*7+"<br>");
document.write(num+" x "+8+" =  "+num*8+"<br>");
document.write(num+" x "+9+" =  "+num*9+"<br>");
document.write(num+" x "+10+" = "+num*10+"<br><br>");


//  --------------------------------------Q#6------------------------------------------

var sub1=+prompt("Enter your English subject marks")
var sub2=+prompt("Enter your Urdu subject marks")
var sub3=+prompt("Enter your Math subject marks")

var sub1_total_marks=100;
var sub2_total_marks=100;
var sub3_total_marks=100;

var obtain_marks_sub1=sub1;
var obtain_marks_sub2=sub2;
var obtain_marks_sub3=sub3;

var percentage_sub1=obtain_marks_sub1/sub1_total_marks*100;
var percentage_sub2=obtain_marks_sub2/sub2_total_marks*100;
var percentage_sub3=obtain_marks_sub3/sub3_total_marks*100;

var total_marks_all_sub=sub1_total_marks+sub2_total_marks+sub3_total_marks;
var obtain_marks_all_sub=obtain_marks_sub1+obtain_marks_sub2+obtain_marks_sub3;
var overall_per=obtain_marks_all_sub/total_marks_all_sub*100;




document.write(`

<table>
    <tr>
        <th>Subjects</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>
       <tr>
        <td>English</td>
        <td>${sub1_total_marks}</td>
        <td>${obtain_marks_sub1}</td>
        <td>${percentage_sub1}%</td>
    </tr>
       <tr>
        <td>Urdu</td>
        <td>${sub2_total_marks}</td>
        <td>${obtain_marks_sub2}</td>
        <td>${percentage_sub2}%</td>
    </tr>
       <tr>
        <td>Math</td>
        <td>${sub3_total_marks}</td>
        <td>${obtain_marks_sub3}</td>
        <td>${percentage_sub3}%</td>
    </tr>
    <tr>
        <th> </th>
        <th>${total_marks_all_sub}</th>
        <th>${obtain_marks_all_sub}</th>
        <th>${overall_per}%</th>
    </tr>


</table>
    
    `);
