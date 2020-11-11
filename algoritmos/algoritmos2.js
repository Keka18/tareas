function a() {
    console.log('hello');
}
console.log('Dojo');

respuesta: 'Dojo'


2-- -- -- -- -- -- -- -- -- --

function a() {
    console.log('hello');
    return 15;
}
x = a();
console.log('x is', x);

respuesta: 'hello', 'x is 15'


3-- -- -- -- -- -- -

function a(n) {
    console.log('n is', n);
    return n + 15;
}

x = a(3);
console.log('x is', x);

respuesta: 'n is 3', 'x is 18'


4-- -- -- -- -- -- --

function a(n) {
    console.log('n is', n);
    y = n * 2;
    return y;
}
x = a(3) + a(5);
console.log('x is', x);

respuesta: 'n is 3', 'n is 5', 'x is 16'



//5-- -- -- -

function op(a, b) {
    c = a + b;
    console.log('c is', c);
    return c;
}

x = op(2, 3) + op(3, 5);
console.log('x is', x);

respuesta: 'c is 5', 'c is 8', 'x is 13'


//6.-

function op(a, b) {
    c = a + b;
    console.log('c is', c);
    return c;
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
console.log('x is', x)

respuesta: 'c is 5', 'c is 3', 'c is 6', 'c is 3', 'c is 5', 'c is 8', 'x is 19'



//7,.
var x = 15;

function a() {
    var x = 10;
}
console.log(x);
a();
console.log(x);

respuesta: 15, 15


//8.-
function multiply(x, y) {
    console.log(x);
    console.log(y);
}

b = multiply(2, 3);
console.log(b);

respuesta: 2, 3

//9.-

function multiply(x, y) {
    return x * y;
}
b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2));

respuesta: 6, 10



//10.-
var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
    i = i + 3;
    console.log(i);
}

respuesta: 3, 7

//11.-
var x = 15;
console.log(x);

function awesome() {
    var x = 10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

respuesta: 15, 15, 10, 15



//12.-
for (var i = 0; i < 15; i += 2) {
    console.log(i);
}

respuesta: 0, 2, , 4, 6, 8, 10, 12, 14


//13.-

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(i * j);
    }
}


//14.-


function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) { 
            console.log(i * j);
        }
    }
}
z = looping(3, 3);
console.log(z);

//15.-

function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            console.log(i * j);
        }
    }
    return x * y;
}
z = looping(3, 5);
console.log(z);


//16.-

12-- -- -- -- -- -- -- -- -- -- -- -


var x = 15;
console.log(x);

function awesome() {
    var x = 10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

respuesta: 15, 15, 10, 15

13-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


for (var i = 0; i < 15; i += 2) {
    console.log(i);
}

respuesta: 0, 2, 4, 6, 8, 10, 12, 14


14-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(i * j);
    }
}

respuesta: 0, 0, 0, 1, 0, 2

15-- -- -- -- -- -- -- -- -- -- -- -- -- -- -























function multiply(x, y) {
    return x * y;
}
b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2));
var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
    i = i + 3;
    console.log(i);
}
11-- -- -- --
var x = 15;
console.log(x);

function awesome() {
    var x = 10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);





12-- -- -- --

for (var i = 0; i < 15; i += 2) {
    console.log(i);
}





13-- -- -- --

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log(i * j);
    }
}

14-- -- -- -- -- -

function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) {
            console.log(i * j);
        }
    }
}
z = looping(3, 3);
console.log(z);



15-- -- -- -- -- -
function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            console.log(i * j);
        }
    }
    return x * y;
}
z = looping(3, 5);
console.log(z);

-- -- -- -- -- -- -- -- -- -- -- --

Parte 2

Print 1 to x
Por favor, completa los siguientes códigos para que la función imprima(print) todos los enteros(integers) de 1 a x.Si x es negativo, haz que se muestre(print / log)“ número negativo” y que la función devuelva falso.

function printUpTo(x) {
    // your code here
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false

-- -- -- -- -- -- -- -- -- -- -- -- --

PrintSum
Completa el código de más abajo para que la función imprima enteros(integers) de 0 a x y donde cada entero imprima la suma(sum) parcial.Haz que la función entregue la suma final.

function printSum(x) {
    var sum = 0;
    //your code here
    return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640

-- -- -- -- -- -- -- -- -- -- -- -

PrintSumArray
Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.

function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        //your code here
    }
    return sum;
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6