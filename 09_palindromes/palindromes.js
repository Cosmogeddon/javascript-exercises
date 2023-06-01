const palindromes = function (string) {
    return string.toLowerCase().replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"") === string.toLowerCase().replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
