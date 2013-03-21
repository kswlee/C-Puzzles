/* C名題精選百則 - NodeJs practice
 * Issue 2-3,  Prime1 
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	/*
	 * Function prime1: 
	 *	Kenny Solution
	 */	
	function prime1(N) {
		var prime = [2, 3, 5];

		var isPrimeFunc = function(number) {
			var isPrime = true;
			var number_sqrt = Math.round(Math.sqrt(number));
			for (var i = 0; i < prime.length; ++i) {
				if (prime[i] > number_sqrt) {
					break;
				}

				if ((number % prime[i]) == 0) {
					isPrime = false;
					break;
				}
			}
			return isPrime;
		}

		for (var n = 1; (6 * n + 5) < N; ++n) {
			var a = 6 * n + 1;
			var b = 6 * n + 5;

			//console.log(a);

			if (isPrimeFunc(a)) {
				prime.push(a);
			}
			if (isPrimeFunc(b)) {
				prime.push(b);
			}
		}

		console.log(prime);
	}

	/* 
	* The best solution from Dr. Ching-Kuang Shene 
	*/
	
	prime1(200);
})();