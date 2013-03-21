/* C名題精選百則 - NodeJs practice
 * Issue 1-2,  GT_COUNT
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/16
 */ 
(function main() {		
	/*
	 * Function gtCount: 
	 * 	this function implements the solution to solve the issue 1-2 to calcualte the 
	 *	dominance count of a two given sorted integer sequences 
	 *	e.g.  [1,3,5,7,9] [2,3,4,7,8]  ==> the dominance count is 4+3+3+1+1 = 12
	 *	Kenny Solution
	 */	
	function gtCount(f, g) {
		var tagetIndex = 0;
		var sum = 0;
		for (var i = 0; i < g.length; ++i) 
			for (var j = tagetIndex; j < f.length; ++j) 
				if (f[j] > g[i]) {
					tagetIndex = j;
					sum += (f.length - j);
					break;
				}					

		return sum;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function cksDominanceCount(f, g) {
	     var index_f, index_g;
	     var m = f.length, n = g.length;
	     var count;

	     count = index_f = index_g = 0;
	     while (index_f < m && index_g < n) {	     	
	          if (f[index_f] <= g[index_g])
	               index_f++;
	          else
	               index_g++, count += m - index_f;
	     }
	     return count;     
	}

	var f = null;
	var g = null
	function processInputData() {
		if (process.argv.length < 4) {
			console.log("Usage: node gt_count.js <data_f> <data_g>");
			return;
		}

		f = process.argv[2].split(",");		
		g = process.argv[3].split(",");
	}	
	processInputData();
	if (f == null || g == null) return;

	console.log("f = " + f);	
	console.log("g = " + g);	
	console.log("sum = " + gtCount(f, g));
	console.log("sum(cks) = " + cksDominanceCount(f, g));
})();