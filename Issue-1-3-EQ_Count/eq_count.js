/* C名題精選百則 - NodeJs practice
 * Issue 1-3,  EQ_COUNT
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/17
 */ 
(function main() {		
	/*
	 * Function eqCount: 
	 * 	this function implements the solution to solve the issue 1-3 to determine the equal pairs of two sorted sequences
	 *	e.g.  [1,3,4,7,9] [3,5,7,8,10]  ==> the equal pair is 3, 7 and the count is 2
	 *	Kenny Solution
	 */	
	function eqCount(f, g) {
		var f_index = 0;
		var g_index = 0;
		var count = 0;
		while (f_index < f.length && g_index < g.length) {

			if (f[f_index] < g[g_index]) 
				f_index++;
			else if (f[f_index] > g[g_index])
				g_index++;
			else {
				count++; 
				f_index++; 
				g_index++;
			}
		}

		return count;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function coincidence_count(f, g)
	{
	     var  index_f, index_g;   /* subscripts for f and g   */
	     var  count;              /* equal pair counter       */

	     count = index_f = index_g = 0;
	     m = f.length; n = g.length;
	     while (index_f < m && index_g < n) 
	          if (f[index_f] < g[index_g]) /* if f[] is less  */
	               index_f++;              /* then move f     */
	          else if (f[index_f] > g[index_g]) /* if f[] >   */
	               index_g++;              /* then move g     */
	          else
	               count++, index_f++, index_g++; /* EQUAL    */
	     return count;
	}

	var f = null;
	var g = null
	function processInputData() {
		if (process.argv.length < 4) {
			console.log("Usage: node eq_count.js <data_f> <data_g>");
			return;
		}

		f = process.argv[2].split(",");		
		g = process.argv[3].split(",");
	}	
	processInputData();
	if (f == null || g == null) return;

	console.log("f = " + f);	
	console.log("g = " + g);	
	console.log("sum = " + eqCount(f, g));
	console.log("sum(cks) = " + coincidence_count(f, g));
})();