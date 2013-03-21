/* C名題精選百則 - NodeJs practice
 * Issue 1-5,  HeadTail
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	/*
	 * Function mindist: 
	 *	Kenny Solution
	 */	
	function headtail(f) {
		var index_b = 0;
		var index_e = f.length - 1;

		var pre_sum = f[index_b];
		var post_sum = f[index_e];
		var count = 0;
		while(index_b < f.length - 1 && index_e > 0) {
			if (pre_sum == post_sum) {				
				++count;
			}

			if (post_sum < pre_sum) {
				index_e--;
				post_sum += f[index_e];
			} else {
				index_b++;
				pre_sum += f[index_b];
			}
		}

		return count;
	}

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function  head_tail(x)
	{
		var n = x.length;
	     var  prefix     = 0, suffix     = 0;
	     var  prefix_idx = 0, suffix_idx = n-1;
	     var  count = 0;	     

	     while (suffix_idx >= 0 && prefix_idx <= n-1)
	          if (prefix < suffix)      /* prefix too small   */
	               prefix += x[prefix_idx++];
	          else if (prefix > suffix) /* suffix too small   */
	               suffix += x[suffix_idx--];
	          else {                    /* get an equal pair: */	          	
	               count++;             /* increase count and */
	               prefix += x[prefix_idx++]; /* advance pref.*/
	               suffix += x[suffix_idx--]; /* and suffix   */
	          }
	     return count;
	}

	function convertToNumberArray(array) {
		for (var i = 0; i < array.length; ++i) {
			array[i] = parseInt(array[i], 10);
		}
		return array;
	}

	var f = null;
	function processInputData() {
		if (process.argv.length < 3) {
			console.log("Usage: node headtail.js <data_f>");
			return;
		}

		f = process.argv[2].split(",");		
		f = convertToNumberArray(f); 
	}	
	processInputData();
	if (f == null) return;

	console.log("f = " + f);		
	console.log("pairs: " + headtail(f));
	console.log("pairs(cks): " + head_tail(f));	
})();