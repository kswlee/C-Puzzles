/* C名題精選百則 - NodeJs practice
 * Issue 1-4,  MINDIST
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	/*
	 * Function mindist: 
	 * 	this function implements the solution to solve the issue 1-3 to determine the equal pairs of two sorted sequences
	 *	e.g.  [1,3,4,7,9] [3,5,7,8,10]  ==> the equal pair is 3, 7 and the count is 2
	 *	Kenny Solution
	 */	
	function mindist(f, g) {
		var f_index = 0;
		var g_index = 0;
		var dist = 0xFFFFFF;
		while (f_index < f.length && g_index < g.length) {			
			if (Math.abs(f[f_index] - g[g_index]) < dist) {
				dist = Math.abs(f[f_index] - g[g_index]);				
			} 

			if (f[f_index] < g[g_index]) 
				f_index++;
			else 
				g_index++;
		}

		return dist;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function min(x, y) { return (x > y) ? y : x; };
	function  min_distance(x, y)
	{
	     var  minimum = 0xFFFFFF;  /* INT_MAX is from limits.h */
	     var  index_x = 0, index_y = 0;
	     var m = x.length, n = y.length;

	     while (index_x < m && index_y < n)
	          if (x[index_x] >= y[index_y]) {
	               minimum = min(minimum, x[index_x]-y[index_y]);
	               index_y++;
	          }
	          else {
	               minimum = min(minimum, y[index_y]-x[index_x]);
	               index_x++;
	          }
	     return minimum;
	}	 

	function convertToNumberArray(array) {
		for (var i = 0; i < array.length; ++i) {
			array[i] = parseInt(array[i], 10);
		}
		return array;
	}

	var f = null;
	var g = null
	function processInputData() {
		if (process.argv.length < 4) {
			console.log("Usage: node mindist.js <data_f> <data_g>");
			return;
		}

		f = process.argv[2].split(",");		
		g = process.argv[3].split(",");	
		f = convertToNumberArray(f); 
		g = convertToNumberArray(g);
	}	
	processInputData();
	if (f == null || g == null) return;

	console.log("f = " + f);	
	console.log("g = " + g);	
	console.log("dist = " + mindist(f, g));
	console.log("sum(cks) = " + min_distance(f, g));
})();