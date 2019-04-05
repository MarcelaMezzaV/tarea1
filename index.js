//--------------------------ejercicio 1-------------------------
const matrixElementsSum = require('./ejercicio1');
var matrix=[
    [0,1,1,2],
    [0,5,0,0],
    [2,0,3,3]
 ];
 
 var res=matrixElementsSum(matrix);
 console.log("el resultado del ejercicio1 es : "+res);
 //----------------------------------------------------------------
const centuryFromYear = require('./ejercicio2');
var res2=centuryFromYear(1905);
console.log("El año pertenece al siglo :"+res2);