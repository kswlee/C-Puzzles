/* C名題精選百則 - NodeJs practice
 * Issue 3-3,  GRAYCODE
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/07/24
 */ 
function greycode(n) {
     var base = ['0', '1']; // n = 1
     for (var i = 2; i <= n; ++i) {
          var reflect = base.slice(0, base.length).reverse();
          
          var len = base.length;
          for (var j = 0; j < len; ++j) {
               base[j] = '0' + base[j];
               base[j + len] = '1' + reflect[j];
               
          }
     }
     console.log(base);
}

var n = 0;
function processInputData() {
     if (process.argv.length < 3) {
          console.log("Usage: node gray.js number");
          return;
     }

     n = process.argv[2];              
     greycode(n);
}    
processInputData();