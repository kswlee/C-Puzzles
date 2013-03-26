/* C名題精選百則 - NodeJs practice
 * Issue 2-11, FIB_EXT
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/23
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');

	/*
	 * Function fib_ext: 
	 *	Kenny Solution
	 */	
	function fib_ext(x, y, n) {		
		if (n == 1) return 1;
		if (n == 2) return 2; 

		var fn = 1;
		var fn_1 = 1; 
		var an = 2;
		var an_1 = 1;
		for (var i = 2; i <= n; ++i) {
			var tmp = x * fn_1 + y * fn;
			fn_1 = fn;
			fn = tmp;

			var tmpa = x * an_1 + y * (an - fn_1) + fn_1 + fn;
			an_1 = an;
			an = tmpa;
		}

		return an;
 	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function ext_fibonacci(x, y, n)
	{
	     var f0, f1;
	     var a0, a1;
	     var temp1, temp2;
	     var i;

	     if (n == 0)
	          return 1;
	     else if (n == 1)
	          return 2;
	     else {
	          for (f0 = f1 = 1, a0 = 1, a1 = 2, i = 2; i <= n; i++) {
	               temp1 = x*f1 + y*f0;
	               f0    = f1;
	               f1    = temp1;
	               temp2 = x*a0 + y*(a1 - f0) + f0 + f1;
	               a0    = a1;
	               a1    = temp2;
	          }
	          return a1;
	     }
	}

	if (IS_NODE === false) {
		window.fib_ext = fib_ext;
	}

	//
	// Processing input
	// 
	var input = (function processInputData() {
		if (IS_NODE === false) {
			return 10;
		}

		if (process.argv.length < 5) {
			console.log("Usage: node js x, y, n");
			return undefined;
		}

		return [process.argv[2], process.argv[3], process.argv[4]];
	})();	

	if (input !== undefined) {
		console.log("Ret = " + fib_ext(input[0], input[1], input[2]));
		console.log("Ret(cks) = " + ext_fibonacci(input[0], input[1], input[2]));
		//console.log("Ret(cks)) = " + fibonacci(input));
	} 

})();