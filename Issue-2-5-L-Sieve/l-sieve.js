/* C名題精選百則 - NodeJs practice
 * Issue 2-5,  L-Sieve 
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	var IS_NODE = false;

	/*
	 * Function sieve: 
	 *	Kenny Solution
	 */	
	function l_sieve(N) {
		console.log("...");
	}
	IS_NODE = (typeof window === 'undefined');

	if (false == IS_NODE) {
    		window.l_sieve = l_sieve;
    	}
		
	/* 
	* The best solution from Dr. Ching-Kuang Shene 
	*/
	var  previous = []; /* prev. pointer */
	var  next = [];     /* next pointer  */
	var  prime, fact, i, mult;
	var  n;
	var  count = 0;
	var  line = [], dummy;

	var  MAXSIZE =   1000
	var  NEXT = 
		function(x) {
			x = next[x];
			return x;
		};

	var  REMOVE = 
		function (x) { 
			console.log("remove " + x);
			next[previous[x]] = next[x];          
			previous[next[x]] = previous[x];      
		};

	var  INITIAL = 
		function(n) { 
			var i;                      
			for (i = 2; i <= n; i++) {
				previous[i] = i-1, next[i] = i+1;
				previous[2] = next[n] = 0;         
			}
		};
	var printf = console.log;

	function cksL_Sieve(N)
	{

	     console.log("\nLinear Sieve Program");
	     console.log("\n====================");
	     console.log("\n\nPrime Numbers between 2 to --> ");
	     //gets(line);
	     //n = strtoul(line, &dummy, 10);
	  	 n = N;
	     INITIAL(n);              /* initial the set          */
	     for (prime = 2; prime*prime <= n; prime = NEXT(prime))
	          for (fact = prime; prime*fact <= n; fact = NEXT(fact))
	               for (mult = prime*fact; mult <= n; mult *= prime) {
	               	var s = sprintf("prime = %d fact = %d mult = %d", prime, fact, mult);
	               	console.log(s);
	                    REMOVE(mult); /* remove multiples     */
	               }

	     for (i = 2; i != 0; i = NEXT(i)) { /* display result  */
	          if (count % 8 == 0)  console.log("\n");
	          console.log("%6ld " + i);
	          count++;
	     }
	     console.log("\n\nThere are %ld Prime Numbers in Total " + count);
	}

	//l_sieve(15);
	//cksL_Sieve(40);
	if (false == IS_NODE) {
		window.cksL_Sieve = cksL_Sieve;
	}
})();