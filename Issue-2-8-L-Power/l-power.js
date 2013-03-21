/* C名題精選百則 - NodeJs practice
 * Issue 2-8, L_Power
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/20
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');

	/*
	 * Function l_power: 
	 *	Kenny Solution
	 */	
	 function l_power(M, N) {
	 	var ret = 1;
		for (var i = N; i >= 1; i /= 2) {
			if ((i & 0x01) == 1) {
				ret = ret * M;
			}

			M *= M;
		}

		return ret;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function l_power_cks(M, N) {
		var temp = 1;
		while (N > 0) {
			if ((N & 0x01) == 1) {
				temp = M * temp;
			}

			M *= M;
			N >>= 1;
		}

		return temp;
	}

	if (IS_NODE === false) {
		window.l_power = l_power;
	}

	//
	// Processing input
	// 
	var input = (function processInputData() {
		if (IS_NODE === false) {
			return [2, 7];
		}

		if (process.argv.length < 4) {
			console.log("Usage: node js number");
			return undefined;
		}

		return [process.argv[2], process.argv[3]];
	})();	

	if (input !== undefined) {
		console.log("Ret = " + l_power(input[0], input[1]));
		console.log("Ret(cks)) = " + l_power_cks(input[0], input[1]));
	} 

})();