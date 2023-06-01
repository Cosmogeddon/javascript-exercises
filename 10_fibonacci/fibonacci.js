const fibonacci = function(n) {
        const result = [0, 1];
        for (var i = 2; i <= n; i++) {
          const a = result[i - 1];
          const b = result[i - 2];
          result.push(a + b);
        }
        console.log(result);
        return result[n];
      
      }
// Do not edit below this line
module.exports = fibonacci;
