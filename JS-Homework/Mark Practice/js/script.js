
//2nd class practice

/*document.getElementById('me').innerHTML = Date() + '<h6>(Done it)</h6>';
document.getElementById('meA').innerText = 'Yes!!! I can do it!';

var x = 2**5;

alert(x);

function myAddress() {
    return 'Raj Hassan';
}

var x = myAddress();

document.write(x);

//

function amra(x,y,z) {
    return x + y + z;
}

x = amra('raj ', 'is ', 'perfect!' );

document.write(x);

alert(amra('Tumi ', 'Kamon ', 'Aso?'));

//

var x = 'hahah hahahahh ljljlj ljl lj mndmnfd  luejn,mememe';

var y = x.indexOf('ljljlj');

document.write(y);

//

var d = 5;
var e = 4;
var z = ++d + e;

document.write(z);

*/

//3rd class practice.

/*
var mark = prompt();
x = 80;

if ( x > 80 && x < 100) {
    alert("Passed");
} else {
    alert("Invalid Submit!");
}*/


/*
var x = 12;

if(x == 10) {
    alert('Yes');
} else {
    alert('No');
}
*/

/*
var a  = 10;
var b;
var c;

b = a++;
c = a;

alert(c);
*/

//---------Result View-----------

/*
var mark = prompt();

if ((mark <=100) && (mark >=80)) {
    alert("A+");
}
else if ((mark <=79) && (mark >=75)) {
    alert("A");
}
else if ((mark <=74) && (mark >=70)) {
    alert("A-");
}
else if ((mark <=69) && (mark >=65)) {
    alert("B+");
}
else if ((mark <=64) && (mark >=60)) {
    alert("B");
}
else if ((mark <=59) && (mark >=55)) {
    alert("C");
}
else if ((mark <=54) && (mark >=50)) {
    alert("D");
}
else if ((mark <=49) && (mark >=1)) {
    alert("F");
}
else {
    alert("Invalid Input!");
}
*/


//---------Leap Year-----------

var leapYear = prompt();

if ((leapYear % 400 == 0) || ((leapYear % 4 == 0) && (leapYear % 100 != 0))) {
    alert("Yes, It is Leap Year!");
} else {
    alert("No, It is not a Leap Year!");
}

















