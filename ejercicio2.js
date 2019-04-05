//var siglo = centuryFromYear('1905');
module.exports = function centuryFromYear(year){
    var tam = year.length;
    var century = parseInt(year.substr(0,tam-2),10);
    console.log(century);
    var extra = parseInt(year.substr(tam-2,tam),10);
    if(extra>0){
        century++;
    }
    return century
}

//console.log(siglo);