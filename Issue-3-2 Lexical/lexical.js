/* C名題精選百則 - NodeJs practice
 * Issue 3-2,  LEXICAL
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/07/24
 */ 
(function () {
     function lexical(n) {        
          var pos = 0;
          var set = [];
          set[pos] = 1;

          console.log('{} \n' );
          while(true) {
               console.log('{' + set[0]);
               for (var i = 1; i <= pos; ++i) {
                    console.log(set[i]);
               }
               console.log("}\n\n\n");

               if (set[pos] < n) {
                    set[pos + 1] = set[pos] + 1;
                    pos++;
                    //console.log(set);
               } else if (pos !== 0)  {
                    set[--pos]++;
               } else {
                    break;
               }
          }
     }

     var n = 0;
     function processInputData() {
          if (process.argv.length < 3) {
               console.log("Usage: node lexical.js number");
               return;
          }

          n = process.argv[2];              
          lexical(n);
     }    
     processInputData();
}());