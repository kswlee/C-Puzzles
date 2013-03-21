/* C名題精選百則 - NodeJs practice
 * Issue 2-6,  Factor
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/19
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');

	/*
	 * Function factor: 
	 *	Kenny Solution
	 */	
	function factor(N) {
		var primes = sieve(input);

		var output = "";
		for (var i = 0, len = primes.length; i < len; ++i) {
			var prime = primes[i];

			var count = 0;
			var tmp = N;
			while( isInt((tmp = tmp / prime)) ) {
				if (tmp <= 1) break;

				count++;
			}

			if (count > 0) {
				output += (prime + "(" + count + ")");
			}
		}

		console.log(output);
	}

	function isInt(n) {
	    return n != "" && !isNaN(n) && Math.round(n) == n;
	}

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
		
		var output = [];
		for (var i = 2; i <= N; i++) {
			if (numbers[i] > 0) output.push(i);
		}
		
		return output;
	}

	var input = (function processInputData() {
		if (process.argv.length < 3) {
			console.log("Usage: node js number");
			return undefined;
		}

		return process.argv[2];
	})();	

	if (input !== undefined) {
		factor(input);
	} 
})();