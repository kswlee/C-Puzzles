/* C名題精選百則 - NodeJs practice
 * Issue 2-7, R_Power
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/20
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');

	/*
	 * Function r_power: 
	 *	Kenny Solution
	 */	
	function r_power(M, N) {
		if (N <= 1) {
			return M;
		}
		if (N == 2) {
			return M * M;
		}

		var remainder = (N & 0x01);
		var oneValue = r_power(M, N >> 1);
		var ret = oneValue * oneValue;
		if (remainder > 0) {
			ret = ret * M;
		}
		return ret;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function recursive_power(m, n) {
	     var temp;

	     if (n == 0)              /* m^0 = 1                  */
	          return 1;
	     else if (n & 0x01 == 0) { /* if power is even then */
	          temp = recursive_power(m, n >> 1); 
	          return temp * temp; /* m^(2k) = (m^k)^2         */
	     }
	     else                     /* otherwise, m^n=m*m^(n-1) */
	          return m * recursive_power(m, n-1);
	}

	//
	// Processing input
	// 
	var input = (function processInputData() {
		if (process.argv.length < 4) {
			console.log("Usage: node js number");
			return undefined;
		}

		return [process.argv[2], process.argv[3]];
	})();	

	if (input !== undefined) {
		console.log("Ret = " + r_power(input[0], input[1]));
		console.log("Ret(cks)) = " + recursive_power(input[0], input[1]));
	} 
})();