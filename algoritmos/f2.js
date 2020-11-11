//1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function devol(x) {
    arr = [];
    for (i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(devol(255))


//2.-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
// Puedes usar un operador de módulo para este ejercicio. 

function par(x) {
    sum = 0;
    for (i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
z = par(1000);
console.log(z)

//3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).


function impar(x) {
    res = 0;
    for (i = 0; i <= x; i++) {
        if (i % 2 == 1) {
            res = res + i;
        }
    }
    return res;
}
z = impar(5000);
console.log(z)

//4.-Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
//(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

var arr = [1, 2, 5];

function devolsum(x) {
    var arr = [];
    sum = arr

}