/*var matrix=[
   [0,1,1,2],
   [0,5,0,0],
   [2,0,3,3]
];

var res=sumar(matrix);
*/

module.exports = function matrixElementsSum(matrix){
    var sumaTotal=0;
    for(var c=0;c<matrix[0].length;c++){//recorriendo columnas 
        for(var f=0;f<matrix.length;f++){//recorriendo filas
            //console.log(matrix[f][c]);
            if(matrix[f][c]>0){
                sumaTotal += matrix[f][c];
            }else{
                break;
            }
        }
    }
    return sumaTotal;    
}
//console.log(res);