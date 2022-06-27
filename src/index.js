module.exports = function reverse (n) {
    if(n < 0){
        let str1 = n * -1;
        let str = String(str1);
        let result = str.split('').reverse().join('');
        return +result;
    } else {
        let str = String(n);
        let result = str.split('').reverse().join('');
        return +result;
    }
}
