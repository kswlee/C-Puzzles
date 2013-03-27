/* C名題精選百則 - NodeJs practice
 * Issue 2-12, Cnr_add
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/23
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');
	function UserException(message) {
	   this.message = message;
	   this.name = "UserException";
	}
	/*
	 * Function cnr_add: 
	 *	Kenny Solution
	 */	
	function cnr_add(n, r) {				
		if (n == r || 
			r == 0 )
			return 1; 
		
		return cnr_add(n - 1, r) + cnr_add(n - 1, r - 1);
 	}

 	function cnr_addV2(n, r) {
 		var c = [1];

 		for (var i = 1; i <= n; ++i) {
 			c[i] = 1; // c(n, n) == 1
 			for (var j = i - 1; j > 0; --j) {
 				c[j] += c[j - 1];
 			} 
 		}

 		return c[r];
 	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */	
	function cnr(n, r) {		
	     var c = [];
	     var i, j;

	     for (i = 0; i <= r; i++) /* initial c[] to all 1's   */
	          c[i] = 1;
	     for (i = 1; i <= n-r; i++) /* compute C(n,r) by add. */
	          for (j = 1; j <= r; j++) /* but compute only    */
	               c[j] += c[j-1];  /* those needed.          */
	     return c[r];
	}


	if (IS_NODE === false) {
		window.cnr_add = cnr_add;
	}

	//
	// Processing input
	// 
	var input = (function processInputData() {
		if (IS_NODE === false) {
			return 10;
		}

		if (process.argv.length < 4) {
			console.log("Usage: node js n, r");
			return undefined;
		}

		return [parseInt(process.argv[2], 10), parseInt(process.argv[3], 10)];
	})();	

	if (input[0] < input[1]) { 
		throw new UserException("error: invalid arguments");		
	}

	if (input !== undefined) {	
		console.log("Ret = " + cnr_add(input[0], input[1]));		
		console.log("Ret(cks) = " + cnr(input[0], input[1]));		
	} 

})();