module.exports = function getZerosCount(number, base) {
var a = 0;
var sum = 0;
var arr = [];
for ( var i = 2; i <= base; i++){
    if ((base % i) === 0) {
        while ((base % i) === 0) {
            base = base/i;
            a = a+1;                 
        }  
        var t = number;
        while(t / i >=1) {
          sum += Math.floor(t/i);
          t = t/i;
        }       
        arr.push(Math.floor(sum/a));
        a = 0;
        sum = 0;       
    }
    }
    var min_of_arr = Math.min(...arr);
    return min_of_arr;
}