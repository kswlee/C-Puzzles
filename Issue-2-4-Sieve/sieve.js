/* C名題精選百則 - NodeJs practice
 * Issue 2-4,  Sieve 
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	/*
	 * Function sieve: 
	 *	Kenny Solution
	 */	
	function sieve(N) {
		var numbers = [];
		for (var i = 2; i <= N; i++) {
			numbers[i] = i;
		}

		var p = 2;
		do {
			for (var i = (p + p); i < numbers.length; i += p) {
				numbers[i] = -1;
			}

			for (var i = p + 1; i < numbers.length; ++i) {
				if (numbers[i] != -1) {
					p = numbers[i];
					break;
				}
			}

			if (p >= N/2) break;
		} while (true);
		
		var output = "";
		for (var i = 2; i <= N; i++) {
			if (numbers[i] > 0) output += (i + ",");
		}
		console.log("The prime number less than " + N + " is : " + output);
	}

	/* 
	* The best solution from Dr. Ching-Kuang Shene 
	*/
	var MAXSIZE = 200;
	var DELETED = 1;
	var KEPT = 0;
	var printf = console.log;
	function cksSieve()
	{
	     var  sieve = [];//[MAXSIZE+1];   /* the sieve array          */
	     var  count = 1;          /* no. of primes counter    */
	     var  prime;              /* a generated prime        */
	     var  i, k;               /* working variable         */

	     printf("Eratosthenes Sieve Method");
	     printf("=========================");
	     printf("\nPrime Numbers between 2 and " + ((MAXSIZE*2)+3));

	     for (i = 0; i <= MAXSIZE; i++) /* set all items to be*/
	          sieve[i] = KEPT;    /* kept in the sieve        */

	     for (i = 0; i <= MAXSIZE; i++) /* for each i, it     */
	          if (sieve[i] == KEPT) {   /* corresponds to 2i+3*/
	               prime = i + i + 3;   /* if it is not sieved*/
	               count++;             /* prime=2i+3.        */
	               for (k = prime + i; k <= MAXSIZE; k += prime)
	                    sieve[k] = DELETED; /* screen multiple*/
	          }

	     printf(" 2");      /* output part.             */
	     for (i = 0, k = 2; i <= MAXSIZE; i++)
	          if (sieve[i] == KEPT) {
	               if (k > 10) {
	                    //printf("\n");
	                    k = 1;
	               }
	               printf(2*i+3);
	               k++;
	          }
	     printf("\nThere are %d primes in total." + count);
	}

	sieve(403);
	cksSieve();
})();