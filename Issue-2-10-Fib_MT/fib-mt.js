/* C名題精選百則 - NodeJs practice
 * Issue 2-10, FIB_MT
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/23
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');

	Math.matrixPower = function(matrix, n) {
		if (n == 1) {
			return matrix;
		}

		var ret = [];
		if ((n & 0x01) == 1) {
			var tmp = Math.matrixPower(matrix, n - 1);
			ret[0] = tmp[0] * matrix[0] + tmp[1] * matrix[2];
			ret[1] = tmp[0] * matrix[1] + tmp[1] * matrix[3];
			ret[2] = tmp[2] * matrix[0] + tmp[3] * matrix[2];
			ret[3] = tmp[2] * matrix[1] + tmp[3] * matrix[3];
		} else {
			var tmp = Math.matrixPower(matrix, n >> 1);
			ret[0] = tmp[0] * tmp[0] + tmp[1] * tmp[2];
			ret[1] = tmp[0] * tmp[1] + tmp[1] * tmp[3];
			ret[2] = tmp[2] * tmp[0] + tmp[3] * tmp[2];
			ret[3] = tmp[2] * tmp[1] + tmp[3] * tmp[3];
		}

		return ret;
	};

	/*
	 * Function fib_mt: 
	 *	Kenny Solution
	 */	
	function fib_mt(n) {		
		if (n < 3) return 1;

		var mtx = [1, 1, 1, 0];
		mtx = Math.matrixPower(mtx, n - 2);
		return mtx[0] + mtx[2];
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function fibonacci(n)
	{
	    // basically the same with the one I solved, so just call the one I wrote :p
	    return fib_mt(n);
	}

	if (IS_NODE === false) {
		window.fib_mt = fib_mt;
	}

	//
	// Processing input
	// 
	var input = (function processInputData() {
		if (IS_NODE === false) {
			return 10;
		}

		if (process.argv.length < 3) {
			console.log("Usage: node js number");
			return undefined;
		}

		return process.argv[2];
	})();	

	if (input !== undefined) {
		console.log("Ret = " + fib_mt(input));
		console.log("Ret(cks)) = " + fibonacci(input));
	} 

})();