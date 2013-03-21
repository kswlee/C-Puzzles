/* C名題精選百則 - NodeJs practice
 * Issue 1-1,  Plateau
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/16
 */ 
(function main() {		
	/*
	 * Function longestPlateau: 
	 * 	this function implements the solution to solve the issue 1-1 to calcualte the 
	 *	longest length of a sorted integer sequences 
	 *	e.g. 1,2,2,3,3,4,4,4,5,5  ==> The longest length is 3 which is composed by 4-4-4
	 *	Kenny Solution
	 */
	function longestPlateau(data) {
		var maxLength = 1;
		var length = 1;		
		for (var i = 0; i < data.length - 1; ++i) {
			if (data[i + 1] != data[i] || (i == data.length - 2)) {
				if (length >= maxLength) {
					maxLength = length;										
				}			
				length = 1;			
			} else 
				++length;
		}

		return maxLength;
	}	

	/* 
	 * The best solution from Dr. Ching-Kuang Shene 
	 */
	function cksLongestPlateau(data) {
		var length = 1;
		for (var i = 1; i < data.length; ++i) {
			if (data[i] == data[i - length]) 
				++length;
		}
		return length;
	}

	var data = null;
	function processInputData() {
		if (process.argv.length < 3) {
			console.log("Usage: node plateau.js <data>");
			return;
		}

		data = process.argv[2].split(",");		
	}	
	processInputData();
	if (data == null) return;

	console.log("Data = " + data);
	console.log("Longest length = " + longestPlateau(data));	
	console.log("Longest length(cks) = " + cksLongestPlateau(data));	
})();