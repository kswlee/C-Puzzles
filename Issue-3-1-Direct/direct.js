/* C名題精選百則 - NodeJs practice
 * Issue 3-1, direct
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/03/31
 */ 
(function main() {
	var IS_NODE = (typeof window === 'undefined');
	function UserException(message) {
	   this.message = message;
	   this.name = "UserException";
	}
	/*
	 * Function direct: 
	 *	Kenny Solution
	 */	
	function direct(n) {				
		var buckets = new Array(n + 1);
		for (var i = 0; i < buckets.length; ++i) buckets[i] = 0;

		console.log(buckets);
		buckets[n] = 1;
		while (isEndCondition(buckets) == false) {
			console.log(buckets);
			addBuckets(buckets);
		}
 	}

 	function addBuckets(buckets) {
 		buckets[buckets.length - 1] += 1;

 		for (var n = (buckets.length - 1); n >= 1; --n) {
 			if (buckets[n] > 1) {
 				buckets[n] = 0;
 				buckets[n - 1] += 1;
 			}
 		}
 	}

 	function isEndCondition(buckets) {
 		for (var i = 0, len = buckets.length; i < len; ++i) {
 			if (buckets[i] == 1) {
 				return false;
 			}
 		}

 		return true;
 	}


	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */	
	function direct_cks(n) {
		var LOOP = true;
		var digit = [];
		for (i = 0; i < n; i++)  /* clear all digits to 0    */
        	digit[i] = '0';

	    console.log("\n{}");          /* outpout empty set {}     */
	    while (LOOP) {
	        for (i = 0; i < n && digit[i] == '1'; digit[i] = '0', i++)
	           ;              /* find first 0 position    */
	        if (i == n)         /* if none, all pos. are 1  */
	            break;         /* thus all elem. are in set*/
	        else
	            digit[i] = '1';/* now add one to this pos  */

	        console.log(digit);

	        for (i = 0; i < n && digit[i] == '0'; i++)
	           ;              /* find first 1 position    */
	        console.log("\n{" + (i+1));  /* show its numner and   */
	        for (j = i + 1; j < n; j++) /* others           */
	            if (digit[j] == '1')
	                console.log("," + (j + 1));
	        console.log("}");
	    }
	}

	if (IS_NODE === false) {
		window.direct = direct;
	}

	//
	// Processing input
	// 
	var input = (function processInputData() {
		if (IS_NODE === false) {
			return 10;
		}

		if (process.argv.length < 3) {
			console.log("Usage: node js n");
			return undefined;
		}

		return [parseInt(process.argv[2], 10)];
	})();	

	if (input !== undefined) {	
		direct(input[0]);		
		direct_cks(input[0]);		
	} 

})();