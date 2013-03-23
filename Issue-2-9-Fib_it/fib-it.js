/* C名題精選百則 - NodeJs practice
 * Issue 2-9, FIB_IT
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/23
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');

	/*
	 * Function fib_it: 
	 *	Kenny Solution
	 */	
	function fib_it(n) {
		if (n < 3) return 1;

		var fn_1 = 1;
		var fn_2 = 1;

		for (var i = 3; i <= n; ++i) {
			var tmp = fn_1;
			fn_1 = fn_1 + fn_2;
			fn_2 = tmp;
		}

		return fn_1;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function fibonacci(n)
	{
	     var  f0, f1, temp;
	     var  i;

	     if (n <= 2)
	          return 1;
	     else {
	          for (f0 = f1 = 1, i = 3; i <= n; i++) {
	               temp = f0 + f1; /* temp = f(n-2)+f(n-1)    */
	               f0   = f1;      /* f0   = f(n-2)           */
	               f1   = temp;    /* f1   = f(n-1)           */
	          }
	          return f1;
	     }
	}

	if (IS_NODE === false) {
		window.fib_it = fib_it;
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
		console.log("Ret = " + fib_it(input));
		console.log("Ret(cks)) = " + fibonacci(input));
	} 

})();